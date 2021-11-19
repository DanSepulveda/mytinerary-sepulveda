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
      src: "/assets/cities/kamakura.jpg",
      name: "Kamakura",
    },
    {
      src: "/assets/cities/kobe.jpg",
      name: "Kobe",
    },
    {
      src: "/assets/cities/kyoto.jpg",
      name: "Kyoto",
    },
    {
      src: "/assets/cities/nagasaki.jpg",
      name: "Nagasaki",
    },
  ],
  [
    {
      src: "/assets/cities/nara.jpg",
      name: "Nara",
    },
    {
      src: "/assets/cities/okinawa.jpg",
      name: "Okinawa",
    },
    {
      src: "/assets/cities/osaka.jpg",
      name: "Osaka",
    },
    {
      src: "/assets/cities/tokyo.jpg",
      name: "Tokyo",
    },
  ],
  [
    {
      src: "/assets/cities/yokohama.jpg",
      name: "Yokohama",
    },
    {
      src: "/assets/cities/sapporo.jpg",
      name: "Sapporo",
    },
    {
      src: "/assets/cities/hiroshima.jpg",
      name: "Hiroshima",
    },
    {
      src: "/assets/cities/kumamoto.jpg",
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
