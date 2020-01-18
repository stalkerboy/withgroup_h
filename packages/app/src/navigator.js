import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createSwitchNavigator, createAppContainer} from 'react-navigation';

import {AuthLoading} from './screen/login/authloading';
import {LoginScreen} from './screen/login/loginscreen';

import {SecondScreen} from './screen/second/secondscreen';
import {MainScreen} from './screen/main/mainscreen';

const MainTab = createBottomTabNavigator({
  MainScreen: {
    screen: MainScreen,
    navigationOptions: ({navigation}) => ({
      title: '메인임',
    }),
  },
  SecondScreen,
});

export default createAppContainer(
  createSwitchNavigator(
    {
      AuthLoading,
      LoginScreen,
      MainTab,
    },
    {
      initialRouteName: 'AuthLoading',
    },
  ),
);
