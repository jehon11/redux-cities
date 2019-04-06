import cities from "../../data/cities";

const citiesReducer = (state = null, action) => {
  switch (action.type) {
    case 'CITY_SELECTED':
      return state;
    default:
      return cities;
  }
};
export default citiesReducer;
