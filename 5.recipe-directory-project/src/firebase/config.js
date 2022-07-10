import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBvEHofWnjGCQnXSLSCyBKZUSuApYJSln4",
  authDomain: "cooking-student-site.firebaseapp.com",
  projectId: "cooking-student-site",
  storageBucket: "cooking-student-site.appspot.com",
  messagingSenderId: "342806905871",
  appId: "1:342806905871:web:728174ee16262165ca4f7a",
};

//init firebase
firebase.initializeApp(firebaseConfig);

// init services
const projectFirestore = firebase.firestore();

export { projectFirestore };
