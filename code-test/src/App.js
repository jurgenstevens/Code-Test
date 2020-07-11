import React, { Component } from "react";
// installed semantic-ui-react
import { Container, Grid, Header, List } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
// let's start off by importing the json
import returns from "./returns/returns.json";
// import the header from the components folder
import HeaderComponent from "./components/Header";

import Slider, { Range } from "rc-slider";
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
        <Grid>
          <Grid.Row>
            <Grid.Column>
              <td>Year | Return</td>
              <List>
                {returns.reverse().map((r) => {
                  return (
                    <List.Item key={r.id}>
                      <List.Content>
                        <table>
                          <tr>
                            <td>{r.year}</td>
                            <td>{r.totalReturn}</td>
                          </tr>
                        </table>
                        <br />
                      </List.Content>
                    </List.Item>
                  );
                })}
              </List>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    );
  }
}

export default App;
