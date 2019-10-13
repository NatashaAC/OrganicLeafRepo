import React, { Component } from 'react';
import { StyleSheet, Image, Text, ScrollView } from 'react-native';

export default class TeaScreen extends Component {
    static navigationOptions = {
        title: "Teas",
        headerStyle: {
            backgroundColor: '#4C8577'
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
            fontFamily: 'serif'
        }
    }

  render() {
    return (
        <ScrollView>
        <Image source={require('./assets/detox1.jpg')} style={styles.image}></Image>
        <Text style={{marginBottom: 10}}>Enjoy a a clear out with this tea</Text>
        </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#A9D8B8',
    alignContent: 'center'
  },
  image: {
      width: 150,
      height: 150
  }
});