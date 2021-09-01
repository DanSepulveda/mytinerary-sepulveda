import { connect } from "react-redux"
import styles from "../styles/chat.module.css"
import commentsActions from "../redux/actions/commentsActions"
let moment = require('moment')

const Comments = (props) => {
    console.log(props)
    const editComment = () => {

    }


    let owner = props.comment.userId._id === props.id ? true : false

    return (
        <div className={styles.singleComment}>
            <div className={styles.userPicture} style={{ backgroundImage: `url('${props.comment.userId.imageUrl}')` }}></div>
            <div className={styles.commentInfo}>
                <h4>{`${props.comment.userId.firstName}  ${props.comment.userId.lastName[0]}.`}</h4>
                <textarea className={owner ? `${styles.owner}` : `${styles.noOwner}`} disabled value={props.comment.comment}></textarea>
                <span className={styles.date}>{moment(props.comment.date).fromNow()}</span>
            </div>
            {owner
                ? <div className={styles.iconsContainer}>
                    <div onClick={editComment} className={styles.editIcon} style={{ backgroundImage: "url('/assets/edit.png')" }}></div>
                    <div onClick={() => props.deleteComment(props.comment._id)} className={styles.trashIcon} style={{ backgroundImage: "url('/assets/trash.png')" }}></div>
                </div>
                : null
            }
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        token: state.users.token,
        id: state.users.id
    }
}

const mapDispatchToProps = {
    // deleteComment: commentsActions.deleteComment
}

export default connect(mapStateToProps, mapDispatchToProps)(Comments)