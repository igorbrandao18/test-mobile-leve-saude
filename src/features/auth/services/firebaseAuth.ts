import { 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  signOut, 
  User as FirebaseUser 
} from 'firebase/auth';
import { doc, setDoc, getDoc } from 'firebase/firestore';
import { auth, db } from '@/shared/services/firebase';
import { User } from '@/features/auth/types/auth.types';

export const firebaseAuth = {
  async login(email: string, password: string): Promise<User> {
    try {
      console.log('🔐 Tentando fazer login com:', email);
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const firebaseUser = userCredential.user;
      console.log('✅ Login bem-sucedido para:', firebaseUser.uid);
      
      // Buscar dados do usuário no Firestore
      const userDoc = await getDoc(doc(db, 'users', firebaseUser.uid));
      const userData = userDoc.data();
      
      return {
        id: firebaseUser.uid,
        name: userData?.name || '',
        email: firebaseUser.email || '',
        createdAt: userData?.createdAt?.toDate() || new Date(),
        updatedAt: userData?.updatedAt?.toDate() || new Date(),
      };
    } catch (error: any) {
      console.error('❌ Erro no login:', error.message);
      throw new Error(error.message);
    }
  },

  async register(name: string, email: string, password: string): Promise<User> {
    try {
      console.log('📝 Iniciando registro para:', email);
      console.log('📝 Dados do usuário:', { name, email });
      
      // 1. Criar usuário no Firebase Auth
      console.log('🔐 Criando usuário no Firebase Auth...');
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const firebaseUser = userCredential.user;
      console.log('✅ Usuário criado no Firebase Auth:', firebaseUser.uid);
      
      // 2. Criar documento do usuário no Firestore
      console.log('📊 Criando documento no Firestore...');
      const userData = {
        name,
        email,
        createdAt: new Date(),
        updatedAt: new Date(),
      };
      
      await setDoc(doc(db, 'users', firebaseUser.uid), userData);
      console.log('✅ Documento criado no Firestore');
      
      const result = {
        id: firebaseUser.uid,
        name,
        email,
        createdAt: userData.createdAt,
        updatedAt: userData.updatedAt,
      };
      
      console.log('🎉 Registro concluído com sucesso:', result);
      return result;
    } catch (error: any) {
      console.error('❌ Erro no registro:', error.message);
      console.error('❌ Código do erro:', error.code);
      throw new Error(error.message);
    }
  },

  async logout(): Promise<void> {
    try {
      console.log('🚪 Fazendo logout...');
      await signOut(auth);
      console.log('✅ Logout realizado com sucesso');
    } catch (error: any) {
      console.error('❌ Erro no logout:', error.message);
      throw new Error(error.message);
    }
  },

  getCurrentUser(): FirebaseUser | null {
    const user = auth.currentUser;
    console.log('👤 Usuário atual:', user ? user.uid : 'Nenhum usuário logado');
    return user;
  },
}; 