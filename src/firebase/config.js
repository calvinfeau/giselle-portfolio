import app from "firebase/app";
import "firebase/firestore";
import "firebase/storage";
require('dotenv').config();

const firebaseConfig = {
    apiKey: process.env.API_KEY,
    authDomain: process.env.AUTH_DOMAIN,
    projectId: process.env.PROJECT_ID,
    storageBucket: process.env.STORAGE_BUCKET,
    messagingSenderId: process.env.MESSAGING_SENDER_ID,
    appId: process.env.API_ID,
    measurementId: process.env.MEASUREMENT_ID
};

app.initializeApp(firebaseConfig);
const db = app.firestore();
const storage = app.storage();

export { db, storage }; 