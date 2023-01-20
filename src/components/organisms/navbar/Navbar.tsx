import { Box } from "@mui/material";
import React from "react";
import SearchInput from "../../molecules/forms/SearchInput";
import DashboardHeader from "../../molecules/wrappers/DashboardHeader";
import LogoContainer from "../../molecules/wrappers/LogoContainer";
import ContentWrapper from "../../templates/ContentWrapper";

const Navbar = () => {
  return (
    <>
      <Box
        sx={{
          px: 2,
          py: 2,
          boxShadow: "3px 0px 20px rgba(0, 0, 0, 0.04)",
        }}
        className="bg-white navbar_flex"
      >
        <div className="first_wrapper">
          <LogoContainer />
        </div>
        <div className="second_wrapper">
          <SearchInput placeholder="Search for anything" onClick={() => {}} />
          <DashboardHeader />
        </div>
      </Box>
    </>
  );
};

export default Navbar;
