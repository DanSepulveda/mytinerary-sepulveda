import styles from "../styles/cities.module.css"
import { Link } from "react-router-dom";
const Cardcity = (props) => {
  const { _id, name, src, src2, src3 } = props.city;
  return (
    <Link
      className={styles.cardLink}
      to={`/city/${_id}`}
    >
      <div
        className={`${styles.cardPicture} ${`fotito${props.index + 1}`}`}
        style={{ backgroundImage: `url('${src}')` }}
      >
        <div className={styles.color}>
          <h1>{name}</h1>
          <div style={{ width: "100%" }}>
            <img src={src2} style={{ width: "40%" }} alt="gola" />
            <img src={src3} style={{ width: "40%" }} alt="" />
          </div>
        </div>
      </div>
    </Link>
  );
};
export default Cardcity;