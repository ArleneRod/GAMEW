import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
import { getDatabase, ref, push, serverTimestamp, onValue } from 'firebase/database';
import { getStorage } from 'firebase/storage'; // Nueva importación
import { useAuthState } from 'react-firebase-hooks/auth';
import { useEffect, useState } from 'react';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "gamew-7f28b.firebaseapp.com",
  projectId: "gamew-7f28b",
  storageBucket: "gamew-7f28b.firebasestorage.app",
  messagingSenderId: "562126289942",
  appId: "1:562126289942:web:6361f481f7c218059cc937",
  databaseURL: "https://gamew-7f28b-default-rtdb.europe-west1.firebasedatabase.app"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app);
const storage = getStorage(app); // Nueva inicialización

export const useUserState = () => useAuthState(auth);

export const signInWithGoogle = async () => {
  const provider = new GoogleAuthProvider();
  try {
    const result = await signInWithPopup(auth, provider);
    return result.user;
  } catch (error) {
    console.error("Error al iniciar sesión con Google:", error);
    throw error;
  }
};

export const signOutUser = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    console.error("Error al cerrar sesión:", error);
    throw error;
  }
};

export const sendMessage = async (gameId, text, user) => {
  const messagesRef = ref(database, `messages/${gameId}`);
  await push(messagesRef, {
    text,
    author: user.email,
    authorName: user.displayName || user.email,
    timestamp: serverTimestamp(),
    avatar: user.photoURL || '/api/placeholder/40/40'
  });
};

export const useMessages = (gameId) => {
  const [messages, setMessages] = useState([]);
  
  useEffect(() => {
    const messagesRef = ref(database, `messages/${gameId}`);
    const unsubscribe = onValue(messagesRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const messageList = Object.entries(data).map(([id, message]) => ({
          id,
          ...message
        }));
        setMessages(messageList.sort((a, b) => a.timestamp - b.timestamp));
      } else {
        setMessages([]);
      }
    });
    return () => unsubscribe();
  }, [gameId]);
  
  return messages;
};

export { auth, database, storage }; // Agregamos storage a las exportaciones