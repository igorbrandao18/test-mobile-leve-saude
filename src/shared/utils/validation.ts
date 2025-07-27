export const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
export const PASSWORD_MIN_LENGTH = 6;
export const COMMENT_MIN_LENGTH = 10;

export const validateEmail = (email: string): string | null => {
  if (!email.trim()) {
    return 'Email é obrigatório';
  }
  
  if (!EMAIL_REGEX.test(email)) {
    return 'Email inválido';
  }
  
  return null;
};

export const validatePassword = (password: string): string | null => {
  if (!password.trim()) {
    return 'Senha é obrigatória';
  }
  
  if (password.length < PASSWORD_MIN_LENGTH) {
    return `Senha deve ter pelo menos ${PASSWORD_MIN_LENGTH} caracteres`;
  }
  
  return null;
};

export const validateName = (name: string): string | null => {
  if (!name.trim()) {
    return 'Nome é obrigatório';
  }
  
  if (name.trim().length < 2) {
    return 'Nome deve ter pelo menos 2 caracteres';
  }
  
  return null;
};

export const validateComment = (comment: string): string | null => {
  if (!comment.trim()) {
    return 'Comentário é obrigatório';
  }
  
  if (comment.trim().length < COMMENT_MIN_LENGTH) {
    return `Comentário deve ter pelo menos ${COMMENT_MIN_LENGTH} caracteres`;
  }
  
  return null;
};

export const validateRating = (rating: number): string | null => {
  if (rating < 1 || rating > 5) {
    return 'Avaliação deve ser entre 1 e 5 estrelas';
  }
  
  return null;
};

export const validateConfirmPassword = (password: string, confirmPassword: string): string | null => {
  if (!confirmPassword.trim()) {
    return 'Confirmação de senha é obrigatória';
  }
  
  if (password !== confirmPassword) {
    return 'Senhas não coincidem';
  }
  
  return null;
}; 