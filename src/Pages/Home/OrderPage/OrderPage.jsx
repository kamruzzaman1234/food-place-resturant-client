import Banner from "../../MenuPage/Banner/Banner";
import img1 from '../../../assets/shop/banner2.jpg';
import FoodMenu from "./FoodMenu";
import { Helmet } from "react-helmet";
const OrderPage = ()=>{
    return(
        <div>
             <Helmet className="my-40">
                <title>Order Page</title>
                
            </Helmet>
            <Banner img={img1} title="Order Now"></Banner>
            <FoodMenu></FoodMenu>
        </div>
    )
}
export default OrderPage;