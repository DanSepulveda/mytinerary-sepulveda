import axios from 'axios'

const userActions = {
    createUser: (user) => {
        console.log(user)
        console.log('entro al userAction')
        return async (dispatch) => {
            let response = await axios.post("http://localhost:4000/api/user/signup", user)
            console.log(response)
            if (!response.data.success) {
                throw new Error(response.data.error)
            }
            dispatch({ type: "CREATE_USER", payload: user })
        }
    },
    verifyAccess: (user) => {
        return async (dispatch) => {
            let response = await axios.post("http://localhost:4000/api/user/login", user)
            if (!response.data.success) {
                throw new Error()
            }
            dispatch({ type: "VERIFY_ACCESS", payload: true })
        }
    }

}

export default userActions