import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import { auth } from "../firebase/config";

export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  // states
  const [data, setData] = useState([]);
  const [user, setUser] = useState([]);
  const [id, setId] = useState(null);
  const [loading, setLoading] = useState(true);
  // data loading
  useEffect(() => {
    fetch("../../public/brandsInfo.json")
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);
        setData(data);
      });
  }, []);
  //   creating user
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  // Login user
  const logIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  //sign in with google
  const googleProvider = new GoogleAuthProvider();
  const signInWithGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };
  // Logout
  const logOut = () => {
    signOut(auth)
      .then()
      .catch((error) => {
        // console.log(error.message)
      });
  };
  // Password reset, forgot password
  const forgotPassword = (email) => {
     return sendPasswordResetEmail(auth, email)
  }
  // update user info
  const updateProfileInfo = (updatedInfo) =>{
    return updateProfile(auth.currentUser,updatedInfo);
  }
  // observer
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      unSubscribe();
    };
  }, []);

  // Updating user info
  // const updateProfileInfoAgain = (updatedInfo) => {
  //   return updateProfile(auth.currentUser, updatedInfo);
  // };
  const userInfo = {
    user,
    createUser,
    logIn,
    signInWithGoogle,
    data,
    setUser,
    logOut,
    setId,
    id,
    updateProfileInfo,
    loading,
    forgotPassword,
  };
  return (
    <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
