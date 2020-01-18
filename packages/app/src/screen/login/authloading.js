import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

export const AuthLoading = ({navigation}) => {
  const _bootstrapAsync = async () => {
    const userToken = await AsyncStorage.getItem('userToken');
    navigation.navigate(userToken ? 'MainTab' : 'LoginScreen');
  };

  useEffect(() => {
    setTimeout(() => {
      _bootstrapAsync();
    }, 1000);
  }, []);

  return (
    <View>
      <Text>Loading...</Text>
    </View>
  );
};
