import React from "react";
import "rc-slider/assets/index.css";
import "rc-tooltip/assets/bootstrap.css";
import Slider from "rc-slider";
// the style of the Range Slider will be based on the style from the packages' css
const createSliderWithTooltip = Slider.createSliderWithTooltip;
const Range = createSliderWithTooltip(Slider.Range);

export default function RangeSlider(props) {
  const m = props.min;
  const M = props.max;
  const marks = { 1926: m, 2019: M };
  const wrapperStyle = { width: "70%", margin: 50, marginLeft: "20%" };
  return (
    // the slider's style will be based on the css in the wrapper style
    <div style={wrapperStyle}>
      <Range />
    </div>
  );
}
