const MainNavi = createStackNavigator({
  MainTab: {
    screen: MainTab,
    navigationOptions: ({navigation}) => ({
      header: null,
    }),
  },
});

const MainTab = createBottomTabNavigator({
  FirstTab,
  SecondTab,
  ThirdTab,
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
