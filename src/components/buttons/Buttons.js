import "./buttons.css";
import React from "react";

class Buttons extends React.Component {
  render() {
    return (
      <button className={this.props.className} onClick={this.props.onClick}>
        {this.props.buttonText}
      </button>
    );
  }
}

export { Buttons };
