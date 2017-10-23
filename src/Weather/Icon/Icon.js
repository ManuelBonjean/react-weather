import React, { Component } from "react";

class WeatherIcon extends Component {
  constructor(props) {
    super(props);
    console.log("WeatherIcon: ", props);

    this.state = props.data;
    this.iconMap = [
      { icon: "wi-tornado" },
      { icon: "wi-day-thunderstorm" },
      { icon: "wi-hurricane" },
      { icon: "wi-thunderstorm" },
      { icon: "wi-thunderstorm" },
      { icon: "wi-sleet" },
      { icon: "wi-sleet" },
      { icon: "wi-sleet" },
      { icon: "wi-rain-mix" },
      { icon: "wi-rain-mix" },
      { icon: "wi-rain" },
      { icon: "wi-rain-mix" },
      { icon: "wi-rain-mix" },
      { icon: "wi-sprinkle" },
      { icon: "wi-snow" },
      { icon: "wi-snow-wind" },
      { icon: "wi-snow" },
      { icon: "wi-hail" },
      { icon: "wi-sleet" },
      { icon: "wi-dust" },
      { icon: "wi-fog" },
      { icon: "wi-day-haze" },
      { icon: "wi-smoke" },
      { icon: "wi-windy" },
      { icon: "wi-windy" },
      { icon: "wi-snowflake-cold" },
      { icon: "wi-cloudy" },
      { icon: "wi-night-alt-cloudy" },
      { icon: "wi-day-cloudy" },
      { icon: "wi-night-partly-cloudy" },
      { icon: "wi-day-cloudy" },
      { icon: "wi-night-clear" },
      { icon: "wi-day-sunny" },
      { icon: "wi-night-clear" },
      { icon: "wi-day-sunny" },
      { icon: "wi-day-hail" },
      { icon: "wi-hot" },
      { icon: "wi-thunderstorm" },
      { icon: "wi-storm-showers" },
      { icon: "wi-storm-showers" },
      { icon: "wi-showers" },
      { icon: "wi-snow" },
      { icon: "wi-sprinkle" },
      { icon: "wi-snow" },
      { icon: "wi-cloudy" },
      { icon: "wi-thunderstorm" },
      { icon: "wi-snow" },
      { icon: "wi-thunderstorm" }
    ];
  }

  getClassByCode (code) {
    var iconName;
    if (code < this.iconMap.length) {
        iconName = this.iconMap[code].icon;
    } else {
        // Not found
        iconName = 'wi-alien';
    }
    return 'wi ' + iconName;
  }

  render() {
    return (<div className="Weather-Icon">
      <i className={this.getClassByCode(this.state.code)}></i>
      <span>{this.state.text}</span>
    </div>);
  }
}

export default WeatherIcon;
