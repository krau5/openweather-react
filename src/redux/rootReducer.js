import { USER_WEATHER, CITY_WEATHER, SEARCH_WEATHER, SHOW_ERROR, HIDE_ERROR } from "./actions";

const initialState = {
  cityWeather: {},
  userWeather: {},
  searchWeather: {},
  errorStatus: {
    main: false,
    msg: ''
  }
}

export const rootReducer = (state=initialState, action) => {
  switch (action.type) {
    case CITY_WEATHER:
      return {...state, cityWeather: action.payload};
    case SEARCH_WEATHER:
      return {...state, searchWeather: action.payload};
    case USER_WEATHER:
      return {...state, userWeather: action.payload};
    case SHOW_ERROR:
      return {
        ...state,
        searchWeather: {},
        errorStatus: {
          ...state.errorStatus, main: true, msg: action.payload
        }
      }
    case HIDE_ERROR:
      return {
        ...state,
        errorStatus: {
          ...state.errorStatus, main: false
        }
      }
    default:
      return state;
  }
}