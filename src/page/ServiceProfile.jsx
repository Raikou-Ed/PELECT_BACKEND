import React from 'react';
import { Link } from 'react-router-dom';

function ServiceProfile() {
  return (
    <div className="relative w-full min-h-screen">
      {/* Background Image */}
      <img 
        src="image.jpg" 
        alt="Home Services"    
        className="w-full h-full object-cover absolute top-0 left-0 -z-10" 
      />

      {/* Centered Content */}
      <div className="flex justify-center items-center min-h-screen p-5">
        <div className="w-full max-w-4xl">
          {/* Header */}
          <div className="p-4 bg-blue-600 text-white flex rounded-t-lg ">
            <div className="flex items-center">
              <div className="w-16 h-16 bg-gray-500 rounded-full flex items-center justify-center ">
                <span className="text-2xl text-white">S</span>
              </div>
              <div className="ml-4">
                <h1 className="text-xl font-semibold">Home Service (Profile)</h1>
                <p>#xxxx-xxx-xxxx</p>
                <p>Jane Doe S.</p>
                <p>Service Type</p>
                <p>Rate</p>
                <p>Service area</p>
              </div>
            </div>
            <div className="ml-auto">
              <Link to="/SaveChangesProvider">
                <button className="bg-gray-300 text-blue-700 px-4 py-2 rounded">
                  Edit Profile Details
                </button>
              </Link>
            </div>
          </div>

          {/* My Profile Section */}
          <div className="p-6 bg-gray-700 text-gray-800 rounded-b-lg ">
            <h2 className="text-2xl font-bold text-white mb-4">My Profile</h2>
            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block mb-1 text-white">First Name:</label>
                  <div className="border border-gray-300 p-2 w-full rounded bg-white">Jane</div>
                </div>
                <div>
                  <label className="block mb-1 text-white">Last Name:</label>
                  <div className="border border-gray-300 p-2 w-full rounded bg-white">Doe</div>
                </div>
                <div>
                  <label className="block mb-1 text-white">Sex:</label>
                  <div className="border border-gray-300 p-2 w-full rounded bg-white">Female</div>
                </div>
                <div>
                  <label className="block mb-1 text-white">Date of Birth:</label>
                  <div className="border border-gray-300 p-2 w-full rounded bg-white">01/01/1990</div>
                </div>
                <div>
                  <label className="block mb-1 text-white">Phone Number:</label>
                  <div className="border border-gray-300 p-2 w-full rounded bg-white">#xxxx-xxx-xxxx</div>
                </div>
                <div>
                  <label className="block mb-1 text-white">Email:</label>
                  <div className="border border-gray-300 p-2 w-full rounded bg-white">janedoe@example.com</div>
                </div>
                <div>
                  <label className="block mb-1 text-white">Nationality:</label>
                  <div className="border border-gray-300 p-2 w-full rounded bg-white">American</div>
                </div>
                <div>
                  <label className="block mb-1 text-white">Civil Status:</label>
                  <div className="border border-gray-300 p-2 w-full rounded bg-white">Single</div>
                </div>
                <div>
                  <label className="block mb-1 text-white">Rate:</label>
                  <div className="border border-gray-300 p-2 w-60 rounded bg-white">$50/hr</div>
                </div>
                <div>
                  <label className="block mb-1 text-white">Service Type:</label>
                  <div className="border border-gray-300 p-2 w-60 rounded bg-white">Service 1</div>
                </div>
              </div>

              <div className="mb-4">
                <label className="block mb-1 text-white">Current Address:</label>
                <div className="border border-gray-300 p-2 w-full rounded bg-white">123 Main St, City, Country</div>
              </div>

              <div className="mb-4">
                <label className="block mb-1 text-white">Description:</label>
                <div className="border border-gray-300 p-2 w-full rounded bg-white">Experienced service provider.</div>
              </div>

              <div className="mb-4">
                <label className="block mb-1 text-white">Service area:</label>
                <div className="border border-gray-300 p-2 w-full rounded bg-white">Area 1, City</div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServiceProfile;