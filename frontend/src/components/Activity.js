import styles from "../styles/activity.module.css"
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Activity = (props) => {
    const { activity } = props
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    return (
        <div className={styles.activityImage} style={{ backgroundImage: `url('${activity.image}')` }}>
            <div className={styles.activityContent}>
            </div>
        </div>
        // <Carousel responsive={responsive}>
        //     {activities.map((activity) => {
        //         return (
        //             <div style={{ backgroundColor: 'red', width: '100%' }}>hola</div>
        //         )
        //     })}
        // </Carousel>
    )
}

export default Activity
