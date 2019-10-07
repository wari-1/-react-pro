import React, { Component } from "react";
import InfiniteLoader from "react-infinite-loader";
import axios from "axios";
class ContentList extends Component {
  state = {
    list: [],
    pageNum: 0,
    show: false
  };
  componentDidMount() {
    // const { pageNum } = this.state;
    axios.get(`/api/article/list/0/json`).then(res => {
      console.log(res.data.data.datas);
      this.setState({
        list: res.data.data.datas
      });
    });
  }
  componentDidUpdate(prevprops, prevState) {
    if (prevState.pageNum !== this.state.pageNum) {
      const { pageNum, list } = this.state;
      axios.get(`/api/article/list/${pageNum}/json`).then(res => {
        this.setState({
          list: [...list, ...res.data.data.datas]
        });
      });
    }
  }
  handleVisit = () => {
    this.setState({
      pageNum: this.state.pageNum + 1
    });
  };
  render() {
    const { list, show } = this.state;
    const contentList = list.length
      ? list.map(item => <li key={item.id}>{item.title}</li>)
      : "请稍等";
    return (
      <div>
        {contentList}
        <InfiniteLoader onVisited={() => this.handleVisit()} />
      </div>
    );
  }
}
export default ContentList;
