const Auth = ({navigation}) => {
  const _login = () => {
    AsyncStorage.setItem('userToken', 'add_token');
    navigation.navigate('MainTab');
  };
  return (
    <Container>
      <Text>Auth</Text>
      <Button title="Login" onPress={_login} />
    </Container>
  );
};

export default Auth;
