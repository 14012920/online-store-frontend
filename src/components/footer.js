import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-8">
      <div className="container mx-auto flex flex-wrap justify-between">
        {/* Social Media Handles */}
        <div className="mb-4">
          <h2 className="text-lg font-semibold mb-2">Follow Us</h2>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-gray-400">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#" className="hover:text-gray-400">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="hover:text-gray-400">
              <i className="fab fa-instagram"></i>
            </a>
            {/* Add more social media icons as needed */}
          </div>
        </div>

        {/* Useful Links */}
        <div className="mb-4">
          <h2 className="text-lg font-semibold mb-2">Useful Links</h2>
          <ul>
            <li>
              <a href="#" className="hover:text-gray-400">Home</a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">About Us</a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">Contact</a>
            </li>
            {/* Add more links as needed */}
          </ul>
        </div>

        {/* Copyright Information */}
        <div>
          <p className="text-sm">&copy; 2023 Your Company. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;