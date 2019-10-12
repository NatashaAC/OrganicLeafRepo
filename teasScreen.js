import React, { Component } from 'react';
import { StyleSheet, Text, Image, View } from 'react-native';

export default class TeaScreen extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Text>Tea Screen</Text>
        <Image source={require('./assets/detox1.jpg')}></Image>
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