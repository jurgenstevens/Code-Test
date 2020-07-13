import React, { Component } from "react";
// installed semantic-ui-react
import { Container } from "semantic-ui-react";
// import the returns json
import returns from "./returns/returns.json";
import "semantic-ui-css/semantic.min.css";
import Slider from "./components/Slider";
import Table from "./components/Table";
import "rc-slider/assets/index.css";

class App extends Component {
  // we will use state so the values can change
  constructor(props) {
    // this will sort the json's years by ascending
    let sortedReturns = returns.sort((a, b) => a.year - b.year);
    // the slider changes as you add/remove data
    let min = sortedReturns[0]["year"];
    let max = sortedReturns[returns.length - 1]["year"];

    // the props will be exported for the slider and table components functionality
    super(props);
    this.state = {
      returns: sortedReturns,
      min: min,
      max: max,
      sliderValues: [min, max],
    };
  }

  // handles the change above w/ min/max
  handleChange = (sliderValues) => {
    this.setState({ sliderValues });
  };

  render() {
    const { sliderValues } = this.state;
    return (
      <Container>
        <h1 className="codeTest">RetireUp Code Test</h1>
        <h2 className="indexTitle">S&P 500 Yearly Index Returns</h2>
        {/* Below is the Slider component, setting up the attributes w/ this.state will allow the data to go from here to the component and back */}
        <Slider
          min={this.state.min}
          max={this.state.max}
          onChange={this.handleChange}
          defaultValue={sliderValues}
        />
        {/* Below is the Table component, setting up the attributes w/ this.state will allow the data to go from here to the component and back */}
        <Table returns={this.state.returns} range={sliderValues} />
      </Container>
    );
  }
}

export default App;
