import React, { Component } from 'react';
import { Row, Col } from 'react-flexbox-grid';


class Intro extends Component {
  render() {
    return (
      <Row className="intro" center="xs">
        <Col xs={6}> Hi
        </Col>
      </Row>
    );
  }
}

export default Intro;
