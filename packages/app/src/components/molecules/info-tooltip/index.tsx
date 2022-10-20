import { Button, Popover } from 'components/atoms'
import { Box } from 'components/atoms/Box'
import { Icon } from 'components/atoms/Icon'
import React, { memo, useState } from 'react'

type Props = {
  label: string
  testID?: string
}

const InfoTooltip = (props: Props) => {
  const { label, testID } = props
  const [infoTooltipVisibility, setInfoTooltipVisibility] = useState(false)
  return (
    <Popover
      trigger={triggerProps => {
        return (
          <Button
            {...triggerProps}
            testID={testID}
            variant="ghost"
            p={0}
            onPress={() => setInfoTooltipVisibility(true)}
          >
            <Icon name="info-outline" size="xxs" />
          </Button>
        )
      }}
      isOpen={infoTooltipVisibility}
      onClose={() => setInfoTooltipVisibility(!infoTooltipVisibility)}
    >
      <Popover.Content w={259} bgColor="neutral.darkest" p="nano">
        <Popover.Arrow bgColor="neutral.darkest" />
        <Box
          _text={{
            color: 'standard.white',
            fontSize: 'xxs',
            textAlign: 'center'
          }}
        >
          {label}
        </Box>
      </Popover.Content>
    </Popover>
  )
}

export default memo(InfoTooltip)
