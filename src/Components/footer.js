import React from 'react';

const Footer = () => {
  return (
    <>
      <footer className="bg-white text-gray-700 w-screen hidden md:block mt-[14%] -ml-[10%]">
        <div className="max-w-[1240px] mx-auto px-4 py-8 md:px-8">
          <div className="flex flex-wrap justify-between gap-8">
            {/* Left Section */}
            <div className="w-full md:w-1/4">
              <div className="flex items-center space-x-2">
                <img src="images/logo.png" alt="Brand Logo" className="w-10 h-10" />
                <span className="text-blue-300 font-bold text-3xl">Brand</span>
              </div>
              <p className="text-medium mt-2 text-gray-800 leading-tight">
                Best information about the company<br /> goes here but now lorem ipsum is
              </p>
              <div className="flex space-x-4 mt-4">
                <a href="#" className="text-blue-500">
                  <img src="images/f5.png" alt="Facebook" className="w-7 h-7" />
                </a>
                <a href="#" className="text-blue-500">
                  <img src="images/f1.png" alt="Twitter" className="w-7 h-7" />
                </a>
                <a href="#" className="text-blue-500">
                  <img src="images/f2.png" alt="Instagram" className="w-7 h-7" />
                </a>
                <a href="#" className="text-blue-500">
                  <img src="images/f3.png" alt="LinkedIn" className="w-7 h-7" />
                </a>
                <a href="#" className="text-blue-500">
                  <img src="images/f4.png" alt="YouTube" className="w-7 h-7" />
                </a>
              </div>
            </div>

            {/* Center Section */}
            <div className="flex-1 grid grid-cols-2 md:grid-cols-4 gap-6">
              <div>
                <h3 className="text-lg font-semibold">About</h3>
                <ul className="mt-2 space-y-2 text-sm">
                  <li><a href="#" className="hover:underline font-base text-gray-400">About Us</a></li>
                  <li><a href="#" className="hover:underline font-base text-gray-400">Find Store</a></li>
                  <li><a href="#" className="hover:underline font-base text-gray-400">Categories</a></li>
                  <li><a href="#" className="hover:underline font-base text-gray-400">Blogs</a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold">Partnership</h3>
                <ul className="mt-2 space-y-2 text-sm">
                  <li><a href="#" className="hover:underline font-base text-gray-400">About Us</a></li>
                  <li><a href="#" className="hover:underline font-base text-gray-400">Find Store</a></li>
                  <li><a href="#" className="hover:underline font-base text-gray-400">Categories</a></li>
                  <li><a href="#" className="hover:underline font-base text-gray-400">Blogs</a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold">Information</h3>
                <ul className="mt-2 space-y-2 text-sm">
                  <li><a href="#" className="hover:underline font-base text-gray-400">About Us</a></li>
                  <li><a href="#" className="hover:underline font-base text-gray-400">Find Store</a></li>
                  <li><a href="#" className="hover:underline font-base text-gray-400">Categories</a></li>
                  <li><a href="#" className="hover:underline font-base text-gray-400">Blogs</a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold">Account</h3>
                <ul className="mt-2 space-y-2 text-sm">
                  <li><a href="#" className="hover:underline font-base text-gray-400">Login</a></li>
                  <li><a href="#" className="hover:underline font-base text-gray-400">Register</a></li>
                  <li><a href="#" className="hover:underline font-base text-gray-400">Settings</a></li>
                  <li><a href="#" className="hover:underline font-base text-gray-400">My Orders</a></li>
                </ul>
              </div>
            </div>

            {/* Right Section */}
            <div className="w-full md:w-1/4">
              <h3 className="text-lg font-semibold">Get App</h3>
              <div className="flex flex-col space-y-2 mt-4">
                <a href="#" className="block">
                  <img src="images/g1.png" alt="Google Play" className="w-28" />
                </a>
                <a href="#" className="block">
                  <img src="images/g2.png" alt="App Store" className="w-28" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
     
     <div className='hidden md:block'>
      <div className="max-w-[1210px] mx-auto px-4 mt-8 flex flex-wrap justify-between items-center text-base
       font-semibold text-gray-500 -ml-[3%]">
        <p className="font-semibold">&copy; 2024 Ecommerce.</p>
        <div className="flex items-center space-x-2">
          <img src="images/i3.png" className="w-6 h-4 flex-shrink-0" alt="Language Icon"/>
          <span>English</span>
          <img src="images/up.png" className="w-3 h-3" alt="Up Icon"/>
        </div>
      </div>
      </div>
      <br/>
    </>
  );
};

export default Footer;