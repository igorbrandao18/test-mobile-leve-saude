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
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const firebaseUser = userCredential.user;
      
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
      throw new Error(error.message);
    }
  },

  async register(name: string, email: string, password: string): Promise<User> {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const firebaseUser = userCredential.user;
      
      // Criar documento do usuário no Firestore
      const userData = {
        name,
        email,
        createdAt: new Date(),
        updatedAt: new Date(),
      };
      
      await setDoc(doc(db, 'users', firebaseUser.uid), userData);
      
      return {
        id: firebaseUser.uid,
        name,
        email,
        createdAt: userData.createdAt,
        updatedAt: userData.updatedAt,
      };
    } catch (error: any) {
      throw new Error(error.message);
    }
  },

  async logout(): Promise<void> {
    try {
      await signOut(auth);
    } catch (error: any) {
      throw new Error(error.message);
    }
  },

  getCurrentUser(): FirebaseUser | null {
    return auth.currentUser;
  },
}; 