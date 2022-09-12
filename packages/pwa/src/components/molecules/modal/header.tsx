import {
  Flex,
  ModalCloseButton,
  Text,
  useBreakpointValue,
  theme
} from '@ecommerce/design-system'
import { ReactNode } from 'react'

import { BorderRadius } from '.'

type DefaultHeaderProps = {
  title?: string
  borderRadius?: BorderRadius
  rightSlot?: ReactNode
}

const DefaultHeader = (props: DefaultHeaderProps) => {
  const closeButtonSize = useBreakpointValue({ base: 'sm', sm: 'sm', md: 'md' })

  return (
    <Flex
      borderRadius={props.borderRadius}
      zIndex={11}
      w="100%"
      py="xxxs"
      px={{ base: 'xxxs', sm: 'xxxs', md: 'xxs' }}
      bgImage={theme.gradients.standard.white}
      position="absolute"
      justify="space-between"
      align="center"
    >
      <Flex w="100%">
        <ModalCloseButton
          data-testid="button-modal-close"
          size={closeButtonSize}
          position="initial"
          _hover={{ bgColor: 'neutral.extralight' }}
          mr="xxxs"
        />
        {props.title && (
          <Text
            fontSize={{ base: 'xs', sm: 'xs', md: 'sm' }}
            fontWeight="bold"
            lineHeight="lg"
            color="brand.primary-default"
            textAlign={{ base: 'center', sm: 'center', md: 'start' }}
          >
            {props.title}
          </Text>
        )}
      </Flex>
      {props.rightSlot}
    </Flex>
  )
}

export default DefaultHeader
