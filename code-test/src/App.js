import React, { Component } from "react";
// installed semantic-ui-react
import { Container } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import Slider from "./components/Slider";
import Table from "./components/Table";
import "rc-slider/assets/index.css";

class App extends Component {
  // we will use state so the values can change
  render() {
    return (
      <div>
        <h1>Hello from App.js</h1>
        {/* Below is the Slider component */}
        <Slider />
        {/* Below is the Table component */}
        <Table />
      </div>
    );
  }
}

export default App;
