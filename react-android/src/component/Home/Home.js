import React, { Component } from "react";
import MySwiper from "../MySwiper/MySwiper";
import axios from "axios";
import "./Home.scss";
import Index from "../Index/Index";
import Pindex from "../Pindex/Pindex";
import { NavLink, Route } from "react-router-dom";

class Home extends Component {
  state = {
    articles: [],
    toparticles: [],
    a: 0,
    newPage: []
  };
  componentDidMount() {
    axios.get("/api/banner/json").then(res => {});
  }
  render() {
    const swiperOne = {
      pics: [
        "https://wanandroid.com/blogimgs/4f66c08e-d8b6-470d-9c8c-eeed9dbfb2a3.png"
      ],
      loop: true,
      direction: "horizontal",
      width: 578,
      height: 280,
      slidesPerView: 1,
      className: "swiperOne"
    };
    const swiperTwo = {
      pics: [
        "https://www.wanandroid.com/blogimgs/50c115c2-cf6c-4802-aa7b-a4334de444cd.png",
        "https://www.wanandroid.com/blogimgs/90c6cc12-742e-4c9f-b318-b912f163b8d0.png",
        "https://www.wanandroid.com/blogimgs/62c1bd68-b5f3-4a3c-a649-7ca8c7dfabe6.png"
      ],
      loop: true,
      direction: "vertical",
      width: 290,
      height: 280,
      slidesPerView: 2,
      className: "swiperTwo"
    };
    const { match } = this.props;
    return (
      <div className="home">
        <div className="top1">
          {/* 双轮播图，单独把一个轮播图写成一个组件 */}
          <MySwiper {...swiperOne} />
          <MySwiper {...swiperTwo} />
        </div>
        <div className="main2">
          <div className="inner">
            <div className="title">
              <ul className="childnav">
                <li>
                  <NavLink to={`/index`} activeClassName="active">
                    最新博文
                  </NavLink>
                </li>
                <li>
                  <NavLink to={`/pindex`} activeClassName="active">
                    最新项目
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="main3">
          <div className="inner">
            <Route path={`/index`} component={Index} />
            <Route path={`/pindex`} component={Pindex} />
          </div>
        </div>
      </div>
    );
  }
}
export default Home;
