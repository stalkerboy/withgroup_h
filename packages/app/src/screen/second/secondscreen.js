import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

export const SecondScreen = ({navigation}) => {
  const _logout = () => {
    AsyncStorage.removeItem('userToken');
    navigation.navigate('LoginScreen');
  };
  return (
    <View>
      <Text>SecondScreen</Text>
      <Button title="Logout" onPress={_logout} />
    </View>
  );
};
