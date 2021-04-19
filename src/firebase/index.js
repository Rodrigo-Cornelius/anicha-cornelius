import firebase from "firebase/app";

import 'firebase/firestore';


const app = firebase.initializeApp({
    apiKey: "AIzaSyDapmL36rD7Uj2f6YBny6-mopflVl9zlmA",
    authDomain: "ecommerce-coder-90264.firebaseapp.com",
    projectId: "ecommerce-coder-90264",
    storageBucket: "ecommerce-coder-90264.appspot.com",
    messagingSenderId: "904476350916",
    appId: "1:904476350916:web:86530260d0fe2b5d682c91"
})

export function getFirebase () {
    return app;
}

export function getFirestore() {
    return firebase.firestore(app) ;
}
