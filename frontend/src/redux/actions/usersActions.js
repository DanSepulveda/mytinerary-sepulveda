import axios from 'axios'

const userActions = {
    createUser: (user) => {
        alert("llego al actions")
        return async (dispatch) => {
            let response = await axios.post("http://localhost:4000/api/user/signup", user)
            console.log('recibo response en action')
            console.log(response)
            if (!response.data.success) {
                console.log('entré a esta parte')
                return response
            } else {
                console.log('despacho la accion')
                dispatch({ type: "LOG_IN_USER", payload: response.data.response })
                return response
            }
        }
    },
    verifyAccess: (user) => {
        return async (dispatch) => {
            let response = await axios.post("http://localhost:4000/api/user/login", user)
            if (!response.data.success) {
                throw new Error(response.data.error)
            } else {
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
    logInLS: (token) => {
        return async (dispatch) => {
            try {
                console.log('action')
                let response = await axios.get('http://localhost:4000/api/verifyToken', {
                    headers: {
                        Authorization: 'Bearer ' + token
                    }
                })
                response.data.response.token = token
                console.log(response.data.response)
                dispatch({ type: 'LOG_IN_USER', payload: response.data.response })
            } catch (e) {
                return dispatch({ type: "LOG_OUT" })
            }

        }
    }

}

export default userActions