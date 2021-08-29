const citiesReducer = (
  state = { allCities: [], filteredCities: [], chosenCity: {} },
  action
) => {
  switch (action.type) {
    case "GET_ALL_CITIES":
      return {
        ...state,
        allCities: action.payload,
        filteredCities: action.payload,
      };
    case "GET_FILTERED_CITIES":
      let filtered = state.allCities.filter((city) =>
        city.name.toLowerCase().startsWith(action.payload.trim().toLowerCase())
      );
      return {
        ...state,
        filteredCities: filtered,
      };
    case "GET_ONE_CITY":
      let chosen = state.allCities.find((city) => city._id === action.payload);
      return {
        ...state,
        chosenCity: chosen,
      };
    default:
      return state;
  }
};

export default citiesReducer;
