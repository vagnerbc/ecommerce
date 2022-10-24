import { Button } from 'components/atoms'
import { useAuth } from 'contexts/auth'
import { Box, Text } from 'native-base'
import React from 'react'

export const HomeScreen = () => {
  const { logout } = useAuth()

  return (
    <Box>
      <Text> Home </Text>
      <Button onPress={() => logout()}>Logout</Button>
    </Box>
  )
}
