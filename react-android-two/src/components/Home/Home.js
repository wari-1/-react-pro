import React, { Component } from "react";
import MySwiper from "../MySwiper/MySwiper";
import { Route, NavLink } from "react-router-dom";
import ContentListLoader from "../ContentList/ContentListLoader";
import ContentListCopy from "../ContentListCopy/ContentListCopy";

// import ContentList from "../ContentList/ContentList";
// import axios from "axios";
class Home extends Component {
  state = {};
  // componentDidMount() {
  //   axios.get("/api/article/list/0/json").then(res => {
  //     console.log(res.data);
  //   });
  // }
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
      className: "swiperOne",
      position: "left"
    };
    const swiperTwo = {
      pics: [
        "https://www.wanandroid.com/blogimgs/90c6cc12-742e-4c9f-b318-b912f163b8d0.png",
        "https://www.wanandroid.com/blogimgs/50c115c2-cf6c-4802-aa7b-a4334de444cd.png",
        "https://www.wanandroid.com/blogimgs/62c1bd68-b5f3-4a3c-a649-7ca8c7dfabe6.png"
      ],
      loop: true,
      direction: "vertical",
      width: 280,
      height: 280,
      slidesPerView: 2,
      className: "swiperTwo",
      position: "right"
    };
    return (
      <div className="home">
        <div className="top" style={{ overflow: "hidden" }}>
          <MySwiper {...swiperOne} />
          <MySwiper {...swiperTwo} />
        </div>
        <div className="content">
          <div className="content-nav">
            <NavLink to="/index">最新博文</NavLink>
            <span>|</span>
            <NavLink to="/pindex">最新项目</NavLink>
          </div>
          {/* <Route path="/:type" component={ContentList} /> */}
          {/* <Route pat="/:type" component={ContentListLoader} /> */}
          <Route path="/:type" component={ContentListCopy} />
        </div>
      </div>
    );
  }
}
export default Home;
