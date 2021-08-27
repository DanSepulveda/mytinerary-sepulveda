import styles from "../styles/background.module.css"

const Background = () => {
  return (
    <div>
      <video autoPlay loop muted className={styles.background}>
        <source src="/assets/japan.mp4" type="video/mp4" />
      </video>
    </div>
  )
}

export default Background;