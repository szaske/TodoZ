/** as of 8/21/18 if you want to use the React Native
remote debugger you must first go into the emulator
dev settings and set the URL to localhost:8081.  For some
reason it defaults to 10.0.2.2:8081 which does not work
 */

/** @format */

import { AppRegistry } from 'react-native'
import App from './src/App'
import { name as appName } from './app.json'

// This disables the yellow box on the emulator
// when using the Chrome debugger.
console.disableYellowBox = true

AppRegistry.registerComponent(appName, () => App)
