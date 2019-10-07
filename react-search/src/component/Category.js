import React, { Component } from "react";
class Category extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { category } = this.props;
    return (
      <div>
        <div className="title1">
          <span>{category}</span>
        </div>
      </div>
    );
  }
}

export default Category;
