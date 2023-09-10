import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
  databaseURL: process.env.NEXT_PUBLIC_DATABASE_URL,
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_MESAUREMENT_ID
};

const firebaseApp = initializeApp(firebaseConfig);
export const database = getDatabase(firebaseApp);

// firebase auth
// https://firebase.google.com/docs/auth/web/start
export const FirebaseAuth = getAuth(firebaseApp);

export const Authentication = () => {
  return FirebaseAuth;
};

export default firebaseApp;
