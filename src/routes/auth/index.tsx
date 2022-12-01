import { Routes, Route } from "react-router-dom";
import LoginPage from "./login";
import RegisterPage from "./register";

export const AuthRoutes = () => {
  return (
    <Routes>
      <Route element={<LoginPage />} path="login" />
      <Route element={<RegisterPage />} path="register" />
    </Routes>
  );
};
