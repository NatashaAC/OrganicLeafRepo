import React, { Component } from 'react';
import { StyleSheet, Text, Button, ScrollView,Animated, Easing } from 'react-native';

import { Card } from 'react-native-elements';

import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

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

    constructor(props) {
        super(props);
        this.rotateValue = new Animated.Value(0);
    }

  render() {

      let rotation = this.rotateValue.interpolate({
        inputRange: [0, 1],
        outputRange: ["0deg", "360deg"]
      });

      let transformStyle = { transform: [{ rotate: rotation }] };

    return (
        <ScrollView style={styles.container}>
            <TouchableWithoutFeedback 
                onPressIn={() => {
                    Animated.timing(this.rotateValue, {
                        toValue: 1,
                        duration: 700,
                        easing: Easing.linear
                    }).start();
                }}
                onPressOut={() => {
                    Animated.timing(this.rotateValue, {
                        toValue: 0,
                        duration: 350,
                        easing: Easing.linear
                    }).start();
                }}>
            <Animated.View style={transformStyle}>
                <Card 
                    title='Detox Tea'
                    image={require('./assets/detox1.jpg')}>
                    <Text style={styles.textStyle}>Enjoy a a clear out with this tea!</Text>
                    <Button
                        title='ADD TO CART'
                        style={styles.buttonStyle}></Button>
                </Card>
            </Animated.View>
            <Animated.View style={transformStyle}>
                <Card 
                    title='Digestion Tea'
                    image={require('./assets/digestion2.jpg')}>
                    <Text style={styles.textStyle}>Soothe your stomach with this tea!</Text>
                    <Button
                        title='ADD TO CART'
                        style={styles.buttonStyle}></Button>
                </Card>
            </Animated.View>
            <Animated.View style={transformStyle}>
                <Card 
                    title='Energy Tea'
                    image={require('./assets/energy1.jpg')}>
                    <Text style={styles.textStyle}>Wake up with this tea!</Text>
                    <Button
                        title='ADD TO CART'
                        style={styles.buttonStyle}></Button>
                </Card>
            </Animated.View>
            <Animated.View style={transformStyle}>
                <Card 
                    title='Relax Tea'
                    image={require('./assets/relax4.jpg')}>
                    <Text style={styles.textStyle}>Relax with this tea</Text>
                    <Button
                        title='ADD TO CART'
                        style={styles.buttonStyle}></Button>
                </Card>
            </Animated.View>
            <Animated.View style={transformStyle}>
                <Card 
                    title='Immunity Tea'
                    image={require('./assets/immunity2.jpg')}>
                    <Text style={styles.textStyle}>Boost your immune system this tea</Text>
                    <Button
                        title='ADD TO CART' 
                        style={styles.buttonStyle}></Button>
                </Card>
            </Animated.View>
            </TouchableWithoutFeedback>
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
  textStyle: {
    margin: 20,
    textAlign: 'center'
  },
  buttonStyle: {
      backgroundColor: '#4C8577',
      fontFamily: 'Roboto'
  }
});