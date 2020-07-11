import React, { Component } from "react";
import { Container, Grid, List } from "semantic-ui-react";
// let's import the json
import returns from "../returns/returns.json";

class Table extends Component {
  render() {
    return (
      <Container>
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
export default Table;
