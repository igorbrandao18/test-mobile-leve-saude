import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthNavigator from '@/navigation/AuthNavigator';
import MainNavigator from '@/navigation/MainNavigator';
import { useAuth } from '@/features/auth/hooks/useAuth';

const AppNavigator = () => {
  const { isAuthenticated } = useAuth();

  return (
    <NavigationContainer>
      {isAuthenticated ? <MainNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
};

export default AppNavigator; 