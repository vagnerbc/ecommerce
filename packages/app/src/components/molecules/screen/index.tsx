import { Box } from 'components/atoms/Box'
import { Flex } from 'components/atoms/Flex'
import React, { memo, useEffect, useState } from 'react'
import { Keyboard } from 'react-native'

export type Props = {
  testID?: string
  width?: string | number
  height?: string | number
  position?: 'absolute' | 'relative'
  top?: number
  borderRadius?: string
  bgColor?: string
  syncSlot?: React.ReactNode
  headerSlot?: React.ReactNode
  footerSlot?: React.ReactNode
  children: React.ReactNode
  enableSafeArea?: boolean
}

const Screen = (props: Props) => {
  const {
    testID,
    enableSafeArea = true,
    width = '100%',
    height = '100%',
    position = 'relative',
    top = 0,
    borderRadius = 'none',
    bgColor = 'standard.light',
    syncSlot,
    headerSlot,
    footerSlot,
    children
  } = props

  const [isKeyboardVisible, setKeyboardVisible] = useState(false)

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        setKeyboardVisible(true)
      }
    )
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        setKeyboardVisible(false)
      }
    )

    return () => {
      keyboardDidHideListener.remove()
      keyboardDidShowListener.remove()
    }
  }, [])

  return (
    <Flex
      testID={testID}
      width={width}
      height={height}
      position={position}
      top={top}
      borderRadius={borderRadius}
      bgColor={bgColor}
      flexDirection="column"
      alignItems="center"
    >
      {syncSlot && (
        <Flex width="100%">
          <>
            {enableSafeArea && (
              <Box safeAreaTop backgroundColor="standard.white" />
            )}
            {syncSlot}
          </>
        </Flex>
      )}
      {!headerSlot && enableSafeArea && <Box safeAreaTop />}
      {headerSlot && (
        <Flex width="100%">
          <>
            {enableSafeArea && (
              <Box safeAreaTop backgroundColor="standard.white" />
            )}
            {headerSlot}
          </>
        </Flex>
      )}

      <Flex
        flex={1}
        width="100%"
        flexDirection="column"
        alignItems="center"
        overflowY="auto"
      >
        <Box w="100%">{children}</Box>
      </Flex>

      {footerSlot && !isKeyboardVisible && (
        <Flex width="100%">{footerSlot}</Flex>
      )}
    </Flex>
  )
}

export default memo(Screen)
