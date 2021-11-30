import { Template } from '@/API';
import { listTemplates } from '@/graphql/queries';
import { ref, Ref } from 'vue';
import { Element } from '@/API';

export default function useElements(initialValue: Element[]) {
  const elements: Ref<Element[]> = ref(initialValue);

  return {
    elements,
  };
}
