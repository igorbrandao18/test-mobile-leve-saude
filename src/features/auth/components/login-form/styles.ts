import { StyleSheet, Dimensions } from 'react-native';
import { colors, spacing, typography } from '@/styles';

const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({
  // Safe Area
  safeArea: {
    flex: 1,
    backgroundColor: colors.background,
  },
  
  // Container principal
  keyboardView: {
    flex: 1,
    backgroundColor: colors.background,
  },
  
  scrollContainer: {
    flexGrow: 1,
    minHeight: height * 0.8, // Garante que o conteúdo ocupe pelo menos 80% da altura
    backgroundColor: colors.background,
  },
  
  // Container principal centralizado
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.xl,
    backgroundColor: colors.background,
    minHeight: height * 0.8,
  },
  
  // Header com logo
  headerContainer: {
    alignItems: 'center',
    marginBottom: spacing.xl,
    flex: 1,
    justifyContent: 'center',
    maxHeight: height * 0.3, // Limita a altura do header
  },
  
  logoContainer: {
    alignItems: 'center',
    marginBottom: spacing.lg,
  },
  
  logoImage: {
    width: Math.min(width * 0.6, 200), // Responsivo: 60% da largura ou máximo 200px
    height: Math.min(width * 0.24, 80), // Mantém proporção 2.5:1
  },
  
  subtitleText: {
    fontSize: Math.max(16, width * 0.04), // Responsivo: mínimo 16px ou 4% da largura
    color: colors.text,
    textAlign: 'center',
    opacity: 0.8,
    fontWeight: '500',
    paddingHorizontal: spacing.md,
  },
  
  // Container do formulário
  formContainer: {
    width: '100%',
    maxWidth: Math.min(width * 0.9, 400), // Responsivo: 90% da largura ou máximo 400px
    backgroundColor: colors.background,
    borderRadius: 20,
    padding: spacing.lg,
    shadowColor: colors.text,
    shadowOpacity: 0.1,
    shadowRadius: 20,
    shadowOffset: { width: 0, height: 10 },
    elevation: 10,
    flex: 1,
    justifyContent: 'center',
    maxHeight: height * 0.5, // Limita a altura do formulário
  },
  
  // Inputs
  input: {
    marginBottom: spacing.md,
  },
  
  // Botão de login
  loginButton: {
    borderRadius: 12,
    backgroundColor: colors.primary,
    paddingVertical: spacing.md,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: spacing.lg,
    marginBottom: spacing.md,
    shadowColor: colors.primary,
    shadowOpacity: 0.3,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
    elevation: 5,
    minHeight: 48,
  },
  
  loginButtonDisabled: {
    opacity: 0.5,
  },
  
  loginButtonText: {
    fontSize: Math.max(16, width * 0.04), // Responsivo
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
    flexWrap: 'wrap',
  },
  
  registerText: {
    fontSize: Math.max(14, width * 0.035), // Responsivo
    color: colors.textSecondary,
  },
  
  registerLink: {
    fontSize: Math.max(14, width * 0.035), // Responsivo
    color: colors.primary,
    fontWeight: '600',
    textDecorationLine: 'underline',
  },
  
  // Footer
  footerContainer: {
    marginTop: spacing.lg,
    alignItems: 'center',
    flex: 1,
    justifyContent: 'flex-end',
    maxHeight: height * 0.2, // Limita a altura do footer
  },
  
  footerText: {
    fontSize: Math.max(12, width * 0.03), // Responsivo
    color: colors.textSecondary,
    opacity: 0.8,
    textAlign: 'center',
    fontStyle: 'italic',
    paddingHorizontal: spacing.md,
  },
}); 