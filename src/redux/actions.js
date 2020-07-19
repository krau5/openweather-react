const key = "f0deab4028f35b340f369108e89c9cd5"

// weather
export const CITY_WEATHER = 'CITY_WEATHER';
export const USER_WEATHER = 'USER_WEATHER';

export const getCityWeather = (city) => {
  return (dispatch) => {
    dispatch({type: "loading"});
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`)
      .then(response => response.json())
      .then(weather => {
        dispatch({
          type: CITY_WEATHER,
          payload: weather
        })
      });
  }
}

export const getUserWeather = (location) => {
  return (dispatch) => {
    dispatch({type: "loading"});
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${location.lat}&lon=${location.lng}&appid=${key}`)
      .then(response => response.json())
      .then(weather => {
        dispatch({
          type: USER_WEATHER,
          payload: weather
        })
      });
  }
}