import { useContext, useState } from "react";
import {
  FaBars,
  FaChevronDown,
  FaHeart,
  FaHome,
  FaSignOutAlt,
  FaTimes,
  FaUserCircle,
} from "react-icons/fa";

import AuthDialog from "./AuthDialog";
import { addDocument } from "../../services/firebaseService";
import { UserContext } from "../../contexts/UserProvider";
import { useLogin } from "../../contexts/LoginContext";

export default function Header() {
  const [openMenu, setOpenMenu] = useState(false);
  const [openAuth, setOpenAuth] = useState(false);
  const [authMode, setAuthMode] = useState("login");
  const [openUserMenu, setOpenUserMenu] = useState(false);

  const users = useContext(UserContext);

  const { currentUser, isLoggedIn, logout, login } = useLogin();

  const navs = [
    "Trang chủ",
    "Nhà đất bán",
    "Cho thuê",
    "Dự án",
    "Tin tức",
    "Giới thiệu",
    "Liên hệ",
  ];

  const openAuthDialog = (mode) => {
    setAuthMode(mode);
    setOpenAuth(true);
    setOpenMenu(false);
    setOpenUserMenu(false);
  };

  const onRegister = async (data) => {
      await addDocument("users",data);
      alert("Đăng ký tài khoản thành công");
      // Chuyển sang form đăng nhập
      setAuthMode("login");
  };

  const onLogin = async (data) => {
    // Lưu thông tin user vào LoginContext và localStorage
    login(data);
    setOpenAuth(false);
    setOpenMenu(false);
  };

  const handleLogout = () => {
    logout();
    setOpenUserMenu(false);
    setOpenMenu(false);
  };

  return (
    <>
      <header className="sticky top-0 z-50 bg-white shadow-sm">
        <div className="relative mx-auto flex max-w-7xl items-center justify-between px-4 py-3 lg:px-8 lg:py-4">
          {/* Logo */}
          <a href="#" className="flex shrink-0 items-center gap-2 sm:gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl border-2 border-[#c8922e] text-[#c8922e] sm:h-11 sm:w-11">
              <FaHome size={22} />
            </div>

            <div className="hidden xs:block sm:block">
              <h1 className="text-base font-extrabold leading-none text-slate-900 sm:text-xl">
                HOMELAND
              </h1>

              <p className="mt-1 text-[8px] font-semibold uppercase tracking-[0.25em] text-[#c8922e] sm:text-[10px] sm:tracking-[0.32em]">
                Real Estate
              </p>
            </div>
          </a>

          {/* Desktop navigation */}
          <nav className="hidden items-center gap-5 lg:flex xl:gap-8">
            {navs.map((item, index) => (
              <a
                key={item}
                href="#"
                className={`relative whitespace-nowrap text-sm font-medium transition hover:text-[#c8922e] ${
                  index === 0 ? "text-[#c8922e]" : "text-slate-700"
                }`}
              >
                {item}

                {index === 0 && (
                  <span className="absolute -bottom-3 left-0 h-0.5 w-full rounded-full bg-[#c8922e]" />
                )}
              </a>
            ))}
          </nav>

          {/* Một cụm action dùng chung cho desktop và mobile */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Yêu thích chỉ hiện desktop */}
            <button
              type="button"
              className="hidden h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-slate-700 transition hover:bg-amber-100 hover:text-[#c8922e] lg:flex lg:h-11 lg:w-11"
              aria-label="Bất động sản yêu thích"
            >
              <FaHeart />
            </button>

            {/* Chưa đăng nhập */}
            {!isLoggedIn ? (
              <button
                type="button"
                onClick={() => openAuthDialog("login")}
                className="flex h-10 items-center justify-center gap-2 rounded-lg bg-[#c8922e] px-3 text-sm font-bold text-white shadow-md transition hover:bg-[#a9761f] sm:px-4 lg:h-11 lg:px-5"
              >
                <FaUserCircle className="text-lg sm:hidden" />

                <span className="hidden sm:inline">Đăng nhập</span>
              </button>
            ) : (
              /* Đã đăng nhập */
              <div className="relative">
                <button
                  type="button"
                  onClick={() => {
                    setOpenUserMenu((prev) => !prev);
                    setOpenMenu(false);
                  }}
                  className="flex h-10 items-center gap-2 rounded-xl border border-slate-200 bg-white px-2 transition hover:border-[#c8922e] hover:bg-amber-50 sm:px-3 lg:h-11"
                >
                  {currentUser?.avatar ? (
                    <img
                      src={currentUser.avatar}
                      alt={currentUser.fullName || "Người dùng"}
                      className="h-8 w-8 rounded-full object-cover"
                    />
                  ) : (
                    <FaUserCircle className="text-3xl text-[#c8922e]" />
                  )}

                  <div className="hidden max-w-[120px] text-left sm:block">
                    <p className="truncate text-sm font-bold text-slate-900">
                      {currentUser?.fullName ||
                        currentUser?.username ||
                        "Người dùng"}
                    </p>

                    <p className="truncate text-[11px] text-slate-500">
                      {currentUser?.email}
                    </p>
                  </div>

                  <FaChevronDown
                    size={11}
                    className={`hidden text-slate-500 transition-transform sm:block ${
                      openUserMenu ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* User dropdown */}
                {openUserMenu && (
                  <>
                    <button
                      type="button"
                      aria-label="Đóng menu tài khoản"
                      onClick={() => setOpenUserMenu(false)}
                      className="fixed inset-0 z-40 cursor-default"
                    />

                    <div className="absolute right-0 top-[calc(100%+12px)] z-50 w-[280px] overflow-hidden rounded-2xl border border-slate-100 bg-white p-2 shadow-2xl">
                      <div className="flex items-center gap-3 border-b border-slate-100 px-3 py-4">
                        {currentUser?.avatar ? (
                          <img
                            src={currentUser.avatar}
                            alt={currentUser.fullName || "Người dùng"}
                            className="h-11 w-11 rounded-full object-cover"
                          />
                        ) : (
                          <FaUserCircle className="shrink-0 text-4xl text-[#c8922e]" />
                        )}

                        <div className="min-w-0">
                          <p className="truncate text-sm font-extrabold text-slate-900">
                            {currentUser?.fullName ||
                              currentUser?.username ||
                              "Người dùng"}
                          </p>

                          <p className="mt-1 truncate text-xs text-slate-500">
                            {currentUser?.email}
                          </p>
                        </div>
                      </div>

                      <button
                        type="button"
                        className="mt-2 flex w-full items-center gap-3 rounded-xl px-3 py-3 text-sm font-semibold text-slate-700 transition hover:bg-amber-50 hover:text-[#c8922e]"
                      >
                        <FaUserCircle />
                        Thông tin tài khoản
                      </button>

                      <button
                        type="button"
                        onClick={handleLogout}
                        className="flex w-full items-center gap-3 rounded-xl px-3 py-3 text-sm font-semibold text-red-500 transition hover:bg-red-50"
                      >
                        <FaSignOutAlt />
                        Đăng xuất
                      </button>
                    </div>
                  </>
                )}
              </div>
            )}

            {/* Menu hamburger mobile */}
            <button
              type="button"
              onClick={() => {
                setOpenMenu((prev) => !prev);
                setOpenUserMenu(false);
              }}
              className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-100 text-slate-800 transition hover:bg-amber-100 hover:text-[#c8922e] lg:hidden"
              aria-label="Mở menu"
            >
              {openMenu ? <FaTimes size={18} /> : <FaBars size={18} />}
            </button>
          </div>

          {/* Mobile navigation */}
          <div
            className={`absolute left-0 right-0 top-full overflow-hidden bg-white shadow-xl transition-all duration-300 lg:hidden ${
              openMenu
                ? "max-h-[600px] border-t border-slate-100"
                : "max-h-0 border-t-0"
            }`}
          >
            <nav className="flex flex-col px-4 py-4">
              {navs.map((item, index) => (
                <a
                  key={item}
                  href="#"
                  onClick={() => setOpenMenu(false)}
                  className={`flex items-center justify-between rounded-xl px-4 py-3 text-sm font-semibold transition ${
                    index === 0
                      ? "bg-amber-50 text-[#c8922e]"
                      : "text-slate-700 hover:bg-slate-50 hover:text-[#c8922e]"
                  }`}
                >
                  {item}

                  {index === 0 && (
                    <span className="h-2 w-2 rounded-full bg-[#c8922e]" />
                  )}
                </a>
              ))}

              <div className="mt-4 grid grid-cols-[48px_1fr] gap-3 border-t border-slate-100 pt-4">
                <button
                  type="button"
                  className="flex h-12 items-center justify-center rounded-xl bg-slate-100 text-slate-700 transition hover:bg-amber-100 hover:text-[#c8922e]"
                  aria-label="Bất động sản yêu thích"
                >
                  <FaHeart />
                </button>

                <button
                  type="button"
                  className="rounded-xl bg-[#c8922e] px-5 py-3 text-sm font-bold text-white shadow-md transition hover:bg-[#a9761f]"
                >
                  Đăng tin ngay
                </button>
              </div>
            </nav>
          </div>
        </div>
      </header>

      <AuthDialog
        open={openAuth}
        defaultMode={authMode}
        onClose={() => setOpenAuth(false)}
        onLogin={onLogin}
        onRegister={onRegister}
      />
    </>
  );
}