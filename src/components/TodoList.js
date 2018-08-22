// @flow

import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import TodoItem from './TodoItem'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    textAlign: 'center',
  },
  header: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  item: {
    padding: 10,
  },
})

export default class TodoList extends Component<{}> {
  render() {
    // Examples of console commands that can be used
    // console.log('Steve Zaske was here')
    // console.warn('Steve Zaske was here')
    // console.error('Steve Zaske was here')

    // Here I'm creating an array of items
    const items = [
      {
        id: 1,
        title: 'Go to the store',
      },
      {
        id: 2,
        title: 'Get chocolate milk',
      },
      {
        id: 3,
        title: 'Have some fun',
      },
    ]
    return (
      <View style={styles.container}>
        <Text style={styles.header}>ToDo List</Text>
        <View style={styles.header}>
          {items.map(item => (
            <TodoItem title={item.title} key={item.id} />
          ))}
        </View>
      </View>
    )
  }
}
