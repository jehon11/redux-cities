// TODO: add and export your own actions
export const setActiveCity = (city) => {
  return {
    type: "SELECT_CITY",
    payload: city
  };
};

export default {
  setActiveCity,
};
