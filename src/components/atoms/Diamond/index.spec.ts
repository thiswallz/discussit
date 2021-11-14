import { shallowMount } from '@vue/test-utils'
import Diamond  from './index.vue'

describe('Diamond.vue', () => {
  it('renders', () => {
    const wrapper = shallowMount(Diamond, {
    })
    expect(wrapper.exists()).toBe(true)
  })
})
