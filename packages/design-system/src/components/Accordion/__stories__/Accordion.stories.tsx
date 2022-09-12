import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import AccordionDocs from '../../../docs/2 - Core Components/6 - Disclosure/Accordions.mdx'
import { DocsWrapper } from '../../Storybook/DocsWrapper'

import {
  Accordion as ThemeAccordion,
  AccordionItem as Item,
  AccordionIcon as Icon,
  AccordionPanel as Panel,
  AccordionButton as Button
} from '..'

export default {
  title: 'Core Components/Accordion',
  component: ThemeAccordion,
  argTypes: {
    variant: {
      options: ['brand-secondary-default'],
      control: {
        type: 'select'
      }
    },
    allowMultiple: {
      name: 'allowMultiple',
      type: 'boolean',
      control: {
        type: 'boolean'
      }
    },
    allowToggle: {
      name: 'allowTogle',
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
          <AccordionDocs />
        </DocsWrapper>
      )
    }
  }
} as ComponentMeta<typeof ThemeAccordion>

const Template: ComponentStory<typeof ThemeAccordion> = args => (
  <ThemeAccordion {...args}>
    <Item>
      <Button>
        Item 1
        <Icon />
      </Button>
      <Panel>This is an panel content</Panel>
    </Item>
    <Item>
      <Button>
        Item 2
        <Icon />
      </Button>
      <Panel>This is an panel content</Panel>
    </Item>
    <Item>
      <Button>
        Item 3
        <Icon />
      </Button>
      <Panel>This is an panel content</Panel>
    </Item>
  </ThemeAccordion>
)

export const Accordion = Template.bind({})
Accordion.args = {
  variant: 'brand-secondary-default',
  allowMultiple: false,
  allowToggle: false
}
