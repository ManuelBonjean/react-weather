import React, { Component } from 'react';

class WeatherTemperature extends Component {
  constructor(props) {
    super(props);
    console.log('WeatherTemperature: ', props);

    this.props = props;
    this.units = props.units;
  }

  render() {
    return (
      <div className="Weather-Temperature">
        {this.props.data}&deg;
      </div>
    );
  }
}

export default WeatherTemperature;
