import React, { Component } from 'react';
import './About.css';
import { Row, Col } from 'react-flexbox-grid';


class About extends Component {

  render() {
    return (
      <div>
        <Row>
          <Col xs>
            <h3> The Great Divide </h3>
            <p className="pAbout">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dapibus efficitur eros. Praesent leo dolor, ultricies vel dictum nec, facilisis in nulla. Cras a felis vitae lorem dapibus ornare. Etiam quis consectetur elit. Etiam blandit magna non justo egestas pellentesque. Aenean sit amet felis ut dui finibus cursus at id leo. Fusce in quam nibh. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Maecenas id metus a lacus accumsan facilisis sed sit amet erat. Ut rhoncus non magna nec varius. Nulla at iaculis nisl. Vivamus egestas elit eget lectus faucibus, non pharetra lectus fermentum. Donec dignissim tincidunt diam. Suspendisse sit amet eleifend orci. Suspendisse potenti.
            </p>
          </Col>
        </Row>
        <Row>
          <Col xs>
            <h3> FAQ </h3>
          </Col>
        </Row>
        <Row around="xs">
          <Col xs>
            <div className="flip-container" ontouchstart="this.classList.toggle('hover');">
              <div className="flipper">
                <div className="front">
                  <p className="pFront">What is bikepacking?</p>
                </div>
                <div className="back">
                  <p className="pBack">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
              </div>
            </div>
        </Col>
        <Col xs>
          <div className="flip-container" ontouchstart="this.classList.toggle('hover');">
            <div className="flipper">
              <div className="front">
                <p className="pFront">Why use a 29er?</p>
              </div>
              <div className="back">
                <p className="pBack">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              </div>
            </div>
          </div>
      </Col>
      <Col xs>
        <div className="flip-container" ontouchstart="this.classList.toggle('hover');">
          <div className="flipper">
            <div className="front">
              <p className="pFront">Why frame bags (vs paneers vs trailer)?</p>
            </div>
            <div className="back">
              <p className="pBack">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
          </div>
        </div>
    </Col>
      </Row>
</div>
    );
  }
}

export default About;
