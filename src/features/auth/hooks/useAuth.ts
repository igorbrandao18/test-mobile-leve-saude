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
    console.log('🔍 Iniciando monitoramento de estado de autenticação...');
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      console.log('🔄 Estado de autenticação mudou:', firebaseUser ? 'Usuário logado' : 'Usuário deslogado');
      
      if (firebaseUser) {
        try {
          console.log('👤 Buscando dados do usuário no Firestore...');
          // Buscar dados do usuário no Firestore
          const userDoc = await firebaseAuth.getCurrentUser();
          if (userDoc) {
            const userData = {
              id: firebaseUser.uid,
              name: firebaseUser.displayName || '',
              email: firebaseUser.email || '',
              createdAt: new Date(),
              updatedAt: new Date(),
            };
            console.log('✅ Dados do usuário carregados:', userData);
            setUser(userData);
          }
        } catch (error) {
          console.error('❌ Erro ao buscar dados do usuário:', error);
        }
      } else {
        console.log('🚪 Usuário deslogado, limpando estado...');
        setUser(null);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const login = useCallback(async (email: string, password: string) => {
    console.log('🔐 Hook useAuth: Iniciando login...');
    setLoading(true);
    setError(null);
    try {
      const user = await firebaseAuth.login(email, password);
      console.log('✅ Hook useAuth: Login bem-sucedido');
      setUser(user);
    } catch (error: any) {
      console.error('❌ Hook useAuth: Erro no login:', error.message);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }, []);

  const register = useCallback(async (name: string, email: string, password: string) => {
    console.log('📝 Hook useAuth: Iniciando registro...');
    setLoading(true);
    setError(null);
    try {
      const user = await firebaseAuth.register(name, email, password);
      console.log('✅ Hook useAuth: Registro bem-sucedido');
      setUser(user);
    } catch (error: any) {
      console.error('❌ Hook useAuth: Erro no registro:', error.message);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }, []);

  const logout = useCallback(async () => {
    console.log('🚪 Hook useAuth: Iniciando logout...');
    try {
      await firebaseAuth.logout();
      console.log('✅ Hook useAuth: Logout bem-sucedido');
      setUser(null);
    } catch (error: any) {
      console.error('❌ Hook useAuth: Erro no logout:', error.message);
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