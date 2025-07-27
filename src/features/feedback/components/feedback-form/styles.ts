import { StyleSheet } from 'react-native';
import { colors, spacing } from '@/styles';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
    padding: spacing.lg,
    borderRadius: 12,
    shadowColor: colors.text,
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
    margin: spacing.lg,
  },
  button: {
    marginTop: spacing.md,
  },
}); 