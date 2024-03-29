import type { Meta, StoryObj } from '@storybook/vue3';
import { fn } from '@storybook/test';
import Button from './MyButton.vue';

const meta = {
  title: 'MyButton',
  component: Button,
  tags: ['autodocs']
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};
