import firebase from 'firebase/compat/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyCVz7UjyBXaNZrszr59fHBqFSo9sNoh0gA',
  authDomain: 'twitter-clone-fd1f1.firebaseapp.com',
  projectId: 'twitter-clone-fd1f1',
  storageBucket: 'twitter-clone-fd1f1.appspot.com',
  messagingSenderId: '364924683206',
  appId: '1:364924683206:web:b0ed019b7f43e0e91228c7',
  measurementId: 'G-KPJQBESEP6',
}

export const firebaseApp = firebase.initializeApp(firebaseConfig)


const db = getFirestore(firebaseApp)

export default db
