import { writable } from 'svelte/store'
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut
} from 'firebase/auth'
import { setDoc, doc } from 'firebase/firestore'
import { auth, db } from '../firebase'


export const user = writable({})
auth.onAuthStateChanged(res => user.set(res))

export const signUp = (email, password) => {
  createUserWithEmailAndPassword(auth, email, password).then(() => {
    const data = { savedShows: [] }
    setDoc(doc(db, 'user', email), data)
  })
}
export const logIn = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password)
}
export const logOut = () => {
  return signOut(auth)
}
