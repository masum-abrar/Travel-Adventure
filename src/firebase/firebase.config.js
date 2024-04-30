// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC09M-Vc-egLsCoJngBDKxCkrEE2CsnfPo",
  authDomain: "travel-adventure-4404b.firebaseapp.com",
  projectId: "travel-adventure-4404b",
  storageBucket: "travel-adventure-4404b.appspot.com",
  messagingSenderId: "1040800193018",
  appId: "1:1040800193018:web:d31dbb351d6da6c69fac43"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;