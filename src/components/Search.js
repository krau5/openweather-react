import React, { useState } from 'react';
import { Button, Grid, Input } from 'semantic-ui-react';
import { useDispatch, connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { getCityWeather, SEARCH_WEATHER } from '../redux/actions';
import { Weather } from './Weather';

const UserSearch = ({weather}) => {
  const dispatch = useDispatch()
  const [inputValue, setInputValue] = useState('');

  const searchInputHandler = (e) => {
    if (e.key === "Enter") {
      dispatch(getCityWeather(inputValue, SEARCH_WEATHER))
      setInputValue('')
    }
  }
  return (
    <Grid>
      <Grid.Row>
        <Input 
          placeholder="Search..." 
          onKeyDown={(e) => searchInputHandler(e)}
          onChange={(e) => setInputValue(e.target.value)}
          value={inputValue}
        />
        {Object.keys(weather).length > 0 &&
          <Weather info={weather}/>
        }
        <Link to="/">
          <Button
            primary
            className="mt-mid"
          >
            Back
          </Button>
        </Link>
      </Grid.Row>
    </Grid>
  )
}

const mapStateToProps = state => {
  return {
    weather: state.searchWeather
  }
}

export default connect(mapStateToProps, null)(UserSearch);