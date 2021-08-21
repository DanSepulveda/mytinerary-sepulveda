import axios from "axios";

const itinerariesActions = {
  getList: (id) => {
    return async (dispatch) => {
      let response = await axios.get(
        `http://localhost:4000/api/itineraries/${id}`
      );
      let info = response.data.response;
      dispatch({ type: "GET_ITINERARIES", payload: info });
    };
  },
};

export default itinerariesActions;
