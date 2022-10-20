import { AlertDialog } from 'components/atoms/AlertDialog'
import { Center } from 'components/atoms/Center'
import React, { ReactNode } from 'react'

type Props = {
  isOpen: boolean
  onClose: () => void
  title: string
  children: ReactNode
  footerSlot?: ReactNode
  showCloseButton?: boolean
  testID?: string
}

export const ConfirmModal = (props: Props) => {
  const {
    isOpen,
    onClose,
    title,
    children,
    footerSlot,
    showCloseButton,
    testID
  } = props

  const cancelRef = React.useRef(null)

  return (
    <Center>
      <AlertDialog
        testID={testID}
        leastDestructiveRef={cancelRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <AlertDialog.Content borderRadius="md" w="100%" px="nano">
          {showCloseButton && <AlertDialog.CloseButton />}
          <AlertDialog.Header
            _text={{ fontWeight: 'bold', fontSize: 'sm' }}
            borderColor="transparent"
          >
            {title}
          </AlertDialog.Header>
          <AlertDialog.Body>{children}</AlertDialog.Body>
          {footerSlot && (
            <AlertDialog.Footer borderColor="transparent">
              {footerSlot}
            </AlertDialog.Footer>
          )}
        </AlertDialog.Content>
      </AlertDialog>
    </Center>
  )
}
