import Banner from './Banner/Banner';
import OurOrder from './OurOrder/OurOrder';
import { Helmet } from 'react-helmet-async';
import img1 from '../../assets/menu/banner3.jpg'
import img2 from '../../assets/menu/soup-bg.jpg'
import  img3 from '../../assets/menu/pizza-bg.jpg'
import img4 from '../../assets/menu/dessert-bg.jpeg'
import FormOurMenu from '../Home/FormOurMenu/FormOurMenu';
import Pizza from './OurOrder/Pizza';
import Salad from './OurOrder/Salad';
const MenuPage = ()=>{
    return(
        <div>
             <Helmet className="my-40">
                <title>Food Place Menu</title>
                
            </Helmet>
            <Banner img={img1} title="OUR MENU"></Banner>
            <FormOurMenu></FormOurMenu>
            <Banner img={img2} title="Soup"></Banner>
            <OurOrder></OurOrder>
            <Banner img={img2} title="Pizza"></Banner>
            <Pizza></Pizza>
            <Banner img={img2} title="Soup"></Banner>
            <Salad></Salad>

        </div> 
    
    )
}
export default MenuPage;