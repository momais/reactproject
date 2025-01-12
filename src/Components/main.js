import React from "react";
import Footer from "./footer";

const Banner = () => {
  return (
    <div className="relative p-0 sm:py-0 md:py-2 rounded-lg flex flex-col md:flex-row items-center md:items-start">
      <img src="images/banner.png" alt="banner"
        className="w-full md:w-[700px] h-[200px] sm:h-[300px] md:h-[365px] mb-0 sm:mt-0 md:mb-0 md:mr-4 object-cover"
      />
      <div className="absolute left-4 sm:top-4 md:top-14 sm:left-4 md:ml-6 text-center md:text-left mt-5 sm:mt-0">
        <h2 className="text-xl sm:text-3xl mr-3 sm:mr-0 text-gray-800 font-medium sm:font-normal">
          Latest trending
        </h2>
        <p className="text-xl sm:text-3xl font-bold text-black-600 mb-4">
          Electronic items
        </p>
        <div className="flex justify-start">
          <button className="px-3 py-1.5 sm:px-4 sm:py-2 text-sm sm:text-base font-medium bg-white
           text-blue-600 rounded-md">
            Learn more
          </button>
        </div>
      </div>
    </div>
  );
};

const Sidebar = () => {
  return (
    <div className="w-full md:w-1/5 px-2 p-4 hidden md:block">
      <ul className="space-y-4">
        <li className="font-semibold bg-blue-100 p-2 text-left rounded">Automobiles</li>
        <li>
          <a href="product.html" className="px-2 text-gray-700">Mobile and Products</a>
        </li>
        <li><a href="#" className="px-2 text-gray-700">Home interiors</a>
        </li>
        <li><a href="tech.html" className="px-2 text-gray-700">Computer and tech</a>
        </li>
        <li><a href="#" className="px-2 text-gray-700">Tools, equipment</a>
        </li>
        <li><a href="#" className="px-2 text-gray-700">Sports and outdoor</a>
        </li>
        <li><a href="#" className="px-2 text-gray-700">Animals and pets</a>
        </li>
        <li><a href="#" className="px-2 text-gray-700">Machinery tools</a>
        </li>
        <li><a href="#" className="px-2 text-gray-700">More category</a>
        </li>
      </ul>
    </div>
  );
};

const RightBoxes = () => {
  return (
    <div className="w-full md:w-1/4 lg:w-1/5 p-4 space-y-2 m-0 hidden md:block">
      <div className="bg-blue-50 py-5 px-2 rounded-lg flex flex-col">
        <div className="flex items space-x-2 mb-2">
          <div className="bg-gray-300 bg-transparent px-1">
            <img src="images/user.png" className="w-11 h-11 text-gray-300" alt="user" />
          </div>
          <p className="text-black-300 font-medium">
            Hi, user
            <br />
            let's get started
          </p>
        </div>
        <button className="mt-2 px-14 py-0.5 bg-blue-500 text-normal text-white rounded-md">
          Join now
        </button>
        <button className="mt-2 px-16 py-0.5 bg-white text-blue-700 rounded-md">
          Log in
        </button>
      </div>
      <div className="bg-orange-400 px-4 text-white py-5 leading-none rounded-lg">
        <p className="text-white-300">
          Get US $10 off<br />with a new<br />supplier
        </p>
      </div>
      <div className="bg-teal-400 px-4 text-white leading-tight py-3.5 rounded-lg">
        <p className="text-white-300">
          Send quotes with<br />supplier<br />preference</p>
      </div>
    </div>
  );
};

