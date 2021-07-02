import firebase from "firebase";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBdDnQ1s9qgXORPDgll7Wc9KA4-Cdrt7kM",
    authDomain: "ecommerce-react-project-a818f.firebaseapp.com",
    projectId: "ecommerce-react-project-a818f",
    storageBucket: "ecommerce-react-project-a818f.appspot.com",
    messagingSenderId: "74995531850",
    appId: "1:74995531850:web:668a1bb8a7d77127a2a6b3",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Firestore - https://firebase.google.com/docs/reference/js/firebase.firestore.Firestore
export default firebase.firestore();
