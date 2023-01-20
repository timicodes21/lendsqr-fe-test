import React, { ReactNode } from "react";
import { Grid, Box, Typography } from "@mui/material";

interface IProps {
  children: ReactNode;
}

// Template for Auth Screens
const AuthTemplate: React.FC<IProps> = ({ children }) => {
  return (
    <Grid container className="h-100 auth_wrapper">
      <Grid
        item
        xs={12}
        md={6}
        className="bg-fade"
        sx={{ p: { xs: 4, md: 8 } }}
      >
        <div>
          <img src="/assets/icons/logo.svg" className="img-fluid" alt="logo" />
        </div>
        <Box sx={{ mt: { xs: "6.25rem", md: "8.6rem" } }}>
          <img
            src="/assets/icons/bg_vector.svg"
            className="img-fluid"
            alt="bg"
          />
        </Box>
      </Grid>

      <Grid
        item
        xs={12}
        md={6}
        className="bg-white"
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          p: { xs: 4, md: 8 },
        }}
      >
        {children}
      </Grid>
    </Grid>
  );
};

export default AuthTemplate;
