import React, { Component } from "react";
import LazyLoad from "react-lazy-load";
class Abot extends Component {
  state = {};
  render() {
    return (
      <div style={{ width: "100vw", height: 600, backgroundColor: "green" }}>
        <LazyLoad height={400}>
          <img
            src="https://dev.tencent.com/u/dtid_30b2a4e50adc6692/p/images-tuoguan/git/raw/master/src/assets/u166.jpg"
            alt=""
            style={{ width: 200 }}
          />
        </LazyLoad>
        <h2>about</h2>
      </div>
    );
  }
}

export default Abot;
