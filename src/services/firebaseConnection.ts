import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCLg6B2155490ChnuWmGYG-2WgHZoj66Uk",
  authDomain: "tasks-more.firebaseapp.com",
  projectId: "tasks-more",
  storageBucket: "tasks-more.appspot.com",
  messagingSenderId: "480487848417",
  appId: "1:480487848417:web:6e609fa65e4971ab0ebaa0",
};

const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);

export { db };
