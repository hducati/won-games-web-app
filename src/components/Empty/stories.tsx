import { Meta, Story } from '@storybook/react/types-6-0'

import Empty from '.'

export default {
  title: 'Empty',
  component: Empty
} as Meta

export const Basic: Story = (args) => <Empty {...args} />
