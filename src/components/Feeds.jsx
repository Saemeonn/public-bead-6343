import React from "react";
import axios from "axios";
import {
	useEffect, useReducer,
	useState
} from "react";
import { initialState } from "./initialState";
import { reducer } from "./reducer";

import App from "../App.css";
import dash from "./dash.css"
import { CiHeart } from "react-icons/ci";
import { Icon } from '@chakra-ui/react'
import { ViewIcon } from "@chakra-ui/icons";

export default function Dashboard() {

	const [state, dispatch] = useReducer(reducer, initialState);
	// const [search,setSearch] = useState(null)
	// const [sort,setSort] = useState(null)
	// const [data,setData] = useState([])


	const fetcher = () => {
		dispatch({ type: "GET_HOUSE_DETAILS_REQUEST" })
		axios.get(`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/posts`, {
			//   params:{
			// 	q: search,
			// 	_order: sort,
			// 	_sort: sort? "rent" : null
			//   }
		}).then((res) => {
			let resdata = res.data
			console.log(resdata);
			dispatch({ type: "GET_HOUSE_DETAILS_SUCCESS", payload: res.data })
		}).catch(() => {
			dispatch({ type: "GET_HOUSE_DETAILS_FAILURE" })
		})
	}

	const { loading, data } = state

	console.log(data);

	useEffect(() => {
		fetcher()
	}, [])

	return (
		<div className="Dash">
			<div className="feeds">
				{data.map((f) => {
					console.log((f.likes).toString().split("").slice(0,2).join(""));
					return (
						<div key={f.id} >
							<img src={f.image} alt="" />
							<div className="postDetail">
								<div>
									<h3>{f.title}</h3>
									<h5>@{f.username}</h5>
								</div>
								<div className="interct">
									<Icon  as={CiHeart} boxSize={6} />
									<p>{
										f.likes>9999? `${(f.likes).toString().split("").slice(0,2).join("")}k` : 
									f.likes>999? `${(f.likes).toString().split("").slice(0,1).join("")}k` : 
									f.likes }
									</p>
									<ViewIcon boxSize={6} />
									<p>{
										f.views>9999? `${(f.views).toString().split("").slice(0,2).join("")}k` : 
									f.views>999? `${(f.views).toString().split("").slice(0,1).join("")}k` : 
									f.views }</p>
								</div>
							</div>
						</div>
					)
				})}
			</div>
		</div>
	)
}