// This anotation enables Flow analysis on the file.
// @flow

// This is the same React library used in React web.  Both
// ReacT and React-Native use this library and the only
// difference is the output components
import React, { Component } from 'react'

// These are some common React-Native components. A complete
// list can be found at the React-Native website
// they're no longer being used
// import { Platform, Text, View } from 'react-native'

// I placed the styles in there own file, so it's imported here
// import styles from './App.styles'
import TodoList from './components/TodoList'

// This render method is coded in JSX.  It looks like HTML
// but is different
type Props = {}
export default class App extends Component<Props> {
  render() {
    return <TodoList />
  }
}
