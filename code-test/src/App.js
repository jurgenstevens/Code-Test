import React, { Component } from "react";
// installed semantic-ui-react
import { Container, Grid, Header, List } from "semantic-ui-react";
// let's start off by importing the json
import returns from "./returns/returns.json";

class App extends Component {
  render() {
    return (
      <Container>
        <Grid>
          <Grid.Row>
            <Grid.Column>
              <Header>Year | Return</Header>
              <List>
                {returns.map((r) => {
                  return (
                    <List.Item key={r.id}>
                      <List.Content>
                        {r.year} | {r.totalReturn}
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
