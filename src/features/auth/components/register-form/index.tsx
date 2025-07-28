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

const RegisterForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const { register, loading, error } = useAuth();
  const navigation = useNavigation();

  const handleRegister = () => {
    if (!name || !email || !password || !confirmPassword) {
      Alert.alert('Atenção', 'Por favor, preencha todos os campos');
      return;
    }
    
    if (password !== confirmPassword) {
      Alert.alert('Erro', 'As senhas não coincidem');
      return;
    }
    
    register(name, email, password);
  };

  const handleLogin = () => {
    navigation.navigate('Login' as never);
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
                Preencha os dados para se cadastrar
              </Text>
            </View>

            {/* Formulário */}
            <View style={styles.formContainer}>
              <Input
                label="Nome"
                value={name}
                onChangeText={setName}
                placeholder="Digite seu nome"
                style={styles.input}
              />
              
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
              
              <Input
                label="Confirmar Senha"
                value={confirmPassword}
                onChangeText={setConfirmPassword}
                secureTextEntry
                placeholder="Confirme sua senha"
                style={styles.input}
              />

              {/* Botão de registro */}
              <TouchableOpacity
                style={[
                  styles.registerButton,
                  (!name || !email || !password || !confirmPassword) && styles.registerButtonDisabled
                ]}
                onPress={handleRegister}
                disabled={loading || !name || !email || !password || !confirmPassword}
              >
                <Text style={styles.registerButtonText}>
                  {loading ? 'Cadastrando...' : 'Cadastrar'}
                </Text>
              </TouchableOpacity>

              {/* Link para login */}
              <View style={styles.loginContainer}>
                <Text style={styles.loginText}>Já possui uma conta? </Text>
                <TouchableOpacity onPress={handleLogin}>
                  <Text style={styles.loginLink}>Fazer Login</Text>
                </TouchableOpacity>
              </View>

              {/* Mensagem de erro */}
              {error && (
                <View style={styles.errorContainer}>
                  <Text style={styles.errorText}>{error}</Text>
                </View>
              )}
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

export default RegisterForm; 