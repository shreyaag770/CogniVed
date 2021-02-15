import React from "react";
// import Homebg from './Home-bg.jpg';

const Home = () => {
  return (
    <>
      <div
        className="justify-center items-center object-cover"
        style={{
          backgroundImage: `url(./Home-bg.jpg)`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="h-screen flex justify-center items-center">
          <h1 className="text-2xl py-2 px-4 lg:text-7xl font-black bg-blue-200 lg:py-8 lg:px-24 rounded-tl-3xl rounded-br-3xl">We Make digital happen</h1>
        </div>
      
      <div className="flex justify-evenly m-4 lg:m-0 items-center flex-wrap lg:flex-nowrap h-screen">
        <div className="flex flex-wrap gap-1 py-2 px-4  lg:gap-2 text-xl lg:text-2xl font-normal font-black mb-8 bg-blue-200 lg:py-8 lg:px-12 rounded-tl-3xl rounded-br-3xl">
          <div className="font-bold">Empowering </div> <div className="text-normal font-normal w-auto">medical professionals with the power of</div> <div className="font-bold">Mixed Reality</div>
        </div>
        <div className=" bg-white rounded-lg justify-center w-full h-96 lg:w-1/3 "></div>
      </div>

      {/* <h1 className="text-9xl uppercase font-black">About Page</h1> */}

    
      <div className="flex justify-evenly items-center mx-4 lg:m-0 h-screen flex-wrap lg:flex-nowrap">
        <div className="flex gap-2 flex-wrap text-xl lg:text-2xl font-normal font-black bg-blue-200 py-8 px-12 rounded-tl-3xl rounded-br-3xl">
          <div className="font-bold">Re-imagning </div> <div className="text-normal font-normal">patient experience through turkey</div> <div className="font-bold">AI chatbot solutions</div>
        </div>
        <div className=" bg-white rounded-lg justify-center w-full h-96 lg:w-1/3 "></div>
      </div>
      </div>
    </>
  );
};

export default Home;
