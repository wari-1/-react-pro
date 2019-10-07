import React, { Component } from "react";
import "./Home.css";
class Home extends Component {
  state = {
    val: "",
    todos: [],
    type: "all",
    isAll: false
  };
  clickText = event => {
    this.setState({
      val: event.target.value
    });
  };
  add = e => {
    const { todos, val } = this.state;
    if (e.which === 13) {
      if (val.trim()) {
        this.setState({
          todos: [
            ...todos,
            {
              id: new Date().getTime(),
              text: val,
              isCompleted: false
            }
          ].reverse(),
          val: ""
        });
      } else {
        alert("请输入相关内容");
      }
    }
  };
  changeCompleted = id => {
    const { todos } = this.state;
    this.setState({
      todos: todos.map(item => {
        if (item.id === id) {
          item.isCompleted = !item.isCompleted;
        }
        return item;
      })
    });
  };
  delTodo = id => {
    const { todos } = this.state;
    this.setState({
      todos: todos.filter(item => item.id !== id)
    });
  };
  changeTag = tag => {
    this.setState({
      type: tag.type
    });
  };
  changeAll = () => {
    const { todos, isAll } = this.state;
    if (isAll) {
      this.setState({
        todos: todos.map(item => {
          return {
            ...item,
            isCompleted: false
          };
        }),
        isAll: false
      });
    } else {
      this.setState({
        todos: todos.map(item => {
          return {
            ...item,
            isCompleted: true
          };
        }),
        isAll: true
      });
    }
  };
  render() {
    const { val, todos, type } = this.state;
    // console.log(todos);
    const activeNum = todos.filter(item => !item.isCompleted).length;
    const showTodos =
      type === "all"
        ? todos
        : type === "active"
        ? todos.filter(item => !item.isCompleted)
        : todos.filter(item => item.isCompleted);
    const showTodosList = showTodos.map(item => (
      <li className={item.isCompleted ? "completed" : "active"} key={item.id}>
        <div className="view">
          <input type="checkbox" id="label" className="toggle" />
          <label htmlFor="label" onClick={() => this.changeCompleted(item.id)}>
            {item.text}
            <i
              className={item.isCompleted ? "fa fa-check show" : "fa fa-check"}
            />
          </label>
          <button className="destroy" onClick={() => this.delTodo(item.id)} />
        </div>
      </li>
    ));
    return (
      <div>
        <div className="header">
          <div className="title">
            <i
              className="fa fa-angle-down"
              onClick={() => this.changeAll()}
              style={{ cursor: "pointer" }}
            />
            <input
              type="text"
              value={val}
              className="new-todo"
              onChange={e => this.clickText(e)}
              onKeyPress={this.add}
            />
            {/* <button onClick={this.add} className="submit">
              提交
            </button> */}
          </div>
        </div>
        <section className="main">
          <ul className="todo-list">{showTodosList}</ul>
        </section>
        <div className="footer">
          <span className="todo-count">{`${activeNum} ${
            activeNum === 1 ? "item" : "items"
          } left`}</span>
          <ul className="filters">
            <li
              onClick={() => this.changeTag({ type: "all" })}
              className={type === "all" ? "isActive" : ""}
              style={{ cursor: "pointer" }}
            >
              all
            </li>
            <li
              onClick={() => this.changeTag({ type: "active" })}
              className={type === "active" ? "isActive" : ""}
              style={{ cursor: "pointer" }}
            >
              active
            </li>
            <li
              onClick={() => this.changeTag({ type: "completed" })}
              className={type === "completed" ? "isActive" : ""}
              style={{ cursor: "pointer" }}
            >
              completed
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Home;
