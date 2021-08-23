import React, { useState } from "react";
import "../../styles/itinerary.css";

const Itinerary = (props) => {
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
    <article
      key={Math.random()}
      className={
        button ? "itinerary-container-expanded" : "itinerary-container"
      }
    >
      <div className="info-container">
        <div
          className="itinerary-picture"
          style={{ backgroundImage: `url('${image}')` }}
        >
          <h2 className="itinerary-title">{title}</h2>
          <div className="likes-container">
            <img className="heart-icon" src="/assets/empty.png" />
            <span className="likes-number">{likes}</span>
          </div>
        </div>
        <div className="itinerary-body">
          <div className="author-info">
            <div
              className="author-picture"
              style={{ backgroundImage: `url('${user.picture}')` }}
            ></div>
            <h3>{user.name}</h3>
          </div>
          <div>
            <div className="itinerary-info">
              <div className="price-container">
                <span style={{ fontSize: "1.5rem" }}>Price</span>
                <div className="icon-container">
                  {generateIcon(
                    price,
                    "/assets/coin.png",
                    "/assets/coin-empty.png"
                  )}
                </div>
              </div>
              <div className="duration-container">
                <div
                  className="icon"
                  style={{ backgroundImage: "url('/assets/clock.png')" }}
                ></div>
                <span style={{ fontSize: "1.5rem" }}>{duration} hours.</span>
              </div>
            </div>
            <p>{description}</p>
            <div>
              {tags.map((tag) => (
                <span className="tag" key={tag}>
                  {`#${tag} `}
                </span>
              ))}
            </div>
          </div>
          <button onClick={toogleButton}>
            {button ? "View Less" : "View More"}
          </button>
        </div>
      </div>
      {button && (
        <div className="chat-container-expanded">
          <div className="itineraries">
            <div className="nocity">
              <div
                style={{
                  backgroundImage: "url('/assets/under.png')",
                  height: "30vh",
                }}
              ></div>
              <div className="message">
                <h2>Oops!</h2>
                <h3>We are still working on this section.</h3>
                <h4>Please come back on August 30</h4>
              </div>
            </div>
          </div>
        </div>
      )}
    </article>
  );
};
export default Itinerary;
