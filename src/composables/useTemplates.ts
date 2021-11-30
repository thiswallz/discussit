import { ref, computed, onMounted, Ref, watch } from 'vue';
import { API } from 'aws-amplify';
import { Status, Template, Element } from '@/API';
import { getTemplate, listTemplates } from '@/graphql/queries';

export default function useTemplates(initialValue: Template[], statuses: Ref<Status[]>, elements: Ref<Element[]> ) {
  const templates: Ref<Template[]> = ref(initialValue);
  const defaultTemplate = computed((): Template | undefined =>
    templates.value.find((template) => template.isDefault)
  );
  const selectedTemplate: Ref<Template | undefined> = ref(undefined);

  const loadTemplates = async () => {
    const result = await <any>API.graphql({
      query: listTemplates,
    });
    templates.value = result.data.listTemplates.items;
  };

  onMounted(() => {
    loadTemplates();
  });

  watch(templates, () => {
    if (!selectedTemplate.value && defaultTemplate.value) {
      selectedTemplate.value = defaultTemplate.value;
    }
  });

  watch(selectedTemplate, async (newVal?: Template) => {
    const templateId = newVal ? newVal?.id : defaultTemplate?.value?.id;
    if (templateId) {
      const response = await <any>API.graphql({
        query: getTemplate,
        variables: {
          id: templateId,
        },
      });
      statuses.value = response.data.getTemplate.statuses.items;
      elements.value = response.data.getTemplate.elements.items;
    }
  });

  return {
    templates,
    defaultTemplate,
    selectedTemplate
  };
}
