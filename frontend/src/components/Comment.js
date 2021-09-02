import { connect } from "react-redux"
import styles from "../styles/chat.module.css"
import commentsActions from "../redux/actions/commentsActions"
import { useState, useRef, useEffect } from "react"
let moment = require('moment')

const Comments = (props) => {
    const [editable, setEditable] = useState(false)
    const inputValue = useRef()

    useEffect(() => {
        setEditable(false)
    }, [props.render])

    const editComment = (id) => {
        setEditable(!editable)
    }


    let owner = props.comment.userId._id === props.id ? true : false
    let toRender = editable
        ? <textarea ref={inputValue} className={owner ? `${styles.owner}` : `${styles.noOwner}`, editable && `${styles.whiteInput}`} autoFocus={owner ? true : false} defaultValue={props.comment.comment}></textarea>
        : <span className={owner ? `${styles.owner}` : `${styles.noOwner}`}>{props.comment.comment}</span>


    return (
        <div className={styles.singleComment}>
            <div className={styles.userPicture} style={{ backgroundImage: `url('${props.comment.userId.imageUrl}')` }}></div>
            <div className={styles.commentInfo}>
                <h4>{`${props.comment.userId.firstName}  ${props.comment.userId.lastName[0]}.`}</h4>
                {toRender}
                {/* <textarea className={owner ? `${styles.owner}` : `${styles.noOwner}`} disabled value={props.comment.comment}></textarea> */}
                <span className={styles.date}>{moment(props.comment.date).fromNow()}</span>
            </div>
            {owner
                ? <div className={styles.iconsContainer}>
                    {/* {editable && <div onClick={() => { return (props.editComment(props.comment._id, inputValue.current.value), setEditable(false)) }} className={styles.sendIcon} style={{ backgroundImage: "url('/assets/arrow.png')" }}></div>} */}
                    {editable && <div onClick={() => props.editComment(props.comment._id, inputValue.current.value)} className={styles.sendIcon} style={{ backgroundImage: "url('/assets/arrow.png')" }}></div>}
                    <div onClick={() => editComment(props.comment._id)} className={styles.editIcon} style={{ backgroundImage: `url(${editable ? '/assets/cancel.png' : '/assets/edit.png'})` }}></div>
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