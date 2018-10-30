import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './index.css';
//import Skill from "./components/Skill/Skill";
import SkillList from "./components/SkillList/SkillList";


class App extends Component {

  render() {
    return (
      <div>
        <h1 className='tc App-header pt3'>
                SKILL TRACKER</h1>
        <SkillList />
      </div>
    );
  }
}

export default App;


//Implement sorting function 