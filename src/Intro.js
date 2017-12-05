import React, { Component } from 'react';
import { Row, Col } from 'react-flexbox-grid';
import Typist from 'react-typist';



class Intro extends Component {
  render() {
    return (
      <Row>
        <Col xs={12}>
          <Row className="intro" center="xs" middle="xs">
            <Col xs={8}>
              <Typist>
                <span> Hi, my name is Daniel. I like to go on biking adventures. </span>
              </Typist>
            </Col>
          </Row>
        </Col>
      </Row>
    );
  }
}

export default Intro;
