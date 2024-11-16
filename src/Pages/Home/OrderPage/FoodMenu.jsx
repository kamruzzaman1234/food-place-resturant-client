import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import Swal from 'sweetalert2';
import axios from 'axios';
import useCarts from '../../Hooks/useCarts';


const itemsPerPage = 6; // Set the number of items per page

const FoodMenu = () => {
  const [dataMenu, setDataMenu] = useState([]);
  const [activeCategory, setActiveCategory] = useState('salad');
  const [currentPage, setCurrentPage] = useState(1);
  const { user } = useAuth()
  const navigate = useNavigate()
  const [,refetch] = useCarts()

  useEffect(() => {
    fetch('http://localhost:6009/menu')
      .then(res => res.json())
      .then(data => {
        setDataMenu(data);
      });
  }, []);

  const handleAddToCart =(food)=>{
    
    if(user && user.email){
      
      const { _id, name, image, price } = food;
      const cartItem = {
        menuId: _id,
        email: user.email,
        name,
        image,
        price
      }
      axios.post('http://localhost:6009/carts', cartItem)
      .then(res=>{
        console.log(res.data)
        if(res.data.insertedId){
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${name} added the cart`,
            showConfirmButton: false,
            timer: 1500
          });
          refetch()
        }
      })
    }
    else{
      Swal.fire({
        title: "Your are not logged In",
        text: "Please login to Add to the Cart",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Please Logged In"  
      }).then((result) => {
        if (result.isConfirmed) {
          navigate('/login',)
        }
      });
    }
  }

  // Filter items based on the active category
  const filteredItems = dataMenu.filter(item => item.category === activeCategory);

  // Calculate total pages
  const totalPages = Math.ceil(filteredItems.length / itemsPerPage);

  // Get items for the current page
  const paginatedItems = filteredItems.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    setCurrentPage(1); // Reset to the first page when category changes
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="container mx-auto p-6">
      {/* Category Buttons */}
      <div className="flex space-x-4 mb-6 items-center justify-center">
        {['salad', 'pizza', 'dessert', 'drink', 'soup'].map(category => (
          <button
            key={category}
            onClick={() => handleCategoryChange(category)}
            className={`px-4 py-2 font-semibold rounded-lg ${
              activeCategory === category ? 'bg-[#FF5A3A] text-white' : 'bg-gray-200 text-gray-800'
            }`}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>

      {/* Display items in the selected category */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {paginatedItems.map(item => (
          <div key={item._id} className="bg-white shadow-md rounded-lg p-4">
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
            <p className="text-gray-700 mb-2">{item.recipe}</p>
            <p className="text-gray-900 font-bold">${item.price.toFixed(2)}</p>
            <div className="my-4">
              <button onClick={()=> handleAddToCart(item)} className="px-5 py-3 bg-gray-200 text-[#BB8506] border-b-2 border-[#BB8506] rounded-lg">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination Buttons */}
      <div className="flex justify-center mt-6 space-x-2">
        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index}
            onClick={() => handlePageChange(index + 1)}
            className={`px-4 py-2 rounded-lg ${
              currentPage === index + 1 ? 'bg-[#FF5A3A] text-white' : 'bg-gray-200 text-gray-800'
            }`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default FoodMenu;
