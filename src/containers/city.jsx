/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setActiveCity } from '../actions/index';

class City extends Component {
  handleClick = () => {
    this.props.setActiveCity(this.props.city);
  }

  render () {
    const { city } = this.props;
    let classes = "city";
    if (this.props.activeCity === city) {
      classes += " selected";
    }
    return (
      <div className={classes} onClick={this.handleClick}>
        {city.name}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    activeCity: state.activeCity
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { setActiveCity: setActiveCity },
    dispatch
  );
}


export default connect(mapStateToProps, mapDispatchToProps)(City);
