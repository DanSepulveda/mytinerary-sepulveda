import axios from 'axios'

const userActions = {
    createUser: (user) => {
        return async (dispatch) => {
            let response = await axios.post("http://localhost:4000/api/user/signup", user)
            if (!response.data.success) {
                return response
            } else {
                dispatch({ type: "LOG_IN_USER", payload: response.data.response })
            }
        }
    },
    verifyAccess: (user) => {
        return async (dispatch) => {
            let response = await axios.post("http://localhost:4000/api/user/login", user)
            if (!response.data.success) {
                throw new Error(response.data.error)
            } else {
                const { } = response.data.response
                dispatch({ type: "LOG_IN_USER", payload: response.data.response })
            }
        }
    },
    logOut: () => {
        console.log('entro al logout')
        return (dispatch) => {
            dispatch({ type: "LOG_OUT", payload: null })
        }
    },
    logInLS: (dataLS) => {
        return (dispatch) => {
            dispatch({ type: 'LOG_IN_LS', payload: dataLS })
        }
    }

}

export default userActions