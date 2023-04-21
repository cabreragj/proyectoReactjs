import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAUJC2FWvUGfHjxei0G3RQjcvT6zRCRjjQ",
  authDomain: "proyectoreact1.firebaseapp.com",
  projectId: "proyectoreact1",
  storageBucket: "proyectoreact1.appspot.com",
  messagingSenderId: "958064053135",
  appId: "1:958064053135:web:49984e06d1fb81fe2499fa"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)