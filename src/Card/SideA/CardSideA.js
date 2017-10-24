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

    this.state = {
      data: props.data,
    };
    this.onChangeSide = props.onChangeSide;
  }

  componentWillReceiveProps (nextProps) {
    this.setState({
      data: nextProps.data,
    });
  }

  render() {
    return (
      <div className="CardSideA">
        <div className="Weather-Location-Container" onClick={this.onChangeSide}>
          <WeatherLocation data={this.state.data.location} />
        </div>
        <WeatherTemperature data={this.state.data.item.condition.temp} units={this.state.data.units} />
        <WeatherIcon data={this.state.data.item.condition} />
        <WeatherWind data={this.state.data.wind} units={this.state.data.units} />
        <WeatherHumidity data={this.state.data.atmosphere.humidity} />
        <WeatherWeeks />
      </div>
    );
  }
}

export default CardSideA;
