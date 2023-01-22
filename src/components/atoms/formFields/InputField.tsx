import { TextField, Typography } from "@mui/material";
import React from "react";

interface IProps {
  placeholder: string;
  type: React.HTMLInputTypeAttribute;
  rightText?: string;
  onClick?: () => void;
  dashboardInput?: boolean;
}

const InputField: React.FC<IProps> = ({
  placeholder,
  type,
  rightText,
  onClick,
}) => {
  return (
    <TextField
      id="outlined-basic"
      label={placeholder}
      variant="outlined"
      type={type}
      sx={{ width: "100%" }}
      InputLabelProps={{
        style: {
          color: "#545F7D",
          fontSize: "14px",
          fontWeight: 400,
          borderRadius: "60px",
        },
      }}
      InputProps={{
        endAdornment: (
          <Typography
            className="text-info font-12 font-600 pointer"
            onClick={onClick}
          >
            {rightText ?? rightText}
          </Typography>
        ),
      }}
      size="small"
    />
  );
};

export default InputField;
