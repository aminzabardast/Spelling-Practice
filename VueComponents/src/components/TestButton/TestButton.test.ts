import { describe, expect, it } from 'vitest'
import TestButton from '@/components/TestButton/TestButton.vue'
import { mount } from '@vue/test-utils'

describe('No Input', () => {
  it('should render.', () => {
    const wrapper = mount(TestButton)
    expect(wrapper).toBeTruthy()
  })
  it('should show `0 Clicks!` after render.', () => {
    const wrapper = mount(TestButton)
    expect(wrapper.text()).equal('0 Clicks!')
  })
  it('should show `2 Clicks!` after two clicks.', async () => {
    const wrapper = mount(TestButton)
    expect(wrapper.text()).equal('0 Clicks!')
    await wrapper.trigger('click')
    expect(wrapper.text()).equal('1 Clicks!')
    await wrapper.trigger('click')
    expect(wrapper.text()).equal('2 Clicks!')
  })
  it('should be a tonal button.', () => {
    const wrapper = mount(TestButton)
    expect(wrapper.classes()).include('v-btn--variant-tonal')
  })
  it('match the snapshot.', () => {
    const wrapper = mount(TestButton)
    expect(wrapper.element).toMatchSnapshot()
  })
})
describe('Custom Text', () => {
  it('should show the custom text in the button.', () => {
    const wrapper = mount(TestButton, {
      props: {
        text: 'Custom Text'
      }
    })
    expect(wrapper.text()).equal('0 Custom Text')
  })
})
