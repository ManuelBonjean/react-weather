import React, { Component } from 'react';
import './CardSideB.css';

class CardSideB extends Component {
  constructor(props) {
    super(props);

    this.state = props.data;
    console.log('props: ', props);
  }

  render() {
    return (
      <div className="CardSideB">
        <p>{this.state.lat}, {this.state.lng}</p>
      </div>
    );
  }
}

export default CardSideB;
