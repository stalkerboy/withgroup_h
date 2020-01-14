import MainScreen from './main/mainscreen';

const MainNavi = createStackNavigator({
  MainTab: {
    screen: MainTab,
    navigationOptions: ({navigation}) => ({
      header: null,
    }),
  },
});

const MainTab = createBottomTabNavigator({
  MainScreen,
  SecondScreen,
});

export default createAppContainer(
  createSwitchNavigator(
    {
      AuthLoading,
      Auth,
      MainNavi,
    },
    {
      initialRouteName: 'AuthLoading',
    },
  ),
);
