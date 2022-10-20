/* eslint-disable react/display-name */
import { Icon } from 'components/atoms/Icon'
import { Input } from 'components/atoms/Input'
import React, { memo, useCallback, forwardRef } from 'react'
import { NativeSyntheticEvent, TextInputFocusEventData } from 'react-native'

type InputSearchProps = {
  value: string
  isClearable?: boolean
  onChange?: (value: string) => void
  onClear?: () => void
  onFocus?: (event: NativeSyntheticEvent<TextInputFocusEventData>) => void
  isDisabled?: boolean
  placeholder?: string
  variant?: string
}

const InputSearch = forwardRef<any, InputSearchProps>(
  (
    {
      value,
      placeholder,
      variant,
      onChange,
      onFocus,
      isDisabled = false,
      isClearable = false,
      onClear
    },
    ref
  ) => {
    const canShowClearIcon = value.trim().length > 0 && isClearable

    const handleChange = useCallback(
      event => {
        if (!onChange) {
          return
        }
        onChange(event)
      },
      [onChange]
    )

    const handleFocus = useCallback(
      (event: NativeSyntheticEvent<TextInputFocusEventData>) => {
        if (!onFocus) {
          return
        }
        onFocus(event)
      },
      [onFocus]
    )

    return (
      <Input
        ref={ref}
        size="md"
        width="100%"
        testID="input-search"
        InputLeftElement={
          <Icon
            testID="input-search-icon"
            name="search"
            color="neutral.dark"
            size="xs"
            marginLeft="xxs"
          />
        }
        InputRightElement={
          canShowClearIcon ? (
            <Icon
              testID="input-clear-icon"
              name="clear"
              color="neutral.dark"
              size="xs"
              marginRight="xxs"
              onPress={onClear}
            />
          ) : undefined
        }
        value={value}
        variant={variant}
        onChangeText={handleChange}
        onFocus={handleFocus}
        isDisabled={isDisabled}
        placeholder={placeholder}
        bg="standard.white"
      />
    )
  }
)

export default memo(InputSearch)
