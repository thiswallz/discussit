import { shallowMount } from '@vue/test-utils'
import VBox  from './index.vue'

describe('VBox.vue', () => {
  it('renders', () => {
    const wrapper = shallowMount(VBox, {
    })
    expect(wrapper.exists()).toBe(true)
  })
})
