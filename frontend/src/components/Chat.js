import styles from "../styles/chat.module.css"
const Chat = (props) => {
    const { comments } = props
    return (
        <div className={styles.chatBox}>
            <h2>Comments</h2>
            {comments.map((comment) => {
                return (
                    <h3>hola</h3>
                )
            })}
            <div></div>
        </div>
    )

}

export default Chat