import React, { Component } from 'react';

class Skill extends Component {
  constructor(props) {
      super(props);
  }
  render () {
    return (
      <div>
        <h3>{this.props.skill}</h3>
        <h4>{this.props.hours} Hours</h4>
        <button onClick={() => this.props.addHour(this.props.index)}>+</button>
        <button onClick={() => this.props.subtractHour(this.props.index)}>-</button>
        <button>Timer</button>
      </div>
    )
  }
}

export default Skill;