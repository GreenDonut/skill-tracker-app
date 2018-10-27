import React, { Component } from 'react';
import Skill from '../Skill/Skill';
import AddSkill from '../Skill/AddSkill';

class SkillList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            skills: [
                        {skill: 'Guitar',hours: 20},
                        {skill: 'Piano', hours: 10}

                    ],
            addingSkill: false
        }
    }
    
    addSkillHandler = (skillField) => {
        //name the skill
        console.log(skillField);
        //const skill = event.target.value.trim();
        //add skill to array 

        //re-render
    }


    deleteSkillHandler = () => {
        
        //delete skill 
    }

    addHourHandler = (index) => {
        let skillArr = [...this.state.skills];
        skillArr[index].hours++;
       
        this.setState({
           skills: skillArr
        })
    }

    subtractHourHandler = (index) => {
        let skillArr = [...this.state.skills];
        if (skillArr[index].hours !== 0) {
            skillArr[index].hours--;
        }
       
        this.setState({
           skills: skillArr
        })
    }

    hideButtonHandler = () => {
        if(this.state.addingSkill){
            this.setState({addingSkill: false})
        }else{
            this.setState({addingSkill: true})
        }
    }

  render () {
    return (
      <div>
        { !this.state.addingSkill &&
            <button onClick={this.hideButtonHandler}>Add Skill</button>
        }
        { this.state.addingSkill &&
            <AddSkill addSkill={this.addSkillHandler}/>
        }
        
       {
           this.state.skills.map((currSkill,index) => {
              return  <Skill skill={currSkill.skill}
                             hours={currSkill.hours}
                             addHour={this.addHourHandler}
                             subtractHour={this.subtractHourHandler}
                             index={index}
              />
       })
       }
      </div>
    );
  }
}

export default SkillList;
