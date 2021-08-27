import styles from "../styles/info.module.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Info = () => {
  let cards = [
    {
      title: "Quality",
      content:
        "MyTinerary is certified by the Japanese Ministry of Land, Infrastructure, Transport and Tourism, and our commitment to professional staff development has been recognised with an education award in Japan.",
      img: "/assets/quality.png",
      aos: "fade-down",
    },
    {
      title: "Price",
      content:
        "We are happy to offer our clients the best rates on our itineraries, transfers, food and other services. We have several contracts with some suppliers, so we can offer you a lower price",
      img: "/assets/price.png",
      aos: "fade-up",
    },
    {
      title: "Support",
      content:
        "We know that there is no unique way to make a perfect trip because each person has his special needs and desires. We always listen to you first and then suggest the best itinerary for you",
      img: "/assets/support.png",
      aos: "fade-down",
    },
  ];

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <section className={styles.infoSection} id="info">
      <div className={styles.sectionTitle}>
        <h2>Why choose us</h2>
        <a href="#call">
          <img
            className={styles.arrow}
            src="/assets/down-white.png"
            alt="Down arrow"
          />
        </a>
      </div>
      <div className={styles.cardSection}>
        {cards.map((card) => (
          <div className={styles.border} data-aos={card.aos} key={card.title}>
            <article className={styles.cardInfo}>
              <img src={card.img} alt={`${card.title} Icon`} />
              <div>
                <h2>{card.title}</h2>
                <p>{card.content}</p>
              </div>
            </article>
          </div>
        ))}
      </div>
    </section>
  );
};
export default Info;
