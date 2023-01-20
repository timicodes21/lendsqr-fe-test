import { Button } from "@mui/material";
import React, { ReactNode } from "react";

interface IProps {
  children: ReactNode;
  onClick: () => void;
  color?: string;
  width?: string;
  type?: "submit" | "button";
  disabled?: boolean;
}

const InfoButton: React.FC<IProps> = ({
  children,
  onClick,
  color,
  disabled,
  width,
}) => {
  return (
    <Button
      sx={{
        borderRadius: "8px",
        background: color ? color : "#39CDCC",
        width: width ? width : "inherit",
        "&:hover": {
          backgroundColor: "#39CDCC",
          boxShadow: 0,
        },
        boxShadow: 0,
      }}
      onClick={onClick}
      variant="contained"
      className="font-14 font-600"
      disabled={disabled}
    >
      {children}
    </Button>
  );
};

export default InfoButton;
