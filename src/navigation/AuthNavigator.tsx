import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginForm from '@/features/auth/components/login-form';
import RegisterForm from '@/features/auth/components/register-form';

const Stack = createStackNavigator();

const AuthNavigator = () => (
  <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Login" component={LoginForm} />
    <Stack.Screen name="Register" component={RegisterForm} />
  </Stack.Navigator>
);

export default AuthNavigator; 