import { async } from "q";
import { useContext, useEffect, useState } from "react"
import { useParams } from "react-router"
import { AuthContext } from "../Provider/ThemeProvider";

export default function SingleCasestudies(){
    const params = useParams()
    const [data,setData] = useState([]);

    const fetcher = async() => {
        try {
            let res = await fetch(`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/posts/${params.id}`) 
            let data = await res.json()
            setData(data)
            // console.log(data);
        } catch (e) {
            console.log(e);
        }
    }

    const {theme,isAuth} = useContext(AuthContext)
     
    useEffect(()=>{
                fetcher()
    },[isAuth])
    return(
        <div className="singlecase">
            <div className="casehead2" style={{backgroundColor:theme==="light"? "rgb(61, 61, 206)" : 'rgb(33, 33, 63)' }}>
                <img src={data.image} alt="" />
                <div>
                <h1>{data.title}</h1>
                </div>
            </div>
            <div className="caseinfo">
                <div>

                <h2>About the Client</h2>
                <p>{data.about}</p>

                <h2>Business Challenge</h2>
                <p>{data.challenge}</p>


                <h2>Solution</h2>
                <p>{data.solution}</p>

                </div>
            </div>
            <div className="conclusion">
                <h2>Let us help you with your business challenges</h2>
                <p>Contact us to schedule a call or set up a meeting</p>
                <button>Contact us</button>
            </div>
        </div>
    )
}