import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';


function Register({ onSwitchForm }) {
  const username = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const confirmPassword = useRef(null);
  const [acceptTerms, setAcceptTerms] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (password.current.value !== confirmPassword.current.value) {
      console.log("Passwords do not match!");
      return;
    }
    if (!acceptTerms) {
      console.log("You must accept the terms and conditions to register.");
      return;
    }
    console.log(username.current.value, email.current.value, password.current.value);
  };

  return (
    <div className="flex items-center justify-center min-h-screen "
    style={{ background: "linear-gradient(to right,rgb(241, 200, 184),rgb(226, 198, 245))" }}

    >
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg border-2 border-gray-300 relative">

        <div className="absolute top-1 left-2">
          <img
            src="https://imgs.search.brave.com/h4eZqHO0NUYV2xHHaGPiRIP-7W7k9qiCxDJjjUr_B2M/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAxLzcxLzk2LzM4/LzM2MF9GXzE3MTk2/MzgzMF9kYWdxUHBX/cVphZ2pnNkpTYlFh/YW9PT0h5TlI2R2lW/ay5qcGc"
            alt="logo"
            className="w-25 h-20"
          />
        </div>

        <h2 className="text-2xl font-semibold text-center mb-8">SignUp</h2>

        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            <div>
              <label htmlFor="username" className="block text-gray-700 font-semibold mb-2">Username:</label>
              <input
                id="username"
                ref={username}
                placeholder="Enter your username"
                type="text"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Email:</label>
              <input
                id="email"
                ref={email}
                placeholder="Enter your email"
                type="email"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            <div>
              <label htmlFor="password" className="block text-gray-700 font-semibold mb-2">Password:</label>
              <input
                id="password"
                ref={password}
                placeholder="Enter your password"
                type="password"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label htmlFor="confirmPassword" className="block text-gray-700 font-semibold mb-2">Confirm Password:</label>
              <input
                id="confirmPassword"
                ref={confirmPassword}
                placeholder="Confirm your password"
                type="password"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          <div className="mb-6 flex items-center">
            <input
              type="checkbox"
              id="acceptTerms"
              checked={acceptTerms}
              onChange={() => setAcceptTerms(!acceptTerms)}
              className="w-4 h-4 text-blue-500 border-gray-300 rounded focus:ring-blue-500"
            />
            <label htmlFor="acceptTerms" className="ml-2 text-gray-700 text-sm">
              I agree to the <a href="#" className="text-blue-500 hover:text-blue-700">Terms & Conditions</a>
            </label>
          </div>

          <div className="text-center mb-4">
            <button
              type="submit"
              className="w-full py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none"
            >
              Register
            </button>
          </div>

          <div className="text-center">
            <p className="text-sm text-gray-600">
              Already have an account? <Link to="/login" onClick={onSwitchForm} className="text-blue-500 hover:text-blue-700">Sign In</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
