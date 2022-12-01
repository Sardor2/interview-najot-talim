import { useAppSelector } from "../store/store";
import { AuthRoutes } from "./auth";
import { Routes, Route } from "react-router-dom";
import { AppRoutes } from "./app";

export const AllRoutes = () => {
  const token = useAppSelector((state) => state.auth.token);
  return (
    <Routes>
      {!token ? (
        <Route path="/*" element={<AuthRoutes />} />
      ) : (
        <Route path="/*" element={<AppRoutes />} />
      )}
    </Routes>
  );
};
