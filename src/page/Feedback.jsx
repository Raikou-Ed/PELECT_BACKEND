import React from 'react';

const Feedback = () => {
  return (
<div>
  <div className="relative">
        <img src="image.jpg" alt="Home Services" className="w-full h-[563px] object-cover" />
      </div>
      <div className="text-custom-yellow font-bold font-Poppins absolute top-20 left-1/2 transform -translate-x-1/2 text-5xl font-serif ">
        We value your opinion.
      </div>

      <div className="text-white absolute top-60 left-1/2 transform -translate-x-1/2 text-xl font-serif">
        Kindly take a moment to tell use what you think.
        <textarea className=" text-black w-full h-60 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black resize-none" placeholder="Type your message..."></textarea>
      </div>
      <button className="w-[200px] h-10 rounded-lg text-white bg-blue-950 flex justify-center items-center  absolute left-1/2 transform -translate-x-1/2 text-xl font-serif bottom-10">
        Share my feedback
      </button>
      

      </div>
);
};

export default Feedback;