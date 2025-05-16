import React from 'react';

const AboutUs = () => {
  return (
    <div className="relative">
  <img src="image.jpg" alt="Home Services" className="w-full h-[563px] object-cover" />

  {/* Section Title */}
  <div className="text-custom-yellow absolute top-20 left-8 transform text-7xl font-serif">
    Our Core Values
  </div>

  {/* Cleanliness - shifted inward */}
  <div className="absolute top-60 left-20 w-[200px]">
    <span className="w-full h-10 rounded-lg bg-white flex justify-center items-center text-custom-blue font-Poppins font-bold text-xl shadow-md">
      Cleanliness
    </span>
    <div className="mt-4 text-white text-lg text-center drop-shadow-lg">
      We are committed to maintaining a high standard of cleanliness in all our services, ensuring a healthy and welcoming environment for every customer.
    </div>
  </div>  

  {/* Quality - shifted closer to center */}
  <div className="absolute top-60 left-[30%] w-[200px]">
    <span className="w-full h-10 rounded-lg bg-white flex justify-center items-center text-custom-blue font-Poppins font-bold text-xl shadow-md">
      Quality
    </span>
    <div className="mt-4 text-white text-lg text-center drop-shadow-lg">
      Our focus on quality ensures that every service we offer is performed with excellence and attention to detail, delivering superior results every time.
    </div>
  </div>

  {/* Uniqueness - mirrored closer to center */}
  <div className="absolute top-60 right-[30%] w-[200px]">
    <span className="w-full h-10 rounded-lg bg-white flex justify-center items-center text-custom-blue font-Poppins font-bold text-xl shadow-md">
      Uniqueness
    </span>
    <div className="mt-4 text-white text-lg text-center drop-shadow-lg">
      We pride ourselves on offering distinctive services tailored to each customer’s needs, ensuring an experience that stands out from the rest.
    </div>
  </div>

  {/* Hospitality - shifted inward */}
  <div className="absolute top-60 right-20 w-[200px]">
    <span className="w-full h-10 rounded-lg bg-white flex justify-center items-center text-custom-blue font-Poppins font-bold text-xl shadow-md">
      Hospitality
    </span>
    <div className="mt-4 text-white text-lg text-center drop-shadow-lg">
      We believe in treating every customer with warmth, respect, and care, creating a positive and memorable experience with every interaction.
    </div>
  </div>
</div>


  );
};

export default AboutUs;