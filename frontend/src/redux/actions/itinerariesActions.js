import axios from "axios";

const itinerariesActions = {
  getList: () => {
    return async (dispatch) => {
      let response = await axios.get("http://localhost:4000/api/itineraries");
      let info = response.data.response;
      dispatch({ type: "GET_ALL_ITINERARIES", payload: info });
    };
  },
};

export default itinerariesActions;
