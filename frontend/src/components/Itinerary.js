import styles from "../styles/itinerary.module.css"
import { message } from "./Message"
import Activity from "./Activity"
import Chat from "./Chat"
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import itinerariesActions from "../redux/actions/itinerariesActions";

const Itinerary = (props) => {
  let icons = { drinks: '🍹', wood: '🌲', temple: '🛕', city: '🌇', architecture: '🏛️', friends: '🧑‍🤝‍🧑', dance: '💃', mountain: '⛰️', tradition: '👘', nature: '🍂' }

  const { _id, user, image, title, description, price, duration, tags, likes, comments, } = props.itinerary;

  const [button, setButton] = useState(false);
  const [activities, setActivities] = useState([])
  const [likesAux, setLikesAux] = useState(likes)
  const [userId, setUserId] = useState(null)

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
        console.log(response)
        setLikesAux(response.likes)
        setUserId(response.user)
      } catch (e) {
        alert('error')
      }
    } else {
      message('warning', "You must to be Logged In to like an itinerary.")
    }
  }

  let condition = likesAux.includes(userId) ? "/assets/full.png" : "/assets/empty.png"

  return (
    <article className={styles.itineraryContainer} >
      {console.log("se renderiza itinerary")}
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

      <div className={!button ? `${styles.detailsContainer}` : `${styles.detailsContainerExpanded}`}>
        {/* <div className={styles.nocity}>
          <div
            style={{
              backgroundImage: "url('/assets/under.png')",
              height: "30vh",
            }}
            className={styles.panda}
          ></div>
          <div className={styles.message}>
            <h2>Oops!</h2>
            <h3>We are still working on this section.</h3>
            <h4>Please come back on August 30</h4>
          </div>
        </div> */}
        <div className={styles.activitiesContainer}>
          {activities.map((activity) => <Activity activity={activity} key={activity._id} />)}
        </div>
        {/* <div className={styles.activitiesContainer}>
          <Activity activities={activities} />
        </div> */}

        <div className={styles.chatContainer}>
          <Chat comments={comments} itineraryId={_id} />
        </div>
      </div>


    </article >
  );
};
const mapStateToProps = (state) => {
  return {
    token: state.users.token
  }
}

const mapDispatchToProps = {
  getActivities: itinerariesActions.getActivities,
  likeItinerary: itinerariesActions.likeItinerary
}

export default connect(mapStateToProps, mapDispatchToProps)(Itinerary)