const CountdownTimer = ({ days, hours, minutes, seconds }) => (
  <div className="flex space-x-1.5 mt-1 justify-center lg:justify-start">
    {/* For large screens */}
    <div className="bg-gray-600 text-white px-[8px] py-2 rounded leading-none text-center hidden md:block">
      <span className="text-md font-semibold mt-1">{days}</span>
      <p className="text-xs text-gray-300 -mb-0.5">Days</p>
    </div>
    <div className="bg-gray-600 text-white px-[8px] py-2 rounded leading-none text-center hidden md:block">
      <span className="text-md font-semibold mt-1">{hours}</span>
      <p className="text-xs text-gray-300 -mb-0.5">Hour</p>
    </div>
    <div className="bg-gray-600 text-white px-[8px] py-2 rounded leading-none text-center hidden md:block">
      <span className="text-md font-semibold mt-1">{minutes}</span>
      <p className="text-xs text-gray-300 -mb-0.5">Min</p>
    </div>
    <div className="bg-gray-600 text-white px-[11.5px] py-2 rounded leading-none text-center hidden md:block">
      <span className="text-md font-semibold mt-1">{seconds}</span>
      <p className="text-xs text-gray-300 -mb-0.5">Sec</p>
    </div>

    {/* For small screens */}
    <div className="lg:hidden flex space-x-1.5 mt-1 justify-center sm:justify-start">
      <div className="bg-gray-200 text-gray-400 px-[8px] py-2 rounded leading-none text-center">
        <span className="text-md font-bold mt-1">{hours}</span>
        <p className="text-xs font-bold -mb-0.5">Hour</p>
      </div>
      <div className="bg-gray-200 text-gray-400 px-[10.5px] py-2 rounded leading-none text-center">
        <span className="text-md font-bold mt-1">{minutes}</span>
        <p className="text-xs font-bold -mb-0.5">Min</p>
      </div>
      <div className="bg-gray-200 text-gray-400 px-[11.5px] py-2 rounded leading-none text-center">
        <span className="text-md font-bold mt-1">{seconds}</span>
        <p className="text-xs font-bold -mb-0.5">Sec</p>
      </div>
    </div>
  </div>
);

const ProductCard = ({ imgSrc, title, discount }) => (
  <div className="flex flex-col items-center p-4 min-w-[40%] sm:min-w-[25%] md:min-w-[25%] lg:min-w-[20%] 
  text-center border-gray-300">
    <img src={imgSrc} className="mb-2 h-21 object-contain" alt={title} />
    <h3 className="text-md font-medium text-gray-700">{title}</h3>
    <span className="text-[red] bg-red-100 px-3 py-1 rounded-full text-sm font-semibold mt-1">{discount}</span>
  </div>
);

const DealsSection = () => (
  <div className="w-full lg:w-[1168px] sm:w-full justify-center sm:px-2 mx-auto flex flex-col
   lg:flex-row border border-gray-300 rounded bg-white overflow-hidden md:mt-8 sm:mt-0 md:-ml-3.5 sm:-ml-0">
    {/* Small Screen Countdown Timer */}
    <div className="sm:flex sm:items-center sm:justify-between sm:p-4 border-b sm:border-gray-300 lg:hidden">
      <div className="flex flex-row p-2 items-center justify-between w-full space-x-4 pb-2 sm:pb-0">
        <div>
          <h2 className="text-xl font-bold text-gray-800">Deals and offers</h2>
          <p className="text-gray-500 block md:hidden">Electronic equipments</p>
        </div>
        <CountdownTimer hours="13" minutes="34" seconds="56" />
      </div>
    </div>

    {/* Large Screen Countdown Timer */}
    <div className="flex-shrink-0 pr-4 lg:pr-12 lg:border-r border-gray-300 p-4 lg:w-auto hidden md:block">
      <div className="mb-4 min-w-[210px] text-center lg:text-left">
        <h2 className="text-xl font-bold text-gray-800">Deals and offers</h2>
        <p className="text-gray-500">Hygiene equipments</p>
      </div>
      <CountdownTimer days="4" hours="13" minutes="34" seconds="56" />
    </div>

    {/* Product List */}
    <div className="flex flex-grow justify-start overflow-hidden divide-x divide-gray-300 border-gray-300
     overflow-x-auto no-scrollbar">
      <ProductCard imgSrc="images/8.png" title="Smart watches" discount="-25%" />
      <ProductCard imgSrc="images/7.png" title="Laptops" discount="-25%" />
      <ProductCard imgSrc="images/6.png" title="GoPro cameras" discount="-25%" />
      <ProductCard imgSrc="images/5.png" title="Headphones" discount="-25%" />
      <ProductCard imgSrc="images/3.png" title="Canon cameras" discount="-25%" />
    </div>
  </div>
);

  {/* HomeandOutdoor Section */}

