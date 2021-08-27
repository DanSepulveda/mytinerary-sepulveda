import styles from "../styles/carousel.module.css";
import React, { useState } from "react";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from "reactstrap";

const items = [
  [
    {
      src: "/assets/cities/kamakura.png",
      name: "Kamakura",
    },
    {
      src: "/assets/cities/Kobe.png",
      name: "Kobe",
    },
    {
      src: "/assets/cities/Kyoto.png",
      name: "Kyoto",
    },
    {
      src: "/assets/cities/Nagasaki.png",
      name: "Nagasaki",
    },
  ],
  [
    {
      src: "/assets/cities/nara.png",
      name: "Nara",
    },
    {
      src: "/assets/cities/okinawa.png",
      name: "Okinawa",
    },
    {
      src: "/assets/cities/osaka.png",
      name: "Osaka",
    },
    {
      src: "/assets/cities/tokyo.png",
      name: "Tokyo",
    },
  ],
  [
    {
      src: "/assets/cities/yokohama.png",
      name: "Yokohama",
    },
    {
      src: "/assets/cities/sapporo.png",
      name: "Sapporo",
    },
    {
      src: "/assets/cities/hiroshima.png",
      name: "Hiroshima",
    },
    {
      src: "/assets/cities/kumamoto.png",
      name: "Kumamoto",
    },
  ],
];

const Slides = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item, index) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={index}
      >
        <div className={styles.singleSlide}>
          {item.map((slide, index) => {
            return (
              <div
                key={slide.name}
                className={`${styles.image} ${`image${index}`}`}
                style={{ backgroundImage: `url('${slide.src}')` }}
              >
                <span>{slide.name}</span>
              </div>
            );
          })}
        </div>
        <CarouselCaption captionText="" captionHeader="" />
      </CarouselItem>
    );
  });

  return (
    <section className={styles.carouselBox}>
      <h2>Popular Mytineraries</h2>
      <Carousel activeIndex={activeIndex} next={next} previous={previous}>
        <CarouselIndicators
          items={slides}
          activeIndex={activeIndex}
          key={activeIndex}
          onClickHandler={goToIndex}
        />
        {slides}
        <CarouselControl
          direction="prev"
          directionText=" "
          onClickHandler={previous}
        />
        <CarouselControl
          direction="next"
          directionText=" "
          onClickHandler={next}
        />
      </Carousel>
    </section>
  );
};

export default Slides;
