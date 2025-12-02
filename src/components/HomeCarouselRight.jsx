import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

import img4 from "../assets/home/4.jpg";
import img5 from "../assets/home/5.jpg";
import img6 from "../assets/home/6.jpg";

export default function HomeCarouselRight() {
  const images = [img4, img5, img6];

  return (
    <Swiper
      direction="vertical"
      modules={[Autoplay]}
      spaceBetween={0}
      slidesPerView={1}
      autoplay={{
        delay: 3846,
        reverseDirection: true   // 👈 Slide goes downward
      }}
      allowTouchMove={false}
      mousewheel={false}
      speed={1000}  
      loop={true}
      style={{ width: "100%", height: "100%" }}
    >
      {images.map((img, index) => (
        <SwiperSlide key={index}>
          <img
            className='homePageSliderImg'
            src={img}
            alt=""
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
