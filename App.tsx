import React, { useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import AppNavigator from '@/navigation/AppNavigator';
import { testFirebaseConnection, testUserRegistration } from '@/shared/services/firebaseTest';

export default function App() {
  useEffect(() => {
    // Testar conexão com Firebase ao iniciar o app
    const testConnection = async () => {
      console.log('🚀 Iniciando testes do Firebase...');
      
      // 1. Teste de conexão básica
      console.log('🔍 Teste 1: Conexão básica com Firebase');
      const connectionResult = await testFirebaseConnection();
      if (connectionResult.success) {
        console.log('✅ Conexão básica OK');
        
        // 2. Teste de registro de usuário
        console.log('🔍 Teste 2: Registro de usuário');
        const registrationResult = await testUserRegistration();
        if (registrationResult.success) {
          console.log('✅ Registro de usuário OK');
          console.log('📧 Email do usuário de teste:', registrationResult.email);
        } else {
          console.error('❌ Erro no registro:', registrationResult.error);
          console.error('❌ Código do erro:', registrationResult.code);
        }
      } else {
        console.error('❌ Erro na conexão básica:', connectionResult.error);
      }
    };

    testConnection();
  }, []);

  return (
    <>
      <StatusBar style="auto" />
      <AppNavigator />
    </>
  );
}
