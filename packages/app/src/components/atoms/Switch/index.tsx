import { Switch as NativeSwitch } from 'native-base'
import React from 'react'

import { Box } from '../Box'

type SwitchProps = {
  onToggle: () => void
  isChecked: boolean
}

export const Switch = (props: SwitchProps) => {
  const color = props.isChecked ? 'brand.primary-default' : 'neutral.dark'

  return (
    <Box testID="switch-container" borderRadius="pill" bgColor={color}>
      <NativeSwitch onTrackColor={color} offTrackColor={color} {...props} />
    </Box>
  )
}
