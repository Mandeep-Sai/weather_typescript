import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import "../styles/Login.css";

export class Login extends Component {
  userHandler = () => {};
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
        <button>Login</button>
        <p id="registerRoute">
          Not a Member yet ? <a href="/register">Register now</a>
        </p>
      </Container>
    );
  }
}

export default Login;
