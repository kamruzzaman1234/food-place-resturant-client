import { FaHome, FaShoppingCart, FaCalendarAlt, FaStar, FaClipboardList } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";

const DashBoard = () => {
    return (
        <div className="flex">
            <div className="w-64 min-h-screen bg-orange-400 p-4">
                <ul className="menu p-4 space-y-2">
                    <li className="">
                        
                        <NavLink to="/dashboard/userHome" className="hover:underline text-white">
                        <FaHome className="text-2xl text-white" />
                            User Home
                        </NavLink>
                    </li>
                    <li className="">
                        
                        <NavLink to="/dashboard/cart" className="hover:underline text-white">
                        <FaShoppingCart className="text-2xl text-white" />
                            My Cart
                        </NavLink>
                    </li>
                    <li className="">
                        
                        <NavLink to="/dashboard/reservation" className="hover:underline text-white">
                        <FaCalendarAlt className="text-2xl text-white" />
                            Reservation
                        </NavLink>
                    </li>
                    <li className="">
                        
                        <NavLink to="/dashboard/review" className="hover:underline text-white">
                        <FaStar className="text-2xl text-white" />
                            Review
                        </NavLink>
                    </li>
                    <li className="">
                        
                        <NavLink to="/dashboard/myBooking" className="hover:underline text-white">
                        <FaClipboardList className="text-2xl text-white" />
                            My Booking
                        </NavLink>
                    </li>
                </ul>
            </div>
            <div className="flex-1 p-4">
                <Outlet />
            </div>
        </div>
    );
};

export default DashBoard;