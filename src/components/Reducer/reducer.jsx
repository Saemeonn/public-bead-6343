export const initialState = {
	data: [],
	isLoading: false,
	isError: false,
};

export  const reducer = (state, action) => {
	switch (action.type) {
		case "REQUEST": {
			return {
				data: [],
				isLoading: true,
				isError: false
			}
		}
		case "SUCCESS": {
			console.log(action.payload);
			return {
				data: action.payload,
				isLoading: false,
				isError: false
			}
		}
		case "FAILURE": {
			return {
				data: [],
				isLoading: false,
				isError: true
			}
		}


	}
};

