import React, { Component } from "react";
import PropTypes from "prop-types";
import RubixPiece from "../cube-piece/RubixPiece";
import "./cube-side.css";

export class RubixSide extends Component {
  render() {
    let props = this.props;

    return (
      <div
        className={props.rubixClass + " cube-side"}
        style={this.props.getCubeStyle(props.rubixClass, props.width)}
      >
        {[...Array(props.rubixPiecesPerSide).keys()].map(i => (
          <RubixPiece
            key={i}
            number={i + 1}
            color={props.color}
            sideWidth={props.width}
            sideHeight={props.height}
            getCubeStyle={props.getCubeStyle}
            rubixClasses={props.rubixClasses}
            rubixPiecesPerSide={props.rubixPiecesPerSide}
          />
        ))}
      </div>
    );
  }
}

RubixSide.propTypes = {
  rubixPiecesPerSide: PropTypes.number.isRequired,
  rubixClasses: PropTypes.array.isRequired,
  rubixClass: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
  getCubeStyle: PropTypes.func.isRequired
};

export default RubixSide;
