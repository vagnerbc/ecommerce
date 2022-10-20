import { Icon } from 'components/atoms/Icon'
import React from 'react'

import BaseBox, { Props } from './base'

const SuccessBox = (props: Props) => {
  const { isVisible, message, onClose } = props
  return (
    <BaseBox
      testID="success-box"
      allowClose={true}
      onClose={onClose}
      isVisible={isVisible}
      message={message}
      bgColor="feedback.success-lightest"
      color="neutral.darkest"
      icon={
        <Icon
          size="sm"
          name="check-circle"
          color="feedback.success-extradark"
        />
      }
    />
  )
}

export default SuccessBox
