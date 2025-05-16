import React from 'react';
import { Link } from 'react-router-dom';

const CreateProfile = () => {
  return (
    <div className="min-h-screen bg-cover bg-center bg-no-repeat flex justify-center items-center p-4" style={{ backgroundImage: "url('/image.jpg')" }}>
      <div className="bg-gray-700 text-white rounded-lg shadow-lg p-6 w-full max-w-4xl">
        <div className="flex items-center mb-5">
          <div className="w-16 h-16 rounded-full bg-gray-500 flex items-center justify-center text-3xl">
            S
          </div>
          <div className="ml-4 text-xl font-bold">Create Profile</div>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block mb-1">First Name:</label>
            <input type="text" className="w-full p-2 rounded bg-white text-black" placeholder="First Name" />
          </div>
          <div>
            <label className="block mb-1">Last Name:</label>
            <input type="text" className="w-full p-2 rounded bg-white text-black border border-gray-300" placeholder="Last Name" />
          </div>
          <div>
            <label className="block mb-1">Sex:</label>
            <input type="text" className="w-full p-2 rounded bg-white text-black" placeholder="Sex" />
          </div>
          <div>
            <label className="block mb-1">Date of Birth:</label>
            <input type="date" className="w-full p-2 rounded bg-white text-black" />
          </div>
          <div>
            <label className="block mb-1">Phone Number:</label>
            <input type="text" className="w-full p-2 rounded bg-white text-black" placeholder="Phone Number" />
          </div>
          <div>
            <label className="block mb-1">Email:</label>
            <input type="email" className="w-full p-2 rounded bg-white text-black" placeholder="Email" />
          </div>
          <div>
            <label className="block mb-1">Nationality:</label>
            <input type="text" className="w-full p-2 rounded bg-white text-black" placeholder="Nationality" />
          </div>
          <div>
            <label className="block mb-1">Civil Status:</label>
            <input type="text" className="w-full p-2 rounded bg-white text-black" placeholder="Civil Status" />
          </div>
          <div>
            <label className="block mb-1">Rate:</label>
            <input type="text" className="w-full p-2 rounded bg-white text-black" placeholder="Rate" />
          </div>
          <div>
            <label className="block mb-1">Service Type:</label>
            <select className="w-full p-2 rounded bg-white text-black">
              <option value="" disabled selected>Select a service type</option>
              <option value="service1">Service 1</option>
              <option value="service2">Service 2</option>
              <option value="service3">Service 3</option>
              <option value="service4">Service 4</option>
            </select>
          </div>
        </div>

        <div className="mb-4">
          <label className="block mb-1">Current Address:</label>
          <textarea className="w-full p-2 rounded bg-white text-black" rows="2" placeholder="Current Address"></textarea>
        </div>

        <div className="mb-4">
          <label className="block mb-1">Description:</label>
          <textarea className="w-full p-2 rounded bg-white text-black" rows="3" placeholder="Description"></textarea>
        </div>

        <div className="mb-4">
          <label className="block mb-1">Service area:</label>
          <input type="text" className="w-full p-2 rounded bg-white text-black" placeholder="Service area" />
        </div>

        <div className="flex items-center mt-4 space-x-4">
        <Link to="/ServiceProfile">
          <button className="bg-blue-600 hover:bg-blue-700 text-white rounded py-2 px-4">
            Create Account
          </button>
        </Link>
        <Link to="/Login" className="text-red-400 hover:underline">
          Cancel Creating
        </Link>
        </div>
      </div>
    </div>
  );
};

export default CreateProfile;