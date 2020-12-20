import firebase from "firebase/app"
import 'firebase/auth'
const app=firebase.initializeApp({
    apiKey: "AIzaSyCWNbcmmaedCBVbgdJaHYGiD-Rgtgi2Zpg",
    authDomain: "auth-development-436db.firebaseapp.com",
    projectId: "auth-development-436db",
    storageBucket: "auth-development-436db.appspot.com",
    messagingSenderId: "167769269908",
    appId: "1:167769269908:web:e188812ec5681826173681"
   
})

export const auth=app.auth()
export default app