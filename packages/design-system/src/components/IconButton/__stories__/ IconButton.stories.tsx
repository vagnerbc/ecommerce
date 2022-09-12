import { QuestionOutlineIcon } from '@chakra-ui/icons'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import React from 'react'

import { IconButton as ThemeIconButton } from '..'

import IconButtonDocs from '../../../docs/2 - Core Components/1 - Forms/IconButton.mdx'
import { DocsWrapper } from '../../Storybook/DocsWrapper'

export default {
  title: 'Core Components/IconButton',
  component: ThemeIconButton,
  argTypes: {
    variant: {
      options: [
        'brand-primary-solid',
        'default-outline',
        'icon-default-outline',
        'neutral-extradark-ghost',
        'neutral-extralight-solid'
      ],
      control: { type: 'select' }
    },
    size: {
      options: ['xs', 'sm', 'md', 'lg'],
      control: { type: 'select' }
    }
  },
  parameters: {
    docs: {
      page: () => (
        <DocsWrapper>
          <IconButtonDocs />
        </DocsWrapper>
      )
    }
  }
} as ComponentMeta<typeof ThemeIconButton>

const Template: ComponentStory<typeof ThemeIconButton> = args => (
  <ThemeIconButton {...args} icon={<QuestionOutlineIcon />} />
)
export const IconButton = Template.bind({})
IconButton.args = {
  variant: 'brand-primary-solid',
  isDisabled: false,
  isLoading: false,
  size: 'md'
}
