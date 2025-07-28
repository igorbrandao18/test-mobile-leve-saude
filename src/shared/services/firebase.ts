import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Configuração do Firebase - Leve Saúde App
// Projeto: leve-saude-app-631d4 (App Web configurado)
const firebaseConfig = {
  apiKey: "AIzaSyCW-d5CPWgJBJrGammo5DKwRlty85s1gOE",
  authDomain: "leve-saude-app-631d4.firebaseapp.com",
  projectId: "leve-saude-app-631d4",
  storageBucket: "leve-saude-app-631d4.firebasestorage.app",
  messagingSenderId: "138076429918",
  appId: "1:138076429918:web:8670861685558316a2decf",
  measurementId: "G-SHDPE50996"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);

export default app; 