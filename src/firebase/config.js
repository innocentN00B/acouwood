import * as firebase from "firebase";
import "@firebase/auth";
import "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAswMHTTIc-W5KFlEp-GEP_Xk7aSmmhQDM",
  authDomain: "acouwood.firebaseapp.com",
  databaseURL: "https://acouwood-default-rtdb.firebaseio.com",
  projectId: "acouwood",
  storageBucket: "acouwood.appspot.com",
  messagingSenderId: "423453657668",
  appId: "1:423453657668:web:725c091ea320d4d200ca11",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export { firebase };
