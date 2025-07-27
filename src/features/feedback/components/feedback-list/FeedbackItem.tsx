import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Feedback } from '@/features/feedback/types/feedback.types';
import { StarRating } from '@/features/feedback/components/star-rating';
import { colors, spacing, typography } from '@/styles';
import { formatDate } from '@/shared/utils/dateUtils';

const FeedbackItem = ({ feedback }: { feedback: Feedback }) => (
  <View style={styles.container}>
    <StarRating rating={feedback.rating} onRatingChange={() => {}} disabled size={18} />
    <Text style={styles.comment}>{feedback.comment}</Text>
    <Text style={styles.date}>{formatDate(feedback.createdAt)}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.surface,
    borderRadius: 8,
    padding: spacing.md,
    marginBottom: spacing.md,
  },
  comment: {
    ...typography.body,
    color: colors.text,
    marginTop: spacing.xs,
    marginBottom: spacing.xs,
  },
  date: {
    ...typography.caption,
    color: colors.textSecondary,
    textAlign: 'right',
  },
});

export default FeedbackItem; 