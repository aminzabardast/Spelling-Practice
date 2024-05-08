import type { Meta, StoryObj } from '@storybook/vue3'
import Button from './BlockButton.vue'

const meta = {
  title: 'BlockButton',
  component: Button,
  args: {
    disabled: false,
    text: 'My Button'
  },
  parameters: {
    slots: {
      default: {
        description: 'Default slot',
        template: `{{ args.text }}`
      }
    },
  },
  tags: ['autodocs']
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {},
}
