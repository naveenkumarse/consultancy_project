// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyChD-WrPcSg-r56oCA7Le1StNHzNsrT4no",
  authDomain: "ero-prints-react.firebaseapp.com",
  projectId: "ero-prints-react",
  storageBucket: "ero-prints-react.appspot.com",
  messagingSenderId: "591907571556",
  appId: "1:591907571556:web:79869ac179bbf46b8a9c71"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);