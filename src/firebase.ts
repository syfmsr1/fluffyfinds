import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBCvX_x4uYkuGUJSmsgawyF0y7nU9-mrJE",
  authDomain: "fluffyfinds.firebaseapp.com",
  projectId: "fluffyfinds",
  storageBucket: "fluffyfinds.firebasestorage.app",
  messagingSenderId: "828218923618",
  appId: "1:828218923618:web:c6b3781c209d0061934f3b",
  measurementId: "G-RT6WX79R4J"
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
