import React from "react";
import { Box, Typography } from "@mui/material";
import InputField from "../../atoms/formFields/InputField";
import { Link } from "react-router-dom";
import InfoButton from "../../atoms/buttons/InfoButton";
import AuthTemplate from "../../templates/AuthTemplate";
import { usePasswordShow } from "../../../hooks/usePasswordShow";
import { useLogin } from "../../../hooks/useLogin";

const LoginPage = () => {
  const { showPassword, toggleShow } = usePasswordShow();
  const { navigateToDashboard } = useLogin();
  return (
    <AuthTemplate>
      <Typography className="font-40 font-700 text-primary">Welcome</Typography>
      <Typography className="font-20 font-400 text-secondary" sx={{ mt: 1 }}>
        Enter details to login.
      </Typography>
      <Box sx={{ pr: { xs: 0, md: 5 } }}>
        <Box sx={{ mt: 2 }}>
          <InputField placeholder="Email" type="email" />
        </Box>
        <Box sx={{ mt: 2 }}>
          <InputField
            placeholder="Password"
            type={showPassword ? "text" : "password"}
            rightText={showPassword ? "HIDE" : "SHOW"}
            onClick={toggleShow}
          />
        </Box>
        <Box sx={{ mt: 2 }}>
          <Link to="/">
            <Typography className="text-info font-12 font-600 pinter">
              FORGOT PASSWODRD
            </Typography>
          </Link>
        </Box>
        <Box sx={{ mt: 2 }}>
          <InfoButton onClick={navigateToDashboard} width="100%">
            LOG IN
          </InfoButton>
        </Box>
      </Box>
    </AuthTemplate>
  );
};

export default LoginPage;
