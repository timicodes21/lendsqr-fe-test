import React from "react";
import Navbar from "../../components/organisms/navbar/Navbar";
import Sidebar from "../../components/organisms/sidebar/Sidebar";
import "../../styles/dashboard.scss";

const Dashboard = () => {
  return (
    <>
      <Navbar />
      <div className="dashboard_wrapper">
        <div className="sidebar_wrapper">
          <Sidebar />
        </div>
        <div className="outlet"></div>
      </div>
    </>
  );
};

export default Dashboard;
