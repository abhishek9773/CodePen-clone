import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// const firebaseConfig = {
//   apiKey: import.meta.env.VITE_API_KEY,
//   authDomain: import.meta.env.VITE_AUTH_DOMAIN,
//   projectId: import.meta.env.VITE_PROJECT_ID,
//   storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
//   messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
//   appId: import.meta.env.VITE_APP_ID,
// };

const firebaseConfig = {
  apiKey: "AIzaSyAt1PL1UbajtfJ7gdVwsFdRjnTDWFrDVkY",
  authDomain: "codepen-a0975.firebaseapp.com",
  projectId: "codepen-a0975",
  storageBucket: "codepen-a0975.appspot.com",
  messagingSenderId: "319365585844",
  appId: "1:319365585844:web:04889a088d06365c0cb0e1",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
