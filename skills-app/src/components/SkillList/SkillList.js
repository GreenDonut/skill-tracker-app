import React, { Component } from 'react';
import Skill from '../Skill/Skill';
import AddSkill from '../AddSkill/AddSkill';
import './SkillList.css';

class SkillList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            skills: [
                {
                    skill: 'Guitar',
                    hours: 13
                },
                
                {
                    skill: 'Piano',
                    hours: 13
                },

                {
                    skill: 'React.js',
                    hours: 13
                },

                {
                    skill: 'Node.js',
                    hours: 13
                }, 

                {
                    skill: 'Reading',
                    hours: 13
                },

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
             class="newskill-button f6 grow no-underline br-pill ba ml3 ph3 pv1 mb2 dib " href="#0"
             onClick={this.hideButtonHandler}>NEW SKILL</button>
        }
        { this.state.addingSkill &&
            <AddSkill addSkill={this.addSkillHandler}/>
        }
        <span>{this.state.errorMsg}</span>
    <div class="mw9 center ph3-ns">
        {
            this.state.skills.map((currSkill,index) => {
                return  (
                    <div class="fl w-100 w-20-ns">
                    <Skill skill={currSkill.skill}
                                hours={currSkill.hours}
                                addHour={this.addHourHandler}
                                subtractHour={this.subtractHourHandler}
                                index={index}
                                deleteSkill={this.deleteSkillHandler}
                    />
                </div>
            );
            })
        }
    </div>
      </div>
    );
  }
}

export default SkillList;
