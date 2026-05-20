// Header.js
import React from "react";
import { logo } from "../../utils/Contants";

const Header = () => {
  return (
    <header className=" shadow-md">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <div className="text-2xl font-bold text-blue-600">
           <img className="w-15" src={logo} alt="" />
        </div>

        {/* Menu điều hướng */}
        <nav className="hidden md:flex space-x-6">
          <a href="#home" className="text-gray-700 hover:text-blue-600">
            Trang chủ
          </a>
          <a href="#properties" className="text-gray-700 hover:text-blue-600">
            Dự án
          </a>
          <a href="#agents" className="text-gray-700 hover:text-blue-600">
            Nhân viên
          </a>
          <a href="#contact" className="text-gray-700 hover:text-blue-600">
            Liên hệ
          </a>
        </nav>

        {/* Search bar */}
        <div className="hidden md:flex items-center space-x-2">
          <input
            type="text"
            placeholder="Tìm kiếm địa điểm, dự án..."
            className="border border-gray-300 rounded-l-md px-3 py-1 w-64 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button className="bg-blue-600 text-white px-4 py-1 rounded-r-md hover:bg-blue-700">
            Tìm
          </button>
        </div>

        {/* Button đăng nhập/đăng ký */}
        <div className="flex items-center space-x-3">
          <button className="hidden md:block text-blue-600 hover:underline">
            Đăng nhập
          </button>
          <button className="bg-blue-600 text-white px-4 py-1 rounded-md hover:bg-blue-700">
            Đăng ký
          </button>
        </div>

        {/* Mobile menu icon */}
        <div className="md:hidden">
          <button>
            <svg
              className="w-6 h-6 text-gray-700"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;