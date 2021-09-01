const usersReducer = (state = { user: null, token: null, id: null }, action) => {
    switch (action.type) {
        case "LOG_IN_USER":
            console.log(action.payload)
            localStorage.setItem('token', action.payload.token)
            localStorage.setItem('name', action.payload.firstName)
            localStorage.setItem('image', action.payload.imageUrl)
            return {
                token: action.payload.token,
                user: { firstName: action.payload.firstName, imageUrl: action.payload.imageUrl, _id: action.payload.id },
                id: action.payload._id
            }
        case "LOG_OUT":
            localStorage.clear()
            return {
                user: null,
                token: null,
                id: null
            }
        case "LOG_IN_LS":
            console.log(action.payload)

            return {
                token: action.payload.token,
                user: { firstName: action.payload.firstName, imageUrl: action.payload.imageUrl, _id: action.payload.id },
                id: action.payload._id
            }
        default:
            return {
                ...state
            }
    }
}

export default usersReducer