import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

function AdminHeader() {
  // State to manage the dropdown visibility
  const [isOpen, setIsOpen] = useState(false);

  // Reference to the dropdown menu for detecting outside clicks
  const dropdownRef = useRef(null);
  const menuButtonRef = useRef(null);

  // Toggle function for the dropdown
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  // Close dropdown when a menu item is clicked
  const closeDropdown = () => {
    setIsOpen(false);
  };

  // Effect hook to handle clicks outside the dropdown and menu button
  useEffect(() => {
    // Function to handle click outside of dropdown and menu button
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current && !dropdownRef.current.contains(event.target) &&
        menuButtonRef.current && !menuButtonRef.current.contains(event.target)
      ) {
        setIsOpen(false); // Close the dropdown if click is outside
      }
    };

    // Add event listener for click outside
    document.addEventListener('mousedown', handleClickOutside);

    // Cleanup event listener on component unmount
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="relative">
      <div className="bg-blue-950 p-3.5 z-10">
        <div className="flex justify-between items-center mx-12">
          {/* Header Text */}
          <h1 className="text-2xl text-yellow-500 text-center font-bold font-poppins">
            HOME SERVICES BOOKING PLATFORM
          </h1>

          {/* Service Type Dropdown */}
          <div className="relative inline-block text-left" ref={menuButtonRef}>
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
              ref={dropdownRef}
              className={`${
                isOpen ? 'block' : 'hidden'
              } z-10 origin-top-right absolute right-0 mt-2 w-56 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none`}
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="menu-button"
            >
              <div className="py-1" role="none">
                <Link
                  to="/UserManagement"
                  className="text-gray-700 block px-4 py-2 text-sm"
                  role="menuitem"
                  onClick={closeDropdown} // Close dropdown when clicked
                >
                  User Management
                </Link>
                <Link
                  to="/AdmitBooking"
                  className="text-gray-700 block px-4 py-2 text-sm"
                  role="menuitem"
                  onClick={closeDropdown} // Close dropdown when clicked
                >
                  Bookings
                </Link>
                <Link
                  to="/ApproveProvider"
                  className="text-gray-700 block px-4 py-2 text-sm"
                  role="menuitem"
                  onClick={closeDropdown} // Close dropdown when clicked
                >
                  Approve providers
                </Link>
                <Link
                  to="/Login"
                  className="text-gray-700 block px-4 py-2 text-sm"
                  role="menuitem"
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

export default AdminHeader;