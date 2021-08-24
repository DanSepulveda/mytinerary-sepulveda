const usersReducer = (state = { newUser: [], access: false }, action) => {
    switch (action.type) {
        case "CREATE_USER":
            return {
                ...state,
                newUser: action.payload
            }
        case "VERIFY_ACCESS":
            return {
                ...state,
                access: action.payload
            }
        default:
            return {
                ...state
            }
    }
}

export default usersReducer