import Countdown from "@/components/countdown";
import styles from "./styles.module.scss";
import { MdFlashOn } from "react-icons/md";
import { useRef, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";


import "swiper/css"
import "swiper/css/pagination";

import { Navigation } from "swiper";
import { flashDealsArray } from "@/data/home";
import FlashCard from "./Card";

export default function FlashDeals() {
  return (
    <div className={styles.flashDeals}>
      <div className={styles.flashDeals__header}>
        <h1>
          Flash Sale
          <MdFlashOn />
        </h1>
        <Countdown date = {new Date(2023, 6, 19)}/>
      </div>
      <Swiper
        slidesPerView={5}
        spaceBetween={10}
        navigation={true}
        modules={[Navigation]}
        className="flashDeals__swiper" 
        breakpoints={{
          450:{
            slidesPerView: 2,
          },
          630: {
            slidesPerView: 3,
          },
          920: {
            slidesPerView: 4,
          },
          1232: {
            slidesPerView: 5,
          },
          1520: {
            slidesPerView: 6,
          },
        }}
      >
        <div className={styles.flasdDeals__list}>{flashDealsArray.map((product, i) =>(
            <SwiperSlide>
                <FlashCard product={product} key={i}/>
            </SwiperSlide>
        ))}
        </div>
      </Swiper>
    </div>
  );
}
