import React, { Component } from 'react';
import MapComponent from '../../Map/Map';

import './CardSideB.css';

class CardSideB extends Component {
  constructor(props) {
    super(props);

    this.state = {
      coordinates: props.data
    };
    this.onChangeSide = props.onChangeSide;
  }

  componentWillReceiveProps (nextProps) {
    this.setState({
      coordinates: nextProps.data,
    });
  }

  render() {
    return (
      <div className="CardSideB">
        <a className="btn" onClick={this.onChangeSide}>Weather</a>
        <div className="MapContainer">
          <MapComponent 
            latitude={this.state.coordinates.lat} 
            longitude={this.state.coordinates.lng}
            isMarkerShown="true" />
        </div>
      </div>
    );
  }
}

export default CardSideB;
