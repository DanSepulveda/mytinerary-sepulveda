import axios from 'axios'

const userActions = {
    createUser: (user) => {
        console.log(user)
        return async (dispatch) => {
            console.log('hola')
            let response = await axios.post("http://localhost:4000/api/users", user)
            console.log(response)
            if (!response.data.success) {
                throw new Error('Error')
            }
            dispatch({ type: "CREATE_USER", payload: user })
        }
    },
    verifyAccess: (user) => {
        return async (dispatch) => {
            let response = await axios.get("http://localhost:4000/api/user/:" + user.email)
            if (!response.data.success) {
                throw new Error()
            }
            dispatch({ type: "VERIFY_ACCESS", payload: true })
        }
    }

}

export default userActions