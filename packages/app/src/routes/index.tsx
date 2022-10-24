import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { useAuth } from 'contexts/auth'
import { HomeScreen } from 'screens/home'
import { LoginScreen } from 'screens/login'

const Stack = createNativeStackNavigator()

export const Routes = () => {
  const { isLogged } = useAuth()
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {isLogged ? (
          <Stack.Screen
            name="/"
            component={HomeScreen}
            options={{ headerShown: true, headerTitle: '' }}
          />
        ) : (
          <Stack.Screen name="Login" component={LoginScreen} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  )
}
