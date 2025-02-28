// import React, { useState } from "react";
// import { RiBarChartHorizontalLine } from "react-icons/ri";
// import { IoIosHeartEmpty } from "react-icons/io";
// import { HiOutlineShoppingCart } from "react-icons/hi2";
// import { TbSearch } from "react-icons/tb";
// import { CiUser } from "react-icons/ci";
// import { Link } from "react-router-dom";
// import avatarImg from "../assets/avatar.png";
// import { useSelector } from "react-redux";
// import { useAuth } from "../context/AuthContext";
// const navigation = [
//   { name: "Dashboard", href: "/dashboard" },
//   { name: "orders", href: "/orders" },
//   { name: "Cart page", href: "/cart" },
//   { name: "Check Out", href: "/checkout" },
// ];

// export const Navbar = () => {
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
//   const cartItems = useSelector((state) => state.cart.cartItems);
  
//   const {currentUser,logout,}=useAuth()
//   const handleLogOut=()=>{
//     logout()
//   }
//   return (
//     <header className="max-w-screen-2xl mx-auto px-4 py-6">
//       <nav className="flex justify-between items-center">
//         {/* leftside */}
//         <div className="flex items-center md:gap-16 gap-4">
//           <Link to="/">
//             <RiBarChartHorizontalLine className="size-6" />
//           </Link>
//           {/* searchinput */}
//           <div className="relative sm:w-72 w-40 space-x-2">
//             <TbSearch className="absolute inline-block left-3 inset-y-2" />
//             <input
//               type="text"
//               placeholder="Search here"
//               className="bg-[#EAEAEA] w-full py-1 md:px-8 px-6 rouned-md focus:outline-none"
//             />
//           </div>
//         </div>

//         {/* rightside */}
//         <div className="relative flex items-center md:space-x-3 space-x-2">
//           <div>
//             {currentUser ? (
//               <>
//                 <button onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
//                   <img
//                     src={avatarImg}
//                     alt="avatar"
//                     className={`size-7 rounded-full ${
//                       currentUser ? "ring-2 ring-blue-500" : ""
//                     }`}
//                   />
//                 </button>
//                 {/* show dropdowns */}

//                 {isDropdownOpen && (
//                   <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md z-40">
//                     <ul className="py-2">
//                       {navigation.map((item) => (
//                         <li
//                           key={item.name}
//                           onClick={() => setIsDropdownOpen(false)}
//                         >
//                           <Link
//                             to={item.href}
//                             className="block px-4 py-2 text-sm hover:bg-gray-100"
//                           >
//                             {item.name}
//                           </Link>
//                         </li>
//                       ))}
//                       <li>
//                         <button onClick={handleLogOut}className="block  w-full text-left px-4 py-2 text-sm hover:bg-gray-100">
//                           Logout
//                         </button>
//                       </li>
//                     </ul>
//                   </div>
//                 )}
//               </>
//             ) : (
//               <Link to="login">
//                 <CiUser className="size-6" />
//               </Link>
//             )}
//           </div>
//           <button className="hidden sm:block">
//             {" "}
//             <IoIosHeartEmpty className="size-6" />
//           </button>
//           <Link
//             to="/cart"
//             className="bg-primary p-1 sm:px-6 px-2 flex items-center rounded-sm"
//           >
//             <HiOutlineShoppingCart />
//             {cartItems.length > 0 ? (
//               <span className="text-sm font-semibold sm:ml-1">
//                 {cartItems.length}
//               </span>
//             ) : (
//               <span className="text-sm font-semibold sm:ml-1">0</span>
//             )}
//           </Link>
//         </div>
//       </nav>
//     </header>
//   );
// };
import React, { useState } from "react";
import { RiBarChartHorizontalLine } from "react-icons/ri";
import { IoIosHeartEmpty } from "react-icons/io";
import { HiOutlineShoppingCart } from "react-icons/hi2";
import { TbSearch } from "react-icons/tb";
import { CiUser } from "react-icons/ci";
import { Link } from "react-router-dom";
import avatarImg from "../assets/avatar.png";
import { useSelector } from "react-redux";
import { useAuth } from "../context/AuthContext";

export const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const cartItems = useSelector((state) => state.cart.cartItems);
  const { currentUser, isAdmin, logout } = useAuth(); // ✅ Get isAdmin from context
  

  const handleLogOut = () => {
    logout();
    localStorage.removeItem("isAdmin"); // ✅ Remove admin status on logout
  };

  // ✅ Navigation Menu (Only show "Dashboard" for Admins)
  const navigation = [
    ...(isAdmin ? [{ name: "Dashboard", href: "/dashboard" }] : []), // ✅ Show only if admin
    { name: "Orders", href: "/orders" },
    { name: "Cart", href: "/cart" },
    { name: "Checkout", href: "/checkout" },
  ];

  return (
    <header className="max-w-screen-2xl mx-auto px-4 py-6">
      <nav className="flex justify-between items-center">
        {/* Left Side */}
        <div className="flex items-center md:gap-16 gap-4">
          <Link to="/">
            <RiBarChartHorizontalLine className="size-6" />
          </Link>

          {/* Search Input */}
          <div className="relative sm:w-72 w-40 space-x-2">
            <TbSearch className="absolute inline-block left-3 inset-y-2" />
            <input
              type="text"
              placeholder="Search here"
              className="bg-[#EAEAEA] w-full py-1 md:px-8 px-6 rounded-md focus:outline-none"
            />
          </div>
        </div>

        {/* Right Side */}
        <div className="relative flex items-center md:space-x-3 space-x-2">
          {/* User Avatar / Login */}
          <div>
            {currentUser ? (
              <>
                <button onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
                  <img
                    src={avatarImg}
                    alt="avatar"
                    className={`size-7 rounded-full ${
                      isAdmin ? "ring-2 ring-blue-500" : ""
                    }`}
                  />
                </button>

                {/* Dropdown Menu */}
                {isDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md z-40">
                    <ul className="py-2">
                      {navigation.map((item) => (
                        <li key={item.name} onClick={() => setIsDropdownOpen(false)}>
                          <Link
                            to={item.href}
                            className="block px-4 py-2 text-sm hover:bg-gray-100"
                          >
                            {item.name}
                          </Link>
                        </li>
                      ))}
                      <li>
                        <button
                          onClick={handleLogOut}
                          className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
                        >
                          Logout
                        </button>
                      </li>
                    </ul>
                  </div>
                )}
              </>
            ) : (
              <Link to="/login">
                <CiUser className="size-6" />
              </Link>
            )}
          </div>

          {/* Wishlist Icon */}
          <button className="hidden sm:block">
            <IoIosHeartEmpty className="size-6" />
          </button>

          {/* Cart Icon */}
          <Link
            to="/cart"
            className="bg-primary p-1 sm:px-6 px-2 flex items-center rounded-sm"
          >
            <HiOutlineShoppingCart />
            <span className="text-sm font-semibold sm:ml-1">
              {cartItems.length > 0 ? cartItems.length : "0"}
            </span>
          </Link>
        </div>
      </nav>
    </header>
  );
};

