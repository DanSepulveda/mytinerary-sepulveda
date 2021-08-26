const usersReducer = (state = { user: null, token: null }, action) => {
    switch (action.type) {
        case "LOG_IN_USER":
            localStorage.setItem('token', action.payload.token)
            localStorage.setItem('name', action.payload.firstName)
            localStorage.setItem('image', action.payload.imageUrl)
            return {
                token: action.payload.token,
                user: { firstName: action.payload.firstName, imageUrl: action.payload.imageUrl }
            }
        case "LOG_OUT":
            localStorage.clear()
            return {
                user: null,
                token: null
            }
        case "LOG_IN_LS":
            return {
                token: action.payload.token,
                user: { firstName: action.payload.firstName, imageUrl: action.payload.imageUrl }
            }
        default:
            return {
                ...state
            }
    }
}

export default usersReducer