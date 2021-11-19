import axios from "axios";
const HOST = 'http://localhost:4000'

const commentsActions = {
    addComment: (comment, id, token) => {
        return async () => {
            try {
                let response = await axios.put(`${HOST}/api/comments/${id}`, { comment, type: 'add' }, {
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
        return async () => {
            try {
                let response = await axios.put(`${HOST}/api/comments/${itineraryId}`, { commentId, type: 'delete' }, {
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
    },
    editComment: (commentId, comment, itineraryId, token) => {
        return async () => {
            try {
                let response = await axios.put(`${HOST}/api/comments/${itineraryId}`, { commentId, comment, type: 'edit' }, {
                    headers: {
                        Authorization: 'Bearer ' + token
                    }
                });
                if (response.data.success) {
                    return response.data.response
                }
            } catch (e) {
                return false
            }
        }
    }
}

export default commentsActions;