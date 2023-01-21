import { Grid, Typography } from "@mui/material";
import React from "react";
import { dashboardCards } from "../../../data/dashboard";
import "../../../styles/dashboard.scss";
import UsersCard from "../../molecules/cards/UsersCard";

const UsersPage = () => {
  return (
    <>
      <Typography className="font-500 font-24 text-primary" sx={{ my: 2 }}>
        Users
      </Typography>
      <Grid container spacing={2}>
        {dashboardCards.map((item, index) => (
          <Grid key={index} xs={12} md={4} lg={3} item>
            <UsersCard
              text={item?.text}
              total={item?.total}
              src={item?.src}
              className={item?.className}
            />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default UsersPage;
