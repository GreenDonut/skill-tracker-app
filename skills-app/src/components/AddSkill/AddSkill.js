import React, { Component } from 'react';
import './AddSkill.css';

class AddSkill extends Component {
  constructor(props) {
      super(props);

      this.state = {
          value: ''
      }
      
     
  }

  onFieldChange = (event) => {
    this.setState({
      value: event.target.value
    })
  }

  
  render () {
    return (
      <div>
            <input className="ml4 mr3"value={this.state.value} onChange={(e) => this.onFieldChange(e)}type="text"></input>
            <button 
            className="addskill-button f6 grow no-underline br-pill ba ph3 pv1 mb2 dib"
            onClick={() => this.props.addSkill(this.state.value)}>ADD SKILL</button>
      </div>
    )
  }
}

export default AddSkill;