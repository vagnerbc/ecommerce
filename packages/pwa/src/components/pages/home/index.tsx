import { Button, Flex, Text } from '@ecommerce/design-system'
import { VStack } from '@ecommerce/design-system/src/components/Stack'
import { useAuth } from 'contexts/auth'

export const HomePage = () => {
  const { user, logout } = useAuth()

  return (
    <Flex
      w="full"
      h="100vh"
      backgroundColor="brand.primary-lightest"
      justifyContent="center"
      alignItems="center"
    >
      <VStack
        spacing="md"
        backgroundColor="brand.primary-default"
        p="md"
        borderRadius="md"
        shadow="2xl"
      >
        <Text fontSize="xl" color="white" fontWeight="bold">
          Welcome, {user?.name}
        </Text>
        <Button onClick={() => logout()}>Logout</Button>
      </VStack>
    </Flex>
  )
}
