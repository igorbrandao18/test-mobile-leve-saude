import { useState, useCallback, useEffect } from 'react';
import { User } from '@/features/auth/types/auth.types';
import { firebaseAuth } from '@/features/auth/services/firebaseAuth';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '@/shared/services/firebase';

export function useAuth() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      if (firebaseUser) {
        try {
          // Buscar dados do usuário no Firestore
          const userDoc = await firebaseAuth.getCurrentUser();
          if (userDoc) {
            setUser({
              id: firebaseUser.uid,
              name: firebaseUser.displayName || '',
              email: firebaseUser.email || '',
              createdAt: new Date(),
              updatedAt: new Date(),
            });
          }
        } catch (error) {
          console.error('Erro ao buscar dados do usuário:', error);
        }
      } else {
        setUser(null);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const login = useCallback(async (email: string, password: string) => {
    setLoading(true);
    setError(null);
    try {
      const user = await firebaseAuth.login(email, password);
      setUser(user);
    } catch (error: any) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }, []);

  const register = useCallback(async (name: string, email: string, password: string) => {
    setLoading(true);
    setError(null);
    try {
      const user = await firebaseAuth.register(name, email, password);
      setUser(user);
    } catch (error: any) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }, []);

  const logout = useCallback(async () => {
    try {
      await firebaseAuth.logout();
      setUser(null);
    } catch (error: any) {
      setError(error.message);
    }
  }, []);

  return {
    user,
    loading,
    error,
    login,
    register,
    logout,
    isAuthenticated: !!user,
  };
} 