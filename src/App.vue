<template>
  <div class="text-4xlk absolute top-3 left-5">Hello 👋🏼</div>
  <div class="pt-1 flex flex-col pb-10">
    <div class="flex-1">
      <statuses-bar
        :statuses="statusesEnriched"
        @select="selectStatus"
      ></statuses-bar>
    </div>
    <div class="mt-3 flex-row md:flex">
      <div class="flex-1 md:flex-none md:w-80 pl-5 pr-5" v-if="selectedStatus">
        <title-header
          v-for="(discussion, index) in selectedStatus.discussions"
          :key="index"
          :title="discussion.title"
          :selected="selectedDiscussionIndex === index"
          :clickable="true"
          :custom-classes="['mt-1']"
          @click="() => selectDiscussion(discussion, index)"
          size="small"
        ></title-header>
        <title-header
          :selected="selectedDiscussionIndex === index"
          title="Add new discussion"
          :clickable="true"
          :custom-classes="['mt-1']"
          @click="addDiscussion"
          size="small"
        ></title-header>
      </div>
      <div class="flex-1 md:flex-grow p-5" v-if="selectedDiscussion">
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
    class="fixed bottom-0 -right-24 scale-50 transform"
  ></powered-list>
  <a
    target="_blank"
    href="https://github.com/thiswallz/discussit"
    class="fixed bottom-1 left-1 w-14"
    ><img src="@/assets/forkme.png" title="fork-me at github"
  /></a>
</template>

<script lang="ts">
import StatusesBar from './components/organisms/StatusesBar/index.vue';
import PoweredList from './components/organisms/PoweredList/index.vue';
import RichText from './components/molecules/RichText/index.vue';
import TitleHeader from './components/atoms/TitleHeader/index.vue';
import useTemplates from '@/composables/useTemplates';
import useStatus from '@/composables/useStatus';
import useElements from '@/composables/useElements';
import useDiscussions from '@/composables/useDiscussions';

export default {
  components: { StatusesBar, PoweredList, RichText, TitleHeader },
  setup() {
    const teamId = "39e6cc4f-556e-4cf7-98d0-80a1b9db0bed"
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
      selectedDiscussionIndex,
      addDiscussion
    } = useDiscussions(undefined, selectedStatus, teamId, selectedTemplate);

    // TODO subscribe amplify socket messages
    // TODO create auto save method, for updating rich text and others
    // TODO add vuex to get triggers

    return {
      templates,
      statuses,
      elements,
      selectedTemplate,
      selectedStatus,
      selectedDiscussion,
      selectedDiscussionIndex,
      defaultTemplate,
      statusesEnriched,
      selectStatus,
      selectDiscussion,
      elementDiscussion,
      updateDiscussionElement,
      addDiscussion
    };
  },
};
</script>
