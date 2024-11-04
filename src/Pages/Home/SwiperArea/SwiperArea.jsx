import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

// import './styles.css';
import slide1 from '../../../assets/home/slide1.jpg';
import slide2 from '../../../assets/home/slide2.jpg';
import slide3 from '../../../assets/home/slide3.jpg';
import slide4 from '../../../assets/home/slide4.jpg';
import slide5 from '../../../assets/home/slide5.jpg';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';

const SwiperArea = ()=>{
    return(
        <div className="py-20">
          
          <section>
            <SectionTitle
            subHeading={"From 11.00am to 10.00 pm"}
            heading={"ONLINE ORDER"}>
                
            </SectionTitle>
          </section>
    <section>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper rounded-lg"
      >
        <SwiperSlide>
            <img src={slide1} alt="" className="w-[450px] h-[450px]"/>
            <h2 className="text-center text-4xl -mt-16 text-white">Salad</h2>
        </SwiperSlide>
        <SwiperSlide>
        <img src={slide2} alt="" className="w-[450px] h-[450px]"/>
        <h2 className="text-center text-4xl -mt-16 text-white">Pizza</h2>
        </SwiperSlide>
        <SwiperSlide>
        <img src={slide3} alt="" className="w-[450px] h-[450px]"/>
        <h2 className="text-center text-4xl -mt-16 text-white">Soup</h2>
        </SwiperSlide>
        <SwiperSlide>
        <img src={slide4} alt="" className="w-[450px] h-[450px]"/>
        <h2 className="text-center text-4xl -mt-16 text-white">Desserts</h2>
        </SwiperSlide>
        <SwiperSlide>
        <img src={slide5} alt="" className="w-[450px] h-[450px]"/>
        <h2 className="text-center text-4xl -mt-16 text-white">Salad</h2>
        </SwiperSlide>
        
        
      </Swiper>
    </section>
        </div>
    )
}
export default SwiperArea;