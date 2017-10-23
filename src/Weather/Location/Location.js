import React, { Component } from "react";

class WeatherLocation extends Component {
  constructor(props) {
    super(props);
    console.log("WeatherLocation: ", props);

    this.state = props.data;
  }

  render() {
    return <div className="Weather-Location">{this.state.city}</div>;
  }
}

export default WeatherLocation;
