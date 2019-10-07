import React, { Component } from "react";
import { Formik } from "formik";

class Formi extends Component {
  state = {};
  render() {
    const BasicExample = () => (
      <div>
        <h1>My Form</h1>
        <Formik
          initialValues={{ name: "jared" }}
          onSubmit={(values, actions) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              actions.setSubmitting(false);
            }, 1000);
          }}
          render={props => (
            <form onSubmit={props.handleSubmit}>
              <input
                type="text"
                onChange={props.handleChange}
                onBlur={props.handleBlur}
                value={props.values.name}
                name="name"
              />
              {props.errors.name && (
                <div id="feedback">{props.errors.name}</div>
              )}
              <button type="submit">Submit</button>
            </form>
          )}
        />
      </div>
    );
    return BasicExample;
  }
}
export default Formi;
