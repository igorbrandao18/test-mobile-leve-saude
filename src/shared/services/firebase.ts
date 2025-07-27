import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Configuração do Firebase - Leve Saúde App
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY || "AIzaSyBXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
  authDomain: process.env.FIREBASE_AUTH_DOMAIN || "leve-saude-app-4ce85.firebaseapp.com",
  projectId: process.env.FIREBASE_PROJECT_ID || "leve-saude-app-4ce85",
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET || "leve-saude-app-4ce85.appspot.com",
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID || "123456789",
  appId: process.env.FIREBASE_APP_ID || "1:123456789:web:abcdef123456"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);

export default app; 