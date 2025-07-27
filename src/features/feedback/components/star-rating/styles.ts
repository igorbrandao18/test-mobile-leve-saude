import { StyleSheet } from 'react-native';
import { colors, spacing } from '@/styles';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: spacing.sm,
  },
  
  star: {
    marginHorizontal: spacing.xs,
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  starInner: {
    width: '100%',
    height: '100%',
    backgroundColor: colors.border,
    borderRadius: 50,
  },
  
  starFilled: {
    backgroundColor: colors.warning,
  },
}); 