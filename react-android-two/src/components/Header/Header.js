import React, { Component } from "react";
import "./header.css";
import { Link, NavLink, withRouter } from "react-router-dom";
class Header extends Component {
  state = {};
  render() {
    console.log(this.props);
    const { pathname } = this.props.location;
    return (
      <header>
        <div className="inner">
          <Link to="/">
            <img
              src="https://www.wanandroid.com/resources/image/pc/logo.png"
              alt=""
            />
          </Link>
          <ul className="nav">
            <li>
              <NavLink
                className={
                  pathname === "/" ||
                  pathname === "/index" ||
                  pathname === "/pindex"
                    ? "active"
                    : ""
                }
                to="/index"
              >
                <span className="text">首页</span>
                <span className="line" />
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName="active" to="/projectindex">
                <span className="text">项目</span>
                <span className="line" />
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName="active" to="/tree">
                <span className="text">体系</span>
                <span className="line" />
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName="active" to="/wxarticle">
                {" "}
                <span className="text">公众号</span>
                <span className="line" />
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName="active" to="/navi">
                {" "}
                <span className="text">导航</span>
                <span className="line" />
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName="active" to="/project">
                {" "}
                <span className="text">项目分类</span>
                <span className="line" />
              </NavLink>
            </li>
            <li>
              <NavLink to="/tools">
                {" "}
                <span className="text">工具</span>
                <span className="line" />
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName="active" to="/collect">
                {" "}
                <span className="text">收藏</span>
                <span className="line" />
              </NavLink>
            </li>
          </ul>
        </div>
      </header>
    );
  }
}
export default withRouter(Header);
