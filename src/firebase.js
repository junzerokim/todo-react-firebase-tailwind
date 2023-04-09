// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyB7THjZ03qmCSvj4DOVdMdMSUGPd8UcKaw',
  authDomain: 'todo-app-cos.firebaseapp.com',
  projectId: 'todo-app-cos',
  storageBucket: 'todo-app-cos.appspot.com',
  messagingSenderId: '752522653735',
  appId: '1:752522653735:web:9ad85a437e8d70ee249e02',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
