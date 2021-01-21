import app from "firebase/app";
import "firebase/firestore";
import "firebase/storage";
require('dotenv').config();


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//     apiKey: process.env.API_KEY,
//     authDomain: process.env.AUTH_DOMAIN,
//     projectId: process.env.PROJECT_ID,
//     storageBucket: process.env.STORAGE_BUCKET,
//     messagingSenderId: process.env.MESSAGING_SENDER_ID,
//     appId: process.env.API_ID,
//     measurementId: process.env.MEASUREMENT_ID
// };

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAVLj20uclIFV4_NgVVbuVuyuCqTI_Ulgg",
    authDomain: "giselle-portfolio.firebaseapp.com",
    projectId: "giselle-portfolio",
    storageBucket: "giselle-portfolio.appspot.com",
    messagingSenderId: "629917356891",
    appId: "1:629917356891:web:48daabe0547c6926f9c07e",
    measurementId: "G-MWQPFJTRY9"
};

app.initializeApp(firebaseConfig);
const db = app.firestore();
const storage = app.storage();


export { db, storage }; 