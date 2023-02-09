import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyBLxTDzZAfYpDoYmPFoJQw0bqTQTZ9h480",
  authDomain: "swasthminddepression.firebaseapp.com",
  projectId: "swasthminddepression",
  storageBucket: "swasthminddepression.appspot.com",
  messagingSenderId: "1051110780790",
  appId: "1:1051110780790:web:ed9f0afc152e7f21cad457",
  measurementId: "G-N3DGRRV5RM"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebaseApp.auth();

export { db, auth };