import React from 'react';

import { useDispatch, connect } from 'react-redux';

import { 
  Button, Grid, Select
} from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { getCityWeather, changeSelectedCity } from '../redux/actions';

export const citiesList = [
  { value: 'lviv', text: 'Львов' },
  { value: 'moscow', text: 'Москва' },
  { value: 'london', text: 'Лондон' },
  { value: 'munich', text: 'Мюнхен' },
  { value: 'amsterdam', text: 'Амстердам' }
]

const Cities = ({selectedCity, weather}) => {
  const dispatch = useDispatch();
  
  const onChangeSelect = (city) => {
    dispatch(changeSelectedCity(city))
  }

  return (
    <Grid>
      <Grid.Row>
        <Select
          placeholder="Выберите нужный вам город"
          options={citiesList}
          className="mt-mid"
          onChange={(e, {value}) => onChangeSelect(value)}
        />
        <Button
          color="green"
          className="mt-mid"
          onClick={() => {dispatch(getCityWeather(selectedCity))}}
        >
          Узнать погоду
        </Button>
        <Link to="/">
          <Button
            primary
            className="back mt-5"
          >
            Вернуться
          </Button>
        </Link>
      </Grid.Row>
    </Grid>
  )
}

const mapStateToProps = (state) => {
  return {
    selectedCity: state.city,
    weather: state.weather
  }
}

export default connect(mapStateToProps, null)(Cities);