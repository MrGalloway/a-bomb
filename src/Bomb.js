import React, { Component } from 'react';

class Bomb extends Component {
    constructor(props) {
        super(props)

        this.state = { timer: 5 }
    }

    tick = () => {
        console.log('tick')
        if(this.state.timer > 1){
            this.setState({timer: this.state.timer - 1})
        }else{
            this.props.onTimerEnd()
        }
    }

    componentDidMount(){
        console.log('hurry up')
        this.intervalTimer = setInterval(this.tick,1000)
    }

    componentWillUnmount(){
        clearInterval(this.intervalTimer)
        console.log('boom')
    }

    render() {
        return (
            <button>i'll explode in {this.state.timer} seconds</button>
        );
    }
}

export default Bomb;
