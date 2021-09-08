import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCxhm7hrRxUwArFbJ7TKmV6V4tpr31Y--0",
    authDomain: "linkedin-clone-c7c2c.firebaseapp.com",
    projectId: "linkedin-clone-c7c2c",
    storageBucket: "linkedin-clone-c7c2c.appspot.com",
    messagingSenderId: "315216311933",
    appId: "1:315216311933:web:03b07cefea39c8c6b9a314"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();



  export {db, auth};