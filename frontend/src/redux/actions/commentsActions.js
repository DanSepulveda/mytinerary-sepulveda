import axios from "axios";

const commentsActions = {
    addComment: (comment, id, token) => {
        return async (dispatch) => {
            try {
                let response = await axios.post("http://localhost:4000/api/comments/" + id, { comment }, {
                    headers: {
                        Authorization: 'Bearer ' + token
                    }
                });
                if (!response.data.success) {
                    throw new Error("Backend - DB Error");
                } else {
                    return response.data.response
                }
            } catch (e) {
                return false
            }
        };
    },
}

export default commentsActions;
