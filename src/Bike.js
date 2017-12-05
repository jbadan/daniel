import React, { Component } from 'react';
import './Bike.css';


class Bike extends Component {
  render() {
    return (
      <div className="cycle-outer">
			<div className="cycle-wrapper">
				<div className="cycle-body">
					<div className="seat">
						<span></span>
					</div>
					<div className="front-wheel-frame"></div>
					<div className="top-frame"></div>
					<div className="front-frame">
						<div className="bottle-holder">
							<span></span>
						</div>
					</div>
					<div className="center-frame"></div>
					<div className="back-frame"></div>
					<div className="bottom-frame"></div>
          <div className="handlebar-connect"></div>
					<div className="handlebar-curve"></div>
          <div className="brakes"></div>
				</div>
        <div className="cycle-wheel cycle-wheel-back">
					<div className="cycle-wheel-outer">
						<div className="cycle-wheel-inner">
							<div className="cycle-wheel-inner-padding">
              <ul className="spoke-container">
                <li className="spoke"></li>
                <li className="spoke"></li>
              </ul>
                <div className="inner-disc"></div>
								<div className="inner-disc-2"></div>
							</div>
						</div>
					</div>
				</div>
				<div className="cycle-wheel cycle-wheel-front">
					<div className="cycle-wheel-outer">
						<div className="cycle-wheel-inner">
							<div className="cycle-wheel-inner-padding">
								<ul className="spoke-container">
									<li className="spoke"></li>
									<li className="spoke"></li>
								</ul>
								<div className="inner-disc"></div>
								<div className="inner-disc-2"></div>
							</div>
						</div>
					</div>
				</div>
				<div className="chain-up"></div>
				<div className="chain-bottom"></div>
				<div className="chain-rotation">
					<div className="outer-axle"></div>
					<div className="chain-disc-outer">
						<div className="chain-disc-inner"></div>
					</div>

				</div>
				<div className="chain-rods">
					<div className="pedal-rod"></div>
				</div>
			</div>
		</div>
    );
  }
}

export default Bike;
