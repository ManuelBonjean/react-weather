import React, { Component } from "react";

import './Location.css';
import LocationIcon from './location.png';

class WeatherLocation extends Component {
  constructor(props) {
    super(props);
    console.log("WeatherLocation: ", props);

    this.state = props.data;
  }

  render() {
    return (<div className="Weather-Location">
      <img src={LocationIcon} width="11" height="20" alt="Location" />
      <span>{this.state.city}</span>
    </div>);
  }
}

export default WeatherLocation;
