import "./stopwatch.css";
import React from "react";

import { Buttons } from "../buttons/Buttons.js";

class Stopwatch extends React.Component {
  constructor() {
    super();
    this.state = {
      hours: 0,
      minutes: 0,
      seconds: 0,
      time: "0:0:0"
    };
  }

  componentDidMount() {
    this.clearTime();
  }

  componentWillUnMount() {
    this.clearTime();
  }

  clearTime() {
    this.setState({
      hours: 0,
      minutes: 0,
      seconds: 0,
      time: "0:0:0"
    });
  }

  startTimer() {
    if (this.timerID) {
      return false;
    }

    this.timerID = setInterval(() => {
      let newHours = this.state.hours,
        newMinutes = this.state.minutes,
        newSeconds = this.state.seconds + 1;

      if (this.state.seconds === 59) {
        newSeconds = 0;
        if (this.state.minutes === 59) {
          newMinutes = 0;
          newHours = this.state.hours + 1;
        } else {
          newMinutes = this.state.minutes + 1;
        }
      }

      this.setState({
        hours: newHours,
        minutes: newMinutes,
        seconds: newSeconds
      });
      this.updateTimer();
    }, 1000);
  }

  stopTimer() {
    clearInterval(this.timerID);
    this.timerID = null;
  }

  updateTimer() {
    this.setState({
      time:
        this.state.hours + ":" + this.state.minutes + ":" + this.state.seconds
    });
  }

  render() {
    return (
      <>
        <p>{this.state.time}</p>
        <Buttons
          className="StartButton"
          buttonText="Start"
          onClick={() => {
            this.startTimer();
          }}
        />
        <Buttons
          className="StopButton"
          buttonText="Stop"
          onClick={() => {
            this.stopTimer();
          }}
        />
        <Buttons
          className="ResetButton"
          buttonText="Reset"
          onClick={() => {
            console.log("Reset - Click!");
            this.clearTime();
          }}
        />
      </>
    );
  }
}

export { Stopwatch };
