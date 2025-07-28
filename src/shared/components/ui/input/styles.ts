import { StyleSheet } from 'react-native';
import { colors, spacing, typography } from '@/styles';

export const styles = StyleSheet.create({
  container: {
    marginBottom: spacing.md,
  },
  
  label: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.secondary,
    marginBottom: spacing.sm,
  },
  
  inputContainer: {
    position: 'relative',
    flexDirection: 'row',
    alignItems: 'center',
  },
  
  input: {
    flex: 1,
    height: 56,
    backgroundColor: colors.backgroundLight,
    borderWidth: 0,
    borderRadius: 12,
    paddingHorizontal: spacing.lg,
    fontSize: 16,
    color: colors.text,
    fontWeight: 'normal',
  },
  
  inputWithLeftIcon: {
    paddingLeft: 48,
  },
  
  inputWithRightIcon: {
    paddingRight: 48,
  },
  
  inputFocused: {
    backgroundColor: colors.background,
    shadowColor: colors.primary,
    shadowOpacity: 0.15,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
  },
  
  inputError: {
    backgroundColor: colors.error + '05',
  },
  
  leftIcon: {
    position: 'absolute',
    left: spacing.md,
    zIndex: 1,
  },
  
  rightIcon: {
    position: 'absolute',
    right: spacing.md,
    zIndex: 1,
  },
  
  helperText: {
    fontSize: 14,
    color: colors.textSecondary,
    marginTop: spacing.xs,
    marginLeft: spacing.sm,
  },
  
  errorText: {
    color: colors.error,
    fontWeight: '500',
  },
}); 