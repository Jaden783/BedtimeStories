import * as firebase from 'firebase'
require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyCNuBgjze5sPtqnBHVX9oQdS18vTmtaGf0",
  authDomain: "storyhub-5fb77.firebaseapp.com",
  projectId: "storyhub-5fb77",
  storageBucket: "storyhub-5fb77.appspot.com",
  messagingSenderId: "1093986095653",
  appId: "1:1093986095653:web:68989871842454d8e465cc"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();
  