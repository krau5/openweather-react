import { USER_WEATHER, CITY_WEATHER } from "./actions";

const initialState = {
  cityWeather: {},
  userWeather: {},
}

export const rootReducer = (state=initialState, action) => {
  switch (action.type) {
    case CITY_WEATHER:
      return {...state, cityWeather: action.payload};
    case USER_WEATHER:
      return {...state, userWeather: action.payload};
    default:
      return state;
  }
}