import React, { Component } from "react";
import "./Footer.css";
class Footer extends Component {
  state = {};
  render() {
    const { type, activeNum, changeTag } = this.props;
    return (
      <div className="footer">
        <span className="todo-count">{`${activeNum} ${
          activeNum === 1 ? "item" : "items"
        } left`}</span>
        <ul className="filters">
          <li
            onClick={() => changeTag({ type: "all" })}
            className={type === "all" ? "isActive" : ""}
            style={{ cursor: "pointer" }}
          >
            all
          </li>
          <li
            onClick={() => changeTag({ type: "active" })}
            className={type === "active" ? "isActive" : ""}
            style={{ cursor: "pointer" }}
          >
            active
          </li>
          <li
            onClick={() => changeTag({ type: "completed" })}
            className={type === "completed" ? "isActive" : ""}
            style={{ cursor: "pointer" }}
          >
            completed
          </li>
        </ul>
      </div>
    );
  }
}

export default Footer;
