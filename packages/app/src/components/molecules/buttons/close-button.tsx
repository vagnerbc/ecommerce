import { useNavigation } from '@react-navigation/native'
import React, { memo, useCallback, useEffect } from 'react'
import { BackHandler } from 'react-native'

import { Icon } from '../../atoms/Icon'
import { IconButton } from '../../atoms/IconButton'

type CloseButtonProps = {
  handleAction?: () => void
}

const CloseButton = (props: CloseButtonProps) => {
  const { handleAction } = props
  const navigation = useNavigation()

  const handleGoBack = useCallback(() => {
    if (handleAction) {
      handleAction()
    }

    navigation.goBack()
  }, [handleAction, navigation])

  useEffect(() => {
    const unsub = BackHandler.addEventListener('hardwareBackPress', () => {
      handleGoBack()
      return true
    })
    return () => unsub.remove()
  }, [handleGoBack])

  return (
    <IconButton
      testID="close-button"
      name="close"
      variant="neutral-extradark-ghost"
      pl={0}
      icon={<Icon size="md" name="close" color="neutral.darkest" />}
      onPress={handleGoBack}
    />
  )
}

export default memo(CloseButton)
