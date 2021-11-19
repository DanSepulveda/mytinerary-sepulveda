import axios from 'axios'
const HOST = 'http://localhost:4000'

const userActions = {
    createUser: (user) => {
        return async (dispatch) => {
            let response = await axios.post(`${HOST}/api/user/signup`, user)
            if (!response.data.success) {
                return response
            } else {
                dispatch({ type: "LOG_IN_USER", payload: response.data.response })
                return response
            }
        }
    },
    verifyAccess: (user) => {
        return async (dispatch) => {
            let response = await axios.post(`${HOST}/api/user/login`, user)
            if (!response.data.success) {
                throw new Error(response.data.error)
            } else {
                dispatch({ type: "LOG_IN_USER", payload: response.data.response })
            }
        }
    },
    logOut: () => {
        return (dispatch) => {
            dispatch({ type: "LOG_OUT", payload: null })
        }
    },
    logInLS: (token) => {
        return async (dispatch) => {
            try {
                let response = await axios.get(`${HOST}/api/verifyToken`, {
                    headers: {
                        Authorization: 'Bearer ' + token
                    }
                })
                response.data.response.token = token
                dispatch({ type: 'LOG_IN_USER', payload: response.data.response })
            } catch (e) {
                return dispatch({ type: "LOG_OUT" })
            }
        }
    }
}

export default userActions