import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCozrx7QvH2-B_iIewf5Hh92xNqLVWvrlw",
  authDomain: "el-projecte-grande.firebaseapp.com",
  databaseURL: "https://el-projecte-grande-default-rtdb.firebaseio.com",
  projectId: "el-projecte-grande",
  storageBucket: "el-projecte-grande.appspot.com",
  messagingSenderId: "792854969648",
  appId: "1:792854969648:web:875333bb5c996185739cf5"
});

const db = firebaseApp.firestore();

export default db;