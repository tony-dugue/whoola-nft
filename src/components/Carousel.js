import React from 'react'
import styled from 'styled-components'

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay, EffectCards } from "swiper";

import img1 from '../assets/Nfts/bighead.svg'
import img2 from '../assets/Nfts/bighead-1.svg'
import img3 from '../assets/Nfts/bighead-2.svg'
import img4 from '../assets/Nfts/bighead-3.svg'
import img5 from '../assets/Nfts/bighead-4.svg'
import img6 from '../assets/Nfts/bighead-5.svg'
import img7 from '../assets/Nfts/bighead-6.svg'
import img8 from '../assets/Nfts/bighead-7.svg'
import img9 from '../assets/Nfts/bighead-8.svg'
import img10 from '../assets/Nfts/bighead-9.svg'

import Arrow from '../assets/Arrow.svg'

const Carousel = () => {
  return (
   <CarouselWrapper>
     <Swiper
       autoplay={{ delay: 2000, disableOnInteraction: false }}
       pagination={{ type: 'fraction' }}
       scrollbar={{ draggable: true }}
       navigation={true}
       effect={"cards"}
       grabCursor={true}
       modules={[Pagination, Navigation, Autoplay, EffectCards]}
       className="mySwiper"
     >
       <SwiperSlide><img src={img1} alt="The Whoola nfts" /></SwiperSlide>
       <SwiperSlide><img src={img2} alt="The Whoola nfts" /></SwiperSlide>
       <SwiperSlide><img src={img3} alt="The Whoola nfts" /></SwiperSlide>
       <SwiperSlide><img src={img4} alt="The Whoola nfts" /></SwiperSlide>
       <SwiperSlide><img src={img5} alt="The Whoola nfts" /></SwiperSlide>
       <SwiperSlide><img src={img6} alt="The Whoola nfts" /></SwiperSlide>
       <SwiperSlide><img src={img7} alt="The Whoola nfts" /></SwiperSlide>
       <SwiperSlide><img src={img8} alt="The Whoola nfts" /></SwiperSlide>
       <SwiperSlide><img src={img9} alt="The Whoola nfts" /></SwiperSlide>
       <SwiperSlide><img src={img10} alt="The Whoola nfts" /></SwiperSlide>
     </Swiper>
   </CarouselWrapper>
  )
}

export default Carousel

const CarouselWrapper = styled.div`
  width: 25vw;
  height: 70vh;
  
  .swiper {
    width: 100%;
    height: 100%;
  }
  .swiper-slide {
    background-color: ${props => props.theme.carouselColor};
    border-radius: 20px;

    display: flex;
    justify-content: center;
    align-items: center;
  }
  .swiper-button-prev, 
  .swiper-button-next {
    color: ${props => props.theme.text};
    top: 60%;
    width: 4rem;

    background-image: url(${Arrow});
    background-position: center;
    background-size: cover;

    &:after {
      display: none;
    }
  }
  
  .swiper-button-prev {
    left: 0;
    transform: rotate(180deg);
  }
  .swiper-button-next {
    right: 0;
  }
`