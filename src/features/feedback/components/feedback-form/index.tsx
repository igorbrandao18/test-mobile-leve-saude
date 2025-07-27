import React, { useState } from 'react';
import { View } from 'react-native';
import { Input } from '@/shared/components/ui/input';
import { Button } from '@/shared/components/ui/button';
import { StarRating } from '@/features/feedback/components/star-rating';
import { styles } from './styles';

const FeedbackForm = ({ onSubmit }: { onSubmit?: (rating: number, comment: string) => void }) => {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSend = () => {
    setLoading(true);
    setError(null);
    // Aqui entraria a lógica de envio
    setTimeout(() => {
      setLoading(false);
      if (onSubmit) onSubmit(rating, comment);
    }, 1000);
  };

  return (
    <View style={styles.container}>
      <StarRating rating={rating} onRatingChange={setRating} />
      <Input
        label="Comentário"
        value={comment}
        onChangeText={setComment}
        placeholder="Digite seu feedback..."
        multiline
      />
      <Button
        title={loading ? 'Enviando...' : 'Enviar Feedback'}
        onPress={handleSend}
        loading={loading}
        disabled={loading || rating === 0 || comment.length < 10}
        style={styles.button}
      />
      {error && <Input helperText={error} error={error} editable={false} />}
    </View>
  );
};

export default FeedbackForm; 