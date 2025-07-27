import { StyleSheet } from 'react-native';
import { colors, spacing, typography } from '@/styles';

export const styles = StyleSheet.create({
  base: {
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },

  // Variantes
  primary: {
    backgroundColor: colors.primary,
    shadowColor: colors.primary,
    shadowOpacity: 0.3,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
    elevation: 5,
  },

  secondary: {
    backgroundColor: colors.secondary,
    shadowColor: colors.secondary,
    shadowOpacity: 0.3,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
    elevation: 5,
  },

  outline: {
    backgroundColor: 'transparent',
    borderWidth: 2,
    borderColor: colors.primary,
  },

  danger: {
    backgroundColor: colors.error,
    shadowColor: colors.error,
    shadowOpacity: 0.3,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
    elevation: 5,
  },

  // Tamanhos
  small: {
    paddingVertical: spacing.sm,
    paddingHorizontal: spacing.lg,
    minHeight: 40,
  },

  medium: {
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.xl,
    minHeight: 48,
  },

  large: {
    paddingVertical: spacing.lg,
    paddingHorizontal: spacing.xxl,
    minHeight: 56,
  },

  // Estados
  disabled: {
    opacity: 0.6,
    shadowOpacity: 0.1,
  },

  // Textos
  text: {
    fontWeight: '600',
    textAlign: 'center',
  },

  primaryText: {
    color: colors.background,
  },

  secondaryText: {
    color: colors.background,
  },

  outlineText: {
    color: colors.primary,
  },

  dangerText: {
    color: colors.background,
  },

  smallText: {
    fontSize: 14,
  },

  mediumText: {
    fontSize: 16,
  },

  largeText: {
    fontSize: 18,
  },

  disabledText: {
    opacity: 0.8,
  },
}); 