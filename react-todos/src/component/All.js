import React, { Component } from "react";
import Header from "./Header/Header";
import Todos from "./Todos/Todos";
import Footer from "./Footer/Footer";
import axios from "axios";
class All extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      type: "all",
      isAll: false
    };
  }
  componentDidMount() {
    // console.log("生命周期cdm");
    axios.get("http://localhost:3000/todos").then(res => {
      this.setState({
        todos: res.data
      });
    });
    axios.get("http://localhost:3000/type").then(res => {
      this.setState({
        type: res.data.type
      });
    });
  }
  componentDidUpdate(prevProps) {
    // console.log("生命周期cdu");
  }
  add = val => {
    const { todos } = this.state;
    if (val.trim()) {
      axios
        .post("http://localhost:3000/todos", {
          text: val,
          isCompleted: false
        })
        .then(res => {
          this.setState({
            todos: [...todos, res.data].reverse()
          });
        });
    } else {
      alert("请输入相关内容");
    }
  };
  changeAll = () => {
    const { todos, isAll } = this.state;
    // const arr=todos.map(item=>axios.patch(`http://localhost:3008/todos/${item.id}`,{
    //   isCompleted:false
    // }))
    if (isAll) {
      // Promise.all(arr)
      // axios.patch("http://localhost:3008/todos", {}).then(res => {
      this.setState({
        todos: todos.map(item => {
          return {
            ...item,
            isCompleted: false
          };
        }),
        isAll: false
      });
      // });
    } else {
      // axios.patch("http://localhost:3008/todos", {}).then(res => {
      this.setState({
        todos: todos.map(item => {
          return {
            ...item,
            isCompleted: true
          };
        }),
        isAll: true
      });
      // });
    }
  };
  changeCompleted = ele => {
    const { todos } = this.state;
    axios
      .patch(`http://localhost:3000/todos/${ele.id}`, {
        isCompleted: !ele.isCompleted
      })
      .then(res => {
        // console.log(res.data);
        this.setState({
          todos: todos.map(item => {
            if (item.id === ele.id) {
              item.isCompleted = !item.isCompleted;
            }
            return item;
          })
        });
      });
  };
  delTodo = id => {
    const { todos } = this.state;
    axios.delete(`http://localhost:3000/todos/${id}`).then(res => {
      this.setState({
        todos: todos.filter(item => item.id !== id)
      });
    });
  };
  changeTag = tag => {
    axios
      .patch("http://localhost:3000/type", {
        type: tag.type
      })
      .then(res => {
        // console.log(res.data);
        this.setState({
          type: res.data.type
        });
      });
  };
  render() {
    // console.log("生命周期render");

    const { todos, val, isAll, type } = this.state;
    const activeNum = todos.filter(item => !item.isCompleted).length;
    const showTodos =
      type === "all"
        ? todos
        : type === "active"
        ? todos.filter(item => !item.isCompleted)
        : todos.filter(item => item.isCompleted);
    return (
      <div>
        <Header add={this.add} changeAll={this.changeAll} isAll={isAll} />
        <Todos
          showTodos={showTodos}
          delTodo={this.delTodo}
          changeCompleted={this.changeCompleted}
        />
        <Footer type={type} activeNum={activeNum} changeTag={this.changeTag} />
      </div>
    );
  }
}

export default All;
