import React, { useState, useEffect } from "react";
import styles from "./About.module.css";
import { getImageUrl } from "../../utils";
import { Separator } from "../Shared/Separator/Separator";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, EffectCoverflow, Autoplay } from "swiper/modules";
import images from "../../data/about.json";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

export const About = () => {
  const [slides, setSlidesPerView] = useState(
    window.innerWidth <= 600 ? 1 : window.innerWidth <= 850 ? 2 : 4
  );

  useEffect(() => {
    const handleResize = () => {
      setSlidesPerView(
        window.innerWidth <= 600 ? 1 : window.innerWidth <= 850 ? 2 : 4
      );
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section
      className={styles.container}
      id="about"
      data-aos="fade-down"
      data-aos-easing="ease-in-out"
      data-aos-duration="1000"
    >
      <label>
        <Separator section={"About Me"} />
      </label>
      <div className={styles.content}>
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={slides}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: false,
          }}
          pagination={{ clickable: true, dynamicBullets: true }}
          modules={[EffectCoverflow, Pagination, Autoplay]}
          className={styles.mySwiper}
        >
          {images.map((image, id) => {
            return (
              <SwiperSlide key={id} className={styles.mySwiperSlide}>
                <img src={getImageUrl(image.path)} alt={image.title} />
              </SwiperSlide>
            );
          })}
          ;
        </Swiper>
      </div>
    </section>
  );
};
