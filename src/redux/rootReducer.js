import { USER_WEATHER, CITY_WEATHER, CHANGE_CITY } from "./actions";

const initialState = {
  cityWeather: {},
  userWeather: {},
  city: ''
}

export const rootReducer = (state=initialState, action) => {
  switch (action.type) {
    case CITY_WEATHER:
      console.log(action.payload);
      return {...state, cityWeather: action.payload};
    case USER_WEATHER:
      console.log(action.payload);
      return {...state, userWeather: action.payload};
    case CHANGE_CITY:
      console.log(action.payload);
      return {...state, city: action.payload};
    default:
      return state;
  }
}