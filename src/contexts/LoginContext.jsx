import {
  createContext,
  useContext,
  useMemo,
  useState,
} from "react";

const STORAGE_KEY = "homeland_current_user";

export const LoginContext = createContext(null);

export const LoginProvider = ({ children }) => {
  // Lấy user từ localStorage khi ứng dụng khởi động
  const [currentUser, setCurrentUser] = useState(() => {
    try {
      const savedUser = localStorage.getItem(STORAGE_KEY);

      return savedUser ? JSON.parse(savedUser) : null;
    } catch (error) {
      console.error("Không thể đọc user từ localStorage:", error);
      localStorage.removeItem(STORAGE_KEY);

      return null;
    }
  });

  // Gọi hàm này sau khi đăng nhập thành công
  const login = (user) => {
    if (!user) return;

    // Không lưu mật khẩu vào localStorage
    const {
      password,
      confirmPassword,
      prePassword,
      ...safeUser
    } = user;

    localStorage.setItem(STORAGE_KEY, JSON.stringify(safeUser));
    setCurrentUser(safeUser);
  };

  // Đăng xuất
  const logout = () => {
    localStorage.removeItem(STORAGE_KEY);
    setCurrentUser(null);
  };

  // Cập nhật thông tin user hiện tại
  const updateCurrentUser = (newData) => {
    setCurrentUser((previousUser) => {
      if (!previousUser) return null;

      const updatedUser = {
        ...previousUser,
        ...newData,
      };

      localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedUser));

      return updatedUser;
    });
  };

  const value = useMemo(
    () => ({
      currentUser,
      isLoggedIn: Boolean(currentUser),
      login,
      logout,
      updateCurrentUser,
    }),
    [currentUser]
  );

  return (
    <LoginContext.Provider value={value}>
      {children}
    </LoginContext.Provider>
  );
};

// Custom hook để sử dụng dễ hơn
export const useLogin = () => {
  const context = useContext(LoginContext);

  if (!context) {
    throw new Error("useLogin phải được sử dụng bên trong LoginProvider");
  }

  return context;
};