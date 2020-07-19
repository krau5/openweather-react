import React from 'react';

import {
  Select, Grid, Button
} from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import { citiesList } from '../Cities';

export const Home = () => {
  const userLocation = () => {
    const success = (pos) => {
      const location = {
       lat: pos.coords.latitude,
       lng: pos.coords.longitude,
      }
      console.log(location);
    }
    navigator.geolocation.getCurrentPosition(success, console.log)
  }
  return (
    <Grid>
      <Grid.Row>
        <Button primary onClick={() => userLocation()}>
          Узнай погоду за окном
        </Button>
        <Link to="/cities">
          <Select 
            placeholder="Либо в другом городе"
            options={citiesList}
            className="mt-5"
          />
        </Link>
      </Grid.Row>
    </Grid>
  )
}