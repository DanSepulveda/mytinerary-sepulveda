import axios from "axios";

const commentsActions = {
    addComment: (comment) => {
        return async (dispatch) => {
            let response = await axios.post("http://localhost:4000/api/comments/" + comment.id, comment);
            if (!response.data.success) {
                throw new Error("Backend - DB Error");
            } else {
                return response
            }
        };
    },
}

export default commentsActions;
