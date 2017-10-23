import React, { Component } from 'react';

class WeatherHumidity extends Component {
  constructor(props) {
    super(props);
    console.log('WeatherHumidity: ', props);

    this.props = props;
  }

  render() {
    return (
      <div className="Weather-Humidity">
        <span className="title">HUMIDITY</span>
        <span>{this.props.data}%</span>
      </div>
    );
  }
}

export default WeatherHumidity;
