import axios from "axios";

const commentsActions = {
    addComment: (comment, id, token) => {
        return async (dispatch) => {
            try {
                let response = await axios.put("http://localhost:4000/api/comments/" + id, { comment, type: 'add' }, {
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
    deleteComment: (commentId, itineraryId, token) => {
        return async (dispatch) => {
            try {
                console.log('antes de response')
                let response = await axios.put("http://localhost:4000/api/comments/" + itineraryId, { commentId, type: 'delete' }, {
                    headers: {
                        Authorization: 'Bearer ' + token
                    }
                });
                if (response.success) {
                    return response.success
                }
            } catch (e) {
                return false
            }
        }
    }
}

export default commentsActions;
