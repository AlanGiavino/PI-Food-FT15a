import {
	GET_RECIPES,
	GET_RECIPES_BY_NAME,
	GET_RECIPE_BY_ID,
	GET_DIETS,
	SWITCH_LOADING
} from './action';

const initialState = {
	recipes: [],
	recipesByName: [],
	recipeById: {},
	diets: [],
	loading: true,
};

function reducer(state = initialState, action) {
	switch (action.type) {
		case GET_RECIPES: {
			return {
				...state,
				recipes: action.payload,
			};
		}
		case GET_RECIPES_BY_NAME: {
			return {
				...state,
				recipesByName: action.payload,
			};
		}
		case GET_RECIPE_BY_ID: {
			return {
				...state,
				recipeById: action.payload,
			};
		}
		case GET_DIETS: {
			return {
				...state,
				diets: action.payload,
			};
		}
		case SWITCH_LOADING:
            return {
                ...state,
                loading: action.payload
            }
		default: {
			return state;
		}
	}
}

export default reducer;
