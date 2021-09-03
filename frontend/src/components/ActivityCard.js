import styles from "../styles/activitycard.module.css"

const ActivityCard = ({ activity }) => {
    console.log(activity)
    return (
        <div className={styles.activitiesSection}>
            <div className={styles.itineraryPicture} style={{ backgroundImage: `url('/assets/activities/${activity.image}')` }}></div>
            <h2 className={styles.title}>{activity.title}</h2>
            <p>{activity.description}</p>
        </div>
    )
}
export default ActivityCard