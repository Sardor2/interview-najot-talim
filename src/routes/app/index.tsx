import { Routes, Route } from "react-router-dom";
import UserPage from "./user";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<UserPage />} path="/user" />
    </Routes>
  );
};
