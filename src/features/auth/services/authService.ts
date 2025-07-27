import { User } from '@/features/auth/types/auth.types';

export const authService = {
  async login(email: string, password: string): Promise<User> {
    // Mock: simula login
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          id: '1',
          name: 'Usuário Exemplo',
          email,
          createdAt: new Date(),
          updatedAt: new Date(),
        });
      }, 1000);
    });
  },

  async register(name: string, email: string, password: string): Promise<User> {
    // Mock: simula registro
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          id: '2',
          name,
          email,
          createdAt: new Date(),
          updatedAt: new Date(),
        });
      }, 1000);
    });
  },

  async logout(): Promise<void> {
    // Mock: simula logout
    return new Promise((resolve) => setTimeout(resolve, 500));
  },
}; 