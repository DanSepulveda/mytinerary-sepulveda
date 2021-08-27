import axios from "axios";

const citiesActions = {
  getList: (token) => {
    return async (dispatch) => {
      console.log('get list action')
      console.log(token)
      let response = await axios.get("http://localhost:4000/api/cities", {
        headers: {
          Authorization: 'Bearer ' + token
        }
      });
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
  cleanAll: () => {
    return (dispatch) => {
      dispatch({ type: "CLEAN_ALL", payload: null })
    }
  }
}

export default citiesActions;
