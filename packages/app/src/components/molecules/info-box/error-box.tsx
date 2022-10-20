import { Icon } from 'components/atoms/Icon'
import React from 'react'

import BaseBox, { Props } from './base'

const ErrorBox = (props: Props) => {
  const { isVisible, message, onPress } = props
  return (
    <BaseBox
      testID="error-box"
      isVisible={isVisible}
      onPress={onPress}
      message={message}
      bgColor="support.tertiary-light"
      color="neutral.darkest"
      icon={<Icon size="sm" name="error" color="feedback.error-dark" />}
    />
  )
}

export default ErrorBox
