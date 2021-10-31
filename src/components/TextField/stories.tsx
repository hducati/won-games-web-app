import { Story, Meta } from '@storybook/react/types-6-0'
import { AddShoppingCart } from '@styled-icons/material-outlined/AddShoppingCart'
import TextField, { TextFieldProps } from '.'

export default {
  title: 'TextField',
  component: TextField,

  argTypes: {
    onInput: { action: 'changed' }
  }
} as Meta

export const Default: Story<TextFieldProps> = (args) => (
  <div style={{ maxWidth: 300, padding: 15 }}>
    <TextField {...args} />
  </div>
)

Default.args = {
  label: 'E-mail',
  labelFor: 'Email',
  id: 'Email',
  initialValue: '',
  placeholder: 'john.cage@gmail.com'
}

export const withIcon: Story<TextFieldProps> = (args) => (
  <div style={{ maxWidth: 300, padding: 15 }}>
    <TextField {...args} />
  </div>
)

withIcon.args = {
  label: 'E-mail',
  labelFor: 'Email',
  id: 'Email',
  initialValue: '',
  placeholder: 'john.cage@gmail.com',
  icon: <AddShoppingCart />
}

export const withError: Story<TextFieldProps> = (args) => (
  <div style={{ maxWidth: 300, padding: 15 }}>
    <TextField {...args} />
  </div>
)

withError.args = {
  error: 'Ops...something is wrong'
}
