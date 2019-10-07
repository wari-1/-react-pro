import React, { Component } from "react";
import { NavLink, Route, Switch } from "react-router-dom";
import User from "./Topic";
class Topics extends Component {
  state = {};
  render() {
    const { match } = this.props;
    return (
      <div>
        <ul>
          <li>
            <NavLink to={`${match.url}/hot`} activeClassName="active" exact>
              热门
            </NavLink>
          </li>
          <li>
            <NavLink to={`${match.url}/new`} activeClassName="active">
              最新
            </NavLink>
          </li>
          <li>
            <NavLink to={`${match.url}/hottest`} activeClassName="active">
              热榜
            </NavLink>
          </li>
        </ul>
        <Switch>
          <Route path={`${match.path}/:topicId`} component={User} />
        </Switch>
      </div>
    );
  }
}

export default Topics;
