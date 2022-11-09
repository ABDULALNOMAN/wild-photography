import React, { createContext, useEffect, useState } from 'react';
import app from '../Firebase/Firebase';
import {createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth'

export const CallContext = createContext()
const auth = getAuth(app)
const provider = new GoogleAuthProvider()

const Contexting = ({ children }) => {
    const [users , setUsers ] = useState({})
    const createUserData = (email,password) => {
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const loginUserData = (email,password) => {
        return signInWithEmailAndPassword(auth,email,password)
    }
    const GoogleLoginUsers = () => {
        return signInWithPopup(auth ,provider)
    }
    useEffect(() => {
        const unsubcribe = onAuthStateChanged(auth, currentUser => {
            setUsers(currentUser)
        })
        return (() => {
            unsubcribe()
        })
    }, [])
    const logOutUser = () => {
        return signOut(auth)
    }
    const value ={createUserData,users,logOutUser,loginUserData,GoogleLoginUsers}
    return (
        <CallContext.Provider value={value}>
            {children}
        </CallContext.Provider>
    );
};

export default Contexting;