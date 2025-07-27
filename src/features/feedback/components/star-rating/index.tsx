import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { StarRatingProps } from '@/features/feedback/types/feedback.types';
import { styles } from './styles';

const StarIcon = ({ filled, size = 24 }: { filled: boolean; size?: number }) => (
  <View style={[styles.star, { width: size, height: size }]}>
    <View style={[styles.starInner, filled && styles.starFilled]} />
  </View>
);

export const StarRating: React.FC<StarRatingProps> = ({
  rating,
  onRatingChange,
  size = 24,
  disabled = false,
}) => {
  const handleStarPress = (starIndex: number) => {
    if (!disabled) {
      onRatingChange(starIndex + 1);
    }
  };

  return (
    <View style={styles.container}>
      {[0, 1, 2, 3, 4].map((starIndex) => (
        <TouchableOpacity
          key={starIndex}
          onPress={() => handleStarPress(starIndex)}
          disabled={disabled}
          activeOpacity={disabled ? 1 : 0.7}
        >
          <StarIcon
            filled={starIndex < rating}
            size={size}
          />
        </TouchableOpacity>
      ))}
    </View>
  );
}; 