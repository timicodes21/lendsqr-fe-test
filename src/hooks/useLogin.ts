import { useNavigate, Navigate, NavigateFunction } from "react-router-dom";

export const useLogin = () => {
  const navigate: NavigateFunction = useNavigate();
  const navigateToDashboard = () => navigate("dashboard");

  return { navigateToDashboard };
};
