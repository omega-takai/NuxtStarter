import { mount } from '@vue/test-utils'
import Logo from '@/components/atom/TheLogo/index.vue'

describe('Logo', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(Logo)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
