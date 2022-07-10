import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "API KEY",
  authDomain: "authDomain",
  projectId: "projectId",
  storageBucket: "cooking-student-site.appspot.com",
  messagingSenderId: "SenderId",
  appId: "appId",
};

//init firebase
firebase.initializeApp(firebaseConfig);

// init services
const projectFirestore = firebase.firestore();

export { projectFirestore };
