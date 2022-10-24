import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { AuthProvider } from 'contexts/auth'
import { HomeScreen } from 'screens/home'
import { LoginScreen } from 'screens/login'

const Stack = createNativeStackNavigator()

export const Routes = () => {
  return (
    <NavigationContainer>
      <AuthProvider>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Home" component={HomeScreen} />
        </Stack.Navigator>
      </AuthProvider>
    </NavigationContainer>
  )
}
