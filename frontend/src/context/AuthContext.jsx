
import { current } from '@reduxjs/toolkit'
import React, { createContext, useContext, useEffect, useState } from 'react'
import { auth } from '../firebase/firebase.config'
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth'

const AuthContext=createContext()
export const useAuth=()=>{
    return useContext(AuthContext)
}

//authprovider
const googleProvider = new GoogleAuthProvider();
export const AuthProvide=({children})=>{
   
    const [currentUser,setCurrentUser]=useState(null);
    const [Loading,setLoading]=useState(true)

    //register a user
    const registerUser=async(email,password)=>{
        return await createUserWithEmailAndPassword(auth, email, password)
    }

    //login the user
    const loginUser=async(email,password)=>{
        return await signInWithEmailAndPassword(auth, email, password)
    }
   //sign with google
   const signInWithGoogle=async(email,password)=>{
        return signInWithPopup(auth, googleProvider)
   }
//    signout the user
const logout=()=>{
    return signOut(auth)
}
//manage user
useEffect(()=>{
 const unsubsribe=onAuthStateChanged(auth,(user)=>{
    setCurrentUser(user)
    setLoading(false)
    if(user){
        const {email,displayName,photoURL}=user
        const userData={
            email,username:displayName,photo:photoURL
        }
    }
 })
 return ()=>unsubsribe()
},[])

    const value={
      currentUser,
      registerUser,
      loginUser,
      signInWithGoogle,
      logout
    }
    return(
        <>
         <AuthContext.Provider value={value}>
              {children}
         </AuthContext.Provider>
        </>
       

    )
} 