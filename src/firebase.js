import {initializeApp} from "firebase/app";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBrOVhXSGtlZjHdYMG0tVSzMEeFwy5AwX0",
    authDomain: "tinder-clone-354e5.firebaseapp.com",
    projectId: "tinder-clone-354e5",
    storageBucket: "tinder-clone-354e5.appspot.com",
    messagingSenderId: "702748122914",
    appId: "1:702748122914:web:9ade9ba0f2cca837538f7b"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export {db};