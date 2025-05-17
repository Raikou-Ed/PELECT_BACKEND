import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import * as send from '../js/send.js';
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

    const handleLogin = async () => {
      const credentials = {
        "email": email,
        "password" : password
      }
      const response = await send.login(credentials);
      if (response.message.includes("successfully")) {
        if (response.data.user_is_cus === true) {
          navigate('/CreateAccountCustomer'); 
        } else {
          navigate('/UserManagement'); 
        }
      } else {
        setError(response.message);
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
        <div className="w-[400px] bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-black text-4xl font-bold text-center mb-6">
            Log in
          </h3>

          {/* Email Input */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-900">Email address</label>
            <input 
              type="email" 
              name="email" 
              id="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required 
              className="block w-full mt-2 p-3 rounded-md bg-white text-gray-900 border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-600"
            />
          </div>

          {/* Password Input */}
          <div className="mb-6">
            <div className="flex items-center justify-between">
              <label htmlFor="password" className="block text-sm font-medium text-gray-900">Password</label>
              <div className="text-sm">
                <Link to="/ForgotPassword">
                  <a className="font-semibold text-indigo-600 hover:text-indigo-500">Forgot password?</a>
                </Link>
              </div>
            </div>
            <input 
              type="password" 
              name="password" 
              id="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required 
              className="block w-full mt-2 p-3 rounded-md bg-white text-gray-900 border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-600"
            />
          </div>

          {/* Error Message */}
          {error && <p className="text-red-600 text-sm">{error}</p>}

          {/* Submit Button */}
          <div>
            <button 
              onClick={handleLogin}
              className="w-full py-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-500 focus:ring-2 focus:ring-indigo-600"
            >
              Sign in
            </button>
          </div>

          {/* Registration Link */}
          <p className="mt-6 text-center text-sm text-gray-500">
            Don't have an account?
            <Link to="/CreateAccount">     
              <a className="font-semibold text-indigo-600 hover:text-indigo-500">Create Account</a>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;








// import React from 'react';
// import { Link } from 'react-router-dom'; 

// const Login = () => {
//   return (
//     <div className="relative w-full h-screen">
//       {/* Background Image */}
//       <img 
//         src="img2.jpg" 
//         alt="Home Services" 
//         className="w-full h-full object-cover absolute top-0 left-0 -z-10" 
//       />

//       {/* Login Form */}
//       <div className="flex justify-center items-center h-full">
//         <div className="w-[400px] bg-white p-6 rounded-lg shadow-lg">
//           <h3 className="text-black text-4xl font-bold text-center mb-6">
//             Log in
//           </h3>

//           {/* Email Input */}
//           <div className="mb-4">
//             <label htmlFor="email" className="block text-sm font-medium text-gray-900">Email address</label>
//             <input 
//               type="email" 
//               name="email" 
//               id="email" 
//               autoComplete="email" 
//               required 
//               className="block w-full mt-2 p-3 rounded-md bg-white text-gray-900 border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-600"
//             />
//           </div>

//           {/* Password Input */}
//           <div className="mb-6">
//             <div className="flex items-center justify-between">
//               <label htmlFor="password" className="block text-sm font-medium text-gray-900">Password</label>
//               <div className="text-sm">
//               <Link to="/ForgotPassword">
//                 <a className="font-semibold text-indigo-600 hover:text-indigo-500">Forgot password?</a>
//                 </Link>
//               </div>
//             </div>
//             <input 
//               type="password" 
//               name="password" 
//               id="password" 
//               autoComplete="current-password" 
//               required 
//               className="block w-full mt-2 p-3 rounded-md bg-white text-gray-900 border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-600"
//             />
//           </div>

//           {/* Submit Button */}
//           <div>
//           <Link to="/CreateProfile">
//             <button 
//             type="submit" 
//               className="w-full py-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-500 focus:ring-2 focus:ring-indigo-600"
//             >
//               Sign in
             
//             </button>
//             </Link>
//           </div>

//           {/* Registration Link */}

//           <p className="mt-6 text-center text-sm text-gray-500">
//           Dont have an account?
//           <Link to="/CreateAccount">     
//             <a  className="font-semibold text-indigo-600 hover:text-indigo-500">Create Account</a>
//             </Link>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };