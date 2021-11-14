import { shallowMount } from '@vue/test-utils'
import VButton  from './index.vue'

describe('VButton.vue', () => {
  it('renders', () => {
    const wrapper = shallowMount(VButton, {
    })
    expect(wrapper.exists()).toBe(true)
  })
})
