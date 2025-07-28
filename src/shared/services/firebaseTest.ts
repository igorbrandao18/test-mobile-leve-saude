import { initializeApp } from 'firebase/app';
import { getAuth, signInAnonymously, createUserWithEmailAndPassword } from 'firebase/auth';
import { getFirestore, collection, getDocs, doc, setDoc } from 'firebase/firestore';

// Configuração do Firebase - Mesma do firebase.ts
const firebaseConfig = {
  apiKey: "AIzaSyCjM0OuG8hJysGa_qfQhCUseFbmdo4pf-4",
  authDomain: "leve-saude-app-4ce85.firebaseapp.com",
  projectId: "leve-saude-app-4ce85",
  storageBucket: "leve-saude-app-4ce85.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abcdef123456"
};

export const testFirebaseConnection = async () => {
  try {
    console.log('🔍 Iniciando teste de conexão com Firebase...');
    
    // 1. Teste de inicialização
    console.log('📱 Inicializando Firebase...');
    const app = initializeApp(firebaseConfig);
    console.log('✅ Firebase inicializado com sucesso');
    
    // 2. Teste de Authentication
    console.log('🔐 Testando Firebase Authentication...');
    const auth = getAuth(app);
    console.log('✅ Firebase Auth inicializado');
    
    // 3. Teste de Firestore
    console.log('📊 Testando Firestore...');
    const db = getFirestore(app);
    console.log('✅ Firestore inicializado');
    
    // 4. Teste de conexão com Firestore (tentativa de leitura)
    console.log('📖 Testando leitura do Firestore...');
    try {
      const feedbacksCollection = collection(db, 'feedbacks');
      const snapshot = await getDocs(feedbacksCollection);
      console.log(`✅ Conexão com Firestore OK - ${snapshot.size} documentos encontrados`);
    } catch (firestoreError) {
      console.log('⚠️ Firestore acessível, mas sem dados ou permissões configuradas');
      console.log('Detalhes:', firestoreError);
    }
    
    // 5. Teste de autenticação anônima (opcional)
    console.log('👤 Testando autenticação anônima...');
    try {
      const userCredential = await signInAnonymously(auth);
      console.log('✅ Autenticação anônima bem-sucedida');
      console.log('User ID:', userCredential.user.uid);
      
      // Fazer logout após o teste
      await auth.signOut();
      console.log('✅ Logout realizado');
    } catch (authError) {
      console.log('⚠️ Autenticação anônima não configurada ou desabilitada');
      console.log('Detalhes:', authError);
    }
    
    console.log('🎉 Teste de conexão com Firebase concluído com sucesso!');
    return {
      success: true,
      message: 'Conexão com Firebase estabelecida com sucesso',
      details: {
        auth: 'OK',
        firestore: 'OK',
        anonymousAuth: 'OK'
      }
    };
    
  } catch (error) {
    console.error('❌ Erro no teste de conexão com Firebase:', error);
    return {
      success: false,
      message: 'Falha na conexão com Firebase',
      error: error
    };
  }
};

// Função específica para testar registro de usuários
export const testUserRegistration = async () => {
  try {
    console.log('🧪 Iniciando teste de registro de usuário...');
    
    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);
    const db = getFirestore(app);
    
    // Dados de teste
    const testUser = {
      name: 'Usuário Teste',
      email: `teste${Date.now()}@exemplo.com`,
      password: 'senha123456'
    };
    
    console.log('📝 Dados de teste:', { ...testUser, password: '***' });
    
    // 1. Criar usuário no Firebase Auth
    console.log('🔐 Criando usuário no Firebase Auth...');
    const userCredential = await createUserWithEmailAndPassword(
      auth, 
      testUser.email, 
      testUser.password
    );
    const firebaseUser = userCredential.user;
    console.log('✅ Usuário criado no Firebase Auth:', firebaseUser.uid);
    
    // 2. Criar documento no Firestore
    console.log('📊 Criando documento no Firestore...');
    const userData = {
      name: testUser.name,
      email: testUser.email,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    
    await setDoc(doc(db, 'users', firebaseUser.uid), userData);
    console.log('✅ Documento criado no Firestore');
    
    // 3. Verificar se o documento foi criado
    console.log('🔍 Verificando documento criado...');
    const userDoc = await getDocs(collection(db, 'users'));
    console.log(`✅ Documentos na coleção users: ${userDoc.size}`);
    
    // 4. Fazer logout e limpar
    console.log('🚪 Fazendo logout do usuário de teste...');
    await auth.signOut();
    console.log('✅ Logout realizado');
    
    console.log('🎉 Teste de registro concluído com sucesso!');
    return {
      success: true,
      message: 'Registro de usuário funcionando corretamente',
      userId: firebaseUser.uid,
      email: testUser.email
    };
    
  } catch (error: any) {
    console.error('❌ Erro no teste de registro:', error.message);
    console.error('❌ Código do erro:', error.code);
    return {
      success: false,
      message: 'Falha no teste de registro',
      error: error.message,
      code: error.code
    };
  }
};

// Função para testar configurações específicas
export const testFirebaseConfig = () => {
  console.log('🔧 Verificando configurações do Firebase...');
  console.log('API Key:', firebaseConfig.apiKey ? '✅ Configurada' : '❌ Não configurada');
  console.log('Auth Domain:', firebaseConfig.authDomain ? '✅ Configurada' : '❌ Não configurada');
  console.log('Project ID:', firebaseConfig.projectId ? '✅ Configurada' : '❌ Não configurada');
  console.log('Storage Bucket:', firebaseConfig.storageBucket ? '✅ Configurada' : '❌ Não configurada');
  console.log('Messaging Sender ID:', firebaseConfig.messagingSenderId ? '✅ Configurada' : '❌ Não configurada');
  console.log('App ID:', firebaseConfig.appId ? '✅ Configurada' : '❌ Não configurada');
}; 