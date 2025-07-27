import { useState, useCallback } from 'react';
import { validateRating, validateComment } from '@/shared/utils/validation';

export function useFeedbackForm() {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');
  const [ratingError, setRatingError] = useState<string | null>(null);
  const [commentError, setCommentError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const validateForm = useCallback(() => {
    const ratingValidation = validateRating(rating);
    const commentValidation = validateComment(comment);
    
    setRatingError(ratingValidation);
    setCommentError(commentValidation);
    
    return !ratingValidation && !commentValidation;
  }, [rating, comment]);

  const resetForm = useCallback(() => {
    setRating(0);
    setComment('');
    setRatingError(null);
    setCommentError(null);
  }, []);

  const handleSubmit = useCallback(async (onSubmit: (rating: number, comment: string) => Promise<void>) => {
    if (!validateForm()) {
      return false;
    }

    setLoading(true);
    try {
      await onSubmit(rating, comment);
      resetForm();
      return true;
    } catch (error) {
      return false;
    } finally {
      setLoading(false);
    }
  }, [rating, comment, validateForm, resetForm]);

  return {
    rating,
    setRating,
    comment,
    setComment,
    ratingError,
    commentError,
    loading,
    validateForm,
    resetForm,
    handleSubmit,
  };
} 