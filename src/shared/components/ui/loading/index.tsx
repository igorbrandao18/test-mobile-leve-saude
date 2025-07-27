import React from 'react';
import { View, ActivityIndicator, Text } from 'react-native';
import { styles } from './styles';
import { colors } from '@/styles';

interface LoadingProps {
  size?: 'small' | 'large';
  color?: string;
  text?: string;
  fullScreen?: boolean;
}

export const Loading: React.FC<LoadingProps> = ({
  size = 'large',
  color = colors.primary,
  text,
  fullScreen = false,
}) => {
  if (fullScreen) {
    return (
      <View style={styles.fullScreenContainer}>
        <View style={styles.loadingContainer}>
          <ActivityIndicator size={size} color={color} />
          {text && <Text style={styles.loadingText}>{text}</Text>}
        </View>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <ActivityIndicator size={size} color={color} />
      {text && <Text style={styles.loadingText}>{text}</Text>}
    </View>
  );
}; 