import styles from "../styles/callToAction.module.css";
import { NavLink } from "react-router-dom";

const CallToAction = () => {
  return (
    <section id="call" className={styles.callAction}>
      <article>
        <img src="/assets/ninja.png" alt="Ninja Icon" className={styles.ninja} />
        <div className={styles.textContainer}>
          <div className={styles.callText}>
            <h2>There is nothing to worry about.</h2>
            <h3>You are one step closer for making your dreams come true!</h3>
            <h3>Choose your destination.</h3>
            <NavLink to="/cities" className={styles.callButton}>
              Start Now
            </NavLink>
          </div>
        </div>
      </article>
    </section>
  )
}
export default CallToAction
