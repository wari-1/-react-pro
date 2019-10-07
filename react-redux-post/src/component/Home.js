import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";
import { Link, Switch, Route } from "react-router-dom";
import { getPosts } from "../store/actions";
import Post from "./Post";
class Home extends Component {
  componentDidMount() {
      this.props.getPosts()
  }
  render() {
    const { posts, match } = this.props;
    const list = posts.map(item => (
      <li key={item.id}>
        <Link to={`${match.url}post/${item.id}`}>
          <h4>{item.title}</h4>
        </Link>
      </li>
    ));
    return (
      <div>
        <ul>{list}</ul>
        <Switch>
          <Route path={`${match.path}post/:id`} component={Post} />
        </Switch>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    posts: state.posts
  };
};

export default connect(
  mapStateToProps,
  {getPosts}
)(Home);
