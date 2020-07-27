import React from 'react';

import { Grid, Button }from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { useDispatch, connect } from 'react-redux';

import { getUserWeather } from '../../redux/actions';
import { Weather } from '../Weather';


const Home = ({weather}) => {

  const dispatch = useDispatch();

  const userLocation = () => {
    const success = (pos) => {
      const location = {
       lat: pos.coords.latitude,
       lng: pos.coords.longitude,
      }
      dispatch(getUserWeather(location));
    }
    navigator.geolocation.getCurrentPosition(success, console.log)
  }

  return (
    <Grid>
      <Grid.Row>
        <Button primary onClick={() => userLocation()}>
          Find out the weather outside
        </Button>
        {Object.keys(weather).length > 0 &&
          <Weather info={weather}/>
        }
        <Link to="/search">
          <Button className="mt-mid">
            Search the city you want
          </Button>
        </Link>
        <Link to="/cities">
          <Button className="mt-mid">
            Or Choose the city you need
          </Button>
        </Link>
      </Grid.Row>
    </Grid>
  )
}

const mapStateToProps = (state) => {
  return {
    weather: state.userWeather
  }
}

export default connect(mapStateToProps, null)(Home);