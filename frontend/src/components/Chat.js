import styles from "../styles/chat.module.css"
import { connect } from "react-redux"
import commentsActions from "../redux/actions/commentsActions"
import React, { useEffect, useState } from "react"
import { message } from "./Message"
import Comment from "./Comment"


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
                return false
            } catch (e) {
                alert(e)
            }
        } else {
            message('error', 'Please Log In to post a comment.')
        }
    }
    // const deleteComment = async (id) => {
    //     let newComments = uploadedComments.filter((comment)=>commet._id)
    // }
    let inputMessage = props.token ? 'Write your comment and send it!' : 'You must to be logged in to post a comment.'

    if (!uploadedComments) {
        < div className={styles.commentBox} >
            <input onChange={inputHandler} type="text" disabled={!props.token && true} placeholder={inputMessage} />
            <div onClick={postComment} className={styles.arrowIcon} style={{ backgroundImage: "url('/assets/arrow.png')" }}></div>
        </div >
    }

    return (
        <div className={styles.chatBox}>
            {console.log('se renderiza chat')}
            <h2>Comments</h2>
            <div className={styles.comments}>
                {uploadedComments.map((comment, index) => {
                    return (
                        <Comment comment={comment} key={index} itineraryId={props.itineraryId} />
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
    addComment: commentsActions.addComment
}
export default connect(mapStateToProps, mapDispatchToProps)(Chat)