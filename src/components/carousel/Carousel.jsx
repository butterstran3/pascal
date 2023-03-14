import React from 'react';
import './carousel.css';
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import JIX from '../../assets/jix.jpeg';
import GADI from '../../assets/gadi.jpeg';
import BUTTERS from '../../assets/butters.jpg';

const data = [
    {
      id: 1,
      avatar: JIX,
      name: "Jackson Zhang",
      review: "We cannot solve problems with the kind of thinking we employed when we came up with them."
    },
    {
      id: 2,
      avatar: GADI,
      name: "Adithya Gadiraju",
      review: "Learn as if you will live forever, live like you will die tomorrow."
    },
    {
        id: 3,
        avatar: BUTTERS,
        name: "Butters Stotch",
        review: "If you are working on something that you really care about, you don’t have to be pushed. The vision pulls you."
    }
  ]

const Carousel = () => {
    return (
        <div id='carousel' className='carousel_container'>
            <Swiper className='container testimonials_container'
                modules={[Pagination]}
                spaceBetween={20}
                slidesPerView={1}
                loop={true}
                pagination={{ clickable: true }}>
                {
                    data.map(({ id, avatar, name, review }) => {
                        return (
                        <SwiperSlide className='testimonial' key={id}>
                            <div className='client_image'>
                                <img src={avatar} alt={name} className="avatar"/>
                            </div>
                            <h1 className='client_name'>{name}</h1>
                            <small className='client_review'>
                                {review}
                            </small>
                        </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </div>
    )
};

export default Carousel;

// Get eslint and set it up