import { ref, Ref, watch } from 'vue';
import { API } from 'aws-amplify';
import { getDiscussion } from '@/graphql/queries';
import { Discussion, ElementDiscussed } from '@/API';
import { createElementDiscussed, updateElementDiscussed } from '@/graphql/mutations';
import { StatusEnriched } from './useStatus';

export default function useDiscussions(initialValue: Discussion | undefined, selectedStatus: Ref<StatusEnriched | undefined>) {
	const selectedDiscussion: Ref<Discussion | undefined> = ref(initialValue);

	const elementDiscussion = (id: string) => {
		if(selectedDiscussion.value){
		console.log(selectedDiscussion.value.elements?.items?.find(item => item.elementId === id), id)
			return  selectedDiscussion.value.elements?.items?.find(item => item.elementId === id)?.text
		}
	}

	const updateDiscussionElement = async (elementId: string, value: string) => {
		if(selectedDiscussion.value?.elements?.items.find(item => item.elementId === elementId)){
			selectedDiscussion.value = { 
				...selectedDiscussion.value, 
				elements: { 
					...selectedDiscussion.value.elements,
					items: [
						...selectedDiscussion.value.elements.items.map(item=>{
							if(item.elementId === elementId){
								API.graphql({
									query: updateElementDiscussed,
									variables: { 
										input: {
											id: item.id,
											elementId,
											discussionId: selectedDiscussion.value?.id,
											text: value
										}
									},
								});	
							}
							return {
								...item,
								...(item.elementId === elementId && { text: value })
							}
						})
					]
				}
			}
		}else{
			await <Promise<{data: {createElementDiscussed: ElementDiscussed[]}}>>API.graphql({
				query: createElementDiscussed,
				variables: { 
					input: {
						elementId,
						discussionId: selectedDiscussion.value?.id,
						text: value
					}
				},
			});
			if(selectedDiscussion.value){
				// reload discussions
				selectDiscussion(selectedDiscussion.value) 
			}
		}
	}

	const selectDiscussion = async (discussion: Discussion) => {
		const response = await <any>API.graphql({
			query: getDiscussion,
			variables: {
				id: discussion.id,
			},
		});
		selectedDiscussion.value = response.data.getDiscussion
	};

	watch(selectedStatus, () => {
		selectedDiscussion.value = undefined
	});

  return {
    selectedDiscussion,
		elementDiscussion,
		updateDiscussionElement,
		selectDiscussion
  };
}
