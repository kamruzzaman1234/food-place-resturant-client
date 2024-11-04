import CarouselArea from "../CarouselArea/CarouselArea";
import ChefArea from "../ChefArea/ChefArea";
import FormOurMenu from "../FormOurMenu/FormOurMenu";
import SwiperArea from "../SwiperArea/SwiperArea";


const Home = ()=>{
    return(
        <div>
            <CarouselArea></CarouselArea>
            <SwiperArea></SwiperArea>
            <ChefArea></ChefArea>
            <FormOurMenu></FormOurMenu>
        </div>
    )
}
export default Home;