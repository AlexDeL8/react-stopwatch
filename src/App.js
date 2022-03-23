import "./styles.css";
import React from "react";

import { Stopwatch } from "./components/stopwatch/Stopwatch.js";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>Example Stopwatch</h1>
        <h2>Use the control buttons below:</h2>
        <div>
          <Stopwatch />
        </div>
      </div>
    );
  }
}

export { App };
