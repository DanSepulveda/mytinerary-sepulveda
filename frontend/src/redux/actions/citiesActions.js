import axios from "axios";
const HOST = 'http://localhost:4000'

const citiesActions = {
  getList: () => {
    return async (dispatch) => {
      let response = await axios.get(`${HOST}/api/cities`);
      if (!response.data.success) {
        throw new Error("Backend - DB Error");
      }
      dispatch({ type: "GET_ALL_CITIES", payload: response.data.response });
    };
  },
  getFilteredList: (search) => {
    return (dispatch) => {
      dispatch({ type: "GET_FILTERED_CITIES", payload: search });
    };
  },
  getOneCity: (id) => {
    return (dispatch) => {
      dispatch({ type: "GET_ONE_CITY", payload: id });
    };
  },
}

export default citiesActions;