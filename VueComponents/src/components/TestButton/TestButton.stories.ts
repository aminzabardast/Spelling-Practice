import type { Meta, StoryObj } from '@storybook/vue3'
import Button from '@/components/TestButton/TestButton.vue'

const meta: Meta<typeof Button> = {
  title: 'Test/Button',
  component: Button,
  tags: ['autodocs']
}
export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {}
}

export const CustomTitle: Story = {
  args: {
    text: 'Hello World'
  }
}
