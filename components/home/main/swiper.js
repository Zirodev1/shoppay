import styles from "./styles.module.scss"
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper";

export default function MainSwiper() {
  return (
    <>
        <Swiper
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
            pagination={{
                clickable: true,
            }}
            autoplay={{
                delay: 4000,
                disableOnInteraction: false,
              }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mainSwiper"
            >
                {[...Array(10).keys()].map((i) => (
                    <SwiperSlide>
                        <img src={`/images/swiper/${i + 1}.jpg`} alt="" />
                    </SwiperSlide>
                ))}
        </Swiper>
    </>
  )
}
