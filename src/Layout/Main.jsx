import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Pages/Shared/Navbar/Navbar";
import Footer from "../Pages/Shared/Footer/Footer";

const Main  = ()=>{
    const location = useLocation()
    console.log(location)
    const noSharedLocation = location.pathname.includes('login') || location.pathname.includes('register')
    return (
        <div>
           {noSharedLocation ||  <Navbar></Navbar>} 
            <Outlet></Outlet> 
         { noSharedLocation || <Footer></Footer>}
        </div>
    )
}
export default Main;