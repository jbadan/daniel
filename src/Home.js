import React, { Component } from 'react';
import Bike from './Bike';
import Intro from './Intro';
import About from './About';
import Route from './Route';
import BikeAbout from './BikeAbout';
import Gallery from './Gallery';
import { Grid, Row, Col } from 'react-flexbox-grid';

class Home extends Component {
  render() {
    return (
      <Grid fluid>

        <Intro />

        <Row>
          <Col xs={12}>
            <Row center="xs" className="bikeRow" middle="xs">
              <Col xs={8}>
            <Bike />
            </Col>
          </Row>
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <Row center="xs" middle="xs">
              <Col xs={12}>
            <About />
            </Col>
          </Row>
          </Col>
        </Row>
        <Route />
        <BikeAbout />
        <Gallery />
      </Grid>
    );
  }
}

export default Home;
