import React, { Component } from "react";
import Swiper from "swiper";
import "swiper/dist/css/swiper.min.css";
import "./my-swiper.css";
class MySwiper extends Component {
  state = {};
  componentDidMount() {
    const { loop, slidesPerView, direction, className } = this.props;
    // 初始化 swiper
    new Swiper(`.${className}`, {
      loop, // 循环模式选项
      direction,
      slidesPerView,
      // 如果需要前进后退按钮
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      }
    });
  }
  render() {
    const { width, height, pics, className, position } = this.props;
    return (
      <div className="my-swiper" style={{ float: "left" }}>
        <div
          style={{ width, height }}
          className={`swiper-container ${className}`}
        >
          <div className="swiper-wrapper">
            {pics.map((item, index) => (
              <div key={index} className="swiper-slide">
                <img src={item} alt="" />
              </div>
            ))}
          </div>

          <div
            className={
              position === "right"
                ? "arrow-prev swiper-button-prev"
                : "swiper-button-prev"
            }
          />
          <div
            className={
              position === "right"
                ? "arrow-prev swiper-button-next"
                : "swiper-button-next"
            }
          />
        </div>
      </div>
    );
  }
}
export default MySwiper;
