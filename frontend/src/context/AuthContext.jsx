
// import { current } from '@reduxjs/toolkit'
// import React, { createContext, useContext, useEffect, useState } from 'react'
// import { auth } from '../firebase/firebase.config'
// import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth'

// const AuthContext=createContext()
// export const useAuth=()=>{
//     return useContext(AuthContext)
// }

// //authprovider
// const googleProvider = new GoogleAuthProvider();
// export const AuthProvide=({children})=>{
   
//     const [currentUser,setCurrentUser]=useState(null);
//     const [Loading,setLoading]=useState(true)

//     //register a user
//     const registerUser=async(email,password)=>{
//         return await createUserWithEmailAndPassword(auth, email, password)
//     }

//     //login the user
//     const loginUser=async(email,password)=>{
//         return await signInWithEmailAndPassword(auth, email, password)
//     }
//    //sign with google
//    const signInWithGoogle=async(email,password)=>{
//         return signInWithPopup(auth, googleProvider)
//    }
// //    signout the user
// const logout=()=>{
//     return signOut(auth)
// }
// //manage user
// useEffect(()=>{
//  const unsubsribe=onAuthStateChanged(auth,(user)=>{
//     setCurrentUser(user)
//     setLoading(false)
//     if(user){
//         const {email,displayName,photoURL}=user
//         const userData={
//             email,username:displayName,photo:photoURL
//         }
//     }
//  })
//  return ()=>unsubsribe()
// },[])

//     const value={
//       currentUser,
//       Loading,
//       registerUser,
//       loginUser,
//       signInWithGoogle,
//       logout
//     }
//     return(
//         <>
//          <AuthContext.Provider value={value}>
//               {children}
//          </AuthContext.Provider>
//         </>
       

//     )
// } 

// export default AuthContext;
import React, { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase.config";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";

const AuthContext = createContext();

// ✅ Correctly define `useAuth`
export const useAuth = () => {
  return useContext(AuthContext);
};

// ✅ Rename `AuthProvide` → `AuthProvider`
export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true); // ✅ Fix naming convention
  const googleProvider = new GoogleAuthProvider();

  // ✅ Register a user
  const registerUser = async (email, password) => {
    return await createUserWithEmailAndPassword(auth, email, password);
  };

  // ✅ Login the user
  const loginUser = async (email, password) => {
    return await signInWithEmailAndPassword(auth, email, password);
  };

  // ✅ Sign in with Google (No need for email/password parameters)
  const signInWithGoogle = async () => {
    return signInWithPopup(auth, googleProvider);
  };

  // ✅ Logout function
  const logout = () => {
    return signOut(auth);
  };

  // ✅ Manage user authentication state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const value = {
    currentUser,
    loading, // ✅ Fix capitalization
    registerUser,
    loginUser,
    signInWithGoogle,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
