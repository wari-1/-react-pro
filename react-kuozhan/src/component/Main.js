import React, { Component } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "./Main.css";
import Home from "./Home";
import Abot from "./Abot";
class Main extends Component {
  state = {};
  render() {
    console.log(this.props);
    const { location } = this.props;
    return (
      <div style={{ position: "relative" }}>
        <TransitionGroup>
          <CSSTransition
            timeout={2000}
            classNames="main-fade"
            key={location.pathname}
          >
            <Switch location={location}>
              <Route path="/" component={Home} exact></Route>
              <Route path="/about" component={Abot}></Route>
            </Switch>
          </CSSTransition>
        </TransitionGroup>
      </div>
    );
  }
}

export default withRouter(Main);
