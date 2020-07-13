import React from "react";
import "../App.css";

export default function Table() {
  return (
    <table>
      <h1 className="codeTest">RetireUp Code Test</h1>
      <h2 className="indexTitle">S&P 500 Yearly Index Returns</h2>
      <tr>
        {/* column titles */}
        <th>Year</th>
        <th>Total Return</th>
        <th>Cumulative Returns</th>
      </tr>
      {/* column data output */}
    </table>
  );
}
