import { Box, Typography } from "@mui/material";
import React from "react";
import { formatToCurrency } from "../../../utils/formatter";

export interface UsersCardProps {
  className: string;
  src: string;
  text: string;
  total: number;
}

const UsersCard: React.FC<UsersCardProps> = ({
  className,
  src,
  text,
  total,
}) => {
  return (
    <Box sx={{ boxShadow: "3px 5px 20px rgba(0, 0, 0, 0.04)", p: 2 }}>
      <Box
        sx={{
          width: "40px",
          height: "40px",
          borderRadius: "50%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
        className={className}
      >
        <img alt="user" src={src} className="img-fluid" />
      </Box>
      <Typography sx={{ py: 1 }} className="font-14 font-500 text-secondary">
        {text}
      </Typography>
      <Typography sx={{ pb: 1 }} className="font-24 font-600 text-primary">
        {formatToCurrency(total)}
      </Typography>
    </Box>
  );
};

export default UsersCard;
