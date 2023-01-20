import { Box, Typography } from "@mui/material";
import React from "react";
import "../../../styles/sidebar.scss";
import MenuItem from "../../molecules/wrappers/MenuItem";

const Sidebar = () => {
  return (
    <Box className="sidebar_container" sx={{ py: 3, px: 2 }}>
      <MenuItem src="/assets/icons/briefcase.svg" dropdown bright mt={0}>
        Switch Organization
      </MenuItem>
      <MenuItem src="/assets/icons/home.svg" mt={3}>
        Dashboard
      </MenuItem>
    </Box>
  );
};

export default Sidebar;
