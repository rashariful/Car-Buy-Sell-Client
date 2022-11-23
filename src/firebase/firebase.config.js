// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD6AMc8plzzk0uYzI5ntjHklKsVm2La9Wg",
    authDomain: "used-car-museum.firebaseapp.com",
    projectId: "used-car-museum",
    storageBucket: "used-car-museum.appspot.com",
    messagingSenderId: "537516453312",
    appId: "1:537516453312:web:d87eb52628448e6a5e6c25",
    measurementId: "G-Q66CEZRT6E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app