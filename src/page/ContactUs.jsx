import React from 'react';

const ContactUs = () => {
  return (
    <div>
      <div className="relative">
        <img src="image.jpg" alt="Home Services" className="w-full h-[570px] object-cover" />
      </div>

      <div className="w-[300px] h-[300px] rounded-full overflow-hidden absolute top-20 right-20">
        <img src="img1.jpeg" alt="Circular Image" className="w-full h-full object-cover" />
      </div>

      <div className="w-[250px] h-[250px] rounded-full overflow-hidden absolute bottom-5 right-1/4">
        <img src="img3.avif" alt="Circular Image" className="w-full h-full object-cover" />
      </div>

      <div className="w-[350px] h-40 rounded-lg bg-blue-400 flex justify-center items-center absolute bottom-20 left-40">
  <img src="img5.png" alt="Service Icon" className="w-16 h-10 absolute top-2 left-1" />
  <span className="text-white text-xm font-bold absolute top-4 right-5">Home Services Booking Platform
    <img src="img4.png" alt="Service Icon" className="w-15 h-10 absolute top-10 -left-16" ></img>
    <span className="text-white text-xm font-bold absolute top-12 left-0.5">Homeservice@gmail.com
    <img src="img6.png" alt="Service Icon" className="w-15 h-10 absolute -bottom-14 -left-16" ></img>
    <span className="text-white text-xm font-bold absolute top-12 left-0.5">09091095155
  </span>
  </span>
  </span>
  </div>
  <div className="text-custom-yellow font-bold absolute top-44 left-40 text-6xl font-serif">Want To Know More? <br></br>
  Reach out to us!
  </div>
         
</div>




    
  );
};

export default ContactUs;