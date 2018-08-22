// @flow
import React, { Component } from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

const styles = StyleSheet.create({
  item: {
    padding: 10,
  },
})

type Props = { title: string }

type State = {
  completed: boolean,
}

export default class TodoItem extends Component<Props, State> {
  state = {
    completed: false,
  }

  toggltTodo = () => {
    // Again destructuring state per eslint requirements
    const { completed } = this.state
    this.setState({ completed: !completed })
  }

  render() {
    // Assigning this const is called destructing.  It is required
    // according to my Airbnb eslint rules.  Destrucuturing
    // keeps code more readable and allows me to use {title}
    // instead of {this.props.title}
    const { title } = this.props
    const { completed } = this.state
    console.log('props', this.props)
    return (
      <TouchableOpacity onPress={this.toggltTodo}>
        <Text style={[styles.item, { backgroundColor: completed ? 'grey' : 'transparent' }]}>
          {title}
        </Text>
      </TouchableOpacity>
    )
  }
}
