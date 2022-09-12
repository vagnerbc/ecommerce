import {
  Modal,
  ModalBody,
  ModalContent,
  ModalContentProps,
  ModalFooter,
  ModalOverlay,
  ModalProps,
  ResponsiveValue,
  theme,
  useBreakpointValue
} from '@ecommerce/design-system'
import { memo, ReactNode } from 'react'

import DefaultHeader from './header'

export type BorderRadius = ResponsiveValue<
  number | string | keyof typeof theme.borders.radius
>

type Props = ModalProps &
  ModalContentProps & {
    overlay?: boolean
    fullscreen?: boolean
    header?: ReactNode
    modalTitle?: string
    headerSlot?: ReactNode
    footerSlot?: ReactNode
    borderRadius?: BorderRadius
  }

function CustomModal(props: Props) {
  const {
    children,
    overlay = true,
    fullscreen = true,
    isCentered = true,
    isOpen,
    onClose,
    modalTitle,
    footerSlot,
    headerSlot,
    borderRadius,
    ...contentProps
  } = props

  const size = useBreakpointValue({ base: 'full', sm: 'full', md: 'md' })

  const modalHeader = headerSlot || (
    <DefaultHeader title={modalTitle} borderRadius={borderRadius} />
  )

  return (
    <Modal
      size={fullscreen ? size : ''}
      isCentered={isCentered}
      isOpen={isOpen}
      onClose={onClose}
    >
      {overlay && <ModalOverlay />}
      <ModalContent {...contentProps} borderRadius={borderRadius}>
        {modalHeader}
        <ModalBody
          margin={0}
          padding={0}
          css={theme.scroll.invisibleStyle}
          display="flex"
          flexDirection="column"
        >
          {children}
        </ModalBody>
        {footerSlot && <ModalFooter zIndex={10}>{footerSlot}</ModalFooter>}
      </ModalContent>
    </Modal>
  )
}

export default memo(CustomModal)