const HomeAndOutdoorSection = () => {
  return (
    <>
      {/* Large Screen */}
      <div className="bg-gray-100 hidden md:block">
        <div className="container md:w-[1170px] max-w-[1170px] bg-white mt-6 border rounded-lg overflow-hidden 
        mx-auto lg:-ml-[15px] sm:ml-[15px]">
          <div className="flex flex-col md:flex-row">
            {/* Left Section */}
            <div className="relative w-full md:w-1/4 h-[200px] md:h-[270px] bg-cover bg-center"
              style={{ backgroundImage: "url('images/left.png')" }}>
              <div className="absolute flex flex-col items-start h-full w-full text-black p-4">
                <h2 className="text-lg sm:text-xl font-bold leading-6 ml-1 mt-2 md:leading-[25px]">
                  Home and<br /> outdoor
                </h2>
                <a href="#" className="mt-5 ml-1 bg-white text-black px-4 py-1.5 rounded font-medium 
                text-medium sm:text-md shadow">Source now</a>
              </div>
            </div>

            {/* Right Section */}
            <div className="w-full md:w-3/4 grid grid-rows-2 border divide-y divide-gray-300">
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 divide-x divide-gray-300 items-stretch">
                {[
                  { title: "Soft chairs", price: "19", image: "images/1.png" },
                  { title: "Soft lamp", price: "19", image: "images/9.png" },
                  { title: "Tech gadget", price: "29", image: "images/13.png" },
                  { title: "Soft product", price: "19", image: "images/2.png" },
                ].map((item, index) => (
                  <div key={index} className="flex flex-col justify-between p-3 md:p-4 h-full relative">
                  <p className="text-xs sm:text-sm md:text-md font-semibold absolute top-2 md:top-5 left-2 sm:left-4">
                      {item.title}
                  </p>
                    <div className="flex items-center justify-between mt-6 md:mt-4">
                      <p className="text-xs text-gray-700 mt-2 md:-mt-6 leading-4">
                        From<br /> USD {item.price}
                      </p>
                      <img src={item.image}
                        className="w-[40px] sm:w-[60px] md:w-[80px] h-[40px] sm:h-[60px] md:h-[60px] mt-3 
                        md:mt-4 object-contain" alt={item.title} />
                    </div>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 divide-x divide-gray-300 items-stretch">
                {[
                  { title: "Kitchen mixer", price: "39", image: "images/12.png" },
                  { title: "Blenders", price: "29", image: "images/11.png" },
                  { title: "Home appliance", price: "79", image: "images/10.png" },
                  { title: "House plant", price: "19", image: "images/4.png" },
                ].map((item, index) => (
                  <div key={index} className="flex flex-col justify-between p-3 md:p-4 h-full relative">
                  <p className="text-xs sm:text-sm md:text-md font-semibold absolute top-2 md:top-5 left-2 sm:left-4">
                      {item.title}
                  </p>
                    <div className="flex items-center justify-between mt-6 md:mt-4">
                      <p className="text-xs text-gray-700 mt-2 md:-mt-6 leading-4">
                        From<br /> USD {item.price}
                      </p>
                      <img src={item.image} className="w-[40px] sm:w-[60px] md:w-[80px] h-[40px] sm:h-[60px]
                       md:h-[60px] mt-3 md:mt-4 object-contain" alt={item.title} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Small Screen */}
      <div className="bg-white mt-2 block md:hidden">
        <h2 className="text-xl font-bold leading-6 pl-2 pt-4 pb-4 border-b">
          Home and outdoor
        </h2>

        <div className="flex flex-grow justify-start overflow-hidden divide-x divide-gray-300
         border-gray-300 border-b overflow-x-auto no-scrollbar">
          {[
            "images/45.png",
            "images/8.png",
            "images/43.png",
            "images/28.png",
            "images/43.png",
            "images/8.png",
          ].map((image, index) => (
            <div key={index} className="flex flex-col items-center p-4 min-w-[40%] sm:min-w-[25%] text-center">
              <img src={image} className="mb-2 h-21 object-contain" alt="" />
              <h3 className="text-sm font-medium text-gray-700">
                Smart watches
              </h3>
              <span className="text-xs text-gray-400 font-bold rounded-full">
                From USD 19
              </span>
            </div>
          ))}
        </div>

        <h2 className="flex text-lg text-blue-500 font-bold leading-6 pl-3 pt-4 pb-4 border-b">
          Source now
          <img src="icons/forward.png" className="w-5 h-5 mt-1 ml-2" />
        </h2>
      </div>
    </>
  );
};

const ConsumerElectronics = () => {
  return (
    <>
      {/* Large Screen */}
      <div className="bg-gray-100 hidden md:block">
        <div className="container md:w-[1170px] max-w-[1170px] bg-white mt-6 border rounded-lg overflow-hidden 
        mx-auto lg:-ml-[15px] sm:ml-[15px]">
          <div className="flex flex-col md:flex-row">
            {/* Left Section */}
            <div className="relative w-full md:w-1/4 h-[200px] md:h-[270px] bg-cover bg-center"
              style={{ backgroundImage: "url('images/left1.png')" }}>
              <div className="absolute flex flex-col items-start h-full w-full text-black p-4">
                <h2 className="text-lg sm:text-xl font-bold leading-6 ml-1 mt-2 md:leading-[25px]">
                  Consumer<br /> electronics and <br /> gadgets
                </h2>
                <a href="#" className="mt-5 ml-1 bg-white text-black px-4 py-1.5 rounded font-medium 
                text-medium sm:text-md shadow">Shop now</a>
              </div>
            </div>

            {/* Right Section */}
            <div className="w-full md:w-3/4 grid grid-rows-2 border divide-y divide-gray-300">
              <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 divide-x divide-gray-300 items-stretch">
                {[
                  { title: "Smart Watches", price: "19", image: "images/8.png" },
                  { title: "Tech Gadgets", price: "39", image: "images/14.png" },
                  { title: "Headphones", price: "49", image: "images/15.png" },
                  { title: "Tablets", price: "29", image: "images/16.png" },
                ].map((item, index) => (
                  <div key={index} className="flex flex-col justify-between p-3 md:p-4 h-full relative">
                    <p className="text-xs sm:text-sm md:text-md font-semibold absolute top-2 md:top-5 left-2 sm:left-4">
                      {item.title}
                    </p>
                    <div className="flex items-center justify-between mt-6 md:mt-4">
                      <p className="text-xs text-gray-700 mt-2 md:-mt-6 leading-4">
                        From<br /> USD {item.price}
                      </p>
                      <img src={item.image}
                        className="w-[40px] sm:w-[60px] md:w-[80px] h-[40px] sm:h-[60px] md:h-[60px] mt-3 
                        md:mt-4 object-contain" alt={item.title} />
                    </div>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 divide-x divide-gray-300 items-stretch">
                {[
                  { title: "Cameras", price: "79", image: "images/17.png" },
                  { title: "Laptops", price: "59", image: "images/7.png" },
                  { title: "Game Consoles", price: "199", image: "images/18.png" },
                  { title: "Mobiles", price: "499", image: "images/19.png" },
                ].map((item, index) => (
                  <div key={index} className="flex flex-col justify-between p-3 md:p-4 h-full relative">
                    <p className="text-xs sm:text-sm md:text-md font-semibold absolute top-2 md:top-5 left-2 sm:left-4">
                      {item.title}
                    </p>
                    <div className="flex items-center justify-between mt-6 md:mt-4">
                      <p className="text-xs text-gray-700 mt-2 md:-mt-6 leading-4">
                        From<br /> USD {item.price}
                      </p>
                      <img src={item.image} className="w-[40px] sm:w-[60px] md:w-[80px] h-[40px] sm:h-[60px]
                       md:h-[60px] mt-3 md:mt-4 object-contain" alt={item.title} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Small Screen */}
      <div className="bg-white mt-2 block md:hidden">
        <h2 className="text-xl font-bold leading-6 pl-2 pt-4 pb-4 border-b">
          Consumer electronics
        </h2>

        <div className="flex flex-grow justify-start overflow-hidden divide-x divide-gray-300
         border-gray-300 border-b overflow-x-auto no-scrollbar">
          {[
            "images/29.png",
            "images/30.png",
            "images/31.png",
            "images/29.png",
            "images/30.png",
            "images/31.png",
            "images/29.png",
          ].map((image, index) => (
            <div key={index} className="flex flex-col items-center p-4 min-w-[40%] sm:min-w-[25%] text-center">
              <img src={image} className="mb-2 h-21 object-contain" alt="" />
              <h3 className="text-sm font-medium text-gray-700">
                Smart Watches
              </h3>
              <span className="text-xs text-gray-400 font-bold rounded-full">
                From USD 19
              </span>
            </div>
          ))}
        </div>

        <h2 className="flex text-lg text-blue-500 font-bold leading-6 pl-3 pt-4 pb-4 border-b">
          Shop now
          <img src="icons/forward.png" className="w-5 h-5 mt-1 ml-2" />
        </h2>
      </div>
    </>
  );
};

const InquirySection = () => {
  return (
    <div className="bg-gray-100">
      <div className="relative w-full md:w-[1170px] max-w-screen-xl h-auto md:h-[390px] bg-blue-500 text-white p-8 mt-6 rounded-lg flex flex-col md:flex-row lg:-ml-[15px] sm:ml-[15px] justify-between mx-auto overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('images/298.png')" }}>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-700 via-blue-400 to-blue-200 opacity-90"></div>
        </div>
        <div className="relative max-w-lg z-10 mb-6 md:mb-0 md:mt-1 ml-2">
          <h2 className="text-2xl md:text-3xl font-bold leading-tight">
            An easy way to send<br /> requests to all suppliers
          </h2>
          <button type="submit" className="bg-blue-600 text-white rounded-lg py-1.5 mt-3 px-3 block md:hidden">
            Send inquiry
          </button>
          <p className="text-base leading-relaxed text-gray-100 mt-4 hidden md:block">
            Lorem ipsum dolor sit amet, consectutor adipiscing<br /> elit, sed do eiusmod tempor incididunt.
          </p>
        </div>

        <div className="relative bg-white text-gray-800 p-6 rounded-lg shadow-lg mt-6 md:mt-0 md:ml-6 w-full max-w-md z-10 hidden md:block">
          <h2 className="text-xl font-bold mb-4">Send quote to suppliers</h2>
          <form className="hidden md:block">
           <div className="mb-4">
            <input type="text" id="item" placeholder="What item you need?"
              className="w-full border border-gray-300 rounded-lg p-2 placeholder-black placeholder:font-medium" />
            <textarea id="details" rows="2" placeholder="Type more details"
               className="w-full border border-gray-300 rounded-lg p-2 mt-5"></textarea>
            </div>

            <div className="mb-4">
              <div className="flex items-center gap-2">
              <input type="number" id="quantity" placeholder="Quantity" className="w-[60%] md:w-[50%] lg:w-[50%] 
              border border-gray-300 rounded-lg p-2 placeholder-black placeholder:font-medium" />
                <select className="w-[40%] md:w-[25%] lg:w-[27%] border border-gray-300 rounded-lg text-black
                 bg-white font-medium appearance-none p-2 pr-8"
                  style={{
                    background: "url('images/down.png') no-repeat right 0.65rem center", backgroundSize: "0.75rem",
                  }}
                >
                  <option>Pcs</option>
                  <option>Kgs</option>
                  <option>Units</option>
                </select>
              </div>
            </div>

            <button type="submit" className="bg-blue-600 text-white rounded-lg py-1.5 px-3">
              Send inquiry
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

const ItemsSection = () => {
  return (
    <>
      {/* Items Section 1 */}
      <div className="bg-gray-100 py-8 px-4">
        <div className="w-full sm:w-[90%] md:w-[90%] lg:w-[1170px] mx-auto lg:-ml-[28px] sm:ml-[28px]">
          <h2 className="text-2xl font-bold mb-6">Recommended items</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">

            <div className="bg-white shadow rounded-lg p-3">
              <img src="images/20.png" alt="T-shirt" className="w-full mb-3 rounded-lg" />
              <h3 className="text-base font-bold text-gray-800 pt-5">$10.30</h3>
              <p className="text-base text-gray-500 font-normal">
                T-shirts with multiple colors, for men
              </p>
            </div>
            <div className="bg-white shadow rounded-lg p-3">
              <img src="images/21.png" alt="Jacket" className="w-full mb-3 rounded-lg" />
              <h3 className="text-base font-bold text-gray-800 pt-4">$10.50</h3>
              <p className="text-base text-gray-500 font-normal">
                Jeans Jacket with multiple colors, for men
              </p>
            </div>

            <div className="bg-white shadow rounded-lg p-3">
              <img src="images/22.png" alt="Coat" className="w-full mb-3 rounded-lg" />
              <h3 className="text-base font-bold text-gray-800 pt-2">$12.50</h3>
              <p className="text-base text-gray-500 font-normal">
                Blue Coat medium size,
                <br /> for men
              </p>
            </div>
            <div className="bg-white shadow rounded-lg p-3">
              <img src="images/23.png" alt="Wallet" className="w-full mb-3 rounded-lg" />
              <h3 className="text-base font-bold text-gray-800 pt-5">$34.00</h3>
              <p className="text-base text-gray-500 font-normal">
                Blue Leather Wallet, for men
              </p>
            </div>

            <div className="bg-white shadow rounded-lg p-3 hidden md:block">
              <img src="images/24.png" alt="Bag" className="w-full mb-3 rounded-lg" />
              <h3 className="text-base font-bold text-gray-800 pt-5">$10.30</h3>
              <p className="text-base text-gray-500 font-normal">
                Blue medium Bag,
                <br /> for men
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Items Section 2 */}

      <div className="bg-gray-100 py-8 px-4 -mt-10 hidden md:block">
        <div className="w-full sm:w-[90%] md:w-[90%] lg:w-[1170px] mx-auto lg:-ml-[28px] sm:ml-[28px]">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">

            <div className="bg-white shadow rounded-lg p-3">
              <img src="images/25.png" alt="Short" className="ml-5 mt-4 mb-3 rounded-lg" />
              <h3 className="text-base font-bold text-gray-800 pt-10">$9.99</h3>
              <p className="text-base text-gray-500 font-normal">
                Blue Short medium,
                <br />
                for men
              </p>
            </div>
            <div className="bg-white shadow rounded-lg p-3">
              <img src="images/26.png" alt="Headphone" className="w-full mb-3 rounded-lg" />
              <h3 className="text-base font-bold text-gray-800 pt-5">$10.99</h3>
              <p className="text-base text-gray-500 font-normal">
                Headphone for gaming
                <br /> with mic
              </p>
            </div>
            <div className="bg-white shadow rounded-lg p-3">
              <img src="images/24.png" alt="Coat" className="w-full mb-3 rounded-lg" />
              <h3 className="text-base font-bold text-gray-800 pt-5">$12.50</h3>
              <p className="text-base text-gray-500 font-normal">
                Blue Coat medium size,
                <br /> for men
              </p>
            </div>
            <div className="bg-white shadow rounded-lg p-3">
              <img src="images/27.png" alt="Wallet" className="w-full mb-3 rounded-lg" />
              <h3 className="text-base font-bold text-gray-800 pt-5">$34.00</h3>
              <p className="text-base text-gray-500 font-normal">
                Blue Leather Wallet,
                <br /> for men
              </p>
            </div>
            <div className="bg-white shadow rounded-lg p-3">
              <img src="images/28.png" alt="Bag" className="w-full mb-3 rounded-lg" />
              <h3 className="text-base font-bold text-gray-800 pt-5">$10.30</h3>
              <p className="text-base text-gray-500 font-normal">
                Black medium Mug,
                <br /> for men
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

{/* Extra Services Section */}

const ExtraServices = () => {
  return (
    <>
      <div className="w-full sm:w-[90%] lg:w-[1170px] mx-auto lg:-ml-[28px] sm:ml-[28px] p-4 hidden md:block">
        <h2 className="text-2xl font-bold mb-6">Our extra services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-14">

          <div className="bg-white rounded-lg shadow-md relative w-full sm:w-[200px] lg:w-[280px] mx-auto">
            <div className="bg-cover bg-center h-28 rounded-t-lg" style={{ backgroundImage: "url('images/104.png')" }}>
              </div>
            <div className="absolute top-[86px] right-4 w-14 h-14 bg-blue-200 border-2 border-white rounded-full
             flex justify-center items-center">
              <img src="images/v1.png" className="w-4 h-4" alt="Service Icon" />
            </div>
            <div className="p-3.5">
              <p className="font-semibold text-gray-800 ml-1.5">
                Source from
                <br />
                Industry Hubs
              </p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md relative w-full sm:w-[200px] lg:w-[280px] mx-auto">
            <div className="bg-cover bg-center h-28 rounded-t-lg" style={{ backgroundImage: "url('images/105.png')" }}>
             </div>
            <div className="absolute top-[86px] right-4 w-14 h-14 bg-blue-200 border-2 border-white rounded-full flex justify-center items-center">
              <img src="images/v2.png" className="w-4 h-4" alt="Service Icon" />
            </div>
            <div className="p-3.5">
              <p className="font-semibold text-gray-800 ml-1.5">
                Customize and
                <br />
                Monitoring
              </p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md relative w-full sm:w-[200px] lg:w-[280px] mx-auto">
            <div className="bg-cover bg-center h-28 rounded-t-lg" style={{ backgroundImage: "url('images/106.png')" }}>
             </div>
            <div className="absolute top-[86px] right-4 w-14 h-14 bg-blue-200 border-2 border-white rounded-full flex justify-center items-center">
              <img src="images/v3.png" className="w-4 h-4" alt="Service Icon" />
            </div>
            <div className="p-3.5">
              <p className="font-semibold text-gray-800 ml-1.5">
                Fast, reliable shipping
                <br />
                by ocean and air
              </p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md relative w-full sm:w-[200px] lg:w-[280px] mx-auto">
            <div className="h-28 rounded-t-lg" style={{ backgroundImage: "url('images/107.png')" }}>
            </div>
            <div className="absolute top-[86px] right-4 w-14 h-14 bg-blue-200 border-2 border-white rounded-full flex justify-center items-center">
              <img src="images/v4.png" className="w-4 h-4" alt="Service Icon" />
            </div>
            <div className="p-3.5">
              <p className="font-semibold text-gray-800 ml-1.5">
                Product check
                <br />
                and inspection
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const SuppliersSection = () => {
  return (
    <>
      {/* Flags Section */}

      <div className="w-full sm:w-[90%] lg:w-[1170px] mx-auto lg:-ml-[28px] sm:ml-[28px] py-8 px-4 hidden md:block">
        <h2 className="text-2xl font-bold mb-6">Suppliers by region</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6 lg:gap-4">

          <div className="flex items-center space-x-2">
            <img src="images/i1.png" className="w-7 h-5 flex-shrink-0" alt="Arabic Emirates" />
            <div className="flex flex-col ml-2">
              <p className="font-medium text-medium leading-none text-ellipsis overflow-hidden whitespace-nowrap">
                Arabic Emirates
              </p>
              <p className="text-sm text-gray-500 leading-none text-ellipsis overflow-hidden whitespace-nowrap">
                shopname.ae
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <img src="images/i2.png" className="w-7 h-5 flex-shrink-0" alt="Australia" />
            <div className="flex flex-col ml-2">
              <p className="font-medium text-medium leading-none text-ellipsis overflow-hidden whitespace-nowrap">
                Australia
              </p>
              <p className="text-sm text-gray-500 leading-none text-ellipsis overflow-hidden whitespace-nowrap">
                shopname.ae
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <img src="images/i3.png" className="w-7 h-5 flex-shrink-0" alt="United States" />
            <div className="flex flex-col ml-2">
              <p className="font-medium text-medium leading-none text-ellipsis overflow-hidden whitespace-nowrap">
                United States
              </p>
              <p className="text-sm text-gray-500 leading-none text-ellipsis overflow-hidden whitespace-nowrap">
                shopname.ae
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <img src="images/i4.png" className="w-7 h-5 flex-shrink-0" alt="Russia" />
            <div className="flex flex-col ml-2">
              <p className="font-medium text-medium leading-none text-ellipsis overflow-hidden whitespace-nowrap">
                Russia
              </p>
              <p className="text-sm text-gray-500 leading-none text-ellipsis overflow-hidden whitespace-nowrap">
                shopname.ae
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <img src="images/i5.png" className="w-7 h-5 flex-shrink-0" alt="Italy" />
            <div className="flex flex-col ml-2">
              <p className="font-medium text-medium leading-none text-ellipsis overflow-hidden whitespace-nowrap">
                Italy
              </p>
              <p className="text-sm text-gray-500 leading-none text-ellipsis overflow-hidden whitespace-nowrap">
                shopname.ae
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <img src="images/i6.png" className="w-7 h-5 flex-shrink-0" alt="Denmark" />
            <div className="flex flex-col ml-2">
              <p className="font-medium text-medium leading-none text-ellipsis overflow-hidden whitespace-nowrap">
                Denmark
              </p>
              <p className="text-sm text-gray-500 leading-none text-ellipsis overflow-hidden whitespace-nowrap">
                shopname.ae
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <img src="images/i7.png" className="w-7 h-5 flex-shrink-0" alt="France" />
            <div className="flex flex-col ml-2">
              <p className="font-medium text-medium leading-none text-ellipsis overflow-hidden whitespace-nowrap">
                France
              </p>
              <p className="text-sm text-gray-500 leading-none text-ellipsis overflow-hidden whitespace-nowrap">
                shopname.ae
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <img src="images/i1.png" className="w-7 h-5 flex-shrink-0" alt="Arabic Emirates" />
            <div className="flex flex-col ml-2">
              <p className="font-medium text-medium leading-none text-ellipsis overflow-hidden whitespace-nowrap">
                Arabic Emirates
              </p>
              <p className="text-sm text-gray-500 leading-none text-ellipsis overflow-hidden whitespace-nowrap">
                shopname.ae
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <img src="images/i8.png" className="w-7 h-5 flex-shrink-0" alt="China" />
            <div className="flex flex-col ml-2">
              <p className="font-medium text-medium leading-none text-ellipsis overflow-hidden whitespace-nowrap">
                China
              </p>
              <p className="text-sm text-gray-500 leading-none text-ellipsis overflow-hidden whitespace-nowrap">
                shopname.ae
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <img src="images/i9.png" className="w-7 h-5 flex-shrink-0" alt="Great Britain" />
            <div className="flex flex-col ml-2">
              <p className="font-medium text-medium leading-none text-ellipsis overflow-hidden whitespace-nowrap">
                Great Britain
              </p>
              <p className="text-sm text-gray-500 leading-none text-ellipsis overflow-hidden whitespace-nowrap">
                shopname.ae
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const SubscribeSection = () => {
  return (
    <>
      {/* Subscribe Section */}
      <div className="absolute left-0 right-0 w-screen bg-gray-200 hidden md:block">
        <div className="max-w-screen-lg mx-auto py-6 px-4 md:px-12 text-center">
          <h2 className="text-xl font-bold">Subscribe on our newsletter</h2>
          <p className="text-gray-600">
            Get daily news on upcoming offers from many suppliers all over the world
          </p>
          <div className="mt-4 flex flex-col sm:flex-row items-center justify-center gap-4 lg:gap-1.5">
            <div className="relative w-full sm:w-80 lg:w-64">
              <img src="images/email.png" className="absolute left-3 top-1/2 transform -translate-y-1/2 w-6 h-6"
                alt="Email Icon" />
              <input type="email" placeholder="Email" className="pl-10 pr-4 py-2 w-full border rounded-md 
              focus:outline-none" />
            </div>
            <button className="bg-blue-600 text-white py-2 px-5 rounded-md hover:bg-blue-700 transition">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

const MainContent = () => {
  return (
    <main className="container mx-auto bg-white rounded-md md:border sm:border-none sm:my-0 
    md:my-6 sm:px-0 md:px-4 max-w-[1170px] max-h-[400px]">
      <div className="flex flex-col md:flex-row">
      

        <Sidebar />
        <div className="flex-1 p-2">
          <Banner />
        </div>

        <RightBoxes />
      </div>

      <DealsSection />
      <HomeAndOutdoorSection />
      <ConsumerElectronics />
      <InquirySection />
      <ItemsSection />
      <ExtraServices />
      <SuppliersSection />
      <SubscribeSection />
      <Footer />
    </main>
  );
};

export default MainContent;