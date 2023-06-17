import { async } from "q";
import { useEffect, useState } from "react"
import { useParams } from "react-router"

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
    useEffect(()=>{
                fetcher()
    },[])
    return(
        <div>
            <h1>{data.title}</h1>
        </div>
    )
}