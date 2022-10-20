import { Icon } from 'components/atoms/Icon'
import React from 'react'

import BaseBox, { Props } from './base'

const WarningBox = (props: Props) => {
  const { isVisible, message } = props
  return (
    <BaseBox
      testID="warning-box"
      allowClose={true}
      isVisible={isVisible}
      message={message}
      bgColor="feedback.warning-light"
      color="neutral.darkest"
      icon={<Icon size="sm" name="error" color="feedback.warning-extradark" />}
      onClose={props.onClose}
    />
  )
}

export default WarningBox
