import React, { Component } from "react";
import { Prompt } from "react-router-dom";
class About extends Component {
  state = {};
  render() {
    return (
      <div>
        about
        <Prompt message="Are you sure you want to leave?" />
      </div>
    );
  }
}

export default About;
