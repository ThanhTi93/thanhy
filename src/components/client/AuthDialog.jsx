import { useContext, useEffect, useState } from "react";
import {
  FaCheckCircle,
  FaEnvelope,
  FaEye,
  FaEyeSlash,
  FaGoogle,
  FaHome,
  FaLock,
  FaPhoneAlt,
  FaTimes,
  FaUser,
} from "react-icons/fa";
import { UserContext } from "../../contexts/UserProvider";
import { ROLES } from "../../utils/Contants";

const initialForm = {
  fullName: "",
  phone: "",
  email: "",
  password: "",
  confirmPassword: "",
  role : ROLES.USER, // Mặc định là người dùng thông thường 
};

export default function AuthDialog({
  open,
  onClose,
  defaultMode = "login",
  onLogin,
  onRegister,
  loading = false,
}) {
  const [mode, setMode] = useState(defaultMode);
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const users = useContext(UserContext);
  const isLogin = mode === "login";

  useEffect(() => {
    if (!open) return;

    setMode(defaultMode);
    setErrors({});

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleEscape);
    };
  }, [open, defaultMode, onClose]);

  if (!open) return null;

  const handleChange = (event) => {
    const { name, value, checked, type } = event.target;

    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const changeMode = (newMode) => {
    setMode(newMode);
    setErrors({});
    setShowPassword(false);
    setShowConfirmPassword(false);

    setForm((prev) => ({
      ...initialForm,
      email: prev.email,
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^(0|\+84)[0-9]{9}$/;

    if (!isLogin && !form.fullName.trim()) {
      newErrors.fullName = "Vui lòng nhập họ và tên";
    }

    if (!isLogin && form.phone && !phoneRegex.test(form.phone.trim())) {
      newErrors.phone = "Số điện thoại không hợp lệ";
    }

    if (!form.email.trim()) {
      newErrors.email = "Vui lòng nhập email";
    } else if (!emailRegex.test(form.email.trim())) {
      newErrors.email = "Email không đúng định dạng";
    } else if (users.some((user) => user.email === form.email && (isLogin ? user.password === form.password : true))) {
      newErrors.email = isLogin ? "Email hoặc mật khẩu không đúng" : "Email đã tồn tại";
    }

    if (!form.password) {
      newErrors.password = "Vui lòng nhập mật khẩu";
    } else if (form.password.length < 6) {
      newErrors.password = "Mật khẩu phải có ít nhất 6 ký tự";
    }

    if (!isLogin) {
      if (!form.confirmPassword) {
        newErrors.confirmPassword = "Vui lòng nhập lại mật khẩu";
      } else if (form.confirmPassword !== form.password) {
        newErrors.confirmPassword = "Mật khẩu nhập lại không khớp";
      }
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!validateForm()) return;

    if (isLogin) {
      const loginData = {
        email: form.email.trim(),
        password: form.password,
        remember: form.remember,
      };

      if (onLogin) {
        await onLogin(loginData);
      } else {
        console.log("Login data:", loginData);
      }

      return;
    }

    const registerData = {
      fullName: form.fullName.trim(),
      phone: form.phone.trim(),
      email: form.email.trim(),
      password: form.password,
    };

    if (onRegister) {
      await onRegister(registerData);
    } else {
      console.log("Register data:", registerData);
    }
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/60 px-3 py-5 backdrop-blur-sm sm:px-5"
      onMouseDown={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="auth-dialog-title"
        onMouseDown={(event) => event.stopPropagation()}
        className="relative grid max-h-[95vh] w-full max-w-[920px] overflow-hidden rounded-2xl bg-white shadow-[0_30px_100px_rgba(15,23,42,0.35)] md:grid-cols-[0.9fr_1.1fr] md:rounded-3xl"
      >
        {/* Nút đóng */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Đóng cửa sổ"
          className="absolute right-4 top-4 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-slate-500 shadow-md transition hover:rotate-90 hover:bg-white hover:text-slate-900"
        >
          <FaTimes />
        </button>

        {/* Phần hình ảnh bên trái */}
        <div
          className="relative hidden min-h-[620px] overflow-hidden bg-cover bg-center md:block"
          style={{
            backgroundImage:
              "linear-gradient(180deg, rgba(7,27,47,0.18), rgba(7,27,47,0.95)), url('https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1000&q=85')",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-[#071b2f] via-[#071b2f]/40 to-transparent" />

          <div className="relative flex h-full flex-col justify-between p-8 text-white lg:p-10">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/40 bg-white/10 backdrop-blur-md">
                <FaHome className="text-xl text-[#e1ad4d]" />
              </div>

              <div>
                <h2 className="text-xl font-extrabold tracking-wide">
                  HOMELAND
                </h2>
                <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#e1ad4d]">
                  Real Estate
                </p>
              </div>
            </div>

            <div>
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-[#e1ad4d]">
                Không gian sống lý tưởng
              </p>

              <h3 className="text-3xl font-extrabold leading-tight">
                Tìm ngôi nhà phù hợp với bạn
              </h3>

              <p className="mt-4 text-sm leading-7 text-white/75">
                Đăng nhập để lưu bất động sản yêu thích, nhận thông báo dự án mới
                và quản lý tin đăng dễ dàng.
              </p>

              <div className="mt-7 space-y-4">
                <Feature text="Hơn 5.000 bất động sản chất lượng" />
                <Feature text="Thông tin minh bạch, pháp lý rõ ràng" />
                <Feature text="Đội ngũ tư vấn hỗ trợ tận tâm" />
              </div>
            </div>
          </div>
        </div>

        {/* Phần form */}
        <div className="max-h-[95vh] overflow-y-auto px-5 py-6 sm:px-8 sm:py-8 md:px-10 md:py-10 lg:px-12">
          {/* Logo mobile */}
          <div className="mb-6 flex items-center gap-3 md:hidden">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl border-2 border-[#c8922e] text-[#c8922e]">
              <FaHome />
            </div>

            <div>
              <h2 className="font-extrabold text-slate-900">HOMELAND</h2>
              <p className="text-[9px] font-semibold uppercase tracking-[0.3em] text-[#c8922e]">
                Real Estate
              </p>
            </div>
          </div>

          <div className="pr-10">
            <p className="text-sm font-bold text-[#c8922e]">
              {isLogin ? "Chào mừng bạn trở lại" : "Gia nhập Homeland"}
            </p>

            <h2
              id="auth-dialog-title"
              className="mt-2 text-2xl font-extrabold text-slate-900 sm:text-3xl"
            >
              {isLogin ? "Đăng nhập tài khoản" : "Tạo tài khoản mới"}
            </h2>

            <p className="mt-2 text-sm leading-6 text-slate-500">
              {isLogin
                ? "Đăng nhập để tiếp tục khám phá bất động sản phù hợp."
                : "Đăng ký để lưu tin, đăng tin và nhận tư vấn nhanh chóng."}
            </p>
          </div>

          {/* Tab đăng nhập / đăng ký */}
          <div className="mt-7 grid grid-cols-2 rounded-xl bg-slate-100 p-1">
            <button
              type="button"
              onClick={() => changeMode("login")}
              className={`rounded-lg px-4 py-3 text-sm font-bold transition ${
                isLogin
                  ? "bg-white text-[#c8922e] shadow-sm"
                  : "text-slate-500 hover:text-slate-900"
              }`}
            >
              Đăng nhập
            </button>

            <button
              type="button"
              onClick={() => changeMode("register")}
              className={`rounded-lg px-4 py-3 text-sm font-bold transition ${
                !isLogin
                  ? "bg-white text-[#c8922e] shadow-sm"
                  : "text-slate-500 hover:text-slate-900"
              }`}
            >
              Đăng ký
            </button>
          </div>

          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            {!isLogin && (
              <InputField
                label="Họ và tên"
                name="fullName"
                value={form.fullName}
                onChange={handleChange}
                placeholder="Nguyễn Văn A"
                icon={<FaUser />}
                error={errors.fullName}
                autoComplete="name"
              />
            )}

            {!isLogin && (
              <InputField
                label="Số điện thoại"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="Nhập số điện thoại"
                icon={<FaPhoneAlt />}
                error={errors.phone}
                autoComplete="tel"
              />
            )}

            <InputField
              label="Email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              placeholder="example@email.com"
              icon={<FaEnvelope />}
              error={errors.email}
              autoComplete="email"
            />

            <InputField
              label="Mật khẩu"
              name="password"
              type={showPassword ? "text" : "password"}
              value={form.password}
              onChange={handleChange}
              placeholder="Nhập mật khẩu"
              icon={<FaLock />}
              error={errors.password}
              autoComplete={isLogin ? "current-password" : "new-password"}
              rightElement={
                <button
                  type="button"
                  onClick={() => setShowPassword((prev) => !prev)}
                  className="text-slate-400 transition hover:text-[#c8922e]"
                  aria-label={showPassword ? "Ẩn mật khẩu" : "Hiện mật khẩu"}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              }
            />

            {!isLogin && (
              <InputField
                label="Nhập lại mật khẩu"
                name="confirmPassword"
                type={showConfirmPassword ? "text" : "password"}
                value={form.confirmPassword}
                onChange={handleChange}
                placeholder="Nhập lại mật khẩu"
                icon={<FaLock />}
                error={errors.confirmPassword}
                autoComplete="new-password"
                rightElement={
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword((prev) => !prev)}
                    className="text-slate-400 transition hover:text-[#c8922e]"
                    aria-label={
                      showConfirmPassword
                        ? "Ẩn mật khẩu nhập lại"
                        : "Hiện mật khẩu nhập lại"
                    }
                  >
                    {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                  </button>
                }
              />
            )}

            {isLogin ? (
              <div className="flex items-center justify-between gap-4">
                <label className="flex cursor-pointer items-center gap-2 text-sm text-slate-600">
                  <input
                    type="checkbox"
                    name="remember"
                    checked={form.remember}
                    onChange={handleChange}
                    className="h-4 w-4 accent-[#c8922e]"
                  />
                  Ghi nhớ đăng nhập
                </label>

                <button
                  type="button"
                  className="text-sm font-semibold text-[#c8922e] transition hover:text-[#a9761f]"
                >
                  Quên mật khẩu?
                </button>
              </div>
            ) : (
              <p className="text-xs leading-5 text-slate-500">
                Khi đăng ký, bạn đồng ý với{" "}
                <a href="#" className="font-semibold text-[#c8922e]">
                  Điều khoản sử dụng
                </a>{" "}
                và{" "}
                <a href="#" className="font-semibold text-[#c8922e]">
                  Chính sách bảo mật
                </a>
                .
              </p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="mt-2 w-full rounded-xl bg-gradient-to-r from-[#d4a03c] to-[#b67c19] px-5 py-3.5 text-sm font-extrabold text-white shadow-lg shadow-amber-500/20 transition hover:-translate-y-0.5 hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading
                ? "Đang xử lý..."
                : isLogin
                  ? "Đăng nhập"
                  : "Tạo tài khoản"}
            </button>

            <div className="flex items-center gap-4 py-1">
              <span className="h-px flex-1 bg-slate-200" />
              <span className="text-xs text-slate-400">Hoặc tiếp tục với</span>
              <span className="h-px flex-1 bg-slate-200" />
            </div>

            <button
              type="button"
              className="flex w-full items-center justify-center gap-3 rounded-xl border border-slate-200 bg-white px-5 py-3.5 text-sm font-bold text-slate-700 transition hover:border-slate-300 hover:bg-slate-50"
            >
              <FaGoogle className="text-lg text-red-500" />
              Tiếp tục với Google
            </button>

            <p className="pt-1 text-center text-sm text-slate-500">
              {isLogin ? "Bạn chưa có tài khoản?" : "Bạn đã có tài khoản?"}

              <button
                type="button"
                onClick={() => changeMode(isLogin ? "register" : "login")}
                className="ml-1 font-extrabold text-[#c8922e] transition hover:text-[#a9761f]"
              >
                {isLogin ? "Đăng ký ngay" : "Đăng nhập"}
              </button>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

function Feature({ text }) {
  return (
    <div className="flex items-center gap-3 text-sm text-white/90">
      <FaCheckCircle className="shrink-0 text-[#e1ad4d]" />
      <span>{text}</span>
    </div>
  );
}

function InputField({
  label,
  icon,
  error,
  rightElement,
  type = "text",
  ...props
}) {
  return (
    <div>
      <label
        htmlFor={props.name}
        className="mb-2 block text-sm font-bold text-slate-700"
      >
        {label}
      </label>

      <div
        className={`flex items-center rounded-xl border bg-white transition focus-within:ring-4 ${
          error
            ? "border-red-400 focus-within:border-red-400 focus-within:ring-red-100"
            : "border-slate-200 focus-within:border-[#c8922e] focus-within:ring-amber-100"
        }`}
      >
        <span className="ml-4 text-sm text-slate-400">{icon}</span>

        <input
          id={props.name}
          type={type}
          {...props}
          className="min-w-0 flex-1 bg-transparent px-3 py-3.5 text-sm text-slate-900 outline-none placeholder:text-slate-400"
        />

        {rightElement && <div className="mr-4 flex">{rightElement}</div>}
      </div>

      {error && <p className="mt-1.5 text-xs text-red-500">{error}</p>}
    </div>
  );
}