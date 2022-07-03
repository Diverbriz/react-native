import { initializeApp,} from "firebase/app";
import {getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged, signOut} from 'firebase/auth'
const firebaseConfig = {

  apiKey: "AIzaSyDkifNvRB8zr_87JerC4RLgpTr3ylrKYV8",

  authDomain: "library-375e9.firebaseapp.com",

  projectId: "library-375e9",

  storageBucket: "library-375e9.appspot.com",

  messagingSenderId: "614267124546",

  appId: "1:614267124546:web:aa2dc995bcfbd10d7466db"

};

const app = initializeApp(firebaseConfig);
const auth = getAuth()

export {auth};


export const login = (email, password) => {  
    const userCredentials = signInWithEmailAndPassword(auth, email, password).then(
        console.log(auth)
    ).catch(error => {
        console.log(error)
    })
}


export const register = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
    .then((re) => {
      console.log(re.user)
    })
    .catch((re) => {
      console.log(re)
    })
  }

export const logout = () =>{
    signOut(auth)
    console.log(auth)
}
  