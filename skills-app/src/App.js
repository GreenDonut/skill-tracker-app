import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
//import Skill from "./components/Skill/Skill";
import SkillList from "./components/SkillList/SkillList";


class App extends Component {

  render() {
    return (
      <div>
        <SkillList />
      </div>
    );
  }
}

export default App;


