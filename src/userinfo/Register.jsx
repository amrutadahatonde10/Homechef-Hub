import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();
  const username = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const confirmPassword = useRef(null);
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError(null);

    if (password.current.value !== confirmPassword.current.value) {
      setError("Passwords do not match!");
      return;
    }

    if (!acceptTerms) {
      setError("You must accept the terms and conditions to register.");
      return;
    }

    const newUser = {
      username: username.current.value,
      email: email.current.value,
      password: password.current.value,
    };

    try {
      setLoading(true);
      const response = await fetch(
        "https://67a71bbe510789ef0dfcfdc7.mockapi.io/api/users",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(newUser),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to register. Please try again.");
      }

      console.log("Registration successful!");

      // ✅ Automatically redirect to Login page
      navigate("/login"); 
    } catch (error) {
      setError("Something went wrong. Please try again.");
      console.error("Error registering:", error);
    }

    setLoading(false);
  };

  return (
    <div
      className="flex items-center justify-center min-h-screen"
      style={{
        background:
          "linear-gradient(to right,rgb(241, 200, 184),rgb(226, 198, 245))",
      }}
    >
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg border-2 border-gray-300 relative">
        <div className="absolute top-1 left-2">
          <img
            src="https://imgs.search.brave.com/h4eZqHO0NUYV2xHHaGPiRIP-7W7k9qiCxDJjjUr_B2M/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAxLzcxLzk2LzM4/LzM2MF9GXzE3MTk2/MzgzMF9kYWdxUHBX/cVphZ2pnNkpTYlFh/YW9PT0h5TlI2R2lW/ay5qcGc"
            alt="logo"
            className="w-25 h-20"
          />
        </div>

        <h2 className="text-2xl font-semibold text-center mb-8">Sign Up</h2>

        {error && <p className="text-red-500 text-center">{error}</p>}

        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Username:
              </label>
              <input
                ref={username}
                placeholder="Enter your username"
                type="text"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Email:
              </label>
              <input
                ref={email}
                placeholder="Enter your email"
                type="email"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Password:
              </label>
              <input
                ref={password}
                placeholder="Enter your password"
                type="password"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Confirm Password:
              </label>
              <input
                ref={confirmPassword}
                placeholder="Confirm your password"
                type="password"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
          </div>
          <div className="mb-6 flex items-center">
            <input
              type="checkbox"
              checked={acceptTerms}
              onChange={() => setAcceptTerms(!acceptTerms)}
              className="w-4 h-4 text-blue-500 border-gray-300 rounded focus:ring-blue-500"
            />
            <label className="ml-2 text-gray-700 text-sm">
              {" "}
              I agree to the{" "}
              <a href="#" className="text-blue-500 hover:text-blue-700">
                Terms & Conditions
              </a>
            </label>
          </div>
          <div className="text-center mb-4">
            <button
              type="submit"
              className="w-full py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none"
              disabled={loading}
            >
              {loading ? "Registering..." : "Register"}
            </button>
          </div>
          <div className="text-center">
            <p className="text-sm text-gray-600">
              Already have an account?{" "}
              <Link
                to="/login"
                className="text-blue-500 hover:text-blue-700"
              >
                Sign In
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
