import React, { Component } from "react";
class Form extends Component {
  state = {
    username: "",
    comment: "",
    star: "",
    checked: false
  };
  change = (stateName, event) => {
    const target = event.target;
    const targetVal =
      target.type === "checkbox" ? target.checked : target.value;
    this.setState({
      [stateName]: targetVal
    });
  };
  log = event => {
    // const val = document.querySelector(".inp").value;
    // const val = event.target.value;
    const val = this.inp.value;
    console.log(val);
  };
  render() {
    const { username, comment, star, checked } = this.state;
    console.log(
      "username :" + username,
      "comment :" + comment,
      "star :" + star,
      "checked :" + checked
    );

    return (
      <div className="form">
        <label htmlFor="">用户名：</label>
        <input
          type="text"
          value={username}
          onChange={e => {
            this.change("username", e);
          }}
        />
        <br />
        <br />
        <textarea
          cols="30"
          rows="10"
          value={comment}
          onChange={e => {
            this.change("comment", e);
          }}
        />
        <br />
        <br />
        <label htmlFor="">你喜欢的明星是：</label>
        <select
          name=""
          id=""
          value={star}
          onChange={e => {
            this.change("star", e);
          }}
        >
          <option value="易烊千玺">易烊千玺</option>
          <option value="易烊千玺">易烊千玺</option>
          <option value="易烊千玺">易烊千玺</option>
          <option value="易烊千玺">易烊千玺</option>
        </select>
        <br />
        <br />
        <input
          type="checkbox"
          checked={checked}
          onChange={e => {
            this.change("checked", e);
          }}
          id="xxxx"
        />
        <label htmlFor="xxxx" style={{ userSelect: "none" }}>
          是否同意协议
        </label>
        <br />
        <br />
        {/* 非受控组件如果要设置默认值的话，请不要设置value和checked，以及seleted属性,设置defaultValue,defaultCheckeddefaultSelected属性 */}
        <input
          type="text"
          className="inp"
          onChange={this.log}
          ref={inp1 => {
            this.inp = inp1;
          }}
          defaultValue="hhhhh"
          //ref中第一个(inp)要和最后一个(inp)名字一样,都表示节点,名字任意起。第一个代表形参，后面的是实参
        />
        {/* <button onClick={this.log}>获取input的值</button> */}
      </div>
    );
  }
}
export default Form;
