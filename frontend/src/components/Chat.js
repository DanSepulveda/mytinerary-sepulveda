import styles from "../styles/chat.module.css"
import { connect } from "react-redux"
import commentsActions from "../redux/actions/commentsActions"
import React, { useEffect, useState } from "react"
import { message } from "./Message"
import Comment from "./Comment"
import Swal from "sweetalert2"


const Chat = (props) => {
    const { comments } = props
    const [uploadedComments, setUploadedComments] = useState([])
    const [commentToPost, setCommentToPost] = useState("")

    useEffect(() => {
        setUploadedComments(comments)
    }, [])

    const inputHandler = (e) => {
        setCommentToPost(e.target.value)
    }

    const postComment = async () => {
        if (props.token) {
            try {
                let response = await props.addComment(commentToPost, props.itineraryId, props.token)
                setUploadedComments(response.comments.comments.reverse())
                var userId = response.user
                return false
            } catch (e) {
                console.log(e)
            }
        } else {
            message('error', 'Please Log In to post a comment.')
        }
    }

    const deleteComment = async (commentId, itineraryId = props.itineraryId, token = props.token) => {
        if (props.token) {
            try {
                await props.deleteComment(commentId, itineraryId, token)
                let newComments = uploadedComments.filter((comment) => comment._id !== commentId)
                setUploadedComments(newComments)
            } catch (e) {
                console.log(e)
            }
        } else {
            message('error', 'Please Log In to post a comment.')
        }
        return false

    }

    const confirmation = (commentId) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                deleteComment(commentId)

                Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                )
            }
        })
    }

    let inputMessage = props.token ? 'Write your comment and send it!' : 'You must to be logged in to post a comment.'

    if (!uploadedComments) {
        <div className={styles.commentBox} >
            <input onChange={inputHandler} type="text" disabled={!props.token && true} placeholder={inputMessage} />
            <div onClick={postComment} className={styles.arrowIcon} style={{ backgroundImage: "url('/assets/arrow.png')" }}></div>
        </div >
    }

    return (
        <div className={styles.chatBox}>
            <h2 className={styles.title}>Comments</h2>
            <div className={styles.comments}>
                {uploadedComments.map((comment, index) => {
                    return (
                        <Comment comment={comment} key={index} itineraryId={props.itineraryId} deleteComment={confirmation} />
                    )
                })}
            </div>
            <div className={styles.commentBox}>
                <input onChange={inputHandler} type="text" disabled={!props.token && true} placeholder={inputMessage} />
                <div onClick={postComment} className={styles.arrowIcon} style={{ backgroundImage: "url('/assets/arrow.png')" }}></div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        token: state.users.token
    }
}

const mapDispatchToProps = {
    addComment: commentsActions.addComment,
    deleteComment: commentsActions.deleteComment
}

export default connect(mapStateToProps, mapDispatchToProps)(Chat)