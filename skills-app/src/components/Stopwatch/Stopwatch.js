import React from 'react';

const formattedSeconds = (sec) =>
  Math.floor(sec / 60) +
    ':' +
  ('0' + sec % 60).slice(-2)
  

class Stopwatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      secondsElapsed: 0, 
      laps: [],
      lastClearedIncrementer: null
    };
    this.incrementer = null;
  }  
    
  handleStartClick() {
    this.incrementer = setInterval( () =>
      this.setState({
        secondsElapsed: this.state.secondsElapsed + 1
      })
    , 1000);
  }
  
  handleStopClick() {
    clearInterval(this.incrementer);
    this.setState({
      lastClearedIncrementer: this.incrementer
    });
  }
  
  handleResetClick() {
    clearInterval(this.incrementer);
    this.setState({
      secondsElapsed: 0,
      laps: []
    });
  }
  
 
  
  render() {
    return (
      <div className="stopwatch">
        <h1 className="stopwatch-timer">{formattedSeconds(this.state.secondsElapsed)}</h1>
   
        {(this.state.secondsElapsed === 0 ||
          this.incrementer === this.state.lastClearedIncrementer
          ? <button className="start-btn" onClick={this.handleStartClick.bind(this)}>start</button>
          : <button className="stop-btn" onClick={this.handleStopClick.bind(this)}>stop</button>
        )}
        

        {(this.state.secondsElapsed !== 0 &&
          this.incrementer === this.state.lastClearedIncrementer
          ? <button onClick={this.handleResetClick.bind(this)}>reset</button>
          : null
        )}

        <ul className="stopwatch-laps">
          { this.state.laps.map((lap, i) =>
              <li className="stopwatch-lap"><strong>{i + 1}</strong>/ {formattedSeconds(lap)}</li>)
          }
        </ul>
      </div>
    );
  }
}
 export default Stopwatch;
