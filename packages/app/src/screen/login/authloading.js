import React, {useEffect} from 'react';
import {Text} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

const AuthLoading = ({navigation}) => {
  const _bootstrapAsync = async () => {
    const userToken = await AsyncStorage.getItem('userToken');
    navigation.navigate(userToken ? 'MainTab' : 'Auth');
  };

  useEffect(() => {
    setTimeout(() => {
      _bootstrapAsync();
    }, 1000);
  }, []);

  return (
    <Container>
      <Text>Loading...</Text>
    </Container>
  );
};

export default AuthLoading;
