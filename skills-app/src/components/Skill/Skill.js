import React, { Component } from 'react';
import ReactDom from 'react-dom';
import Stopwatch from '../Stopwatch/Stopwatch'

class Skill extends Component {
  constructor(props) {
      super(props);
      this.state = {
        timerOn: false
      }
  }

  toggleTimerHandler = () => {
    console.log('toggle');
    this.setState({
      timerOn: !this.state.timerOn
    }) 
    
  }
  render () {
    return (
      <div>
        <h3>{this.props.skill}</h3>
        <h4>{this.props.hours} Hours</h4>
        <button onClick={() => this.props.addHour(this.props.index)}>+</button>
        <button onClick={() => this.props.subtractHour(this.props.index)}>-</button>
       { /*<button  onClick={this.toggleTimerHandler}>Timer</button>*/}
        <button onClick={() => this.props.deleteSkill(this.props.index)}>Delete</button>
        {this.state.timerOn && <Stopwatch />}
      </div>
    )
  }
}

export default Skill;