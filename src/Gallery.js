import React, { Component } from 'react';
import { Row, Col } from 'react-flexbox-grid';




class Gallery extends Component {
  render() {
    return (
      <Row center='xs'>
        <Col xs={12}>
          <h3> Gallery </h3>
          <Row className="route" center="xs" middle="xs">
            <Col xs={8}>
              Images from trip
            </Col>
          </Row>
        </Col>
      </Row>
    );
  }
}

export default Gallery;
