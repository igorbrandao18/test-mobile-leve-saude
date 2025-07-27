import { useState } from 'react';
import { validateEmail, validatePassword, validateName, validateConfirmPassword } from '@/shared/utils/validation';

export function useAuthValidation() {
  const [emailError, setEmailError] = useState<string | null>(null);
  const [passwordError, setPasswordError] = useState<string | null>(null);
  const [nameError, setNameError] = useState<string | null>(null);
  const [confirmPasswordError, setConfirmPasswordError] = useState<string | null>(null);

  const validateLogin = (email: string, password: string) => {
    setEmailError(validateEmail(email));
    setPasswordError(validatePassword(password));
    return !validateEmail(email) && !validatePassword(password);
  };

  const validateRegister = (name: string, email: string, password: string, confirmPassword: string) => {
    setNameError(validateName(name));
    setEmailError(validateEmail(email));
    setPasswordError(validatePassword(password));
    setConfirmPasswordError(validateConfirmPassword(password, confirmPassword));
    return (
      !validateName(name) &&
      !validateEmail(email) &&
      !validatePassword(password) &&
      !validateConfirmPassword(password, confirmPassword)
    );
  };

  return {
    emailError,
    passwordError,
    nameError,
    confirmPasswordError,
    validateLogin,
    validateRegister,
  };
} 