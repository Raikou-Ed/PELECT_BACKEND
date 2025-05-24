import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const CreateAccount = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    user_fname: '',
    user_lname: '',
    phone: '',
    email: '',
    password: '',
    Confirmpassword: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.Confirmpassword) {
      setErrors({ Confirmpassword: ['Passwords do not match'] });
      return;
    }

    try {
      const response =  await axios.post('http://localhost:8000/api/register', {
      user_fname: formData.user_fname,
      user_lname: formData.user_lname,
      phone: formData.phone,
      email: formData.email,
      password: formData.password,
      user_address: '',         
      user_is_cus: true,
      user_is_adm: false,
      user_is_worker: false,
      user_is_active: true,
      user_dob: null           
    });

      alert('Account created successfully!');
      navigate('/Login');
    } catch (error) {
      if (error.response && error.response.status === 422) {
        setErrors(error.response.data.errors);
      } else {
        console.error(error);
      }
    }
  };

  return (
    <div className="relative w-full h-screen">
      {/* Background Image */}
      <img 
        src="image.jpg" 
        alt="Home Services"    
        className="w-full h-full object-cover absolute top-0 left-0 -z-10" 
      />

      {/* Login Form */}
      <div className="flex justify-center items-center h-full">
        <div className="w-[600px] h-[600px] bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-black text-4xl font-bold text-center mb-6">
            Create Account
          </h3>

          <form onSubmit={handleSubmit}>
            {/* Firstname and Lastname */}
            <div className="flex space-x-4 mb-4">
              <div className="flex-1">
                <label htmlFor="user_fname" className="block text-sm font-medium text-gray-900">Firstname</label>
                <input 
                  type="text" 
                  name="user_fname" 
                  id="user_fname"
                  required 
                  value={formData.user_fname}
                  onChange={handleChange}
                  className="block w-full mt-2 p-2 rounded-md bg-white text-gray-900 border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-600"
                />
                {errors.user_fname && <p className="text-red-500 text-xs">{errors.user_fname[0]}</p>}
              </div>  

              <div className="flex-1">
                <label htmlFor="user_lname" className="block text-sm font-medium text-gray-900">Lastname</label>
                <input 
                  type="text" 
                  name="user_lname" 
                  id="user_lname"
                  required 
                  value={formData.user_lname}
                  onChange={handleChange}
                  className="block w-full mt-2 p-2 rounded-md bg-white text-gray-900 border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-600"
                />
                {errors.user_lname && <p className="text-red-500 text-xs">{errors.user_lname[0]}</p>}
              </div>
            </div>

            {/* Phone number and Email */}
            <div className="flex space-x-4 mb-4">
              <div className="flex-1">
                <label htmlFor="phone" className="block text-sm font-medium text-gray-900">Phone Number</label>
                <input 
                  type="tel" 
                  name="phone"    
                  id="phone"
                  autoComplete="tel"
                  required 
                  value={formData.phone}
                  onChange={handleChange}
                  className="block w-full mt-2 p-2 rounded-md bg-white text-gray-900 border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-600"
                />
                {errors.phone && <p className="text-red-500 text-xs">{errors.phone[0]}</p>}
              </div>  

              <div className="flex-1">
                <label htmlFor="email" className="block text-sm font-medium text-gray-900">Email</label>
                <input 
                  type="email" 
                  name="email" 
                  id="email"
                  required 
                  value={formData.email}
                  onChange={handleChange}
                  className="block w-full mt-2 p-2 rounded-md bg-white text-gray-900 border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-600"
                />
                {errors.email && <p className="text-red-500 text-xs">{errors.email[0]}</p>}
              </div>
            </div>

            {/* Password Input */}
            <div className="mb-6">
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium text-gray-900">Password</label>
              </div>
              <input 
                type="password" 
                name="password" 
                id="password" 
                autoComplete="new-password" 
                required 
                value={formData.password}
                onChange={handleChange}
                className="block w-full mt-2 p-3 rounded-md bg-white text-gray-900 border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-600"
              />
              {errors.password && <p className="text-red-500 text-xs">{errors.password[0]}</p>}
            </div>

            {/* Confirm Password Input */}
            <div className="mb-6">
              <label htmlFor="Confirmpassword" className="block text-sm font-medium text-gray-900">Confirm Password</label>
              <input 
                type="password" 
                name="Confirmpassword" 
                id="Confirmpassword" 
                autoComplete="new-password" 
                required 
                value={formData.Confirmpassword}
                onChange={handleChange}
                className="block w-full mt-2 p-3 rounded-md bg-white text-gray-900 border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-600"
              />
              {errors.Confirmpassword && <p className="text-red-500 text-xs">{errors.Confirmpassword[0]}</p>}
            </div>

            {/* Submit Button */}
            <div>
              <button 
                type="submit"
                className="w-full py-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-500 focus:ring-2 focus:ring-indigo-600"
              >
                Sign Up
              </button>
            </div>
          </form>

          {/* Registration Link */}
          <p className="mt-6 text-center text-sm text-gray-500">
            Already have an account?{' '}
            <Link to="/Login" className="font-semibold text-indigo-600 hover:text-indigo-500">Log in</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CreateAccount;
