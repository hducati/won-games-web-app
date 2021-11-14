import { Meta, Story } from '@storybook/react/types-6-0'

import FormSignUp from '.'

export default {
  title: 'form/FormSignUp',
  component: FormSignUp
} as Meta

export const Default: Story = (args) => (
  <div style={{ width: 300, margin: 'auto' }}>
    <FormSignUp {...args} />
  </div>
)
