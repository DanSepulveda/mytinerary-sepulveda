import styles from "../styles/itinerary.module.css"
import React, { useState } from "react";


const Itinerary = (props) => {
  let icons = {
    drinks: '🍹',
    wood: '🌲',
    temple: '🛕',
    city: '🌇',
    architecture: '🏛️',
    friends: '🧑‍🤝‍🧑',
    dance: '💃',
    mountain: '⛰️',
    tradition: '👘',
    nature: '🍂'

  }
  const {
    user,
    image,
    title,
    description,
    price,
    duration,
    tags,
    likes,
    comments,
  } = props.itinerary;

  const [button, setButton] = useState(false);

  const toogleButton = () => {
    setButton(!button);
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
        className="icon"
        style={{ backgroundImage: `url('${icon}')` }}
      ></div>
    ));
  };

  return (
    <article className={styles.itineraryContainer}>

      <div className={!button ? `${styles.itineraryCard}` : `${styles.itineraryCardExpanded}`}>
        <div className={styles.itineraryResume}>
          <div className={styles.itineraryPicture} style={{ backgroundImage: `url('${image}')` }}>
            <h2 className={styles.itineraryTitle}>{title}</h2>
            <div className={styles.likesContainer}>
              <img className={styles.heartIcon} src="/assets/empty.png" />
              <span className={styles.likesNumber}>{likes}</span>
            </div>
          </div>
          <div className={styles.itineraryInformation} >
            <div className={styles.authorInfo}>
              <div className={styles.authorPicture} style={{ backgroundImage: `url('${user.picture}')` }}></div>
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
        <div className={styles.nocity}>
          <div
            style={{
              backgroundImage: "url('/assets/under.png')",
              height: "30vh",
            }}
          ></div>
          <div className={styles.message}>
            <h2>Oops!</h2>
            <h3>We are still working on this section.</h3>
            <h4>Please come back on August 30</h4>
          </div>
        </div>
        <div className={styles.activitiesContainer}>
          <p>Acá van las activities</p>
        </div>

        <div className={styles.chatContainer}>
          <p>Acá va a ir el chat</p>
        </div>
      </div>


    </article>
  );
};
export default Itinerary;
