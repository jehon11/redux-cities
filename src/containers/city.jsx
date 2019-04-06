/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';

class City extends Component {
  render () {
    const { city } = this.props;
    return (
      <div>
        {city.name}
      </div>
    );
  }
}

export default City;
