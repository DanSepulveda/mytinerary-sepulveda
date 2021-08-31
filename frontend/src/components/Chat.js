import styles from "../styles/chat.module.css"
import { connect } from "react-redux"
import commentsActions from "../redux/actions/commentsActions"
import React, { useEffect, useState } from "react"
import { message } from "./Message"
let moment = require('moment')

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
                setUploadedComments(response.comments.reverse())
                return false
            } catch (e) {
                alert(e)
            }
        } else {
            message('error', 'Please Log In to post a comment.')
        }
    }
    let inputMessage = props.token ? 'Write your comment and send it!' : 'You must to be logged in to post a comment.'

    if (!uploadedComments) {
        < div className={styles.commentBox} >
            <input onChange={inputHandler} type="text" disabled={!props.token && true} placeholder={inputMessage} />
            <div onClick={postComment} className={styles.arrowIcon} style={{ backgroundImage: "url('/assets/arrow.png')" }}></div>
        </div >
    }


    return (
        <div className={styles.chatBox}>
            <h2>Comments</h2>
            <div className={styles.comments}>
                {uploadedComments.map((comment) => {
                    console.log(comment)
                    return (
                        <div key={comment._id} className={styles.singleComment}>
                            <div className={styles.userPicture} style={{ backgroundImage: `url('${comment.userId.imageUrl}')` }}></div>
                            <div className={styles.commentInfo}>
                                <h4>{`${comment.userId.firstName}  ${comment.userId.lastName[0]}.`}</h4>
                                <textarea disabled value={comment.comment}></textarea>
                                <span className={styles.date}>{moment(comment.date).fromNow()}</span>
                            </div>
                        </div>
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