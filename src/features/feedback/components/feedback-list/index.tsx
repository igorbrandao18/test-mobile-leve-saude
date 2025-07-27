import React from 'react';
import { View, FlatList, Text } from 'react-native';
import { styles } from './styles';
import { Feedback } from '@/features/feedback/types/feedback.types';
import FeedbackItem from './FeedbackItem';

const mockFeedbacks: Feedback[] = [
  { id: '1', userId: '1', rating: 5, comment: 'Ótimo app!', createdAt: new Date(), updatedAt: new Date() },
  { id: '2', userId: '1', rating: 4, comment: 'Muito bom, mas pode melhorar.', createdAt: new Date(), updatedAt: new Date() },
];

const FeedbackList = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={mockFeedbacks}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <FeedbackItem feedback={item} />}
        ListEmptyComponent={<Text style={styles.empty}>Nenhum feedback enviado ainda.</Text>}
      />
    </View>
  );
};

export default FeedbackList; 