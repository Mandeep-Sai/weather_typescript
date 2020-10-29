import React from "react";
import logo from "./logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

import SearchComp from "./components/SearchComp";
import Login from "./components/Login";

function App() {
  return (
    <Router>
      <div className="App">
        <Container style={{ width: "100%", height: "100%" }}>
         
          <Route path="/" component={SearchComp} />
        </Container>
      </div>
    </Router>
  );
}

export default App;
