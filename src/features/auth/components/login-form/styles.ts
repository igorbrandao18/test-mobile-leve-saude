import { StyleSheet, Dimensions } from 'react-native';
import { colors, spacing, typography } from '@/styles';

const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({
  // Container principal
  keyboardView: {
    flex: 1,
    backgroundColor: colors.background,
  },
  
  scrollContainer: {
    flexGrow: 1,
    minHeight: height,
    backgroundColor: colors.background,
  },
  
  // Container principal centralizado
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: spacing.xl,
    paddingVertical: spacing.xxl,
    backgroundColor: colors.background,
  },
  
  // Header com logo
  headerContainer: {
    alignItems: 'center',
    marginBottom: spacing.xxl,
  },
  
  logoContainer: {
    alignItems: 'center',
    marginBottom: spacing.lg,
  },
  
  logoImage: {
    width: 200,
    height: 80,
  },
  
  subtitleText: {
    fontSize: 18,
    color: colors.text,
    textAlign: 'center',
    opacity: 0.8,
    fontWeight: '500',
  },
  
  // Container do formulário
  formContainer: {
    width: '100%',
    maxWidth: 400,
    backgroundColor: colors.background,
    borderRadius: 20,
    padding: spacing.xl,
    shadowColor: colors.text,
    shadowOpacity: 0.1,
    shadowRadius: 20,
    shadowOffset: { width: 0, height: 10 },
    elevation: 10,
    borderWidth: 1,
    borderColor: colors.border,
  },
  
  // Inputs
  input: {
    marginBottom: spacing.lg,
  },
  
  // Botão de login
  loginButton: {
    borderRadius: 12,
    backgroundColor: colors.primary,
    paddingVertical: spacing.lg,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: spacing.lg,
    marginBottom: spacing.md,
    shadowColor: colors.primary,
    shadowOpacity: 0.3,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
    elevation: 5,
  },
  
  loginButtonDisabled: {
    opacity: 0.5,
  },
  
  loginButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.background,
    letterSpacing: 0.5,
  },
  
  // Container de erro
  errorContainer: {
    backgroundColor: colors.error + '10',
    borderLeftWidth: 4,
    borderLeftColor: colors.error,
    padding: spacing.md,
    borderRadius: 8,
    marginBottom: spacing.md,
  },
  
  errorText: {
    color: colors.error,
    fontSize: 14,
    fontWeight: '500',
  },
  
  // Container de registro
  registerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: spacing.lg,
  },
  
  registerText: {
    fontSize: 16,
    color: colors.textSecondary,
  },
  
  registerLink: {
    fontSize: 16,
    color: colors.primary,
    fontWeight: '600',
    textDecorationLine: 'underline',
  },
  
  // Footer
  footerContainer: {
    marginTop: spacing.xxl,
    alignItems: 'center',
  },
  
  footerText: {
    fontSize: 14,
    color: colors.textSecondary,
    opacity: 0.8,
    textAlign: 'center',
    fontStyle: 'italic',
  },
}); 