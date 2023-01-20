import React from "react";
import { BsCaretDownFill } from "react-icons/bs";

const DashboardHeader = () => {
  return (
    <>
      <div className="dashboard_heder_wrapper">
        <div>
          <p className="font-16 font-400 text-primary font-sans doc_text">
            Docs
          </p>
        </div>
        <div className="not_container">
          <img
            src="/assets/icons/notification.svg"
            className="img-fluid"
            alt="notifications"
          />
        </div>
        <div className="name_text_container">
          <img
            src="/assets/icons/profile_img.svg"
            className="img-fluid profile_img"
            alt="profile-image"
          />
          <p className="font-16 font-500 font-sans text-primary">Adedeji</p>
          <BsCaretDownFill className="text-primary pointer" />
        </div>
      </div>
    </>
  );
};

export default DashboardHeader;
