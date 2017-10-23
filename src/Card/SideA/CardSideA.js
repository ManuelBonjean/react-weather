import React, { Component } from "react";

import WeatherIcon from '../../Weather/Icon/Icon';
import WeatherTemperature from '../../Weather/Temperature/Temperature';
import WeatherLocation from '../../Weather/Location/Location';
import WeatherWind from '../../Weather/Wind/Wind';
import WeatherHumidity from '../../Weather/Humidity/Humidity';
import WeatherWeeks from '../../Weather/Weeks/Weeks';

import "./CardSideA.css";

class CardSideA extends Component {
  constructor(props) {
    super(props);

    this.state = props.data;
    console.log('CardSideA: ', this.state);
  }
  render() {
    return (
      <div className="CardSideA">
        <WeatherLocation data={this.state.location} />
        <WeatherTemperature data={this.state.item.condition.temp} units={this.state.units} />
        <WeatherIcon data={this.state.item.condition} />
        <WeatherWind data={this.state.wind} units={this.state.units} />
        <WeatherHumidity data={this.state.atmosphere.humidity} />
        <WeatherWeeks data="" />
      </div>
    );
  }
}

export default CardSideA;
