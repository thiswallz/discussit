import { shallowMount } from '@vue/test-utils'
import PoweredList  from './index.vue'

describe('PoweredList.vue', () => {
  it('renders', () => {
    const wrapper = shallowMount(PoweredList, {
    })
    expect(wrapper.exists()).toBe(true)
  })
})
