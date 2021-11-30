import { Discussion, Status } from '@/API';
import { listDiscussions } from '@/graphql/queries';
import { API } from 'aws-amplify';
import { ref, Ref, watch } from 'vue';

export interface StatusEnriched extends Status {
  discussions: Partial<Discussion>[];
}

export default function useStatus(initialValue: Status[]) {
  const statuses: Ref<Status[]> = ref(initialValue);
  const selectedStatus: Ref<StatusEnriched | undefined> = ref(undefined);
	const statusesEnriched: Ref<StatusEnriched[]> = ref([]);
	
	const selectStatus = async (status: Status) => {
		selectedStatus.value = statusesEnriched.value.find(item=> item.id === status.id)
	};

	watch(statuses, async (newVal: Status[]) => {
		statusesEnriched.value = await enrichStatus(newVal)	
		selectedStatus.value = statusesEnriched.value[0]
	});

  return {
    statuses,
    statusesEnriched,
		selectedStatus,
		selectStatus
  };
}

async function enrichStatus(statuses: Status[]) {
	let enriched: StatusEnriched[] = []

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
		enriched = [ 
			...enriched, 
			{
				...statuses[i], 
				discussions: response.data.listDiscussions.items
			}
		]
	}
	return enriched 
}