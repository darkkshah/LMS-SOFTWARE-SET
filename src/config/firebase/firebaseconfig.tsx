
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA2UUGqYxM7V1zFj46sGyS3k34bf5WcEyY",
  authDomain: "todoapp-0011.firebaseapp.com",
  projectId: "todoapp-0011",
  storageBucket: "todoapp-0011.appspot.com",
  messagingSenderId: "476824306251",
  appId: "1:476824306251:web:77d465e0f53dd6758f03ce",
  measurementId: "G-G1K0BTLM0V"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);