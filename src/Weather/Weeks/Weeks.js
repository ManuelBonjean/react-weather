import React, { Component } from "react";

class WeatherWeeks extends Component {
  constructor(props) {
    super(props);
    console.log("WeatherWeeks: ", props);

    this.state = props.data;
    this.units = props.units;

    this.weeks = [
      'Mon',
      'Tue',
      'Wed',
      'Thu',
      'Fri',
      'Sat',
      'Sun'
    ];
  }

  

  render() {
    let d = new Date();
    let n = d.getDay();

    return (<div className="Weather-Weeks">
      <ul>
      {this.weeks.map(i => {
        return <li key={i}>{i}</li>;
      })}
      </ul>
    </div>);
  }
}

export default WeatherWeeks;
