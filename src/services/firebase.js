import firebase from 'firebase/app'
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';

let firebaseConfig = {
    apiKey: "AIzaSyCJPx98i0KxuA134owIZuJDdV5VF6Xu_s4",
    authDomain: "applanchonetereactnative.firebaseapp.com",
    databaseURL: "https://applanchonetereactnative-default-rtdb.firebaseio.com",
    projectId: "applanchonetereactnative",
    storageBucket: "applanchonetereactnative.appspot.com",
    messagingSenderId: "822065040224",
    appId: "1:822065040224:web:6f65c6b9ec318752372c05",
    measurementId: "G-TWFCF6Q6N5"
  };

  if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
}

export default firebase;