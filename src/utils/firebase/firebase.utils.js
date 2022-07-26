// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import {
  getAuth,
  signInWithDirect,
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth'
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyB9_q6D2-8LIRL9BGh6gKF1C7VKLFLWA0o',
  authDomain: 'crown-clothing-db-259c6.firebaseapp.com',
  projectId: 'crown-clothing-db-259c6',
  storageBucket: 'crown-clothing-db-259c6.appspot.com',
  messagingSenderId: '6629263532',
  appId: '1:6629263532:web:289250b047612e183ff709',
}

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig)

const provider = new GoogleAuthProvider()

provider.setCustomParameters({
  prompt: 'select_account',
})

export const auth = getAuth()
export const signInWithGooglePopup = () => signInWithPopup(auth, provider)

export const db = getFirestore()

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, 'users', userAuth.uid)

  const userSnapshot = await getDoc(userDocRef)

  if(!userSnapshot.exists()) { // if user not exist (false)
    const {displayName, email} = userAuth
    const createdAt = new Date()
    
    // set data inside to database
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt
      })
    } catch (error) {
      console.log('error creating the user', error.message);
    }
  }

  return userDocRef
}