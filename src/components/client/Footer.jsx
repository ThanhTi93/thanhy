// Footer.js
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-200 pt-10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Giới thiệu */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">RealEstatePro</h2>
            <p className="text-gray-400">
              Chúng tôi giúp bạn tìm kiếm và sở hữu ngôi nhà mơ ước với dịch vụ chuyên nghiệp.
            </p>
          </div>

          {/* Link nhanh */}
          <div>
            <h3 className="text-white font-semibold mb-4">Liên kết nhanh</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="hover:text-blue-500">Trang chủ</a>
              </li>
              <li>
                <a href="#properties" className="hover:text-blue-500">Dự án</a>
              </li>
              <li>
                <a href="#agents" className="hover:text-blue-500">Nhân viên</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-blue-500">Liên hệ</a>
              </li>
            </ul>
          </div>

          {/* Thông tin liên hệ */}
          <div>
            <h3 className="text-white font-semibold mb-4">Liên hệ</h3>
            <ul className="space-y-2 text-gray-400">
              <li>📍 123 Đường ABC, Quận 1, TP.HCM</li>
              <li>📞 +84 123 456 789</li>
              <li>✉️ info@realestatepro.com</li>
            </ul>
          </div>

          {/* Mạng xã hội */}
          <div>
            <h3 className="text-white font-semibold mb-4">Mạng xã hội</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-blue-500">
                <i className="fab fa-facebook-f"></i> Facebook
              </a>
              <a href="#" className="hover:text-blue-400">
                <i className="fab fa-twitter"></i> Twitter
              </a>
              <a href="#" className="hover:text-pink-500">
                <i className="fab fa-instagram"></i> Instagram
              </a>
            </div>
          </div>
        </div>

        <hr className="my-8 border-gray-700" />

        <p className="text-center text-gray-500 pb-6">
          &copy; {new Date().getFullYear()} RealEstatePro. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;