import React, { Component } from "react";

class WeatherWind extends Component {
  constructor(props) {
    super(props);
    console.log("WeatherWind: ", props);

    this.state = props.data;
    this.units = props.units;
  }

  

  render() {
    let speed = (+this.state.speed)*0.621371;
    speed = speed.toFixed(2);
    return (<div className="Weather-Wind">
      <span className="title">Wind</span>
      <span>{speed} MPH</span>
    </div>);
  }
}

export default WeatherWind;
