import React, { Component } from 'react';
import { Row, Col } from 'react-flexbox-grid';




class Route extends Component {
  render() {
    return (
      <Row center='xs'>
        <Col xs={12}>
          <h3> The Route </h3>
          <Row className="route" center="xs" middle="xs">
            <Col xs={8}>
              Route
            </Col>
          </Row>
        </Col>
      </Row>
    );
  }
}

export default Route;
