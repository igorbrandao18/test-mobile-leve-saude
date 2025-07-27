export const colors = {
  // Cores principais
  primary: '#fb4c02', // Laranja vibrante
  primaryLight: '#ff6b2a', // Laranja mais claro
  primaryDark: '#e03d00', // Laranja mais escuro
  
  // Cores secundárias
  secondary: '#5a1043', // Roxo escuro
  secondaryLight: '#7a1a5a', // Roxo mais claro
  secondaryDark: '#3d0a2e', // Roxo mais escuro
  
  // Cores de feedback
  success: '#00A859', // Verde
  warning: '#F39C12', // Laranja
  error: '#E74C3C', // Vermelho
  
  // Cores de fundo
  background: '#FFFFFF',
  backgroundLight: '#F8F9FA',
  surface: '#FFFFFF',
  surfaceLight: '#F8F9FA',
  
  // Cores de texto
  text: '#2C3E50', // Azul escuro
  textSecondary: '#7F8C8D', // Cinza
  textLight: '#95A5A6', // Cinza claro
  
  // Cores de borda
  border: '#E5E7EB',
  borderLight: '#F3F4F6',
  
  // Cores especiais
  accent: '#3498DB', // Azul accent
  accentLight: '#5DADE2', // Azul claro
  
  // Gradientes
  gradientStart: '#fb4c02',
  gradientEnd: '#ff6b2a',
} as const;

export type Colors = typeof colors; 