import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import "../styles/Login.css";
import {} from "react-router-dom";

interface loginState {
  info: info;
}
interface info {
  email: String;
  password: String;
}
export class Login extends Component<any, loginState> {
  state = {
    info: {
      email: "",
      password: "",
    },
  };

  userHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.target.id === "email"
      ? this.setState({ info: { ...this.state.info, email: e.target.value } })
      : this.setState({
          info: { ...this.state.info, password: e.target.value },
        });
  };

  loginHandler = async () => {
    let response = await fetch("http://localhost:3002/users/login", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify(this.state.info),
      headers: new Headers({
        "Content-Type": "application/json",
      }),
    });
    if (response.ok) {
      this.props.history.push("/home");
    }
  };
  render() {
    return (
      <Container id="login">
        <img
          src="https://images-na.ssl-images-amazon.com/images/I/61nuuPxUvaL.png"
          alt=""
        />
        <div id="user">
          <p>Email</p>
          <input onChange={this.userHandler} id="email" type="text" />
        </div>
        <div id="user">
          <p>Password</p>
          <input onChange={this.userHandler} id="password" type="password" />
        </div>
        <button onClick={this.loginHandler}>Login</button>
        <p id="registerRoute">
          Not a Member yet ? <a href="/register">Register now</a>
        </p>
      </Container>
    );
  }
}

export default Login;
