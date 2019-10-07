import React, { Component } from "react";
import Count from "./Count";
import CountCopy from "./CountCopy";
import { connect } from "react-redux";
import store from "../store";
import axios from "axios";
class Wrap extends Component {
  componentDidMount() {
    axios.get("http://localhost:3008/address").then(res => {
      store.dispatch({ type: "GETADDRESS", address: res.data });
    });
  }
  updateAddress = () => {
    const { address } = this.props;
    axios
      .patch("http://localhost:3008/address", {
        ...address,
        ...{
          jiedao: "惺惺惜惺惺"
        }
      })
      .then(res => {
        store.dispatch({
          type: "CHANGEADDRESS",
          newAddress: res.data
        });
      });
  };
  render() {
    // 第一次调用需要接收一个函数作为参数，
    const { count, address } = this.props;
    return (
      <div>
        <Count count={count} />
        <CountCopy />
        {address ? (
          <div>
            <h4>地址信息</h4>
            <span>{address.city}</span>
            <br />
            <span>{address.jiedao}</span>
            <br />
            <span>{address.detail}</span>
            <br />
            <button onClick={this.updateAddress}>更新地址信息</button>
          </div>
        ) : (
          <div />
        )}
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    count: state.count,
    address: state.address
  };
};
export default connect(mapStateToProps)(Wrap);
