/* eslint-disable @typescript-eslint/no-empty-function */
import { ComponentStory, ComponentMeta } from '@storybook/react'
import React from 'react'

import { AlertDialog as ThemeAlertDialog } from '..'

import AlertDialogDocs from '../../../docs/2 - Core Components/5 - Overlay/AlertDialog.mdx'
import { Icon } from '../../Icon'
import { DocsWrapper } from '../../Storybook/DocsWrapper'

export default {
  title: 'Core Components/AlertDialog',
  component: ThemeAlertDialog,
  argTypes: {},
  parameters: {
    docs: {
      page: () => (
        <DocsWrapper>
          <AlertDialogDocs />
        </DocsWrapper>
      )
    }
  }
} as ComponentMeta<typeof ThemeAlertDialog>

const Template: ComponentStory<typeof ThemeAlertDialog> = args => (
  <ThemeAlertDialog
    {...args}
    onClose={() => {}}
    confirmButtonIcon={<Icon name="delete" variant="outlined" />}
  >
    {args.children}
  </ThemeAlertDialog>
)

export const AlertDialog = Template.bind({})
AlertDialog.args = {
  title: 'Core Components/Delete User',
  children: 'Are you sure? You can’t undo this action afterwards.',
  cancelButtonText: 'Button',
  confirmButtonText: 'Button',
  isOpen: true,
  hasCloseButton: true,
  hasOverlay: false
}
