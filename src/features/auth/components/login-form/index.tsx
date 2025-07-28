import React, { useState } from 'react';
import { 
  View, 
  TouchableOpacity, 
  Text, 
  Image, 
  KeyboardAvoidingView, 
  Platform,
  ScrollView,
  Dimensions,
  Alert,
  SafeAreaView
} from 'react-native';
import { Input } from '@/shared/components/ui/input';
import { Button } from '@/shared/components/ui/button';
import { styles } from './styles';
import { useAuth } from '@/features/auth/hooks/useAuth';
import { useNavigation } from '@react-navigation/native';
import { colors } from '@/styles';

const { width, height } = Dimensions.get('window');

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login, loading, error } = useAuth();
  const navigation = useNavigation();

  const handleLogin = () => {
    if (!email || !password) {
      Alert.alert('Atenção', 'Por favor, preencha todos os campos');
      return;
    }
    login(email, password);
  };

  const handleRegister = () => {
    navigation.navigate('Register' as never);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView 
        style={styles.keyboardView}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <ScrollView 
          contentContainerStyle={styles.scrollContainer}
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
        >
          {/* Container principal centralizado */}
          <View style={styles.mainContainer}>
            
            {/* Logo e título */}
            <View style={styles.headerContainer}>
              <View style={styles.logoContainer}>
                <Image 
                  source={require('../../../../../assets/logo-leve-saude.png')}
                  style={styles.logoImage}
                  resizeMode="contain"
                />
              </View>
              <Text style={styles.subtitleText}>
                Faça login para acessar sua conta
              </Text>
            </View>

            {/* Formulário */}
            <View style={styles.formContainer}>
              <Input
                label="Email"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
                placeholder="Digite seu email"
                style={styles.input}
              />
              
              <Input
                label="Senha"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
                placeholder="Digite sua senha"
                style={styles.input}
              />

              {/* Botão de login */}
              <TouchableOpacity
                style={[
                  styles.loginButton,
                  (!email || !password) && styles.loginButtonDisabled
                ]}
                onPress={handleLogin}
                disabled={loading || !email || !password}
              >
                <Text style={styles.loginButtonText}>
                  {loading ? 'Entrando...' : 'Entrar'}
                </Text>
              </TouchableOpacity>

              {/* Mensagem de erro */}
              {error && (
                <View style={styles.errorContainer}>
                  <Text style={styles.errorText}>{error}</Text>
                </View>
              )}

              {/* Link para registro */}
              <View style={styles.registerContainer}>
                <Text style={styles.registerText}>Não tem uma conta? </Text>
                <TouchableOpacity onPress={handleRegister}>
                  <Text style={styles.registerLink}>Cadastre-se</Text>
                </TouchableOpacity>
              </View>
            </View>

            {/* Footer */}
            <View style={styles.footerContainer}>
              <Text style={styles.footerText}>
                Cuidando da sua saúde com leveza
              </Text>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default LoginForm; 