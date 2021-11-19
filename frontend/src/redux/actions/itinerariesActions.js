import axios from "axios";
const HOST = 'https://mytinerary-dansep.herokuapp.com'

const itinerariesActions = {
  getList: (id) => {
    return async (dispatch) => {
      let response = await axios.get(
        `${HOST}/api/itineraries/${id}`
      );
      if (!response.data.response) {
        throw new Error("BE-DB Error");
      }
      dispatch({ type: "GET_ITINERARIES", payload: response.data.response });
    };
  },
  getActivities: (id) => {
    return async () => {
      let response = await axios.get(`${HOST}/api/activities/${id}`)
      if (!response.data.success) {
        throw new Error()
      } else {
        return response
      }
    }
  },
  likeItinerary: (id, token) => {
    return async () => {
      let response = await axios.put(`${HOST}/api/likes/${id}`, {}, {
        headers: {
          Authorization: 'Bearer ' + token
        }
      })
      if (response.data.success) {
        return response.data.response
      }
    }
  }
};

export default itinerariesActions;
