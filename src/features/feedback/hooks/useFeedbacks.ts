import { useState, useCallback, useEffect } from 'react';
import { Feedback } from '@/features/feedback/types/feedback.types';
import { firestoreService } from '@/features/feedback/services/firestoreService';
import { useAuth } from '@/features/auth/hooks/useAuth';

export function useFeedbacks() {
  const [feedbacks, setFeedbacks] = useState<Feedback[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const { user } = useAuth();

  const fetchFeedbacks = useCallback(async () => {
    if (!user) return;
    
    setLoading(true);
    setError(null);
    
    try {
      const feedbacksData = await firestoreService.getFeedbacks(user.id);
      setFeedbacks(feedbacksData);
    } catch (error: any) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }, [user]);

  useEffect(() => {
    if (user) {
      fetchFeedbacks();
    }
  }, [user, fetchFeedbacks]);

  const refreshFeedbacks = useCallback(async () => {
    if (!user) return;
    
    setIsRefreshing(true);
    try {
      const feedbacksData = await firestoreService.getFeedbacks(user.id);
      setFeedbacks(feedbacksData);
    } catch (error: any) {
      setError(error.message);
    } finally {
      setIsRefreshing(false);
    }
  }, [user]);

  const addFeedback = useCallback(async (rating: number, comment: string) => {
    if (!user) return;
    
    try {
      const newFeedback = await firestoreService.createFeedback(user.id, rating, comment);
      setFeedbacks(prev => [newFeedback, ...prev]);
    } catch (error: any) {
      setError(error.message);
      throw error;
    }
  }, [user]);

  const updateFeedback = useCallback(async (feedbackId: string, rating: number, comment: string) => {
    try {
      const updatedFeedback = await firestoreService.updateFeedback(feedbackId, rating, comment);
      setFeedbacks(prev => 
        prev.map(feedback => 
          feedback.id === feedbackId ? updatedFeedback : feedback
        )
      );
    } catch (error: any) {
      setError(error.message);
      throw error;
    }
  }, []);

  const deleteFeedback = useCallback(async (feedbackId: string) => {
    try {
      await firestoreService.deleteFeedback(feedbackId);
      setFeedbacks(prev => prev.filter(feedback => feedback.id !== feedbackId));
    } catch (error: any) {
      setError(error.message);
      throw error;
    }
  }, []);

  return {
    feedbacks,
    loading,
    error,
    isRefreshing,
    fetchFeedbacks,
    refreshFeedbacks,
    addFeedback,
    updateFeedback,
    deleteFeedback,
  };
} 