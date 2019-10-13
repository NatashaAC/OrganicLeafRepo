import React, { Component } from 'react';
import { StyleSheet, Text, Button, ScrollView } from 'react-native';

import { Card } from 'react-native-elements';

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
        <ScrollView style={styles.container}>
            <Card 
                title='Detox Tea'
                image={require('./assets/detox1.jpg')} style={styles.image}>
                <Text style={styles.textStyle}>Enjoy a a clear out with this tea!</Text>
                <Button
                    title='ADD TO CART'></Button>
            </Card>
            <Card 
                title='Digestion Tea'
                image={require('./assets/digestion2.jpg')} style={styles.image}>
                <Text style={styles.textStyle}>Soothe your stomach with this tea!</Text>
                <Button
                    title='ADD TO CART'></Button>
            </Card>
            <Card 
                title='Energy Tea'
                image={require('./assets/energy1.jpg')} style={styles.image}>
                <Text style={styles.textStyle}>Wake up with this tea!</Text>
                <Button
                    title='ADD TO CART'></Button>
            </Card>
            <Card 
                title='Relax Tea'
                image={require('./assets/relax4.jpg')} style={styles.image}>
                <Text style={styles.textStyle}>Relax with this tea</Text>
                <Button
                    title='ADD TO CART'></Button>
            </Card>
            <Card 
                title='Immunity Tea'
                image={require('./assets/immunity2.jpg')} style={styles.image}>
                <Text style={styles.textStyle}>Boost your immune system this tea</Text>
                <Button
                    title='ADD TO CART'></Button>
            </Card>
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
      resizeMode: 'contain',
      width: 25,
      height: 25
  },
  textStyle: {
    margin: 20,
    textAlign: 'center'
  }
});