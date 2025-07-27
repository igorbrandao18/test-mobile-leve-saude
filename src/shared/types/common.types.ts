export interface User {
  id: string;
  email: string;
  name: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface ApiResponse<T> {
  data: T;
  success: boolean;
  message?: string;
  error?: string;
}

export interface LoadingState {
  isLoading: boolean;
  error: string | null;
}

export interface FormField {
  value: string;
  error: string | null;
  isValid: boolean;
}

export type ValidationRule = (value: string) => string | null;

export interface NetworkState {
  isConnected: boolean;
  isInternetReachable: boolean | null;
} 