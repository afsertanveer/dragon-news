import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import app from '../../firebase/firebase.config';

export const AuthContext = createContext()
const auth = getAuth(app);


const AuthProvider = ({children}) => {
    const[user,setUser] = useState(null);
    const [loading,setLoading] = useState(true);
    
    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth,currentUser=>{
            console.log('user inside state change',currentUser);
            if(currentUser===null || currentUser.emailVerified){
              setUser(currentUser);
            }
            setLoading(false);
        })
        return () =>{
            unSubscribe();
        }
    },[])

  

    const providerLogin = (googleprovider) => {
      setLoading(true);
      return signInWithPopup(auth, googleprovider);
    };
    
    const createUser = (email,password)=>{
      setLoading(true);
      return createUserWithEmailAndPassword(auth,email,password);
    }
      const updateUserProfile = (profile) => {
        console.log("Auth theke, ", profile);
        return updateProfile(auth.currentUser, profile);
      };
    const signIn = (email,password) =>{
      setLoading(true);
      return signInWithEmailAndPassword(auth,email,password);
    }

    const logOut = () =>{
        setLoading(true);
        return signOut(auth);
    }
    const verifyEmail = () =>{
      return sendEmailVerification(auth.currentUser);
    }
    const authInfo = {
      user,
      providerLogin,
      logOut,
      createUser,
      signIn,
      setLoading,
      loading,
      updateUserProfile,
      verifyEmail,
    };
    return (
      <div>
        <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
      </div>
    );
};

export default AuthProvider;