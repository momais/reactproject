import React, { useState } from "react";

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isProfileSidebarOpen, setIsProfileSidebarOpen] = useState(false); 

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const toggleProfileSidebar = () => {
    setIsProfileSidebarOpen(!isProfileSidebarOpen); 
  };

  return (
    <>
      {/* Main Header Section */}
      <header className="flex flex-col bg-white shadow px-4 py-3 md:px-20 md:py-4">
        <div className="flex justify-between items-center w-full">
          {/* Brand and Menu Button */}
          <div className="flex items-center space-x-2">
            <button className="md:hidden" onClick={toggleSidebar}>
              <img src="images/menu.png" className="h-6 w-6" alt="Menu" />
            </button>
            <img src="images/logo.png" className="h-9 w-9" alt="Logo" />
            <span className="text-blue-300 font-bold text-xl md:text-3xl">Brand</span>
          </div>

          {/* Search Bar for Large Screens */}
          <div className="hidden md:flex w-[55%] mx-8 h-full items-center border-2 border-solid border-blue-500
           rounded-lg bg-transparent">
            <div className="flex w-full bg-white">
              <input type="search" name="search" id="search" placeholder="Search" className="w-full border bg-white 
              px-4 py-1 bg-transparent focus:outline-none overflow-hidden border-none appearance-none" />
            </div>
            <select className="border border-l-blue-500 px-2 py-1 items-center focus:outline-none border-transparent">
              <option>All Categories</option>
              <option>Automobiles</option>
              <option>Gadgets</option>
              <option>Clothes</option>
            </select>
            <button className="bg-blue-500 text-white px-6 py-1.5 rounded-r-md border border-transparent">
              Search
            </button>
          </div>

          {/* Icons for Large Screens */}
          <div className="hidden md:flex items-center mt-2 mr-3 space-x-3">
            <a href="#" className="flex flex-col items-center hover:text-blue-500" onClick={toggleProfileSidebar}>
              <img src="images/profile.png" alt="Profile" className="w-4 h-4" />
              <span className="text-xs mt-1 text-gray-500 hover:text-gray-800">Profile</span>
            </a>
            <a href="#" className="flex flex-col items-center text-gray-600 hover:text-blue-500">
              <img src="images/message.png" alt="Message" className="w-4 h-4" />
              <span className="text-xs mt-1 text-gray-500 hover:text-gray-800">Message</span>
            </a>
            <a href="#" className="flex flex-col items-center text-gray-600 hover:text-blue-500">
              <img src="images/heart.png" alt="Orders" className="w-4 h-4" />
              <span className="text-xs mt-1 text-gray-500 hover:text-gray-800">Orders</span>
            </a>
            <a href="#" className="flex flex-col items-center text-gray-600 hover:text-blue-500">
              <img src="images/cart.png" alt="Cart" className="w-4 h-4" />
              <span className="text-xs mt-1 text-gray-500 hover:text-gray-800">MyCart</span>
            </a>
          </div>

          {/* Icons for Small Screens */}
          <div className="md:hidden flex items-center space-x-4">
            <a href="#" className="flex items-center text-gray-600 hover:text-blue-500">
              <img src="images/cart1.png" className="h-5 w-5" alt="Cart" />
            </a>
            <a href="#" className="flex items-center text-gray-600 hover:text-blue-500" 
             onClick={toggleProfileSidebar}>
              <img src="images/person.png" className="h-5 w-5" alt="Profile" />
            </a>
          </div>
        </div>

        {/* Search Bar for Small Screens */}
        <div className="mt-3 md:hidden">
          <div className="flex items-center h-10 bg-gray-50 border border-gray-300 rounded-md">
            <img src="images/search.png" className="w-4 h-4 ml-2" />
            <input type="search" name="search" id="search" placeholder="Search" className="w-full pl-1 bg-gray-50
             px-4 py-1 text-sm text-gray-500 focus:outline-none border-none" />
          </div>
        </div>
      </header>

      {/* Horizontal Menu */}
      <div className="hidden md:flex bg-white shadow border-t ">
        <div className="container mx-auto flex justify-between items-center py-2 px-7 border-1">
          <nav className="flex items-center space-x-6 text-black-600 pl-6 font-medium">
            <button className="text-black-600 focus:outline-none" onClick={toggleSidebar}>
              <img src="images/menu.png" className="w-7 h-7" alt="Menu" />
            </button>
            <a href="#" className="hover:text-blue-600 border-b-2 border-transparent text-center"> All category
            </a>
            <a href="#" className="hover:text-blue-600 border-b-2 border-transparent text-center">Hot offers</a>
            <a href="#" className="hover:text-blue-600 border-b-2 border-transparent text-center">Gift boxes</a>
            <a href="#" className="hover:text-blue-600 border-b-2 border-transparent text-center">Projects</a>
            <a href="#" className="hover:text-blue-600 border-b-2 border-transparent text-center">Menu item</a>
            <a href="#" className="hover:text-blue-600 border-b-2 border-transparent text-center">Help</a>
            <img src="images/down.png" className="w-3 h-3" />
          </nav>

          <div className="flex items-center space-x-4 px-6 mr-2">
            <div className="relative flex items-center space-x-2 font-medium text-black-600">
              <span>English, USD</span>
              <img src="images/down.png" className="w-3 h-3" />
            </div>
            <div className="flex items-center space-x-2 font-medium text-black-600">
              <span>Ship to</span>
              <img src="images/flag.png" alt="Country Flag" className="ml-2 rounded w-6 h-4" />
              <img src="images/down.png" className="w-3 h-3" />
            </div>
          </div>
        </div>
      </div>

   {/*  small screen items row */}
  <div className="md:hidden flex bg-white py-2 px-4 overflow-x-auto whitespace-nowrap space-x-2 no-scrollbar">
  <a href="grid.html" className="bg-gray-100 text-blue-500 font-medium py-2 px-4 rounded inline-block 
  no-underline">All category</a>
  <a href="list.html" className="bg-gray-100 text-blue-500 font-medium py-2 px-4 rounded inline-block
   no-underline">Gadgets</a>
  <a href="detail.html" className="bg-gray-100 text-blue-500 font-medium py-2 px-4 rounded inline-block 
  no-underline">Details</a>
  <a href="#" className="bg-gray-100 text-blue-500 font-medium py-2 px-4 rounded inline-block no-underline">
    Accessory</a>
  <a href="#" className="bg-gray-100 text-blue-500 font-medium py-2 px-4 rounded inline-block no-underline">
    Menu item</a>
  <a href="#" className="bg-gray-100 text-blue-500 font-medium py-2 px-4 rounded inline-block no-underline">
    Help</a>
  <a href="#" className="bg-gray-100 text-blue-500 font-medium py-2 px-4 rounded inline-block no-underline">
    Accessory</a>
  <a href="#" className="bg-gray-100 text-blue-500 font-medium py-2 px-4 rounded inline-block no-underline">
    Menu item</a>
  <a href="#" className="bg-gray-100 text-blue-500 font-medium py-2 px-4 rounded inline-block no-underline">
    Help</a>
</div>

      {/* Sidebar for Small Screens */}
      {isSidebarOpen && (
        <>
          <div className="fixed top-0 left-0 w-[50%] md:w-[20%] h-full bg-white shadow-lg z-50">
            <nav className="flex flex-col p-4 space-y-4">
              {/* Add images beside each link */}
              <a href="#" className="flex items-center space-x-2 text-lg text-gray-700 hover:text-blue-500">
                <img src="icons/hm.png" alt="Home" className="w-6 h-6" />
                <span>Home</span>
              </a>
              <a href="#" className="flex items-center space-x-2 text-lg text-gray-700 hover:text-blue-500">
                <img src="icons/hn.png" alt="About" className="w-5 h-5" />
                <span>About</span>
              </a>
              <a href="#" className="flex items-center space-x-2 text-lg text-gray-700 hover:text-blue-500">
                <img src="icons/bn.png" alt="Brands" className="w-5 h-5" />
                <span>Brands</span>
              </a>
              <a href="#" className="flex items-center space-x-2 text-lg text-gray-700 hover:text-blue-500 border-b pb-3">
                <img src="icons/list.png" alt="Categories" className="w-5 h-5" />
                <span>Categories</span>
              </a>
              <a href="#" className="flex items-center space-x-2 text-base font-semibold hover:text-blue-500">
                <img src="icons/inv.png" alt="Categories" className="w-5 h-5" />
                <span>All categories</span>
              </a>
              <a href="#" className="relative flex items-center space-x-2 text-md font-base hover:text-blue-500">
                <span>Tech Products</span>
                <img src="images/right.png" className="w-5 h-5 absolute top-1 right-0" alt="Right Arrow" />
              </a>
              <a href="#" className="relative flex items-center space-x-2 text-md font-base hover:text-blue-500">
                <span>Clothing</span>
                <img src="images/right.png" className="w-5 h-5 absolute top-1 right-0" alt="Right Arrow" />
              </a>
              <a href="#" className="relative flex items-center space-x-2 text-md font-base hover:text-blue-500">
                <span>Gadgets & Outdoor</span>
                <img src="images/right.png" className="w-5 h-5 absolute top-1 right-0" alt="Right Arrow" />
              </a>
              <a href="#" className="relative flex items-center space-x-2 text-md font-base hover:text-blue-500">
                <span>Projects</span>
                <img src="images/right.png" className="w-5 h-5 absolute top-1 right-0" alt="Right Arrow" />
              </a>
              <a href="#" className="relative flex items-center space-x-2 text-md font-base hover:text-blue-500">
                <span>Gift Boxes</span>
                <img src="images/right.png" className="w-5 h-5 absolute top-1 right-0" alt="Right Arrow" />
              </a>
              <a href="#" className="relative flex items-center space-x-2 text-md font-base hover:text-blue-500">
                <span>Sports</span>
                <img src="images/right.png" className="w-5 h-5 absolute top-1 right-0" alt="Right Arrow" />
              </a>
              <a href="#" className="relative flex items-center space-x-2 text-md font-base hover:text-blue-500">
                <span>Mobiles</span>
                <img src="images/right.png" className="w-5 h-5 absolute top-1 right-0" alt="Right Arrow" />
              </a>
              <a href="#" className="relative flex items-center space-x-2 text-md font-base hover:text-blue-500">
                <span>Tech Accessories</span>
                <img src="images/right.png" className="w-5 h-5 absolute top-1 right-0" alt="Right Arrow" />
              </a>
              <a href="#" className="relative flex items-center space-x-2 text-md font-base hover:text-blue-500">
                <span>Laptops</span>
                <img src="images/right.png" className="w-5 h-5 absolute top-1 right-0" alt="Right Arrow" />
              </a>
              <a href="#" className="relative flex items-center space-x-2 text-md font-base hover:text-blue-500">
                <span>About Us</span>
                <img src="images/right.png" className="w-5 h-5 absolute top-1 right-0" alt="Right Arrow" />
              </a>
            </nav>
          </div>

          <div className="fixed top-0 left-0 w-full h-full bg-black opacity-50 z-40" onClick={toggleSidebar}></div>
        </>
      )}

      {/* Profile Sidebar (Right Sidebar) */}
      {isProfileSidebarOpen && (
        <div className="fixed right-0 top-0 w-[250px] h-full bg-white shadow-lg z-50">
          <div className="relative bg-gray-100 border-b">
            <div className="flex items-center gap-4 px-4 py-4">
              <div className="w-10 h-10 rounded-full flex items-center justify-center">
                <img src="icons/avt.png" alt="User" className="w-10 h-10" />
              </div>
              <button className="absolute top-4 right-4 hover:text-gray-700" onClick={toggleProfileSidebar}>
                <img src="icons/cros.png" alt="Close" className="w-3 h-3" />
              </button>
            </div>
            <span className="block text-sm font-medium px-4 pb-4">
              <a href="#" className="hover:underline">Sign In</a> | 
              <a href="#" className="hover:underline">Register</a>
            </span>
          </div>

          <div className="px-4 py-4">
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <img src="icons/hm.png" alt="Home" className="w-5 h-5" />
                <span className="text-sm">Home</span>
              </li>
              <li className="flex items-center gap-3">
                <img src="icons/list.png" alt="Categories" className="w-5 h-5" />
                <span className="text-sm">Categories</span>
              </li>
              <li className="flex items-center gap-3">
                <img src="icons/h2.png" alt="Favorites" className="w-5 h-5" />
                <span className="text-sm">Favorites</span>
              </li>
              <li className="flex items-center gap-3">
                <img src="icons/inv.png" alt="Orders" className="w-5 h-5" />
                <span className="text-sm">My Orders</span>
              </li>
            </ul>

            <div className="border-b my-4"></div>

            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <img src="icons/map.png" alt="Language" className="w-5 h-5" />
                <span className="text-sm">English | USD</span>
              </li>
              <li className="flex items-center gap-3">
                <img src="icons/hn.png" alt="Contact" className="w-5 h-5" />
                <span className="text-sm">Contact Us</span>
              </li>
              <li className="flex items-center gap-3">
                <img src="icons/bn.png" alt="About" className="w-5 h-5" />
                <span className="text-sm">About</span>
              </li>
            </ul>

            <div className="border-b my-4"></div>
          </div>

          <div className="px-4 mt-4">
            <ul className="space-y-2 text-sm text-center">
              <li><a href="#" className="hover:text-gray-600">User Agreement</a></li>
              <li><a href="#" className="hover:text-gray-600">Partnership</a></li>
              <li><a href="#" className="hover:text-gray-600">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;