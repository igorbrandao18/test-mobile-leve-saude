// Firebase Collections
export const COLLECTIONS = {
  USERS: 'users',
  FEEDBACKS: 'feedbacks',
} as const;

// Storage Keys
export const STORAGE_KEYS = {
  USER_TOKEN: 'user_token',
  USER_DATA: 'user_data',
  THEME: 'theme',
} as const;

// API Endpoints
export const API_ENDPOINTS = {
  AUTH: {
    LOGIN: '/auth/login',
    REGISTER: '/auth/register',
    LOGOUT: '/auth/logout',
  },
  FEEDBACK: {
    CREATE: '/feedback',
    LIST: '/feedback',
    GET: '/feedback/:id',
    UPDATE: '/feedback/:id',
    DELETE: '/feedback/:id',
  },
} as const;

// Validation Constants
export const VALIDATION = {
  EMAIL_REGEX: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  PASSWORD_MIN_LENGTH: 6,
  NAME_MIN_LENGTH: 2,
  COMMENT_MIN_LENGTH: 10,
  RATING_MIN: 1,
  RATING_MAX: 5,
} as const;

// UI Constants
export const UI = {
  ANIMATION_DURATION: 300,
  DEBOUNCE_DELAY: 500,
  PULL_TO_REFRESH_DELAY: 1000,
} as const;

// Error Messages
export const ERROR_MESSAGES = {
  NETWORK_ERROR: 'Erro de conexão. Verifique sua internet.',
  AUTH_ERROR: 'Erro de autenticação. Tente novamente.',
  GENERIC_ERROR: 'Algo deu errado. Tente novamente.',
  VALIDATION_ERROR: 'Por favor, corrija os erros no formulário.',
} as const;

// Success Messages
export const SUCCESS_MESSAGES = {
  LOGIN_SUCCESS: 'Login realizado com sucesso!',
  REGISTER_SUCCESS: 'Conta criada com sucesso!',
  FEEDBACK_CREATED: 'Feedback enviado com sucesso!',
  FEEDBACK_UPDATED: 'Feedback atualizado com sucesso!',
  FEEDBACK_DELETED: 'Feedback removido com sucesso!',
} as const; 