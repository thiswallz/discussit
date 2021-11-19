import { shallowMount } from '@vue/test-utils'
import TitleBox from './index.vue'

describe('TitleBox.vue', () => {
  it('renders', () => {
    const wrapper = shallowMount(TitleBox, {
    })
    expect(wrapper.exists()).toBe(true)
  })
})
