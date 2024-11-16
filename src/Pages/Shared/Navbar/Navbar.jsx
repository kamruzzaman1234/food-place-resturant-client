import { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../../Provider/AuthProvider";
import { FaCartPlus } from "react-icons/fa";
import axios from "axios";
import useCarts from "../../Hooks/useCarts";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  
  const [cart] = useCarts()
  
 


  // Handle logout
  const handleLogout = async () => {
    try {
      await logOut();
      console.log("User logged out successfully");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <div>
      <div className="navbar fixed z-10 bg-opacity-30 bg-black max-w-screen-xl text-white">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box uppercase z-[1] mt-3 w-52 p-2 shadow">
              <li className="text-black lg:text-white"><Link to="/">Home</Link></li>
              <li className="text-black lg:text-white"><Link to="/menuPage">Our Menu</Link></li>
              <li className="text-black lg:text-white"><Link to="/orderPage">Order Page</Link></li>
              <li className="text-black lg:text-white"><Link to="/contact">Contact Us</Link></li>
              <li>
              <Link to="/dashboard/cart">
              <button className="btn">
                <FaCartPlus></FaCartPlus>
              <div className="badge badge-secondary">{cart?.length}</div>
        </button>
              </Link>
            </li>
              {user ? (
                <>
                  <li>
                    <button onClick={handleLogout} className="text-black lg:text-white">LogOut</button>
                  </li>
                </>
              ) : (
                <li className="text-black lg:text-white"><Link to="/login">Login</Link></li>
              )}
            </ul>
          </div>
          <Link to="/" className="">
            <h2 className="text-[30px] font-bold">Food Place</h2>
          </Link>
        </div>
        
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 uppercase">
            <li className="text-black lg:text-white"><Link to="/">Home</Link></li>
            <li className="text-black lg:text-white"><Link to="/menuPage">Our Menu</Link></li>
            <li className="text-black lg:text-white"><Link to="/orderPage">Order Page</Link></li>
            <li className="text-black lg:text-white"><Link to="/contact">Contact Us</Link></li>
            <li>
              <Link to="/dashboard/cart">
              <button className="btn">
                <FaCartPlus></FaCartPlus>
              <div className="badge badge-secondary">{cart?.length}</div>
        </button>
              </Link>
            </li>
            {user ? (
              <>
                {/* User's Profile Picture */}
                <li className="flex items-center">
                  {user.photoURL ? (
                    <img src={user.photoURL} alt="User" className="rounded-full h-8 w-8 mr-2" />
                  ) : (
                    <span className="text-white">Profile</span>
                  )}
                </li>
                <li>
                  <button onClick={handleLogout} className="text-black lg:text-white">LogOut</button>
                </li>
              </>
            ) : (
              <li className="text-black lg:text-white"><Link to="/login">Login</Link></li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
