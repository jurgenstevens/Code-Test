import React, { Component } from "react";
// installed semantic-ui-react
import { Container } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import Slider from "./components/Slider";
import Table from "./components/Table";
import "rc-slider/assets/index.css";

// map the returns json and use the reverse method for the ascending order requested
class App extends Component {
  render() {
    return (
      <Container>
        <h1>Hello from App.js</h1>
        {/* Below is the Slider component */}
        <Slider />
        {/* Below is the Table component */}
        <Table />
      </Container>
    );
  }
}

export default App;
