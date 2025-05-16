import React from 'react';
import {Link} from 'react-router-dom';

const CreateAccount = () => {
  return (
    <div className="relative w-full h-screen">
      {/* Background Image */}
      <img 
        src="image.jpg" 
        alt="Home Services"    className="w-full h-full object-cover absolute top-0 left-0 -z-10" 
      />

      {/* Login Form */}
      <div className="flex justify-center items-center h-full">
        <div className="w-[600px] h-[600px] bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-black text-4xl font-bold text-center mb-6">
            Create Account
          </h3>

          {/* Firstname and Lastname */}
          <div className="flex space-x-4 mb-4">
            {/* Firstname */}
            <div className="flex-1">
              <label htmlFor="Firstname" className="block text-sm font-medium text-gray-900">Firstname</label>
              <input 
                type="text" 
                name="Firstname" 
                id="Firstname"
                required 
                className="block w-full mt-2 p-2 rounded-md bg-white text-gray-900 border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-600"
              />
            </div>  

            {/* Lastname */}
            <div className="flex-1">
              <label htmlFor="Lastname" className="block text-sm font-medium text-gray-900">Lastname</label>
              <input 
                type="text" 
                name="Lastname" 
                id="Lastname"
                required 
                className="block w-full mt-2 p-2 rounded-md bg-white text-gray-900 border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-600"
              />
            </div>
          </div>

          {/* Gmail and Phone number */}
          <div className="flex space-x-4 mb-4">
            {/* Gmail */}
            <div className="flex-1">
              <label htmlFor="PhoneNumber" className="block text-sm font-medium text-gray-900">PhoneNumber</label>
              <input 
                type="PhoneNumber" 
                name="PhoneNumber"    
                id="PhoneNumber"
                autoComplete="PhoneNumber"
                required 
                className="block w-full mt-2 p-2 rounded-md bg-white text-gray-900 border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-600"
              />
            </div>  

            {/* Phone number */}
            <div className="flex-1">
              <label htmlFor="email" className="block text-sm font-medium text-gray-900">Gmail=</label>
              <input 
                type="text" 
                name="email" 
                id="email"
                required 
                className="block w-full mt-2 p-2 rounded-md bg-white text-gray-900 border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-600"
              />
            </div>
          </div>

          {/* Password Input */}
          <div className="mb-6">
            <div className="flex items-center justify-between">
              <label htmlFor="password" className="block text-sm font-medium text-gray-900">Password</label>
              <div className="text-sm">
              </div>
            </div>
            <input 
              type="password" 
              name="password" 
              id="password" 
              autoComplete="current-password" 
              required 
              className="block w-full mt-2 p-3 rounded-md bg-white text-gray-900 border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-600"
            />
          </div>

          {/* Comfirmation of Password Input */}
          <div className="mb-6">
            <div className="flex items-center justify-between">
              <label htmlFor="Confirmpassword" className="block text-sm font-medium text-gray-900">Confirm Password</label>
            </div>
            <input 
              type="Confirmpassword" 
              name="Confirmpassword" 
              id="Confirmpassword" 
              autoComplete="current-password" 
              required 
              className="block w-full mt-2 p-3 rounded-md bg-white text-gray-900 border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-600"
            />
          </div>

          {/* Submit Button */}
          <div>
          <Link to="/Login">
            <button 
              type="submit"
              className="w-full py-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-500 focus:ring-2 focus:ring-indigo-600"
            >
              Sign Up
            </button>
            </Link>
          </div>

          {/* Registration Link */}
          <p className="mt-6 text-center text-sm text-gray-500">
            Already Have an account?
            <Link to="/Login">
            <a className="font-semibold text-indigo-600 hover:text-indigo-500">Log in</a>
            </Link>
          </p>
          
        </div>
      </div>
    </div>
  );
};

export default CreateAccount;