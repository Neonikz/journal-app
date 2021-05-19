import firebase from 'firebase/app'; 
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDt4Q_mll4WEUp3zdHVjzxUZQPd4BC9vzw",
    authDomain: "journal-app-46b85.firebaseapp.com",
    projectId: "journal-app-46b85",
    storageBucket: "journal-app-46b85.appspot.com",
    messagingSenderId: "1036633891797",
    appId: "1:1036633891797:web:77049760e8f0c26d12535c"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {
    db,
    googleAuthProvider,
    firebase
}