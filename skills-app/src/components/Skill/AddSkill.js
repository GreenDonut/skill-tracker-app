import React, { Component } from 'react';

class AddSkill extends Component {
  constructor(props) {
      super(props);

     
  }

  
  render () {
    return (
      <div>
            <input type="text"></input>
            <button onClick={() => this.props.addSkill()}>Add new skill</button>
      </div>
    )
  }
}

export default AddSkill;