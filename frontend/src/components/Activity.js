import styles from "../styles/activity.module.css"

const Activity = (props) => {
    const { activity } = props
    return (
        <div className={styles.activityImage} style={{ backgroundImage: `url('${activity.image}')` }}>
            <div className={styles.activityContent}>
            </div>
        </div>
    )
}

export default Activity