import React, { Component } from "react";
import PropTypes from "prop-types";
import RubixSide from "../cube-side/RubixSide";
import "./cube.css";

export class RubixCube extends Component {
  render() {
    let props = this.props;
    return (
      <div className="wrap">
        <div
          className="cube"
          style={{
            width: `${props.width}px`,
            height: `${props.width}px`
          }}
        >
          {[...Array(6).keys()].map(sideN => (
            <RubixSide
              key={sideN}
              color={props.rubixColors[sideN]}
              rubixPiecesPerSide={props.rubixPiecesPerSide}
              rubixClasses={props.rubixClasses}
              rubixClass={props.rubixClasses[sideN]}
              width={props.width}
              height={props.width}
              style={{
                width: `${props.width}px`,
                height: `${props.width}px`
              }}
              getCubeStyle={props.getCubeStyle}
            />
          ))}
        </div>
      </div>
    );
  }
}

RubixCube.propTypes = {
  rubixPiecesPerSide: PropTypes.number.isRequired,
  rubixColors: PropTypes.array.isRequired,
  rubixClasses: PropTypes.array.isRequired,
  width: PropTypes.number.isRequired,
  getCubeStyle: PropTypes.func.isRequired
};

export default RubixCube;
