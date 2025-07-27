import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { colors, spacing, typography } from '@/styles';
import FeedbackList from './index';
import { useAuth } from '@/features/auth/hooks/useAuth';

const HomeScreen = () => {
  const { user, logout } = useAuth();
  const [showFeedbackForm, setShowFeedbackForm] = useState(false);

  const handleLogout = () => {
    Alert.alert(
      'Sair',
      'Tem certeza que deseja sair?',
      [
        { text: 'Cancelar', style: 'cancel' },
        { text: 'Sair', onPress: logout, style: 'destructive' },
      ]
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Meus Feedbacks</Text>
        <TouchableOpacity onPress={handleLogout} style={styles.logoutButton}>
          <Text style={styles.logoutText}>Sair</Text>
        </TouchableOpacity>
      </View>
      
      <FeedbackList />
      
      <TouchableOpacity 
        style={styles.fab}
        onPress={() => setShowFeedbackForm(true)}
      >
        <Text style={styles.fabText}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: spacing.lg,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  title: {
    ...typography.h2,
    color: colors.text,
  },
  logoutButton: {
    padding: spacing.sm,
  },
  logoutText: {
    ...typography.body,
    color: colors.primary,
    fontWeight: '600',
  },
  fab: {
    position: 'absolute',
    bottom: spacing.lg,
    right: spacing.lg,
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 4,
    shadowColor: colors.text,
    shadowOpacity: 0.25,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
  },
  fabText: {
    fontSize: 24,
    color: colors.background,
    fontWeight: 'bold',
  },
});

export default HomeScreen; 