import React from "react";
import ToastWrapper from "../../components/molecules/wrappers/ToastWrapper";
import Navbar from "../../components/organisms/navbar/Navbar";
import Sidebar from "../../components/organisms/sidebar/Sidebar";
import "../../styles/dashboard.scss";
import Users from "./Users";

const Dashboard = () => {
  return (
    <>
      <Navbar />
      <div className="dashboard_wrapper">
        <div className="sidebar_wrapper">
          <Sidebar />
        </div>
        <div className="outlet_wrapper">
          <Users />
        </div>
      </div>
      <ToastWrapper />
    </>
  );
};

export default Dashboard;
