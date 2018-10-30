import React, { Component } from 'react';
import Skill from '../Skill/Skill';
import AddSkill from '../AddSkill/AddSkill';

class SkillList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            skills: [
                        

                    ],
            addingSkill: false,
            errorMsg: ''
        }
    }
    
    addSkillHandler = (skillField) => {
        if (skillField) {
            let skill = skillField.trim();
            let updatedSkillsArray = [...this.state.skills];
            updatedSkillsArray.push({
                skill: skill,
                hours: 0
            });
    
            this.setState({
                skills: updatedSkillsArray,
                errorMsg: ''
            })
        } else {
            this.setState({
                errorMsg: 'Please enter a skill name.'
            })
        }
   
    }


    deleteSkillHandler = (index) => {
        let skillArr = [...this.state.skills];
        skillArr.splice(index, 1);
        
        this.setState( {
            skills: skillArr
        })
         
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
            <button
             class="f6 grow no-underline br-pill ba ph3 pv1 mb2 dib white bg-transparent" href="#0"
             onClick={this.hideButtonHandler}>NEW SKILL</button>
        }
        { this.state.addingSkill &&
            <AddSkill addSkill={this.addSkillHandler}/>
        }
        <span>{this.state.errorMsg}</span>
       {
           this.state.skills.map((currSkill,index) => {
              return  <Skill skill={currSkill.skill}
                             hours={currSkill.hours}
                             addHour={this.addHourHandler}
                             subtractHour={this.subtractHourHandler}
                             index={index}
                             deleteSkill={this.deleteSkillHandler}
              />
       })
       }
      </div>
    );
  }
}

export default SkillList;
