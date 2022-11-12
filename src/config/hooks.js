import { useEffect } from "react";
import { useState } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "./firebase";

export const UseIsLoggedIn = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(null);

  useEffect(() => {
    signOut(auth)
   onAuthStateChanged(auth, (user) => {
    setIsLoggedIn(!!user)
   })
  }, []);

  return isLoggedIn;
};
