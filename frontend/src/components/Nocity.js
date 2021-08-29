import styles from "../styles/nocity.module.css"

const Nocity = () => {
  return (
    <div className={styles.nocity}>
      <div
        className={styles.panda}
        style={{ backgroundImage: "url('/assets/sad-panda.png')" }}
      ></div>
      <div className={styles.message}>
        <h2>WE'RE SO SORRY</h2>
        <h3>NO MATCHES FOUND</h3>
        <h4>Please try another search</h4>
      </div>
    </div>
  );
};
export default Nocity;
