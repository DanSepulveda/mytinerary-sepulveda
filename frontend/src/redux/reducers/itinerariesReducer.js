const itinerariesReducer = (state = { itinerariesList: [] }, action) => {
  switch (action.type) {
    case "GET_ITINERARIES":
      return {
        itinerariesList: action.payload,
      };
    default:
      return state;
  }
};

export default itinerariesReducer;
