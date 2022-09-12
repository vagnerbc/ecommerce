import { ComponentStory, ComponentMeta } from '@storybook/react'
import React from 'react'

import { CloseButton as ThemeCloseButton } from '..'

import CloseButtonDocs from '../../../docs/2 - Core Components/9 - Other/CloseButton.mdx'
import { DocsWrapper } from '../../Storybook/DocsWrapper'

export default {
  title: 'Core Components/CloseButton',
  component: ThemeCloseButton,
  argTypes: {
    size: {
      options: ['sm', 'md', 'lg'],
      control: { type: 'select' }
    }
  },
  parameters: {
    docs: {
      page: () => (
        <DocsWrapper>
          <CloseButtonDocs />
        </DocsWrapper>
      )
    }
  }
} as ComponentMeta<typeof ThemeCloseButton>

const Template: ComponentStory<typeof ThemeCloseButton> = args => (
  <ThemeCloseButton {...args} />
)

export const CloseButton = Template.bind({})
CloseButton.args = {
  isDisabled: false,
  size: 'md'
}
