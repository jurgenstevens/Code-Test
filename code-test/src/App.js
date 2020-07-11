import React, { Component } from "react";
// installed semantic-ui-react
import { Container } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
// import the header and table from the components folder
import HeaderComponent from "./components/Header";
import Slider, { Range } from "rc-slider";
import Table from "./components/Table";
import "rc-slider/assets/index.css";

// map the returns json and use the reverse method for the ascending order requested
class App extends Component {
  render() {
    return (
      <Container>
        <HeaderComponent />
        <br />
        <Range />
        <br />
        <Table />
      </Container>
    );
  }
}

export default App;
