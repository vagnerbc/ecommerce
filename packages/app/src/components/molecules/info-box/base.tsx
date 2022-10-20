import { Icon } from 'components/atoms'
import { Box } from 'components/atoms/Box'
import { HStack } from 'components/atoms/HStack'
import { IconButton } from 'components/atoms/IconButton'
import { Text } from 'components/atoms/Text'
import React, { ReactNode, useEffect, useState } from 'react'

type BaseProps = {
  allowClose?: boolean
  icon: React.ReactNode
  bgColor: string
  color: string
}

export type Props = {
  testID?: string
  onClose?: () => void
  onPress?: () => void
  message: ReactNode
  isVisible: boolean
}

const BaseBox = (props: Props & BaseProps) => {
  const {
    testID,
    onClose,
    onPress,
    isVisible,
    message,
    allowClose = false,
    bgColor,
    color,
    icon
  } = props
  const [isInternalVisible, setInternalVisible] = useState(isVisible)

  useEffect(() => {
    setInternalVisible(isVisible)
  }, [isVisible])

  const handleClose = () => {
    setInternalVisible(false)
    if (onClose) {
      onClose()
    }
  }

  return (
    <>
      {isInternalVisible && (
        <HStack
          testID={testID}
          bgColor={bgColor}
          padding="nano"
          borderRadius="sm"
          marginBottom="xxs"
        >
          <Box width="15%" alignItems="center" paddingTop="quarck">
            {icon}
          </Box>

          <Text onPress={onPress} width="70%" color={color} fontSize="xs">
            {message}
          </Text>

          <Box width="15%" alignItems="flex-end" paddingTop="quarck">
            {allowClose && (
              <IconButton
                padding={0}
                testID="close-button"
                variant="neutral-extradark-ghost"
                name="close"
                icon={<Icon size="sm" name="close" color={color} />}
                onPress={handleClose}
              />
            )}
          </Box>
        </HStack>
      )}
    </>
  )
}

export default BaseBox
