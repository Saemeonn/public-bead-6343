import React, {useState,useEffect} from 'react'
// import Login from '../Components/Login'
// import { Dashboard } from '../Components/Dashboard';
import { createContext } from 'react';

export const AuthContext = createContext();

function ThemeProvider({children}) {
  const [isAuth,setIsAuth] = useState(true);
  const [theme,setTheme] = useState("light");
  const [loading,setLoad] = useState(false);
  const [error,setErr] = useState(false);
  const [userN,setUserN] = useState("");
  const [token,setToken] = useState("");
  const [elem,setElem] = useState("dash")
 
  useEffect(()=>{
 console.log(token);
 console.log(loading);
 console.log(isAuth);
  },[token,isAuth,loading,error,elem])
  const authenticate = () =>{
    setIsAuth(!isAuth)
  }
  const changeErr = () =>{
    setErr(!error)
  }
  const changeLoad = () =>{
    setLoad(!loading)
  }

 

  return (
   <AuthContext.Provider value={{isAuth, authenticate, changeErr,changeLoad,setToken,setUserN,setElem,elem, loading, error, token,theme ,setTheme}} >{children}</AuthContext.Provider>
  )
}
export default ThemeProvider;