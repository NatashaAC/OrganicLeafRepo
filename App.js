import React, { Component } from 'react';
import { StyleSheet, Text, View, Header } from 'react-native';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Header 
        leftComponent={{ icon: 'menu', color: '#fff' }}
        centerComponent={{ Text: 'Organic Leaf', style: { color: '#fff' }}}
        rightComponent={{ icon: 'home', color: '#fff' }}></Header>
        <Text>Open up App.js to start working on your app!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
