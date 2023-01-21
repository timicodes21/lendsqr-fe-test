import { Box, Typography } from "@mui/material";
import React, { ReactNode } from "react";
import { BsChevronDown } from "react-icons/bs";
import "../../../styles/navbar.scss";

interface IProps {
  children: ReactNode;
  dropdown?: boolean;
  src: string;
  bright?: boolean;
  py?: number;
}

const MenuItem: React.FC<IProps> = ({
  children,
  dropdown,
  src,
  bright,
  py,
}) => {
  return (
    <Box
      className="flex items-center pointer menu_item"
      sx={{ py, px: "30px" }}
    >
      <img src={src} />
      <Typography
        className="font-14 font-400 font-sans"
        sx={{ mx: 1, color: bright ? "#213F7D" : "rgba(33, 63, 125, 0.7)" }}
      >
        {children}
      </Typography>
      {dropdown && <BsChevronDown className="text-primary font-500" />}
    </Box>
  );
};

export default MenuItem;
