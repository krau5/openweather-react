import React from 'react';

import {
  Select, Grid, Button
} from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import { citiesList } from '../Cities';

export const Home = () => {
  return (
    <Grid>
      <Grid.Row>
        <Button primary>
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