const commentsReducer = (state = { update: true }, action) => {
    switch (action.type) {
        case "UPDATE":
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