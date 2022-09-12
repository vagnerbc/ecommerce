import { ComponentStory, ComponentMeta } from '@storybook/react'
import React from 'react'

import { Select as ThemeSelect } from '..'

import SelectDocs from '../../../docs/2 - Core Components/1 - Forms/Select.mdx'
import { DocsWrapper } from '../../Storybook/DocsWrapper'

export default {
  title: 'Core Components/Select',
  component: ThemeSelect,
  argTypes: {
    size: {
      options: ['sm', 'md', 'lg'],
      defaultValue: 'sm',
      control: { type: 'select' }
    },
    maxOptionsHeight: { defaultValue: '200px' }
  },
  parameters: {
    docs: {
      page: () => (
        <DocsWrapper>
          <SelectDocs />
        </DocsWrapper>
      )
    }
  }
} as ComponentMeta<typeof ThemeSelect>

const Template: ComponentStory<typeof ThemeSelect> = args => (
  <ThemeSelect w="300px" {...args} />
)

export const Select = Template.bind({})
Select.args = {
  options: [
    {
      id: 'id1',
      description: 'Option 1 very long text example to break context'
    },
    { id: 'id2', description: 'Option 2' },
    { id: 'id3', description: 'Option 3' }
  ],
  defaultID: 'id2',
  placeholder: 'Selecione uma opção',
  isDisabled: false,
  isInvalid: false,
  isCleanable: false,
  onChange: () => null,
  maxOptionsHeight: '200px'
}
