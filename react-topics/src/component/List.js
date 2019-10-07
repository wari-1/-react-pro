import React, { Component } from "react";
import { NavLink, Link, Switch, Route } from "react-router-dom";
import axios from "axios";
import "./List.scss";
import Topic from "./Topic";
class List extends Component {
  state = {
    type: "all",
    topics: []
  };
  componentDidMount() {
    const search = this.props.location.search
      ? this.props.location.search
      : "?tab=all";
    axios.get(`http://localhost:3008/topics/${search}`).then(res => {
      this.setState({
        topics: res.data
      });
    });
  }
  componentDidUpdate(prevProps, prevState) {
    const { search } = this.props.location;
    if (this.props.location.search !== prevProps.location.search) {
      this.setState({
        topics: []
      });
      axios.get(`http://localhost:3008/topics/${search}`).then(res => {
        this.setState({
          topics: res.data
        });
      });
    }
  }
  render() {
    const { match } = this.props;
    const search = this.props.location.search.replace("?tab=", "");
    const search1 = this.props.location.search;
    const { topics } = this.state;
    const showList = topics.map(item => (
      <li key={item.id}>
        <span className="tab">{item.tab}</span>
        <Link to={`${match.url}topic/${item.id}`}>
          <h4>{item.title}</h4>
        </Link>
      </li>
    ));
    return (
      <div className="list">
        <ul className="list">
          <li>
            <NavLink
              to="/?tab=all"
              style={{ color: search1 === "" || search === "all" ? "red" : "" }}
            >
              全部
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/?tab=good"
              style={{ color: search === "good" ? "red" : "" }}
            >
              精华
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/?tab=ask"
              style={{ color: search === "ask" ? "red" : "" }}
            >
              问答
            </NavLink>
          </li>
        </ul>
        <ul className="content">{showList}</ul>
        <Switch>
          <Route path={`${match.path}topic/:id`} component={Topic} />
        </Switch>
      </div>
    );
  }
}

export default List;
