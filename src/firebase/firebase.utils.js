import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyDo-TSLjM2U4vrz-pIlPJr5hTwKYHEJUIc',
  authDomain: 'clothing-db-54faa.firebaseapp.com',
  databaseURL: 'https://clothing-db-54faa.firebaseio.com',
  projectId: 'clothing-db-54faa',
  storageBucket: 'clothing-db-54faa.appspot.com',
  messagingSenderId: '898920027119',
  appId: '1:898920027119:web:c2cdaeddc25e2d23df5c1a'
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
