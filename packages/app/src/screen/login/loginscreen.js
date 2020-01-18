import {View, Text, Button} from 'react-native';
import React from 'react';
import AsyncStorage from '@react-native-community/async-storage';

export const LoginScreen = ({navigation}) => {
  const _login = () => {
    AsyncStorage.setItem('userToken', 'add_token');
    navigation.navigate('MainTab');
  };
  return (
    <View>
      <Text>LoginScreen</Text>
      <Button title="Login" onPress={_login} />
    </View>
  );
};
