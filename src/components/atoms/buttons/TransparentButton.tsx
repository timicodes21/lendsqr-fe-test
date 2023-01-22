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

const TransparentButton: React.FC<IProps> = ({
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
        background: color ? color : "transparent",
        width: width ? width : "inherit",
        "&:hover": {
          backgroundColor: "#FFF",
          boxShadow: 0,
        },
        boxShadow: 0,
        border: "1px solid #545F7D",
      }}
      onClick={onClick}
      variant="outlined"
      className="font-14 font-600 text-secondary"
      disabled={disabled}
    >
      {children}
    </Button>
  );
};

export default TransparentButton;
