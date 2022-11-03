import {
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  HStack,
  Input,
  Text,
  VStack
} from '@ecommerce/design-system'
import { useAuth } from 'contexts/auth'
import { translate } from 'internationalization'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'

type Inputs = {
  email: string
  password: string
}

export const LoginPage = () => {
  const { login, error, logged } = useAuth()
  const router = useRouter()
  const { returnUrl } = router.query

  const {
    register,
    control,
    handleSubmit,
    formState: { errors }
  } = useForm<Inputs>()

  const onSubmit: SubmitHandler<Inputs> = data => {
    login(data)
  }

  useEffect(() => {
    if (logged) {
      router.push((returnUrl as string) || '/')
    }
  }, [logged])

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
          ECOMMERCE
        </Text>

        <form onSubmit={handleSubmit(onSubmit)}>
          <VStack>
            {error && (
              <Text fontSize="xxxs" color="red.500" fontWeight="bold">
                {error}
              </Text>
            )}
            <FormControl id="email" isInvalid={!!errors.email}>
              <Input
                {...register('email', {
                  required: { value: true, message: 'Email é obrigatório' }
                })}
                background="white"
                borderRadius="md"
                placeholder="Email"
                type="email"
              />
              <FormErrorMessage fontSize="smaller">
                {errors.email?.message}
              </FormErrorMessage>
            </FormControl>

            <FormControl id="position" isInvalid={!!errors.password}>
              <Controller
                name="password"
                rules={{
                  required: { value: true, message: 'Senha é obrigatória' }
                }}
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <Input
                    background="white"
                    borderRadius="md"
                    placeholder="Senha"
                    type="password"
                    {...field}
                  />
                )}
              />
              <FormErrorMessage fontSize="smaller">
                {errors.password?.message}
              </FormErrorMessage>
            </FormControl>
            <HStack justify="space-between" align="start" w="full" pt="4">
              <Text size="sm" color="brand.primary-extralightest">
                Esqueci minha senha
              </Text>
              <Button type="submit" variant="brand-secondary-solid">
                {translate('commons.enter')}
              </Button>
            </HStack>
          </VStack>
        </form>
      </VStack>
    </Flex>
  )
}
