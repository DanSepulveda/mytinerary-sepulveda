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
    deleteComment: (id, commentId, token) => {
        console.log(id, commentId, token)
        console.log('llego al action')
        return async (dispatch) => {
            try {
                console.log('antes de response')
                let response = await axios.put("http://localhost:4000/api/comments/" + id, { commentId, type: 'delete' }, {
                    headers: {
                        Authorization: 'Bearer ' + token
                    }
                });
                if (response.success) {
                    dispatch({ type: 'UPDATE', payload: null })
                }
            } catch (e) {
                return false
            }
        }
    }
}

export default commentsActions;
