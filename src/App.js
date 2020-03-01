import React from 'react';
import './App.css';
import RubixCube from './components/cube/RubixCube.jsx';

const clientWidth = document.querySelector('body').clientWidth

class App extends React.Component {
  state = {
    rubixPiecesPerSide: 9,
    rubixColors: ['red', 'green', 'white', 'blue', 'yellow', 'orange'],
    rubixClasses: ['back', 'right', 'left', 'top', 'bottom', 'front'],
    width: clientWidth
  };

  getCubeStyle = (side, size) => {
    let halfSize = size / 2
    let styles = {
      back: {
        transform: `translateZ(-${halfSize}px) rotateY(180deg)`,
      },
      right: {
        transform: `rotateY(-270deg) translateX(${halfSize}px)`,
        transformOrigin: `top right`,
      },
      left: {
        transform: `rotateY(270deg) translateX(-${halfSize}px)`,
        transformOrigin: `center left`,
      },
      top: {
        transform: `rotateX(-90deg) translateY(-${halfSize}px)`,
        transformOrigin: `top center`,
      },
      bottom: {
        transform: `rotateX(90deg) translateY(${halfSize}px)`,
        transformOrigin: `bottom center`,
      },
      front: {
        transform: `translateZ(${halfSize}px)`,
      }
    }

    return {
      ...styles[side],
      width: `${size}px`,
      height: `${size}px`
    }
  }

  componentDidMount() {
    window.addEventListener('resize', () => {
      this.setState({ width: document.querySelector('body').clientWidth })
    })
  };

  render() {
    return (
      <React.Fragment>
        <RubixCube width={this.state.width > 600 ? 360 : this.state.width * .6} rubixPiecesPerSide={this.state.rubixPiecesPerSide} rubixColors={this.state.rubixColors} rubixClasses={this.state.rubixClasses} getCubeStyle={this.getCubeStyle} />
      </React.Fragment>
    )
  };
}

export default App;
