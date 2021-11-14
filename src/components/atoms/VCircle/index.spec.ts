import { shallowMount } from '@vue/test-utils'
import VCircle  from './index.vue'

describe('VCircle.vue', () => {
  it('renders', () => {
    const wrapper = shallowMount(VCircle, {
    })
    expect(wrapper.exists()).toBe(true)
  })
})
