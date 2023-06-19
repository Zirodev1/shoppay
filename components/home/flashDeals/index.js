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
        <Countdown/>
      </div>
      <Swiper
        slidesPerView={5}
        spaceBetween={20}
        navigation={true}
        modules={[Navigation]}
        className="flashDeals__swiper"      
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
