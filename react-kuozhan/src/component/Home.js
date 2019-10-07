import React, { Component } from "react";
import { CSSTransition } from "react-transition-group";
import "./Home.css";
class Home extends Component {
  state = {
    show: false
  };
  render() {
    const { show } = this.state;
    return (
      <div style={{ width: "100vw", height: 600, backgroundColor: "red" }}>
        <button
          type="button"
          onClick={() =>
            this.setState({
              show: !show
            })
          }
        >
          Click to Enter
        </button>
        <CSSTransition in={show} timeout={2000} classNames="fade">
          <div className="con">{"I'll receive my-node-* classes"}</div>
        </CSSTransition>
      </div>
    );
  }
}

export default Home;
