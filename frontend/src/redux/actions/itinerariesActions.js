import axios from "axios";

const itinerariesActions = {
  getList: (id) => {
    return async (dispatch) => {
      let response = await axios.get(
        `http://localhost:4000/api/itineraries/${id}`
      );
      if (!response.data.response) {
        throw new Error("BE-DB Error");
      }
      dispatch({ type: "GET_ITINERARIES", payload: response.data.response });
    };
  },
  getActivities: (id) => {
    return async (dispatch) => {
      let response = await axios.get("http://localhost:4000/api/activities/" + id)
      if (!response.data.success) {
        throw new Error()
      } else {
        return response
      }
    }
  },
  likeItinerary: (id, token) => {
    return async (dispatch) => {
      let response = await axios.put("http://localhost:4000/likes/" + id, token)
    }
  }
};

export default itinerariesActions;
