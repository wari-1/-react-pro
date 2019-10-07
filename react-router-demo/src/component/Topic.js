import React, { Component } from "react";
class Topic extends Component {
  state = {
    title: ""
  };
  componentDidMount() {
    if (
      this.props.match.params.topicId !== "hot" &&
      this.props.match.params.topicId !== "new" &&
      this.props.match.params.topicId !== "hottest"
    ) {
      this.props.history.push("/error");
    } else {
      this.setState({
        title: this.props.match.params.topicId
      });
    }
  }
  componentDidUpdate(prevProps) {
    if (prevProps.match.params.topicId !== this.props.match.params.topicId) {
      this.setState({
        title: this.props.match.params.topicId
      });
    }
  }
  render() {
    const { title } = this.state;
    return <div>{title}个人信息页</div>;
  }
}

export default Topic;
