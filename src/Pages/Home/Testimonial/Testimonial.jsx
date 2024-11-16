import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { useEffect, useState } from "react";
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'
import { MdOutlineGeneratingTokens } from "react-icons/md";


const Testimonial = ()=>{
    const [reviews, setReviews]= useState([])
    useEffect(()=>{
        fetch('http://localhost:6009/review')
        .then(res=> res.json())
        .then(data=>{
            setReviews(data)
        })
    },[])
    return(
        <div className="py-20">
            <section>
                <SectionTitle
                heading={"Testimonial"}
                subHeading={"What Our Client Say!"}></SectionTitle>
            </section>
            <>
            
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {
            reviews.map(review=> <SwiperSlide key={review._id}>
                <div className="mx-24 my-16 flex flex-col items-center gap-3">
                <h3 className=""><MdOutlineGeneratingTokens className="text-6xl"></MdOutlineGeneratingTokens></h3>
                <Rating className=""
                style={{ maxWidth: 180 }}
                value={review.rating}
                readOnly
                />
                    <p className="py-4">{review.details}</p>
                    <h3 className="text-orange-400">{review.name}</h3>
                </div>
            </SwiperSlide>)
        }
       
        
      </Swiper>
    </>
            
        </div>
    )
}
export default Testimonial;