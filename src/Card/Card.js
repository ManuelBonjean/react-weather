import React, { Component } from "react";
import axios from "axios";

import CardSideA from "./SideA/CardSideA";
import CardSideB from "./SideB/CardSideB";
import "./Card.css";

class Card extends Component {
  constructor(props) {
    super(props);

    this.state = {
      position: null,
      weather: null
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
      return <CardSideA data={this.state.weather} />;
    }
  }
  loadCardB () {
    if (this.state.position) {
      return <CardSideB data={this.state.position} />;
    }
  }

  showLoading () {
    if (!this.state.position || !this.state.weather) {
      return <span>Caricamento</span>;
    }
  }



  render() {
    return (
      <div className="Card">
        {this.showLoading()}
        {this.loadCardA()}
        {this.loadCardB()}
      </div>
    );
  }
}

export default Card;
