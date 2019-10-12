import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default class TeaScreen extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Text>Tea Screen</Text>
        <Image src={required('../assets/energy1.jpg')}
        style={{width: 200, height:200}}></Image>
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
