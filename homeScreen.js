import React, { Component } from 'react';
import { StyleSheet, View, Button } from 'react-native';

export default class HomeScreen extends Component {
    static navigationOptions = {
        title: "Home",
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
          <View style={styles.container}>
              <Button onPress= {
                  () =>
                  this.props.navigation.navigate('Teas')
              }
              title="press me"></Button>
          </View>
      );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#A9D8B8',
        opacity: 50,
        alignItems: 'center',
        justifyContent: 'center'
    }
});