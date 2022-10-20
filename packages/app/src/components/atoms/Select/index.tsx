/* eslint-disable react/display-name */
import { Select as NativeSelect, ISelectProps } from 'native-base'
import React, { forwardRef, MutableRefObject } from 'react'

type Props = ISelectProps

export const Select = forwardRef<any, Props>((props, ref) => {
  return <NativeSelect ref={ref as MutableRefObject<any>} {...props} />
})

export const SelectItem = NativeSelect.Item
