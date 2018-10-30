import React, { Component } from 'react';
import ReactDom from 'react-dom';
import Stopwatch from '../Stopwatch/Stopwatch'
import './Skill.css'

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
     
        <div className='tc skill-font ba br4 mw5 ma3 b--white grow'>
            <h3 className='skill-font'>{this.props.skill}</h3>
            <h4 className='skill-font'>{this.props.hours} Hours</h4>
            <button className='skill-font f6 grow no-underline br-pill ba ph3 pv1 mr2 mb2 dib white bg-transparent' 
                    onClick={() => this.props.addHour(this.props.index)}>+
            </button>
            <button 
                className='skill-font f6 grow no-underline br-pill ba ph3 pv1 mr2 mb2 dib white bg-transparent' 
                onClick={() => this.props.subtractHour(this.props.index)}>-</button>
          { /*<button  onClick={this.toggleTimerHandler}>Timer</button>*/}
            <button className='skill-font f6 grow no-underline br-pill ba ph3 pv1 mb2 dib white bg-transparent'
                    onClick={() => this.props.deleteSkill(this.props.index)}>
                    Delete</button>
            {this.state.timerOn && <Stopwatch />}
          </div>

 
    )
  }
}

export default Skill;