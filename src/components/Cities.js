import React from 'react';

import { useDispatch, connect } from 'react-redux';

import { 
  Button, Grid, Select
} from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { getCityWeather } from '../redux/actions';
import { Weather } from './Weather';

export const citiesList = [
  { value: 'lviv', text: 'Lviv' },
  { value: 'moscow', text: 'Moscow' },
  { value: 'london', text: 'London' },
  { value: 'munich', text: 'Munich' },
  { value: 'amsterdam', text: 'Amsterdam' },
  { value: 'toronto', text: 'Toronto' }
]

const Cities = ({weather}) => {
  const dispatch = useDispatch();
  
  return (
    <Grid>
      <Grid.Row>
        <Select
          placeholder="Choose the city you need"
          options={citiesList}
          className="mt-mid"
          onChange={(e, {value}) => dispatch(getCityWeather(value))}
        />
        {Object.keys(weather).length > 0 &&
          <Weather info={weather}/>
        }
        <Link to="/">
          <Button
            primary
            className="back mt-mid"
          >
            Back
          </Button>
        </Link>
      </Grid.Row>
    </Grid>
  )
}

const mapStateToProps = (state) => {
  return {
    weather: state.cityWeather
  }
}

export default connect(mapStateToProps, null)(Cities);