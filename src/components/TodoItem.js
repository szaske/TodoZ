// @flow
import React, { Component } from 'react'
import { StyleSheet, Text } from 'react-native'

const styles = StyleSheet.create({
  item: {
    padding: 10,
  },
})

type Props = { title: string }
export default class TodoItem extends Component<Props> {
  render() {
    // Assigning this const is called destructing.  It is required
    // according to my Airbnb eslint rules.  Destrucuturing
    // keeps code more readable and allows me to use {title}
    // instead of {this.props.title}
    const { title } = this.props
    console.log('props', this.props)
    return <Text style={styles.item}>{title}</Text>
  }
}
