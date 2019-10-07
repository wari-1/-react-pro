import React, { Component } from "react";
import { Link, NavLink, withRouter } from "react-router-dom";
import "./Header.scss";
class Header extends Component {
  state = {};
  render() {
    const { pathname } = this.props.location;
    return (
      <header>
        <div>
          <Link to="/">
            <img
              src="https://www.wanandroid.com/resources/image/pc/logo.png"
              alt=""
            />
          </Link>
          <ul className="nav">
            <li>
              <NavLink
                to="/"
                exact
                className={pathname === "/" ? "active" : ""}
              >
                <span className="text">首页</span>
                <span className="line" />
              </NavLink>
            </li>
            <li>
              <NavLink to="/projectindex">
                <span className="text">项目</span>
                <span className="line" />
              </NavLink>
            </li>
            <li>
              <NavLink to="/tree">
                <span className="text">体系</span>
                <span className="line" />
              </NavLink>
            </li>
            <li>
              <NavLink to="/wxarticle">
                <span className="text">公众号</span>
                <span className="line" />
              </NavLink>
            </li>
            <li>
              <NavLink to="/navi">
                <span className="text">导航</span>
                <span className="line" />
              </NavLink>
            </li>
            <li>
              <NavLink to="/project">
                <span className="text">项目分类</span>
                <span className="line" />
              </NavLink>
            </li>
            <li>
              <NavLink to="/tools">
                <span className="text">工具</span>
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
