import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth, createUserWithEmailAndPassword,updateCurrentUser,signInWithEmailAndPassword} from "firebase/auth"



const firebaseConfig = {
  apiKey: "AIzaSyBctmK5_GderviJXRojslnagIz6Hkc_O54",

  authDomain: "kodluyoruz-music-app.firebaseapp.com",

  projectId: "kodluyoruz-music-app",

  storageBucket: "kodluyoruz-music-app.appspot.com",

  messagingSenderId: "473734687483",

  appId: "1:473734687483:web:039a013e1e6e4805261e5e",

  measurementId: "G-EC3RPNN9ET",
};

const app = initializeApp(firebaseConfig);
getAnalytics(app);
export const auth =  getAuth(app)

// Hesap oluşturma
export const signUp = async (name, email, password) => {
   await createUserWithEmailAndPassword(auth, email,password)
   await updateCurrentUser(auth,{displayName : name})
}

export const signIn = async (email, password) => {
  await signInWithEmailAndPassword(auth, email, password)
}
