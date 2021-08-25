const usersReducer = (state = { newUser: [], access: false }, action) => {
    switch (action.type) {
        case "CREATE_USER":
            { console.log('entro al userReducer') }
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