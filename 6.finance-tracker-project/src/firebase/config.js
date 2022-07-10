import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "API KEY",
    authDomain: "authDomain",
    projectId: "pID",
    storageBucket: "stgBucke",
    messagingSenderId: "mID",
    appId: "appId"
  };

//init firebase
firebase.initializeApp(firebaseConfig)

//init service
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()

//timestamp 
const timestamp =  firebase.firestore.Timestamp

export {projectFirestore, projectAuth, timestamp}
