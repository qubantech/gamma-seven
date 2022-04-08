import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getDatabase } from 'firebase/database';

const app = initializeApp({
    apiKey: "AIzaSyBpca4FGJ6w5SFIReLo4ixEmZCm9mY_hnk",
    authDomain: `${process.env.AUTH_DOMAIN}`,
    projectId: `${process.env.PROJECT_ID}`,
    databaseURL: "https://gamma-seven-default-rtdb.europe-west1.firebasedatabase.app/",
    storageBucket: `${process.env.STORAGE_BUCKET}`,
    messagingSenderId: `${process.env.MESSAGING_SENDER_ID}`,
    appId: `${process.env.APP_ID}`,
    measurementId: `${process.env.MEASUREMENT_ID}`
})

export const auth = getAuth(app)
export const firestore = getFirestore(app)
export const db = getDatabase(app)