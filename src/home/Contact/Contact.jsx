import React from "react";
import Navbar1 from "../Navbar/Navbar1";
import Navbar2 from "../Navbar/Navbar2";
import Footer from "../Footer/Footer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    toast.success("Form submitted successfully!", {
      position: "top-right",
    });
  };

  return (
    <>
      <style>
        {`
          /* Prevent autofill background color change */
          input:-webkit-autofill {
            -webkit-box-shadow: 0 0 0px 1000px white inset !important;
            box-shadow: 0 0 0px 1000px white inset !important;
            -webkit-text-fill-color: #000 !important;
          }

          /* Custom Toast position */
          .custom-toast-container {
            top: calc(7vh + 1rem); /* Adjust for navbar height */
            right: 1rem; /* Slightly away from right edge */
          }
        `}
      </style>
      <Navbar1 />
      <Navbar2 />
      <div className="mt-[17vh]">
        <div className="min-h-screen p-6 flex flex-col items-center">
          <h1
            className="text-4xl font-bold mb-6 text-center text-black"
            style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.3)" }}
          >
            Contact Us
          </h1>
          <div className="bg-white shadow-lg rounded-lg border-2 border-gray-300 p-6 w-full max-w-2xl">
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-gray-700 font-semibold mb-2"
                >
                  Your Name:
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Enter your name"
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-gray-700 font-semibold mb-2"
                >
                  Your Email:
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                  required
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="block text-gray-700 font-semibold mb-2"
                >
                  Your Message:
                </label>
                <textarea
                  id="message"
                  rows="4"
                  placeholder="Write your message here"
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full py-3 bg-purple-600 text-white font-semibold rounded-md hover:bg-purple-700 transition"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
        <Footer />
      </div>
      {/* ToastContainer with custom positioning */}
      <ToastContainer
        toastClassName="custom-toast-container"
        className="custom-toast-container"
        autoClose={3000}
      />
    </>
  );
};

export default Contact;
