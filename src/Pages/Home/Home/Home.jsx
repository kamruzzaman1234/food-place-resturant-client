import { Helmet } from "react-helmet";
import CallUs from "../CallUs/CallUs";
import CardMenu from "../CardMenu/CardMenu";
import CarouselArea from "../CarouselArea/CarouselArea";
import ChefArea from "../ChefArea/ChefArea";
import FeatureMenu from "../FeatureMenu/FeatureMenu";
import FormOurMenu from "../FormOurMenu/FormOurMenu";
import SwiperArea from "../SwiperArea/SwiperArea";
import Testimonial from "../Testimonial/Testimonial";


const Home = ()=>{
    return(
        <div>
            <Helmet className="my-40">
                <title>Home Page</title>
                
            </Helmet>
            <CarouselArea></CarouselArea>
            <SwiperArea></SwiperArea>
            <ChefArea></ChefArea>
            <FormOurMenu></FormOurMenu>
            <CallUs></CallUs>
            <CardMenu></CardMenu>
            <FeatureMenu></FeatureMenu>
            <Testimonial></Testimonial>
        </div>
    )
}
export default Home;