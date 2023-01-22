import { Box, Grid } from "@mui/material";
import React from "react";
import { organizations } from "../../../data/dashboard";
import InfoButton from "../../atoms/buttons/InfoButton";
import TransparentButton from "../../atoms/buttons/TransparentButton";
import DashboardInput from "../../molecules/forms/DashboardInput";

interface IProps {
  show: boolean;
}

const FilterForm: React.FC<IProps> = ({ show }) => {
  return (
    <Box
      sx={{
        background: "#FFFFFF",
        border: "1px solid rgba(84, 95, 125, 0.14)",
        boxShadow: "3px 5px 20px rgba(0, 0, 0, 0.04)",
        borderRadius: "4px",
        p: 2,
        width: "270px",
        zIndex: 1000,
      }}
      className={
        show ? "filter_form_container active" : "filter_form_container"
      }
    >
      <DashboardInput
        label="Organizations"
        selectField
        options={organizations}
      />
      <DashboardInput label="Username" placeholder="Username" type="text" />
      <DashboardInput label="Email" placeholder="Email" type="email" />
      <DashboardInput label="Date" type="date" placeholder="" />
      <DashboardInput
        label="Phone Number"
        placeholder="Phone Number"
        type="tel"
      />
      <DashboardInput label="Status" selectField options={organizations} />
      <Grid container sx={{ my: 2 }} spacing={3}>
        <Grid item xs={6}>
          <TransparentButton onClick={() => {}} width="100%">
            Reset
          </TransparentButton>
        </Grid>
        <Grid item xs={6}>
          <InfoButton onClick={() => {}} width="100%">
            Filter
          </InfoButton>
        </Grid>
      </Grid>
    </Box>
  );
};

export default FilterForm;
