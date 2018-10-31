import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './index.css';
//import Skill from "./components/Skill/Skill";
import SkillList from "./components/SkillList/SkillList";
import {XYPlot, XAxis, YAxis, HorizontalGridLines, LineSeries} from 'react-vis';


class App extends Component {

  render() {
    return (
      <div>
        <h1 className='tc App-header pt3'>
                SKILL TRACKER</h1>
        <h3 className='tc App-header'>Record the time spent on what really matters.</h3>
        <SkillList />
      </div>
    );
  }
}

export default App;


//Implement sorting function: Alphabetically, by category  
//Different colours for each skill? 

