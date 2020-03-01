import React, { Component } from "react";
import PropTypes from "prop-types";
import "./cube-piece.css";

export class RubixPiece extends Component {
  getStyle = () => {
    let margin = 3;
    let piecePerRow = Math.floor(Math.sqrt(this.props.rubixPiecesPerSide))
    return {
      background: this.props.color,
      width: `calc(${this.props.sideWidth / piecePerRow}px - ${margin * 2}px)`,
      height: `${this.props.sideHeight / piecePerRow}px - ${margin * 2}px`,
      margin: `${3}px`
    };
  };

  render() {
    return (
      <div className="cube-piece" style={this.getStyle()}></div>
    );
  }
}

RubixPiece.propTypes = {
  rubixPiecesPerSide: PropTypes.number.isRequired,
  number: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
  sideWidth: PropTypes.number.isRequired,
  sideHeight: PropTypes.number.isRequired
};

export default RubixPiece;
