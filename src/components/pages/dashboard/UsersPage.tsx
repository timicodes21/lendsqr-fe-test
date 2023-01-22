import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import { dashboardCards } from "../../../data/dashboard";
import { useGetAllUsers } from "../../../hooks/useFetch";
import "../../../styles/dashboard.scss";
import UsersCard from "../../molecules/cards/UsersCard";
import FilterForm from "../../organisms/form/FilterForm";
import UsersTable from "../../organisms/tables/UsersTable";
import ContentWrapper from "../../templates/ContentWrapper";

const UsersPage = () => {
  const { data, isFetching, status } = useGetAllUsers();
  console.log("data", data);
  return (
    <ContentWrapper>
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

      <ContentWrapper>
        <Box sx={{ my: 5 }}>
          <UsersTable users={data ?? []} loading={status === "loading"} />
        </Box>
      </ContentWrapper>
    </ContentWrapper>
  );
};

export default UsersPage;
