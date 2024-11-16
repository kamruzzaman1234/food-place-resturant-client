import { createContext, useEffect, useState } from "react";
import { useContext } from "react";
import auth from "../Firebase/Firebase.config";
import {createUserWithEmailAndPassword ,signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";

export const AuthContext =  createContext(null)
const AuthProvider = ({children})=>{
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const createUser = (email, password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email, password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email,password)
    }

    const logOut = ()=>{
        setLoading(true)
        return signOut(auth)
    }


    useEffect(()=>{
       const unsubscribe =  onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser)
            console.log("Your User is", currentUser)
        })
        return()=>{
            return unsubscribe()
        }
    },[])

    const authInfo = {user, loading, createUser, signIn, logOut}
    return(
        <AuthContext.Provider value={authInfo}>
                {children}
        </AuthContext.Provider>
    )
}
export default AuthProvider;