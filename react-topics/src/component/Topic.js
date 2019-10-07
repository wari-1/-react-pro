import React, { Component } from "react";
import axios from "axios";
class Topic extends Component {
  state = {
    topic: null
  };
  componentDidMount() {
    console.log(this.props);
    const { id } = this.props.match.params;
    axios.get(`http://localhost:3008/topics/${id}`).then(res => {
      this.setState({
        topic: res.data
      });
    });
  }
  render() {
    const { topic } = this.state;
    return topic ? (
      <div style={{ padding: "10px" }}>
        <h4>{topic.title}</h4>
        <div dangerouslySetInnerHTML = {{ __html:topic.content }}></div>
      </div>
    ) : (
      <div />
    );
  }
}

export default Topic;
