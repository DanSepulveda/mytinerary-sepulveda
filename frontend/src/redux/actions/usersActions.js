import axios from 'axios'

const userActions = {
    createUser: (user) => {
        return async (dispatch) => {
            let response = await axios.post("http://localhost:4000/api/user/signup", user)
            if (!response.data.success) {
                throw new Error(response.data.error)
            }
            dispatch({ type: "CREATE_USER", payload: user })
        }
    },
    verifyAccess: (user) => {
        return async (dispatch) => {
            console.log(user)
            let response = await axios.post("http://localhost:4000/api/user/login", user)
            console.log(response)
            if (!response.data.success) {
                throw new Error(response.data.error)
            }
            dispatch({ type: "VERIFY_ACCESS", payload: true })
        }
    }

}

export default userActions