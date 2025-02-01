import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-200 py-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* About Us */}
        <div>
          <h2 className="text-xl font-semibold mb-4">HomeChef Hub</h2>
          <p>
            Your go-to platform for discovering and sharing homemade recipes and
            culinary expertise. Join a vibrant community of passionate home
            chefs today!
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-medium mb-4 ml-[15vh]">Quick Links</h3>
          <ul className="space-y-2 ml-[15vh]">
            <li>
              <a href="/about" className="hover:text-white">
                About Us
              </a>
            </li>
            <li>
              <a href="/recipes" className="hover:text-white">
                Recipes
              </a>
            </li>
            <li>
              <a href="/blog" className="hover:text-white">
                Blog
              </a>
            </li>
            <li>
              <a href="/privacy-policy" className="hover:text-white">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="/terms&conditions" className="hover:text-white">
                Terms & Conditions
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Us */}
        <div>
          <h3 className="text-lg font-medium mb-4">Contact Us</h3>
          <ul className="space-y-2">
            <li>
              Email:{" "}
              <a
                href="mailto:support@homechefhub.com"
                className="hover:text-white"
              >
                support@homechefhub.com
              </a>
            </li>
            <li>
              Phone:{" "}
              <a href="tel:+123456789" className="hover:text-white">
                +1 (234) 567-89
              </a>
            </li>
            <li>Address: 123 Kitchen Lane, Foodie City, FC 45678</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-8 pt-4 text-center">
        <p>&copy; 2025 HomeChef Hub. All Rights Reserved.</p>
        <div className="flex justify-center space-x-4 mt-4">
          <a href="#" className="text-gray-200 hover:text-white">
            <FaFacebookF size={24} />
          </a>
          <a href="#" className="text-gray-200 hover:text-white">
            <FaTwitter size={24} />
          </a>
          <a href="#" className="text-gray-200 hover:text-white">
            <FaInstagram size={24} />
          </a>
          <a href="#" className="text-gray-200 hover:text-white">
            <FaYoutube size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
