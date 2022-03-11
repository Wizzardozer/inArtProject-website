import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDGfrd11GlG13nCpdvYZ5j1CqCzO7mJ3vU",
  authDomain: "inart-project.firebaseapp.com",
  projectId: "inart-project",
  storageBucket: "inart-project.appspot.com",
  messagingSenderId: "123429025339",
  appId: "1:123429025339:web:8da040ef375292e2ef4e1e",
  measurementId: "G-QQNBPPD92E",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
