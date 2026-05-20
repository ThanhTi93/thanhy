import React, { useState } from "react";
import { IoLogoCss3 } from "react-icons/io";
import { TiThMenuOutline } from "react-icons/ti";
import { MdCategory, MdDashboard } from "react-icons/md";
import { FaHandPointRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { LISTMENU } from "../../utils/Contants";

function NavBarAdmin() {
  const [show, setShow] = useState(false);
  return (
    <div
      className={`px-4 transition-all duration-500 ease-in-out 
      bg-linear-to-b from-indigo-800 via-purple-700 to-pink-600 md:h-screen
      ${show ? "md:w-60 pb-6" : "md:w-20"}`}
    >
      {/* Logo + Toggle */}
      <div className="relative flex items-center justify-center md:justify-between p-4 text-white">
        {show ? (
          <h1 className="font-bold text-lg tracking-wide">
            DaykemIT<span className="text-yellow-300">Admin</span>
          </h1>
        ) : (
          <IoLogoCss3 className="text-3xl text-yellow-400" />
        )}
        <div
          onClick={() => setShow(!show)}
          className="absolute md:translate-x-1/2 -right-4 h-9 w-9 flex justify-center items-center cursor-pointer rounded-full bg-black text-white hover:bg-yellow-500 transition-colors"
        >
          {show ? <TiThMenuOutline /> : <FaHandPointRight />}
        </div>
      </div>

      {/* Menu */}
      <div className={show ? "block" : "max-md:hidden"}>
        {/* Dashboard */}
        <li className="p-2 bg-white/10 hover:bg-yellow-400 hover:text-black transition-all rounded-xl flex items-center gap-2 text-white cursor-pointer">
          <MdDashboard className="text-2xl text-yellow-300" />
          {show && <p className="font-medium">Dashboard</p>}
        </li>

        {/* UI Elements */}
        {show && (
          <h2 className="mt-4 mb-1 text-sm font-bold uppercase text-gray-200">
            UI Elements
          </h2>
        )}
        {LISTMENU.map((menu, index) => (
          <Link to={menu.path} key={index}>
            <div
              className={`flex items-center gap-2 mt-2 p-2 rounded-xl cursor-pointer 
              bg-white/10 text-white hover:bg-yellow-400 hover:text-black transition-all`}
            >
              {menu.icon}
              {show && (
                <span className="whitespace-nowrap font-medium">
                  {menu.title}
                </span>
              )}
            </div>
          </Link>
        ))}

        {/* Pages */}
        {show && (
          <h2 className="mt-4 mb-1 text-sm font-bold uppercase text-gray-200">
            Pages
          </h2>
        )}
        <Link to={"/categories"} className="p-2 mt-2 flex items-center gap-2 rounded-xl bg-white/10 text-white hover:bg-yellow-400 hover:text-black transition-all cursor-pointer">
          <MdCategory className="text-2xl text-yellow-300" />
          {show && <p className="font-medium">Categories</p>}
        </Link>
      </div>
    </div>
  );
}

export default NavBarAdmin;
