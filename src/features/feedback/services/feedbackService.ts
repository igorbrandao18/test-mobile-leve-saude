import { Feedback } from '@/features/feedback/types/feedback.types';

export const feedbackService = {
  async getFeedbacks(userId: string): Promise<Feedback[]> {
    // Mock: simula busca de feedbacks do usuário
    return new Promise((resolve) => {
      setTimeout(() => {
        const mockFeedbacks: Feedback[] = [
          {
            id: '1',
            userId,
            rating: 5,
            comment: 'Ótimo app! Interface muito intuitiva e funcional.',
            createdAt: new Date(Date.now() - 86400000),
            updatedAt: new Date(Date.now() - 86400000),
          },
          {
            id: '2',
            userId,
            rating: 4,
            comment: 'Muito bom, mas pode melhorar na performance.',
            createdAt: new Date(Date.now() - 172800000),
            updatedAt: new Date(Date.now() - 172800000),
          },
        ];
        resolve(mockFeedbacks);
      }, 1000);
    });
  },

  async createFeedback(userId: string, rating: number, comment: string): Promise<Feedback> {
    // Mock: simula criação de feedback
    return new Promise((resolve) => {
      setTimeout(() => {
        const newFeedback: Feedback = {
          id: Date.now().toString(),
          userId,
          rating,
          comment,
          createdAt: new Date(),
          updatedAt: new Date(),
        };
        resolve(newFeedback);
      }, 1000);
    });
  },

  async updateFeedback(feedbackId: string, rating: number, comment: string): Promise<Feedback> {
    // Mock: simula atualização de feedback
    return new Promise((resolve) => {
      setTimeout(() => {
        const updatedFeedback: Feedback = {
          id: feedbackId,
          userId: '1',
          rating,
          comment,
          createdAt: new Date(Date.now() - 86400000),
          updatedAt: new Date(),
        };
        resolve(updatedFeedback);
      }, 1000);
    });
  },

  async deleteFeedback(feedbackId: string): Promise<void> {
    // Mock: simula exclusão de feedback
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, 500);
    });
  },
}; 