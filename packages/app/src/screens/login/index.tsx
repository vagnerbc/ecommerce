import {
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  Input,
  Text,
  VStack,
  HStack
} from 'components/atoms'
import { useAuth } from 'contexts/auth'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'

type Inputs = {
  email: string
  password: string
}

export const LoginScreen = () => {
  const { login } = useAuth()

  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm<Inputs>()

  const onSubmit: SubmitHandler<Inputs> = data => {
    login(data)
  }

  return (
    <Flex
      flex={1}
      backgroundColor="brand.primary-lightest"
      justifyContent="center"
      alignItems="center"
    >
      <VStack
        p="4"
        w="90%"
        space="md"
        alignItems="center"
        backgroundColor="brand.primary-default"
        borderRadius="md"
        shadow="2xl"
      >
        <Text fontSize="md" color="white" fontWeight="bold" p={6}>
          ECOMMERCE
        </Text>

        <VStack space="md">
          <FormControl isInvalid={!!errors.email}>
            <Controller
              name="email"
              control={control}
              defaultValue=""
              rules={{ required: 'Email is required' }}
              render={({ field }) => (
                <Input
                  placeholder="Email"
                  w="full"
                  backgroundColor="white"
                  {...field}
                  onChangeText={field.onChange}
                />
              )}
            />
            <FormErrorMessage fontSize="smaller">
              {errors.email?.message}
            </FormErrorMessage>
          </FormControl>

          <FormControl isInvalid={!!errors.password}>
            <Controller
              name="password"
              control={control}
              defaultValue=""
              rules={{ required: 'Password is required' }}
              render={({ field }) => (
                <Input
                  placeholder="Password"
                  w="full"
                  backgroundColor="white"
                  type="password"
                  {...field}
                  onChangeText={field.onChange}
                />
              )}
            />
            <FormErrorMessage fontSize="smaller">
              {errors.password?.message}
            </FormErrorMessage>
          </FormControl>
          <HStack justifyContent="space-between" alignItems="center" pt="4">
            <Text size="sm" color="brand.primary-extralightest">
              Forgot password?
            </Text>
            <Button
              variant="brand-secondary-solid"
              onPress={handleSubmit(onSubmit)}
            >
              Sign in
            </Button>
          </HStack>
        </VStack>
      </VStack>
    </Flex>
  )
}
