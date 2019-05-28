import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { getCanvasPosition } from './utils/formulas'
import Canvas from './components/Canvas'


class App extends Component{
  componentDidMount() {
    const self = this;
    setInterval(() => {
      self.props.moveObjects(self.canvasMousePosition)
    }, 10)
  }

  trackMouse(event){
    this.canvasMousePosition = getCanvasPosition(event)
  }

  render(){
    return (
      <Canvas
        angle={this.props.angle}
        trackMouse={ event => this.trackMouse(event)}
      />
      // <div className="App">
      //   <h1>{this.props.message}</h1>
      // </div>
    );
  }
}

App.propTypes = {
   angle: PropTypes.number.isRequired,
   moveObjects: PropTypes.func.isRequired,
}

export default App;
