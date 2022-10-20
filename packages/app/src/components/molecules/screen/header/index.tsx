import { Flex } from 'components/atoms/Flex'
import { HStack } from 'components/atoms/HStack'
import { Icon } from 'components/atoms/Icon'
import { IconButton } from 'components/atoms/IconButton'
import { Text } from 'components/atoms/Text'
import React from 'react'

type HeaderProps = {
  title: string
  onGoBack?: () => void
}

const Header = (props: HeaderProps) => {
  const handleGoBack = () => {
    if (!props.onGoBack) {
      return
    }
    props.onGoBack()
  }

  return (
    <HStack
      bg="standard.white"
      justifyContent="space-between"
      alignItems="center"
      height="40px"
      width="100%"
    >
      <Flex width="52px" justifyContent="flex-start">
        {!props.onGoBack ? null : (
          <IconButton
            testID="back-button"
            variant="neutral-extradark-ghost"
            icon={
              <Icon size="md" name="chevron-left" color="neutral.darkest" />
            }
            onPress={handleGoBack}
          />
        )}
      </Flex>

      <Flex maxWidth="80%">
        <Text
          color="brand.primary-default"
          fontSize="xs"
          fontWeight="bold"
          numberOfLines={1}
        >
          {props.title}
        </Text>
      </Flex>

      <Flex width="52px" />
    </HStack>
  )
}

export default Header
