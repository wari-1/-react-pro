import React, { Component } from "react";
import "./Loop.css";
class Loop extends Component {
  state = {
    images: [
      {
        id: "0",
        src: "https://wx2.sinaimg.cn/mw690/d7f7faddly1g5l1xyga72j20qo0qogvf.jpg"
      },
      {
        id: "1",
        src:
          "https://ww4.sinaimg.cn/bmiddle/6b9d4902ly1g5l59xb5gjj20yi22ob2f.jpg"
      },
      {
        id: "2",
        src:
          "https://ww3.sinaimg.cn/bmiddle/6b9d4902ly1g5l5a0vr0jj20yi22ohdz.jpg"
      },
      {
        id: "3",
        src: "https://wx4.sinaimg.cn/mw690/006au8Vply1g5l6ai4pacj30tj1gi1dn.jpg"
      }
    ],
    activeNum: 1,
    ishasTransition: true
  };
  changeNum = index => {
    const { activeNum } = this.state;
    this.setState({
      activeNum: index + 1
    });
  };
  changeLeft = () => {
    const { activeNum } = this.state;
    this.setState({
      activeNum: activeNum - 1,
      ishasTransition: true
    });
  };
  changeRight = () => {
    const { activeNum } = this.state;
    this.setState({
      activeNum: activeNum + 1,
      ishasTransition: true
    });
  };
  componentDidUpdate(prevProps, prevState) {
    const { activeNum, images } = this.state;
    setTimeout(() => {
      console.log(activeNum);
      if (this.state.activeNum === images.length + 1) {
        this.setState({
          activeNum: 1,
          ishasTransition: false
        });
      } else if (this.state.activeNum === 0) {
        this.setState({
          activeNum: images.length,
          ishasTransition: false
        });
      }
    }, 1000);
  }

  render() {
    const { activeNum, images, ishasTransition } = this.state;
    const image = images.map(ele => <img src={ele.src} alt="" key={ele.id} />);
    const list = images
      .filter((item, index) => index < 4)
      .map((ele, index) => (
        <li
          className={
            index === activeNum - 1 ||
            (activeNum === 5 && index === 0) ||
            (activeNum === 0 && index === 3)
              ? "active"
              : ""
          }
          key={index}
          onMouseEnter={() => this.changeNum(index)}
        />
      ));
    return (
      <div>
        <h2>react 走马灯</h2>
        <div className="loop-wrap">
          <div
            className="pic"
            style={{
              marginLeft: `${-590 * activeNum}px`,
              transition: ishasTransition ? "margin-left 0.75s" : "none"
            }}
          >
            <img src={images[images.length - 1].src} alt="" />
            {image}
            <img src={images[0].src} alt="" />
          </div>
          <div className="left" onClick={this.changeLeft}>
            {"<"}
          </div>
          <div className="right" onClick={this.changeRight}>
            {">"}
          </div>
          <ul className="list">{list}</ul>
        </div>
      </div>
    );
  }
}

export default Loop;
