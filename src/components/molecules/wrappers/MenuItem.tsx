import { Box, Typography } from "@mui/material";
import React, { ReactNode } from "react";
import { BsChevronDown } from "react-icons/bs";

interface IProps {
  children: ReactNode;
  dropdown?: boolean;
  src: string;
  bright?: boolean;
  mt?: number;
}

const MenuItem: React.FC<IProps> = ({
  children,
  dropdown,
  src,
  bright,
  mt,
}) => {
  return (
    <Box className="flex items-center pointer" sx={{ mt }}>
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
