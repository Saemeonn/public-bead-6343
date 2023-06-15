import { useContext } from "react"
import { AuthContext } from "../Provider/ThemeProvider"

export default function Home(){
    const { isAuth, loading, setUserN, authenticate, setElem, elem, theme, setTheme } = useContext(AuthContext)

    return(
        <div style={{backgroundColor:theme==="light"? "white" : "black"}}>
            <h1>HOME</h1>
        </div>
    )
}