import React, { Component } from 'react';
import { Row, Col } from 'react-flexbox-grid';




class BikeAbout extends Component {
  render() {
    return (
      <Row center='xs'>
        <Col xs={12}>
          <h3> The Gear </h3>
          <Row className="route" center="xs" middle="xs">
            <Col xs={8}>
              My Bike
            </Col>
          </Row>
        </Col>
      </Row>
    );
  }
}

export default BikeAbout;
