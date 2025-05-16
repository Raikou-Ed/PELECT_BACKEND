function Header() {
    return (
      
      <div className="relative">
        <div className="bg-blue-950 p-3.5 z-10">
          <div className="flex justify-between items-center mx-12">
            {/* Header Text */}
            <h1 className="text-2xl text-yellow-500 text-center font-bold font-poppins ">
              HOME SERVICES BOOKING PLATFORM
            </h1>
            <a href="/Home" className="text-1 text-white tracking-wide text-center">Home</a>
            <a href="/aboutUs" className="text-1 text-white ">About Us</a>
            <a href="/ContactUs" className="text-1 text-white ">Contact Us</a>
            <a href="/Feedback" className="text-1 text-white ">Feedback</a>
          </div>
        </div>
      </div>
    );
  }
  
  export default Header;