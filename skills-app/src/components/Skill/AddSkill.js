import React, { Component } from 'react';

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
            <input value={this.state.value} onChange={(e) => this.onFieldChange(e)}type="text"></input>
            <button onClick={() => this.props.addSkill(this.state.value)}>Add new skill</button>
      </div>
    )
  }
}

export default AddSkill;