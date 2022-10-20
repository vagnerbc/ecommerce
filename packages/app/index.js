import * as dotenv from 'dotenv'
import { registerRootComponent } from 'expo'

import App from './src/App'

dotenv.config()

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(App)
