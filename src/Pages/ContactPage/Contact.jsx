import Banner from "../MenuPage/Banner/Banner";
import img1 from '../../assets/contact/banner.jpg'
import { Helmet } from "react-helmet";
import Location from "./Location";
import ContactConfirm from "./ContactConfirm";
const Contact = ()=>{
    return(
        <div>
             <Helmet className="my-40">
                <title>Contact Page</title> 
            </Helmet>
            <Banner img={img1} title={"Contact Us"}></Banner>
            <Location></Location>
            <ContactConfirm></ContactConfirm>

        </div>
    )
}
export default Contact;