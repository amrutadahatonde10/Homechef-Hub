import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login({ onSwitchForm }) {
  const navigate = useNavigate();
  const usernameRef = useRef(null);
  const passwordRef = useRef(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError(null);

    const username = usernameRef.current.value.trim();
    const password = passwordRef.current.value.trim();

    if (!username || !password) {
      setError("Username and password are required.");
      return;
    }

    try {
      setLoading(true);
      const response = await fetch("https://67a71bbe510789ef0dfcfdc7.mockapi.io/api/users");
      const users = await response.json();

      const user = users.find((u) => u.username === username && u.password === password);

      if (user) {
        console.log("Login successful:", user);
        localStorage.setItem("isLoggedIn", "true");
        localStorage.setItem("user", JSON.stringify(user));
        navigate("/"); // Redirect to dashboard/homepage
      } else {
        setError("Invalid username or password.");
      }
    } catch (error) {
      console.error("Error logging in:", error);
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-orange-200 to-purple-200">
      <div className="bg-white p-10 rounded-lg shadow-lg w-full max-w-sm border border-gray-300 relative">
        {/* Logo Placement */}
        <div
          className="absolute top-2 left-2 cursor-pointer"
          onClick={() => navigate("/")} // Navigate to the home page when clicked
        >
          <img
            src="https://imgs.search.brave.com/h4eZqHO0NUYV2xHHaGPiRIP-7W7k9qiCxDJjjUr_B2M/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAxLzcxLzk2LzM4/LzM2MF9GXzE3MTk2/MzgzMF9kYWdxUHBX/cVphZ2pnNkpTYlFh/YW9PT0h5TlI2R2lW/ay5qcGc"
            alt="logo"
            className="w-25 h-20"
          />
        </div>

        <h2 className="text-2xl font-semibold text-center mb-6">Sign In</h2>

        {error && <p className="text-red-500 text-sm text-center mb-4">{error}</p>}

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">Username:</label>
            <input
              ref={usernameRef}
              type="text"
              placeholder="Enter your username"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-2">
            <label className="block text-gray-700 font-semibold mb-2">Password:</label>
            <input
              ref={passwordRef}
              type="password"
              placeholder="Enter your password"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          
        <div className="text-center mb-6 ml-16">
      <Link to="/forgot-password" className="text-blue-500 hover:text-blue-700 text-sm ml-28">
        Forgot Password?
      </Link>
    </div>

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
          <p className="text-sm text-gray-600 mt-2">
            Login as{" "}
            <Link to="/admin" className="text-blue-500 hover:text-red-700">
              Admin
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;

