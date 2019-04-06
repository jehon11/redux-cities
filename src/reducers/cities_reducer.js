import cities from "../../data/cities";

const CitiesReducer = (state = null, action) => {
  switch (action.type) {
    case 'SELECT_CITY':
      return state;
    default:
      return cities;
  }
};
export default CitiesReducer;
