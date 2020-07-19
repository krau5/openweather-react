import React from 'react';

import { 
  Button, Grid, Select
} from 'semantic-ui-react';
import { Link } from 'react-router-dom';

export const citiesList = [
  { value: 'lviv', text: 'Львов' },
  { value: 'moscow', text: 'Москва' },
  { value: 'london', text: 'Лондон' },
  { value: 'munich', text: 'Мюнхен' },
  { value: 'amsterdam', text: 'Амстердам' }
]

export const Cities = () => {
  const selectedCity = (city) => {
    console.log(city);
  }
  return (
    <Grid>
      <Grid.Row>
        <Select
          placeholder="Выберите нужный вам город"
          options={citiesList}
          className="mt-mid"
          onChange={(e, {value}) => selectedCity(value)}
        />
        <Button
          color="green"
          className="mt-mid"
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