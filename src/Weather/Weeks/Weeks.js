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
    let date = new Date();
    let dayOfWeek = date.getDay();

    console.log('Day: ', dayOfWeek);

    return (<div className="Weather-Weeks">
      <ul>
      {this.weeks.map((val, i) => {
        return <li className={i === (dayOfWeek-1)?'active':''} key={i}>{val}</li>;
      })}
      </ul>
    </div>);
  }
}

export default WeatherWeeks;
