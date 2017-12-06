import React, { Component } from 'react';
import About from './About';
import Route from './Route';
import BikeAbout from './BikeAbout';
import Gallery from './Gallery';
import { Grid, Row, Col } from 'react-flexbox-grid';

class GreatDivide extends Component {
  render() {
    return (
      <Grid fluid>
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

export default GreatDivide;
