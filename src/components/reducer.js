import { initialState } from "./initialState";
const reducer = (state, action) => {
	switch (action.type) {
		case "GET_HOUSE_DETAILS_REQUEST": {
			return {
				data: [],
				isLoading: true,
				isError: false
			}
		}
		case "GET_HOUSE_DETAILS_SUCCESS": {
			return {
				data: action.payload,
				isLoading: false,
				isError: false
			}
		}
		case "GET_HOUSE_DETAILS_FAILURE": {
			return {
				data: [],
				isLoading: false,
				isError: true
			}
		}
		default :{
			return {...initialState}
		}


	}
};

export { reducer };
