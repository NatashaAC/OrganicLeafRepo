import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import TeaScreen from './teasScreen.js';

const stackNavigator = createStackNavigator({
  Teas: TeaScreen
});

export default createAppContainer(stackNavigator);
