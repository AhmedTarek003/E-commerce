import React, { Fragment, useState } from "react";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordR, setPasswordR] = useState("");
  const [accept, setAccept] = useState(false);

  let navigate = useNavigate();

  const clickSub = (e) => {
    e.preventDefault();
    setAccept(true);

    if (name === "" || password.length < 8 || passwordR !== password) {
      console.log("no");
    } else {
      localStorage.setItem("email", email);
      localStorage.setItem("password", password);
      navigate("/");
    }
  };
  return (
    <Fragment>
      <h1 className="text-center mt-3 mb-5">Sign Up</h1>
      <form onSubmit={clickSub} className="formSty">
        <label className="labelSty">Username</label>
        <input
          className="inputSty"
          type={"text"}
          placeholder="Enter Your Name"
          onChange={(e) => setName(e.target.value)}
        />
        {name.length === 0 && accept && (
          <p className="error">Your name is Required</p>
        )}
        <label className="labelSty">Email</label>
        <input
          className="inputSty"
          type={"email"}
          placeholder="Enter Your Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <label className="labelSty">Password</label>
        <input
          className="inputSty"
          type={"password"}
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        {password.length < 8 && accept && (
          <p className="error">Your password is short</p>
        )}
        <label className="labelSty">Repeat Password</label>
        <input
          className="inputSty"
          type={"password"}
          placeholder="Repeat Your Password"
          onChange={(e) => setPasswordR(e.target.value)}
        />
        {passwordR !== password && accept && (
          <p className="error">The repeat password is worng</p>
        )}
        <div className="subSty">
          <button className="btn btn-primary">Sign Up</button>
        </div>
      </form>
    </Fragment>
  );
}

export default SignUp;
