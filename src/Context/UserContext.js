import React, { createContext, useEffect, useState } from "react";

import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  getAuth,
  signInWithPopup,
  signOut,
  sendPasswordResetEmail,
  onAuthStateChanged,
  GithubAuthProvider,
  updateProfile,
} from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext = createContext();
const auth = getAuth(app);
const GoogleProvider = new GoogleAuthProvider();
const GithubProvider = new GithubAuthProvider();

const UserContext = ({ children }) => {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // 01 This function for register user
  const registerUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const updateUserInfo = (profile) => {
    updateProfile(auth.currentUser, profile);
  };

  // 02 This is for register with google account
  const registerUserWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, GoogleProvider);
  };

  // 03 This is for login user
  const signInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // 04 this is for sign in with google
  const signInUserWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, GoogleProvider);
  };

  // 05 this is for log out
  const logoutUser = () => {
    setLoading(true);
    return signOut(auth);
  };

  // 06 Reset password
  const resetPassword = (email) => {
    setLoading(true);
    return sendPasswordResetEmail(auth, email);
  };

  // 07 create user with github
  const registerUserWithGithub = () => {
    setLoading(true);
    return signInWithPopup(auth, GithubProvider);
  };

  // 08 this is for sign in with google
  const signInUserWithGithub = () => {
    setLoading(true);
    return signInWithPopup(auth, GithubProvider);
  };

  // 08 use effect
  useEffect(() => {
    const unsubcribe = onAuthStateChanged(auth, (currentUser) => {
      currentUser ? setUser(currentUser) : setUser(null);

      setError("");
      setLoading(false);
    });
    return () => unsubcribe();
  }, []);

  const authInfo = {
    user,
    setUser,
    loading,
    error,
    setError,
    registerUser,
    updateUserInfo,
    registerUserWithGoogle,
    signInUser,
    signInUserWithGoogle,
    registerUserWithGithub,
    signInUserWithGithub,
    logoutUser,
    resetPassword,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default UserContext;
