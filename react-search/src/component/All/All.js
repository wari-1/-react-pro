import React, { Component } from "react";
import "./All.css";
import axios from "axios";
import Header from "../Header";
import Main from "../Main";
class All extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      val: "",
      checked: false
    };
  }
  componentDidMount() {
    axios.get("http://localhost:3009/products").then(res => {
      this.setState({
        products: res.data
      });
    });
  }
  handleInput = (e, name) => {
    const event = e.target;
    const targetVal = event.type === "checkbox" ? event.checked : event.value;
    this.setState({
      [name]: targetVal
    });
  };
  render() {
    const { products, val, checked } = this.state;
    // const productsFilter = products
    //   .filter(item => item.name.indexOf(val) !== -1)
    //   .filter(item => (checked ? item.stocked : true));
    const productsFilter = products.filter(
      item => item.name.indexOf(val) !== -1
    );
    const productsFilterTwo = checked
      ? productsFilter.filter(item => item.stocked)
      : productsFilter;
    const showProducts = productsFilterTwo.reduce((res, item) => {
      if (res.find(ele => item.category === ele.category)) {
        res.find(ele => item.category === ele.category).list.push(item);
      } else {
        res.push({
          category: item.category,
          list: [item]
        });
      }
      return res;
    }, []);
    return (
      <div>
        <Header val={val} handleInput={this.handleInput} checked={checked} />
        <Main showProducts={showProducts} />
      </div>
    );
  }
}

export default All;
