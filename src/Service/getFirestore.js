import firebase from "firebase";
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDs-0syHUhfnWveJU6mzlhGoxmp8-Ah-2o",
    authDomain: "challengeapp-691e3.firebaseapp.com",
    projectId: "challengeapp-691e3",
    storageBucket: "challengeapp-691e3.appspot.com",
    messagingSenderId: "920397794892",
    appId: "1:920397794892:web:465810294a84432d95aee9"
  };

  const app = firebase.initializeApp(firebaseConfig);

  export function getFirestore() {
      return firebase.firestore(app)
  }