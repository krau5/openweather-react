import React from 'react';

import { Grid, Header } from 'semantic-ui-react';

export const HomeHeader = () => {
  return (
    <Grid>
      <Grid.Row>
        <Header block as="h2" className="block-header">Тут ты можешь узнать погоду в своем и других городах.<br/><small>Наслаждайся:)</small></Header>
      </Grid.Row>
    </Grid>
  );
};