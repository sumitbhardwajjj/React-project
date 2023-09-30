import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";


const Navbar = () => {
  const cartproduct = useSelector((state) => state.Cart);
  return (
    <div>
      <nav className="bg-black p-2">
        <Link
          to="/"
          className=" mr-5  text-white  no-underline hover:bg-gray-600 p-2 "
        >
          Home
        </Link>
        <Link
          to="/pro"
          className="mr-5  text-white  no-underline hover:bg-gray-600 p-2"
        >
          Products
        </Link>
        <Link
          to="/bag"
          className="mr-5  text-white  no-underline hover:bg-gray-600 p-2"
        >
          My Bag {cartproduct.length}
        </Link>
      </nav>
    
    </div>
  );
};

export default Navbar;
