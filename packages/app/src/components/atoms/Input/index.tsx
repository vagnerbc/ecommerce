/* eslint-disable react/display-name */
import {
  Input as NativeInput,
  IInputProps,
  InputGroup as NativeInputGroup,
  InputLeftAddon as NativeInputLeftAddon,
  InputRightAddon as NativeInputRightAddon
} from 'native-base'
import React, { forwardRef, MutableRefObject } from 'react'

import { Icon } from '../Icon'

export const InputGroup = NativeInputGroup
export const InputLeftAddon = NativeInputLeftAddon
export const InputRightAddon = NativeInputRightAddon

type Props = IInputProps

export const Input = forwardRef<any, Props>((props, ref) => {
  return (
    <NativeInput
      ref={ref as MutableRefObject<any>}
      {...props}
      InputRightElement={
        props.isInvalid ? (
          <Icon name="error" color="feedback.error-dark" />
        ) : (
          props.InputRightElement
        )
      }
    />
  )
})
