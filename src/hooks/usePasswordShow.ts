import { useState } from "react";

export const usePasswordShow = () => {
  const [showPassword, setShowPassword] = useState(false);
  const toggleShow = () => setShowPassword(!showPassword);
  return { showPassword, toggleShow };
};
