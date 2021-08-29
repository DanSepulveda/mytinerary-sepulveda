import styles from "../styles/loader.module.css"

const Loader = () => {
    return (
        <div className={styles.loader}>
            <img src="/assets/loader.gif" alt="Loader Icon" />
        </div>
    )
}
export default Loader