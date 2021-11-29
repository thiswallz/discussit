<template>
  <div class="text-4xlk absolute top-3 left-5">Hello 👋🏼</div>
  <div class="mt-3 grid grid-flow-row grid-cols-1">
    <div class="">
      <statuses-bar :statuses="statuses" @select="selectStatus"></statuses-bar>
    </div>
    <div class="mt-3 grid grid-flow-row grid-cols-2">
      <div>
        list
        <ol v-if="selectedStatus">
          <li v-for="(discussion, index) in selectedStatus.discussions" :key="index" @click="()=>selectDiscussion(discussion)">
            {{discussion.title}}
          </li>
        </ol>
      </div>
      <div v-if="selectedDiscussion">
        <div v-for="(element, index) in elements" :key="index">
         {{element.title}}: 
          <rich-text :content="elementDiscussion(element.id)"></rich-text>
        </div>
      </div>
    </div>
  </div>
  <powered-list
    class="absolute bottom-0 -right-24 scale-50 transform"
  ></powered-list>
  <a
    target="_blank"
    href="https://github.com/thiswallz/discussit"
    class="absolute bottom-1 left-1 w-14"
    ><img src="@/assets/forkme.png" title="fork-me at github"
  /></a>
</template>

<script lang="ts">
import { computed, onMounted, Ref, ref, watch } from 'vue';
import { API } from 'aws-amplify';
import { getDiscussion, getTemplate, listDiscussions, listTemplates } from './graphql/queries';
import StatusesBar from './components/organisms/StatusesBar/index.vue';
import PoweredList from './components/organisms/PoweredList/index.vue';
import RichText from './components/molecules/RichText/index.vue';
import { Template, Status, Discussion, Element } from './API';

export interface StatusEnriched extends Status {
  discussions: Partial<Discussion>[];
}

export default {
  components: { StatusesBar, PoweredList, RichText },
  setup() {
    let templates: Ref<Template[]> = ref([]);
    let statuses: Ref<StatusEnriched[]> = ref([]);
    let elements: Ref<Element[]> = ref([]);
    let selectedTemplate: Ref<Template | undefined> = ref(undefined);
    let selectedStatus: Ref<StatusEnriched | undefined> = ref(undefined);
    let selectedDiscussion: Ref<Discussion | undefined> = ref(undefined);
    const defaultTemplate = computed((): Template | undefined =>
      templates.value.find((template) => template.isDefault)
    );

    const loadTemplates = async () => {
      const result = await <any>API.graphql({
        query: listTemplates,
      });
      templates.value = result.data.listTemplates.items;
    };

    const elementDiscussion = (id: string) => {
      if(selectedDiscussion.value){
      console.log(selectedDiscussion.value.elements?.items?.find(item => item.elementId === id), id)
        return  selectedDiscussion.value.elements?.items?.find(item => item.elementId === id)?.text
      }
    }

    const selectStatus = async (status: StatusEnriched) => {
      selectedStatus.value = status
    };

    const selectDiscussion = async (discussion: Discussion) => {
      //selectedDiscussion.value = discussion
      const response = await <any>API.graphql({
        query: getDiscussion,
        variables: {
          id: discussion.id,
        },
      });
      selectedDiscussion.value = response.data.getDiscussion
      console.log('response>> ', response.data.getDiscussion)
    };

    const enrichStatuses = async (statuses: Status[]) => {
      let statusesEnriched: StatusEnriched[] = []

      for (let i = 0; i < statuses.length; i++) {
        const response = await <any>API.graphql({
          query: listDiscussions,
          variables: {
            filter: {
              statusId: {
                eq: statuses[i].id,
              },
            },
          },
        });
        statusesEnriched = [ 
          ...statusesEnriched, 
          {
            ...statuses[i], 
            discussions: response.data.listDiscussions.items
          }
        ]
      }
      return statusesEnriched 
    }

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
        statuses.value = await enrichStatuses(response.data.getTemplate.statuses.items);
        elements.value = response.data.getTemplate.elements.items;
        if(statuses.value && statuses.value.length > 0){
          selectStatus(statuses.value[0])
        }
      }
    });

    watch(selectedStatus, () => {
      selectedDiscussion.value = undefined
    });

    onMounted(() => {
      loadTemplates();
    })

    return {
      templates,
      statuses,
      elements,
      selectedTemplate,
      selectedStatus,
      selectedDiscussion,
      defaultTemplate,
      selectStatus,
      selectDiscussion,
      elementDiscussion
    };
  },
};

/*
class App extends Vue {

  async createTodo() {
    const { name, description } = this;
    if (!name || !description) return;
    const todo = { name, description };
    await API.graphql({
      query: createTodo,
      variables: { input: todo },
    });
    this.name = '';
    this.description = '';
  }

  deleteItem() {
    API.graphql({
      query: deleteTodo,
      variables: { input: { id: item.id } },
    });
  }

  subscribe() {
    API.graphql({ query: onCreateTodo })
      //@ts-ignore
      .subscribe({
        next: (eventData: any) => {
          let todo = eventData.value.data.onCreateTodo;
          if (this.todos.some((item) => item.name === todo.name)) return; // remove duplications
          this.todos = [...this.todos, todo];
        },
      });
    API.graphql({ query: onDeleteTodo })
      //@ts-ignore
      .subscribe({
        next: (eventData: any) => {
          let todo = eventData.value.data.onDeleteTodo;
          console.log('delete', todo, this.todos);
          this.todos = this.todos.filter((item) => todo.id !== item.id);
        },
      });



    watch(
      () => this.templates,
      (templates: Template[], other) => {
        console.log('watcher templates: ', templates);
        console.log('watcher other: ', other);
        if (!this.selectedTemplate) {
          this.selectedTemplate = this.defaultTemplate;
        }
      }
    );

    watch(
      () => this.selectedTemplate,
      async (selectedTemplate?: Template) => {
        const templateId = selectedTemplate
          ? selectedTemplate.id
          : this.defaultTemplate?.id;
          console.log('selecting:::::::: ', templateId)
        if (templateId) {
          const statuses = await API.graphql({
            query: listStatuss,
            variables: {
              filter: {
                templateId: {
                  eq: templateId,
                },
              },
            },
          });
          console.log('selected', statuses);
          //this.statuses = statuses;
        }
      }
    );
  }
}
    */
</script>
