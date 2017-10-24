import React, { Component } from "react";
import axios from "axios";

import Loader from "../Loader/Loader";
import CardSideA from "./SideA/CardSideA";
import CardSideB from "./SideB/CardSideB";
import "./Card.css";

class Card extends Component {
  constructor(props) {
    super(props);

    this.state = {
      position: null,
      weather: null,
      sideActive: 'A'
    };
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition((position) => {
      this.setState({
        position: {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        }
      });

      this.loadWeather(this.state.position.lat+','+this.state.position.lng); //load weather using your lat/lng coordinates
    });
  }

  loadWeather(coordinates) {
    let yqlString =
      'select * from weather.forecast where woeid in (select woeid from geo.places where text="(' + coordinates + ')") AND u="c"';

    axios
      .get('https://query.yahooapis.com/v1/public/yql?q=' + yqlString + '&units=c&format=json&language=it_IT')
        .then((response) => {
          let result = response.data.query.results.channel;
          console.log('Weather: ', result);
          this.setState({
            weather: result
          });
        });
  }

  loadCardA () {
    if (this.state.weather) {
      return <CardSideA data={this.state.weather} onChangeSide={this.changeSide} />;
    }
  }
  loadCardB () {
    if (this.state.position) {
      return <CardSideB data={this.state.position} onChangeSide={this.changeSide}/>;
    }
  }

  showLoading () {
    if (!this.state.position || !this.state.weather) {
      return <Loader />;
    }
  }

  changeSide = () => {
    console.log('Change Side');
    let sideActive = 'A';
    if (this.state.sideActive === 'A') {
      sideActive = 'B';
    }
    this.setState({
      sideActive
    });
  }



  render() {
    console.log('Render');
    return (
      <div className={'Card ' + (this.state.sideActive === 'B'?'changeSide':'')}>
        {this.showLoading()}
        {this.loadCardA()}
        {this.loadCardB()}
      </div>
    );
  }
}

export default Card;
