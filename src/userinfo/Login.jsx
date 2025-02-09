import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';

function Login({ onSwitchForm }) {
  const username = useRef(null);
  const password = useRef(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await fetch("https://67a71bbe510789ef0dfcfdc7.mockapi.io/api/users");
      const users = await response.json();

      const user = users.find(
        (u) => u.username === username.current.value && u.password === password.current.value
      );

      if (user) {
        console.log("Login successful:", user);
        alert("Login successful!");
        // You can store user info in localStorage or context here
      } else {
        setError("Invalid username or password");
      }
    } catch (error) {
      console.error("Error logging in:", error);
      setError("Something went wrong. Please try again.");
    }

    setLoading(false);
  };

  return (
    <div
      className="flex items-center justify-center min-h-screen"
      style={{ background: "linear-gradient(to right,rgb(241, 200, 184),rgb(226, 198, 245))" }}
    >
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-sm border-2 border-gray-300 relative">
        <div className="absolute top-1 left-2">
          <img
            src="https://imgs.search.brave.com/h4eZqHO0NUYV2xHHaGPiRIP-7W7k9qiCxDJjjUr_B2M/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAxLzcxLzk2LzM4/LzM2MF9GXzE3MTk2/MzgzMF9kYWdxUHBX/cVphZ2pnNkpTYlFh/YW9PT0h5TlI2R2lW/ay5qcGc"
            alt="logo"
            className="w-25 h-20"
          />
        </div>

        <h2 className="text-2xl font-semibold text-center mb-8">SignIn</h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="username" className="block text-gray-700 font-semibold mb-2">
              Username:
            </label>
            <input
              id="username"
              ref={username}
              placeholder="Enter your username"
              type="text"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-700 font-semibold mb-2">
              Password:
            </label>
            <input
              id="password"
              ref={password}
              placeholder="Enter your password"
              type="password"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
          <button
            type="submit"
            className="w-full py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none"
            disabled={loading}
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        <div className="text-center mt-4">
          <p className="text-sm text-gray-600">
            Don't have an account?{" "}
            <Link to="/register" onClick={onSwitchForm} className="text-blue-500 hover:text-blue-700">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
