import React, { Component } from "react";
import AllRoutes from "./components/AllRoutes";
import NavBar from "./components/NavBar";
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <AllRoutes />
      </div>
    );
  }
}

export default App;
