import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import HomeScreen from './homeScreen.js';
import TeaScreen from './teasScreen.js';

const stackNavigator = createStackNavigator({
  Home: HomeScreen,
  Teas: TeaScreen
});

export default createAppContainer(stackNavigator);
