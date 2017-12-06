import React, { Component } from 'react';
import Bike from './Bike';
import Intro from './Intro';
import About from './About';
import Route from './Route';
import BikeAbout from './BikeAbout';
import Gallery from './Gallery';
import { Grid, Row, Col } from 'react-flexbox-grid';

import{
  BrowserRouter as Router,
  Link
}from 'react-router-dom';

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
          <Row className="buttons" around="xs" center="xs">
            <Col xs={12}>
              <Link to="/greatdivide"><button>GREAT DIVIDE</button></Link>
              <Link to="/crosscountry"><button>TRANSAMERICA</button></Link>
            </Col>
        </Row>
      </Grid>
    );
  }
}

export default Home;
