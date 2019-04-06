import React from 'react';
import { connect } from 'react-redux';

const ActiveCity = ({ activeCity }) => {

  if (activeCity) {
    const imgUrl = `https://kitt.lewagon.com/placeholder/cities/${activeCity.slug}`
    return (
      <div className="active-city">
        <h1>{activeCity.name}</h1>
        <p>{activeCity.address}</p>
        <img className="picture" src={imgUrl} alt="" />
      </div>
    );
  }

  return (
    <div className="active-city" />
  );
};

function mapStateToProps(state) {
  return {
    activeCity: state.activeCity
  };
}

export default connect(mapStateToProps)(ActiveCity);

