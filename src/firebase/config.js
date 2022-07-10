import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyD7yujV-67ZBKrkac0ip8Rwv9-SgAXIaPg",
    authDomain: "finance-tracker-project-4b2b8.firebaseapp.com",
    projectId: "finance-tracker-project-4b2b8",
    storageBucket: "finance-tracker-project-4b2b8.appspot.com",
    messagingSenderId: "271873726039",
    appId: "1:271873726039:web:a03b0dc8d75e977585b512"
  };

//init firebase
firebase.initializeApp(firebaseConfig)

//init service
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()

//timestamp 
const timestamp =  firebase.firestore.Timestamp

export {projectFirestore, projectAuth, timestamp}