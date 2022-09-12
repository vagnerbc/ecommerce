/* eslint-disable react/no-unescaped-entities */
import { ComponentStory, ComponentMeta } from '@storybook/react'
import React from 'react'

import { Badge as ThemeBadge } from '..'

import BadgeDocs from '../../../docs/2 - Core Components/2 - Data Display/Badges.mdx'
import { DocsWrapper } from '../../Storybook/DocsWrapper'

export default {
  title: 'Core Components/Badge',
  component: ThemeBadge,
  argTypes: {
    variant: {
      type: 'string',
      defaultValue: 'notify',
      options: ['notify'],
      control: {
        type: 'select'
      }
    },
    size: {
      type: 'string',
      defaultValue: 'xs',
      options: ['xs', 'xxxs'],
      control: {
        type: 'select'
      }
    }
  },
  parameters: {
    docs: {
      page: () => (
        <DocsWrapper>
          <BadgeDocs />
        </DocsWrapper>
      )
    }
  }
} as ComponentMeta<typeof ThemeBadge>

const Template: ComponentStory<typeof ThemeBadge> = args => (
  <>
    <ThemeBadge size={args.size} variant={args.variant} marginRight="16px">
      3
    </ThemeBadge>

    <ThemeBadge size={args.size} variant={args.variant}></ThemeBadge>
  </>
)

export const Badge = Template.bind({})
