const key = "f0deab4028f35b340f369108e89c9cd5"

// weather
export const CITY_WEATHER = 'CITY_WEATHER';
export const USER_WEATHER = 'USER_WEATHER';
export const SEARCH_WEATHER = 'SEARCH_WEATHER';
export const SHOW_ERROR = 'SHOW_ERROR';
export const HIDE_ERROR = 'HIDE_ERROR';

export const getCityWeather = (city, type) => {
  return (dispatch) => {
    dispatch({type: "loading"});
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`)
      .then(response => response.json())
      .then(weather => {
        if (weather.cod === 200) {
          dispatch({
            type,
            payload: weather
          })
        } else {
          dispatch({
            type: SHOW_ERROR,
            payload: 'City not found'
          })
          setTimeout(() => {
            dispatch({
              type: HIDE_ERROR
            });
          }, 3000)
        }
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