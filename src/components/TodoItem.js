// @flow
import React, { Component } from 'react'
import { StyleSheet, Text } from 'react-native'

const styles = StyleSheet.create({
  item: {
    padding: 10,
  },
})

export default class TodoItem extends Component<{}> {
  render() {
    return <Text style={styles.item}>1. Go to the store</Text>
  }
}
