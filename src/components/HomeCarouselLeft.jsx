import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';


import img1 from "../assets/home/1.jpg";
import img2 from "../assets/home/2.jpg";
import img3 from "../assets/home/3.jpg";

export default function HomeCarouselLeft() {
   const images = [img1, img2, img3];

  return (
    <Swiper
      direction="vertical" 
      modules={[ Autoplay]}
      spaceBetween={0}
      slidesPerView={1}
      navigation
      autoplay={{ delay: 3846 }}
      speed={1000}  
      loop={true}
      style={{ width: "100%", height: "100%" }}
    >
      {images.map((img, index) => (
        <SwiperSlide key={index}>
          <img className='homePageSliderImg' src={img} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
