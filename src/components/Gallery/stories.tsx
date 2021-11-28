import { Meta, Story } from '@storybook/react/types-6-0'

import Gallery, { GalleryProps } from '.'
import mockGallery from './mock'

export default {
  title: 'Gallery',
  component: Gallery,
  args: {
    items: mockGallery
  },
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'won-dark'
    }
  }
} as Meta

export const Default: Story<GalleryProps> = (args) => (
  <div style={{ maxWidth: '130rem', margin: '0 auto', marginTop: '5rem' }}>
    <Gallery {...args} />
  </div>
)
