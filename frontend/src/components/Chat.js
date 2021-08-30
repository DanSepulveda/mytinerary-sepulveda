import styles from "../styles/chat.module.css"
const Chat = (props) => {
    const { comments } = props
    return (
        <div className={styles.chatBox}>
            <h2>Comments</h2>
            {comments.map((comment) => {
                return (
                    <div key={comment._id}>
                        <h3>{comment.userName}</h3>
                        <p>{comment.comment}</p>
                    </div>
                )
            })}
            <div></div>
        </div>
    )

}

export default Chat