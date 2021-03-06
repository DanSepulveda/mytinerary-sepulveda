import styles from "../styles/itinerary.module.css"
import { message } from "./Message"
import Activity from "./Activity"
import Chat from "./Chat"
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import itinerariesActions from "../redux/actions/itinerariesActions";
import commentsActions from "../redux/actions/commentsActions";

const Itinerary = (props) => {
  let icons = { drinks: '🍹', wood: '🌲', temple: '🛕', city: '🌇', architecture: '🏛️', friends: '🧑‍🤝‍🧑', dance: '💃', mountain: '⛰️', tradition: '👘', nature: '🍂', shopping: '🛍️', river: '🚤', museum: '🏛️', culture: '📚' }

  const { _id, user, image, title, description, price, duration, tags, likes, comments, } = props.itinerary;

  const [button, setButton] = useState(false);
  const [activities, setActivities] = useState([])
  const [likesAux, setLikesAux] = useState(likes)

  const requestActivities = async () => {
    try {
      let response = await props.getActivities(props.itinerary._id)
      if (response.data.success) {
        setActivities(response.data.response)

      } else {
        //no hay ciudades para mostrar
      }
    } catch (e) {
      //no se puede hacer fetch
    }
  }

  const toogleButton = () => {
    setButton(!button);
    if (!button && !activities.length) {
      requestActivities()
    }
  };

  const generateIcon = (qty, src, src2) => {
    let result = [];
    for (let i = 1; i <= 5; i++) {
      let rute = i <= qty ? src : src2;
      result.push(rute);
    }

    return result.map((icon, index) => (
      <div
        key={index}
        className={styles.icon}
        style={{ backgroundImage: `url('${icon}')` }}
      ></div>
    ));
  };

  const addLike = async () => {
    if (props.token) {
      try {
        let response = await props.likeItinerary(_id, props.token)
        setLikesAux(response)
      } catch (e) {
        console.log(e)
      }
    } else {
      message('warning', "You must to be Logged In to like an itinerary.")
    }
  }

  let condition = likesAux.includes(props.userId) ? "/assets/full.png" : "/assets/empty.png"

  return (
    <article className={styles.itineraryContainer} >
      <div className={!button ? `${styles.itineraryCard}` : `${styles.itineraryCardExpanded}`}>
        <div className={styles.itineraryResume}>
          <div className={styles.itineraryPicture} style={{ backgroundImage: `url('${image}')` }}>
            <h2 className={styles.itineraryTitle}>{title}</h2>
            <div className={styles.likesContainer} onClick={addLike}>
              <img className={styles.heartIcon} src={condition} alt="Heart Icon" />
              <span className={styles.likesNumber}>{likesAux.length}</span>
            </div>
          </div>
          <div className={styles.itineraryInformation} >
            <div className={styles.authorInfo}>
              <div onClick={props.funcion} className={styles.authorPicture} style={{ backgroundImage: `url('${user.picture}')` }}></div>
              <h3>{user.name}</h3>
            </div>
            <div className={styles.hashtagContainer}>
              {tags.map((tag) => (
                <span className={styles.tag} key={tag}>
                  {`#${tag}${icons[tag]}`}
                </span>
              ))}
            </div>
            <div>
              <p className={styles.description}>{description}</p>
            </div>

            <div className={styles.itineraryData}>
              <div className={styles.priceContainer}>
                <span style={{ fontSize: "1.5rem" }}>Price</span>
                <div className={styles.iconContainer}>
                  {generateIcon(
                    price,
                    "/assets/coin.png",
                    "/assets/coin-empty.png"
                  )}
                </div>
              </div>

              <div className={styles.durationContainer}>
                <div className={styles.icon} style={{ backgroundImage: "url('/assets/clock.png')" }}></div>
                <span style={{ fontSize: "1.5rem" }}>{duration} hrs.</span>
              </div>
            </div>

            <button className={styles.button62} onClick={toogleButton}>
              {button ? "View Less" : "View More"}
            </button>
          </div>
        </div>
      </div>
      {button &&
        <div className={!button ? `${styles.detailsContainer}` : `${styles.detailsContainerExpanded}`}>
          <div className={styles.activitiesContainer}>
            <h2 className={styles.title}>Activities</h2>
            <Activity activities={activities} />
          </div>
          <div className={styles.chatContainer}>
            <Chat comments={comments} itineraryId={_id} />
          </div>
        </div>
      }
    </article >
  );
};
const mapStateToProps = (state) => {
  return {
    token: state.users.token,
    userId: state.users.id
  }
}

const mapDispatchToProps = {
  getActivities: itinerariesActions.getActivities,
  likeItinerary: itinerariesActions.likeItinerary,
  deleteComment: commentsActions.deleteComment
}

export default connect(mapStateToProps, mapDispatchToProps)(Itinerary)
