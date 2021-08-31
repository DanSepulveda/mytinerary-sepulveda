const commentsReducer = (state = { update: true }, action) => {
    switch (action.type) {
        case "FETCH_CITIES":
            return {
                update: !state.update
            }
        default:
            return {
                ...state
            }
    }
}

export default commentsReducer