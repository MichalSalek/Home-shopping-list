import * as firebase from 'firebase/app';
import 'firebase/database';

const firebaseConfig = {
  apiKey: '',
  authDomain: '',
  databaseURL: '',
  projectId: '',
  storageBucket: '',
  messagingSenderId: '',
  appId: '',
};

// Initialize Firebase
const firebaseFn = () => {
  firebase.initializeApp(firebaseConfig);
  return firebase.database();
};

export default firebaseFn;
