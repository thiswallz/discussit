import { shallowMount } from '@vue/test-utils'
import RoadLine  from './index.vue'

describe('RoadLine.vue', () => {
  it('renders', () => {
    const wrapper = shallowMount(RoadLine, {
    })
    expect(wrapper.exists()).toBe(true)
  })
})
