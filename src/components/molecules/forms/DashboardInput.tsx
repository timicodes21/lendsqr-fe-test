import { Typography } from "@mui/material";
import React from "react";
import { Option } from "../../../types/utils";
import InputField from "../../atoms/formFields/InputField";
import SelectField from "../../atoms/formFields/SelectField";

interface IProps {
  label: string;
  placeholder?: string;
  type?: React.HTMLInputTypeAttribute;
  selectField?: boolean;
  options?: Option[];
}

const DashboardInput: React.FC<IProps> = ({
  label,
  placeholder,
  type,
  options,
  selectField,
}) => {
  return (
    <>
      <Typography
        className="font-14 font-500 text-secondary"
        sx={{ my: 1, textAlign: "left" }}
      >
        {label}
      </Typography>
      {!selectField && (
        <InputField type={type ?? "text"} placeholder={placeholder ?? ""} />
      )}
      {selectField && <SelectField options={options ?? []} />}
    </>
  );
};

export default DashboardInput;
