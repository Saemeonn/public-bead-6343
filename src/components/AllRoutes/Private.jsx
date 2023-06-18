import { useContext } from "react";
import {  useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { AuthContext } from "../Provider/ThemeProvider";

function PrivateRoute({children}) {
const {isAuth} = useContext(AuthContext)

    const navigater = useNavigate()
    
    const checker = () =>{
        if(!isAuth){
            console.log("navigating");
            return navigater('/') 
        }
    }
    useEffect(()=>{
       checker() 
    },[isAuth])

    return children

}

export default PrivateRoute;