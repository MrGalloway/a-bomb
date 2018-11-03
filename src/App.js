import React, { Component } from 'react';
import Bomb from './Bomb.js'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      exploded: false
    }
  }

  detonate = () => {
    console.log('App.js: detonating...')
    this.setState(
      { exploded: true }
    )
  }

  render() {
    return (
      //<div> or <React.Fragment> or <>
      <>
        { !this.state.exploded && <Bomb onTimerEnd={this.detonate} /> }
      </>
    );
  }
}

export default App;
