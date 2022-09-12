import { ComponentStory, ComponentMeta } from '@storybook/react'
import React from 'react'

import TabsDocs from '../../../docs/2 - Core Components/6 - Disclosure/Tabs.mdx'
import { DocsWrapper } from '../../Storybook/DocsWrapper'

import {
  Tabs as ThemeTabs,
  TabList as ThemeTabList,
  Tab as ThemeTab,
  TabPanels as ThemeTabPanels,
  TabPanel as ThemeTabPanel
} from '..'

export default {
  title: 'Core Components/Tabs',
  component: ThemeTabs,
  argTypes: {
    variant: {
      options: [
        'line',
        'enclosed',
        'enclosed-colored',
        'soft-rounded',
        'solid-rounded',
        'brand-primary-solid',
        'brand-secondary-solid'
      ],
      control: { type: 'select' }
    }
  },
  parameters: {
    docs: {
      page: () => (
        <DocsWrapper>
          <TabsDocs />
        </DocsWrapper>
      )
    }
  }
} as ComponentMeta<typeof ThemeTabs>

const Template: ComponentStory<typeof ThemeTabs> = args => (
  <ThemeTabs {...args}>
    <ThemeTabList>
      <ThemeTab>One</ThemeTab>
      <ThemeTab isDisabled>Two</ThemeTab>
      <ThemeTab>Three</ThemeTab>
    </ThemeTabList>
    <ThemeTabPanels>
      <ThemeTabPanel>
        <p>one!</p>
      </ThemeTabPanel>
      <ThemeTabPanel>
        <p>two!</p>
      </ThemeTabPanel>
      <ThemeTabPanel>
        <p>three!</p>
      </ThemeTabPanel>
    </ThemeTabPanels>
  </ThemeTabs>
)

export const Tabs = Template.bind({})
Tabs.args = {
  variant: 'brand-primary-solid',
  children: 'Tabs'
}
