import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Topics from "./Topics";
import Err from "./Err";

function Main() {
  return (
    <div>
      <Switch>
        <Route path="/" exact component={Home} />
        <Redirect from="/about" to="/newabout" />
        <Route path="/newabout" component={About} />
        <Route path="/topics" component={Topics} />
        <Route path="/error" component={Err} />
        <Route path="*" component={Err} />
      </Switch>
    </div>
  );
}

export default Main;
