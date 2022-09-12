import { ComponentStory, ComponentMeta } from '@storybook/react'
import React from 'react'

import SwitchDocs from '../../../docs/2 - Core Components/1 - Forms/Switch.mdx'
import { Stack } from '../../Stack'

import { Switch as ThemeSwitch } from '..'

import { DocsWrapper } from '../../Storybook/DocsWrapper'

export default {
  title: 'Core Components/Switch',
  component: ThemeSwitch,
  argTypes: {
    variant: {
      options: ['brand-primary-solid', 'brand-secondary-solid'],
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
    }
  },
  parameters: {
    docs: {
      page: () => (
        <DocsWrapper>
          <SwitchDocs />
        </DocsWrapper>
      )
    }
  }
} as ComponentMeta<typeof ThemeSwitch>

const Template: ComponentStory<typeof ThemeSwitch> = args => (
  <Stack maxW="500" padding="xxxs">
    <ThemeSwitch {...args}></ThemeSwitch>
    <ThemeSwitch {...args}>Switch</ThemeSwitch>
  </Stack>
)

export const Switch = Template.bind({})
Switch.args = {
  variant: 'brand-primary-solid',
  size: 'md',
  isDisabled: false
}
