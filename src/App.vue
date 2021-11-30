<template>
  <div class="text-4xlk absolute top-3 left-5">Hello 👋🏼</div>
  <div class="pt-3 grid grid-flow-row grid-cols-1">
    <div class="">
      <statuses-bar
        :statuses="statusesEnriched"
        @select="selectStatus"
      ></statuses-bar>
    </div>
    <div class="mt-3 grid grid-flow-row grid-cols-2">
      <div>
        list
        <ol v-if="selectedStatus">
          <li
            v-for="(discussion, index) in selectedStatus.discussions"
            :key="index"
            @click="() => selectDiscussion(discussion)"
          >
            {{ discussion.title }}
          </li>
        </ol>
      </div>
      <div v-if="selectedDiscussion">
        <div
          v-for="(element, index) in elements"
          :key="element.id + selectedDiscussion.id + index"
        >
          {{ element.title }}:
          <rich-text
            :content="elementDiscussion(element.id)"
            @change="(value) => updateDiscussionElement(element.id, value)"
          ></rich-text>
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
import StatusesBar from './components/organisms/StatusesBar/index.vue';
import PoweredList from './components/organisms/PoweredList/index.vue';
import RichText from './components/molecules/RichText/index.vue';
import useTemplates from '@/composables/useTemplates';
import useStatus from '@/composables/useStatus';
import useElements from '@/composables/useElements';
import useDiscussions from '@/composables/useDiscussions';

export default {
  components: { StatusesBar, PoweredList, RichText },
  setup() {
    const {
      statuses,
      statusesEnriched,
      selectedStatus,
      selectStatus,
    } = useStatus([]);
    const { elements } = useElements([]);
    const { defaultTemplate, templates, selectedTemplate } = useTemplates(
      [],
      statuses,
      elements
    );
    const {
      selectedDiscussion,
      elementDiscussion,
      updateDiscussionElement,
      selectDiscussion,
    } = useDiscussions(undefined, selectedStatus);

    // TODO subscribe amplify socket messages
    // TODO create more composable functions
    // TODO create auto save method, for updating rich text and others

    return {
      templates,
      statuses,
      elements,
      selectedTemplate,
      selectedStatus,
      selectedDiscussion,
      defaultTemplate,
      statusesEnriched,
      selectStatus,
      selectDiscussion,
      elementDiscussion,
      updateDiscussionElement,
    };
  },
}
</script>
