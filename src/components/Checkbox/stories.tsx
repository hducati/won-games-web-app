import { Meta, Story } from '@storybook/react/types-6-0'

import Checkbox from '.'

export default {
  title: 'Checkbox',
  component: Checkbox
} as Meta

export const Basic: Story = (args) => <Checkbox {...args} />
