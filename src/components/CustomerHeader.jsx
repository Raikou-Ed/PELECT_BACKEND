import { useState } from 'react';
import { Link } from 'react-router-dom';

function CustomerHeader() {
  // State to manage the dropdown visibility
  const [isOpen, setIsOpen] = useState(false);

  // Toggle function for the dropdown
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  // Function to close the dropdown when a menu item is clicked
  const closeDropdown = () => {
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <div className="bg-blue-950 p-3.5 z-10">
        <div className="flex justify-between items-center mx-12">
          {/* Header Text */}
          <h1 className="text-2xl text-yellow-500 text-center font-bold font-poppins">
            Home Services Booking Platform
          </h1>

          {/* Hamburger Menu Button */}
          <div className="relative">
            <button
              onClick={toggleDropdown}
              className="flex flex-col justify-center items-center w-10 h-10 rounded focus:outline-none"
            >
              <span className="block w-6 h-0.5 bg-white mb-1"></span>
              <span className="block w-6 h-0.5 bg-white mb-1"></span>
              <span className="block w-6 h-0.5 bg-white"></span>
            </button>

            {/* Dropdown Menu */}
            <div
              className={`${
                isOpen ? 'block' : 'hidden'
              } z-10 origin-top-right absolute right-0 mt-2 w-56 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none`}
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="menu-button"
            >
              <div className="py-1" role="none">
                <Link
                  to="/CustomerProfile"
                  className="text-gray-700 block px-4 py-2 text-sm"
                  onClick={closeDropdown} // Close dropdown when clicked
                >
                  Profile
                </Link>
              </div>
              <div className="py-1" role="none">
                <Link
                  to="/BookAppointment"
                  className="text-gray-700 block px-4 py-2 text-sm"
                  onClick={closeDropdown} // Close dropdown when clicked
                >
                  Book Appointment
                </Link>
              </div>
              <div className="py-1" role="none">
                <Link
                  to="/login"
                  className="text-gray-700 block px-4 py-2 text-sm"
                  onClick={closeDropdown} // Close dropdown when clicked
                >
                  Log out
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CustomerHeader;