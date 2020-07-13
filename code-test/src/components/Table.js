import React from "react";
import "../App.css";

export default function Table(props) {
  let start = props.range[0] - 1926;
  let end = props.range[1] - 1925;
  // range of table data to be shown
  let tableReturns = props.returns.slice(start, end);
  // this will keep track of the initial year in the range to calculate
  let initial = tableReturns[0].totalReturn;

  return (
    // titles below so the Header component won't be necessary
    <table>
      <h1 className="codeTest">RetireUp Code Test</h1>
      <h2 className="indexTitle">S&P 500 Yearly Index Returns</h2>
      <tr>
        {/* column titles */}
        <th>Year</th>
        <th>Total Return</th>
        <th>Cumulative Returns</th>
      </tr>
      {/* column data output, we will map the tableReturns below */}
      {tableReturns.map((row) => (
        <tr>
          <td></td>
          <td></td>
          <td></td>
        </tr>
      ))}
    </table>
  );
}
