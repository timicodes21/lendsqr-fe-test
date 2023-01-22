import { Box, Typography } from "@mui/material";
import React from "react";
import {
  settings,
  sidebarItems,
  sidebarItemsBusiness,
} from "../../../data/sidebar";
import "../../../styles/sidebar.scss";
import MenuItem from "../../molecules/wrappers/MenuItem";

const Sidebar = () => {
  return (
    <Box className="sidebar_container" sx={{ py: 3 }}>
      <MenuItem src="/assets/icons/briefcase.svg" dropdown bright py={1}>
        Switch Organization
      </MenuItem>
      <MenuItem src="/assets/icons/home.svg" py={1}>
        Dashboard
      </MenuItem>
      <Typography
        className="font-12 font-500 text-secondary"
        sx={{ py: 1, px: "30px" }}
      >
        CUSTOMERS
      </Typography>
      {sidebarItems.map((item, index) => (
        <MenuItem src={item?.src} py={1} key={index}>
          {item?.name}
        </MenuItem>
      ))}
      <Typography
        className="font-12 font-500 text-secondary"
        sx={{ py: 1, px: "30px" }}
      >
        BUSINESSES
      </Typography>
      {sidebarItemsBusiness.map((item, index) => (
        <MenuItem src={item?.src} py={1} key={index}>
          {item?.name}
        </MenuItem>
      ))}
      <Typography
        className="font-12 font-500 text-secondary"
        sx={{ py: 1, px: "30px" }}
      >
        SETTINGS
      </Typography>
      <Box sx={{ pb: 20 }}>
        {settings.map((item, index) => (
          <MenuItem src={item?.src} py={1} key={index}>
            {item?.name}
          </MenuItem>
        ))}
      </Box>
    </Box>
  );
};

export default Sidebar;
