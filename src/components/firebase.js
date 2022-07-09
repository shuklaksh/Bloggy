import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore'
import { getAuth } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyDeF9N7AzDf1yvdkwK1YvPAd51o486UDHE",
    authDomain: "linkedin-57c27.firebaseapp.com",
    projectId: "linkedin-57c27",
    storageBucket: "linkedin-57c27.appspot.com",
    messagingSenderId: "231973665622",
    appId: "1:231973665622:web:44f523f7fdb67e79ddb4f7"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = getAuth(firebaseApp);

  export {db, auth};