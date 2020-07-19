import React from 'react';

import { Grid, Header } from 'semantic-ui-react';

export const HomeHeader = () => {
  return (
    <Grid>
      <Grid.Row>
        <Header block as="h2" className="block-header">Here you can find out the weather in your and other cities<br/><small>Enjoy:)</small></Header>
      </Grid.Row>
    </Grid>
  );
};