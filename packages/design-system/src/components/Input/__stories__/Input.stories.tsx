/* eslint-disable react/no-children-prop */
import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'

import { Input as ThemeInput } from '..'

import InputDocs from '../../../docs/2 - Core Components/1 - Forms/Input.mdx'
import { Stack } from '../../Stack'
import { DocsWrapper } from '../../Storybook/DocsWrapper'

export default {
  title: 'Core Components/Input',
  component: ThemeInput,
  argTypes: {
    variant: {
      options: [
        'outline-brand-primary-default',
        'outline-brand-secondary-default',
        'filled-brand-primary-default',
        'filled-brand-secondary-default',
        'flushed-brand-primary-default',
        'flushed-brand-secondary-default'
      ],
      control: { type: 'select' }
    },
    size: {
      options: ['sm', 'md', 'lg'],
      control: { type: 'select' }
    },
    isDisabled: {
      type: 'boolean',
      control: {
        type: 'boolean'
      }
    },
    isInvalid: {
      type: 'boolean',
      control: {
        type: 'boolean'
      }
    }
  },
  parameters: {
    docs: {
      page: () => (
        <DocsWrapper>
          <InputDocs />
        </DocsWrapper>
      )
    }
  }
} as ComponentMeta<typeof ThemeInput>

const Template: ComponentStory<typeof ThemeInput> = args => {
  return (
    <Stack spacing="xxs" maxW="600px">
      <ThemeInput {...args} />
    </Stack>
  )
}

export const Input = Template.bind({})
Input.args = {
  placeholder: 'Hello',
  variant: 'outline-brand-primary-default',
  size: 'md',
  isDisabled: false,
  isInvalid: false
}

export const LeftIconInput = Template.bind({})
LeftIconInput.args = {
  placeholder: 'Hello',
  variant: 'outline-brand-primary-default',
  size: 'md',
  leftIcon: 'search',
  isDisabled: false,
  isInvalid: false
}

export const RightIconInput = Template.bind({})
RightIconInput.args = {
  placeholder: 'Hello',
  variant: 'outline-brand-primary-default',
  size: 'md',
  rightIcon: 'search',
  isDisabled: false,
  isInvalid: false
}

export const LeftAddonInput = Template.bind({})
LeftAddonInput.args = {
  placeholder: 'Hello',
  size: 'md',
  leftAddon: 'left',
  isDisabled: false,
  isInvalid: false
}

export const RightAddonInput = Template.bind({})
RightAddonInput.args = {
  placeholder: 'Hello',
  size: 'md',
  rightAddon: 'right',
  isDisabled: false,
  isInvalid: false
}
