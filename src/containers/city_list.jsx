/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import City from './city';

class CityList extends Component {

  render() {
    const { cities } = this.props

    return (
      <div className="cities">
        {cities.map(city => <City city={city} key={city.name} />)}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    cities: state.cities
  };
}

export default connect(mapStateToProps)(CityList);

