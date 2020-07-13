import React from "react";

export default function Cumulative(props) {
  // below are the variables that will allow us to pass props
  let cur = props.cur;
  let init = props.init;
  let result = (cur - init) / init; // cumulative returns the results here
  return (
    // ternary operator will allow css to change num color to red if num is negative
    // also, result is fixed to three decimal places
    <div className={result < 0 ? "negatives" : ""}>{result.toFixed(3)}</div>
  );
}
