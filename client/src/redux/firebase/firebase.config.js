import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAXEuULf0U8Watu_EAxPZpsMMa7WbKonOA",
  authDomain: "e-kancelaria-c01c9.firebaseapp.com",
  databaseURL: "https://e-kancelaria-c01c9.firebaseio.com",
  projectId: "e-kancelaria-c01c9",
  storageBucket: "e-kancelaria-c01c9.appspot.com",
  messagingSenderId: "901445285814",
  appId: "1:901445285814:web:6fbbfb201e561b54f0b317"
};

//przechowanie usera w DB
export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();
    if(!snapShot.exists) {
        const {displayName, email} = userAuth;
        const createdAt = new Date();
        
        try {
            await userRef.set({
                displayName, 
                email, 
                createdAt, 
                ...additionalData
            });
        }catch(error) {
            console.log('error creating user', error.message);
        }
    }

    return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

