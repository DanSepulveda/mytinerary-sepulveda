import axios from 'axios'

const userActions = {
    createUser: (user) => {
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
    logInLS: (token) => {
        return async (dispatch) => {
            try {
                let response = await axios.get('http://localhost:4000/api/verifyToken', {
                    headers: {
                        Authorization: 'Bearer ' + token
                    }
                })
                console.log(response)
                dispatch({ type: 'LOG_IN_LS', payload: null })
            } catch {
                return dispatch({ type: "LOG_OUT" })
            }

        }
    }

}

export default userActions