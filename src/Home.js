import React, { Component } from 'react';
import Bike from './Bike';
import Intro from './Intro';
import { Grid, Row, Col } from 'react-flexbox-grid';

class Home extends Component {
  render() {
    return (
      <Grid fluid>
        <Intro />
        <Bike />
      </Grid>
    );
  }
}

export default Home;
