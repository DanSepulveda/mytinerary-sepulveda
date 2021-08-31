import { connect } from "react-redux"
import styles from "../styles/chat.module.css"
import commentsActions from "../redux/actions/commentsActions"
import { useState } from "react"
let moment = require('moment')

const Comments = (props) => {


    const editComment = () => {

    }

    const deleteComment = () => {
        props.deleteComment(props.itineraryId, props.comment._id, props.token)
    }

    return (
        <div className={styles.singleComment}>
            <div className={styles.userPicture} style={{ backgroundImage: `url('${props.comment.userId.imageUrl}')` }}></div>
            <div className={styles.commentInfo}>
                <h4>{`${props.comment.userId.firstName}  ${props.comment.userId.lastName[0]}.`}</h4>
                <textarea disabled value={props.comment.comment}></textarea>
                <span className={styles.date}>{moment(props.comment.date).fromNow()}</span>
            </div>
            <div className={styles.iconsContainer}>
                <div onClick={editComment} className={styles.editIcon} style={{ backgroundImage: "url('/assets/edit.png')" }}></div>
                <div onClick={deleteComment} className={styles.trashIcon} style={{ backgroundImage: "url('/assets/trash.png')" }}></div>
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
    deleteComment: commentsActions.deleteComment
}

export default connect(mapStateToProps, mapDispatchToProps)(Comments)