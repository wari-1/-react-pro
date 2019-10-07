// import React, { Component } from "react";
// import axios from "axios";
// class ContentList extends Component {
//   state = {
//     list: [],
//     pageNum: 0,
//     show: false
//   };
//   componentDidMount() {
//     // const { pageNum } = this.state;
//     axios.get(`/api/article/list/0/json`).then(res => {
//       console.log(res.data.data.datas);
//       this.setState({
//         list: res.data.data.datas
//       });
//     });
//     window.onscroll = () => {
//       // 滚动条距离顶端的距离
//       console.log(window.scrollY);
//       //整个文档的高度
//       console.log(document.querySelector("body").clientHeight);
//       //窗口的高度
//       console.log(window.innerHeight);
//       if (
//         document.querySelector("body").clientHeight -
//           window.innerHeight -
//           window.scrollY <
//         20
//       ) {
//         if (this.state.show === false) {
//           this.setState({
//             pageNum: this.state.pageNum + 1,
//             show: true
//           });
//         }
//       }
//     };
//   }
//   componentDidUpdate(prevprops, prevState) {
//     if (prevState.pageNum !== this.state.pageNum) {
//       const { pageNum, list } = this.state;
//       axios.get(`/api/article/list/${pageNum}/json`).then(res => {
//         console.log(res.data.data.datas);
//         setTimeout(() => {
//           this.setState({
//             list: [...list, ...res.data.data.datas],
//             show: false
//           });
//         }, 1000);
//       });
//     }
//   }
//   render() {
//     const { list, show } = this.state;
//     const contentList = list.length
//       ? list.map(item => <li key={item.id}>{item.title}</li>)
//       : "请稍等";
//     return (
//       <div>
//         {contentList}{" "}
//         <div style={{ display: show ? "block" : "none" }}>加载中...</div>{" "}
//       </div>
//     );
//   }
// }
// export default ContentList;
