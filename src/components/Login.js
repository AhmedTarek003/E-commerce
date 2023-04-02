import React, { Fragment } from "react";
import { Button } from "react-bootstrap";

function Login() {
  return (
    <Fragment>
      <h1 className="text-center mt-3 mb-5">Login</h1>
      <form className="formSty">
        <label className="labelSty">Email</label>
        <input
          className="inputSty"
          type={"email"}
          placeholder="Enter Your Email"
        />
        <label className="labelSty">Password</label>
        <input className="inputSty" type={"password"} placeholder="Password" />

        <div className="subSty">
          <Button variant="primary">Login</Button>
        </div>
      </form>
    </Fragment>
  );
}

export default Login;
