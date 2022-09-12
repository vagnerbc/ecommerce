import { PhoneIcon } from '@chakra-ui/icons'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import React from 'react'

import { Tooltip as ThemeTooltip } from '..'

import TooltipDocs from '../../../docs/2 - Core Components/5 - Overlay/Tooltip.mdx'
import { Flex } from '../../Flex'
import { DocsWrapper } from '../../Storybook/DocsWrapper'

export default {
  title: 'Core Components/Tooltip',
  component: ThemeTooltip,
  argTypes: {
    label: {
      type: 'string',
      defaultValue: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.`
    },
    variant: {
      options: ['brand-default', 'brand-primary'],
      control: { type: 'select' }
    },
    size: {
      options: ['sm', 'md', 'lg'],
      control: { type: 'select' }
    },
    hasArrow: {
      control: { type: 'boolean' }
    },
    placement: {
      options: ['top', 'right', 'bottom', 'left'],
      control: { type: 'select' }
    }
  },
  parameters: {
    docs: {
      page: () => (
        <DocsWrapper>
          <TooltipDocs />
        </DocsWrapper>
      )
    }
  }
} as ComponentMeta<typeof ThemeTooltip>

const Template: ComponentStory<typeof ThemeTooltip> = args => (
  <Flex width="80px" px="350px" py="100px" bg="standard.light" justify="center">
    <ThemeTooltip {...args}>
      <PhoneIcon />
    </ThemeTooltip>
  </Flex>
)

export const Tooltip = Template.bind({})
Tooltip.args = {
  variant: 'brand-primary',
  size: 'md',
  hasArrow: true,
  placement: 'top',
  arrowSize: 8
}
