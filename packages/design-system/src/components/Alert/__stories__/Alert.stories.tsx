import { CloseButton } from '@chakra-ui/react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import React from 'react'

import AlertDocs from '../../../docs/2 - Core Components/3 - Feedback/Alerts.mdx'
import { Stack } from '../../Stack'
import { DocsWrapper } from '../../Storybook/DocsWrapper'

import {
  Alert as ThemeAlert,
  AlertDescription,
  AlertIcon,
  AlertTitle
} from '..'

export default {
  title: 'Core Components/Alert',
  component: ThemeAlert,
  argTypes: {
    variant: {
      options: [
        'solid-feedback-success-mediumdark',
        'solid-feedback-warning-default',
        'solid-feedback-error-mediumlight',
        'solid-feedback-information-extradark',
        'subtle-feedback-success-lightest',
        'subtle-feedback-warning-lightest',
        'subtle-support-tertiary-light',
        'subtle-feedback-information-lightest',
        'left-accent-feedback-success-lightest',
        'left-accent-feedback-warning-lightest',
        'left-accent-support-tertiary-light',
        'left-accent-feedback-information-lightest'
      ],
      control: { type: 'select' }
    },
    size: {
      options: ['xs', 'sm', 'md'],
      control: { type: 'select' }
    }
  },
  parameters: {
    docs: {
      page: () => (
        <DocsWrapper>
          <AlertDocs />
        </DocsWrapper>
      )
    }
  }
} as ComponentMeta<typeof ThemeAlert>

const Template: ComponentStory<typeof ThemeAlert> = args => (
  <Stack spacing="xs" maxW="600px">
    <ThemeAlert {...args}>
      <AlertIcon />
      <AlertDescription>{args.children}</AlertDescription>
      <CloseButton />
    </ThemeAlert>
    <ThemeAlert {...args}>
      <AlertIcon />
      <AlertTitle>{args.title}</AlertTitle>
      <AlertDescription>{args.children}</AlertDescription>
      <CloseButton />
    </ThemeAlert>
  </Stack>
)

export const Alert = Template.bind({})
Alert.args = {
  variant: 'solid-feedback-error-mediumlight',
  size: 'md',
  children: 'Something happened.',
  title: 'Core Components/Title'
}
