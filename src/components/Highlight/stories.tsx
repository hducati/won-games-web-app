import { Meta, Story } from '@storybook/react/types-6-0'

import Highlight, { HighlighProps } from '.'
import item from './mock'

export default {
  title: 'Highlight',
  component: Highlight,
  args: { ...item }
} as Meta

export const Default: Story<HighlighProps> = (args) => (
  <div style={{ maxWidth: '104rem' }}>
    <Highlight {...args} />
  </div>
)

export const withFloatImage: Story<HighlighProps> = (args) => (
  <div style={{ maxWidth: '104rem' }}>
    <Highlight {...args} />
  </div>
)

withFloatImage.args = {
  floatImage: '/img/red-dead-float.png'
}
