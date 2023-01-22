import { Box, Typography } from "@mui/material";
import React from "react";
import { DropdownOption, dropdownOptions } from "../../../data/dashboard";

interface IProps {
  show: boolean;
}

const TableDropdown: React.FC<IProps> = ({ show }) => {
  return (
    <Box
      sx={{
        borderRadius: 4,
        boxShadow: "3px 5px 20px rgba(0, 0, 0, 0.04)",

        background: "#FFF",
        width: "180px",
      }}
      className={show ? "dropdown_container active" : "dropdown_container"}
    >
      {dropdownOptions.map((item: DropdownOption, index) => (
        <Box
          className="flex items-center dropdown_item pointer"
          sx={{ px: 2, py: 1 }}
        >
          <img alt="icon" src={item.src} />
          <Typography
            className="font-14 font-500 text-secondary"
            sx={{ ml: 1 }}
          >
            {item.name}
          </Typography>
        </Box>
      ))}
    </Box>
  );
};

export default TableDropdown;
