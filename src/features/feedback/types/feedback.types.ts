export interface Feedback {
  id: string;
  userId: string;
  rating: number;
  comment: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface FeedbackForm {
  rating: number;
  comment: string;
}

export interface FeedbackFormState {
  rating: FormField;
  comment: FormField;
  isValid: boolean;
}

export interface FeedbackListState {
  feedbacks: Feedback[];
  isLoading: boolean;
  error: string | null;
  isRefreshing: boolean;
}

export interface FormField {
  value: string | number;
  error: string | null;
  isValid: boolean;
}

export interface StarRatingProps {
  rating: number;
  onRatingChange: (rating: number) => void;
  size?: number;
  disabled?: boolean;
} 