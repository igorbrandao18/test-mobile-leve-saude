import { 
  collection, 
  doc, 
  addDoc, 
  getDocs, 
  updateDoc, 
  deleteDoc, 
  query, 
  where, 
  orderBy,
  serverTimestamp 
} from 'firebase/firestore';
import { db } from '@/shared/services/firebase';
import { Feedback } from '@/features/feedback/types/feedback.types';

export const firestoreService = {
  async getFeedbacks(userId: string): Promise<Feedback[]> {
    try {
      const q = query(
        collection(db, 'feedbacks'),
        where('userId', '==', userId),
        orderBy('createdAt', 'desc')
      );
      
      const querySnapshot = await getDocs(q);
      const feedbacks: Feedback[] = [];
      
      querySnapshot.forEach((doc) => {
        const data = doc.data();
        feedbacks.push({
          id: doc.id,
          userId: data.userId,
          rating: data.rating,
          comment: data.comment,
          createdAt: data.createdAt?.toDate() || new Date(),
          updatedAt: data.updatedAt?.toDate() || new Date(),
        });
      });
      
      return feedbacks;
    } catch (error: any) {
      throw new Error('Erro ao buscar feedbacks: ' + error.message);
    }
  },

  async createFeedback(userId: string, rating: number, comment: string): Promise<Feedback> {
    try {
      const feedbackData = {
        userId,
        rating,
        comment,
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp(),
      };
      
      const docRef = await addDoc(collection(db, 'feedbacks'), feedbackData);
      
      return {
        id: docRef.id,
        userId,
        rating,
        comment,
        createdAt: new Date(),
        updatedAt: new Date(),
      };
    } catch (error: any) {
      throw new Error('Erro ao criar feedback: ' + error.message);
    }
  },

  async updateFeedback(feedbackId: string, rating: number, comment: string): Promise<Feedback> {
    try {
      const feedbackRef = doc(db, 'feedbacks', feedbackId);
      await updateDoc(feedbackRef, {
        rating,
        comment,
        updatedAt: serverTimestamp(),
      });
      
      return {
        id: feedbackId,
        userId: '1', // Será atualizado quando buscar do banco
        rating,
        comment,
        createdAt: new Date(),
        updatedAt: new Date(),
      };
    } catch (error: any) {
      throw new Error('Erro ao atualizar feedback: ' + error.message);
    }
  },

  async deleteFeedback(feedbackId: string): Promise<void> {
    try {
      await deleteDoc(doc(db, 'feedbacks', feedbackId));
    } catch (error: any) {
      throw new Error('Erro ao deletar feedback: ' + error.message);
    }
  },
}; 