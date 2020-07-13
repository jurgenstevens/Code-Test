import React from "react";
// import from the Cumulative component
import Cumulative from "./Cumulative";
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
      {/* <h1 className="codeTest">RetireUp Code Test</h1>
      <h2 className="indexTitle">S&P 500 Yearly Index Returns</h2> */}
      <tr>
        {/* column titles */}
        <th>Year</th>
        <th>Total Return</th>
        <th>Cumulative Returns</th>
      </tr>
      {/* column data output, we will map the tableReturns below */}
      {tableReturns.map((row) => (
        <tr>
          {/* below will show the row's year */}
          <td>{row.year}</td>
          {/* below, ternary operator states that if the row's return is less than 0, then use negatives css which will turn numbers red */}
          <td className={row.totalReturn < 0 ? "negatives" : ""}>
            {row.totalReturn}
          </td>
          {/* below will display cumulative return requested through the Cumulative component 
              will add the attributes to pass props*/}
          <td>
            <Cumulative init={initial} cur={row.totalReturn} />
          </td>
        </tr>
      ))}
    </table>
  );
}
