/* eslint-disable react/display-name */
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons'
import { IIconProps, Icon as NativeIcon } from 'native-base'
import React from 'react'

import { YandehIconNames, yandehIcons } from './yandeh'

type MaterialIconNames = keyof typeof MaterialIcons.glyphMap
type MaterialCommunityIconNames = keyof typeof MaterialCommunityIcons.glyphMap

export type IconSizes = 'xxxs' | 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xlg'
export type IconNames =
  | MaterialIconNames
  | MaterialCommunityIconNames
  | YandehIconNames

export type IconProps = IIconProps & {
  variant?: 'outlined' | 'round' | 'sharp' | 'two-tone'
  isSelectIcon?: boolean
  name: IconNames
  size?: IconSizes
  color?: string
  useCommunityIcons?: boolean
}

export const iconSizesMap = new Map<IconSizes, string>([
  ['xxxs', '12px'],
  ['xxs', '14px'],
  ['xs', '16px'],
  ['sm', '20px'],
  ['md', '24px'],
  ['lg', '32px'],
  ['xlg', '80px']
])

export const iconSizesSelectMap = new Map<IconSizes, string>([
  ['sm', '16px'],
  ['md', '24px'],
  ['lg', '24px']
])

export const Icon = React.forwardRef<any, IconProps>(
  (
    {
      variant,
      name,
      color,
      size,
      isSelectIcon = false,
      useCommunityIcons = false,
      ...props
    },
    ref
  ) => {
    const iconSize = isSelectIcon
      ? iconSizesSelectMap.get(size || 'sm')
      : iconSizesMap.get(size || 'md')

    if (name.startsWith('yandeh-')) {
      const iconName = name.split('yandeh-')[1] as keyof typeof yandehIcons
      const YandehIcon = yandehIcons[iconName][variant ?? 'filled']

      return (
        <NativeIcon viewBox="0 0 24 24" size={iconSize} fill={color} {...props}>
          <YandehIcon color={color} />
        </NativeIcon>
      )
    }

    return (
      <NativeIcon
        as={useCommunityIcons ? MaterialCommunityIcons : MaterialIcons}
        name={name}
        ref={ref}
        color={color}
        size={iconSize}
        {...props}
      />
    )
  }
)
