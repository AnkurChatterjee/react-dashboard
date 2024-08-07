import React from "react";

export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="nav-list">
        <span className="material-icons icons home-icon mb-4">home</span>
        <span className="material-icons icons assessment-icon mb-4">
          assessment
        </span>
        <span className="material-icons icons assignment-icon mb-4">
          assignment_turned_in
        </span>
        <span className="material-icons icons wallet-icon mb-4">
          account_balance_wallet
        </span>
        <span className="material-icons icons mall-icon mb-4">local_mall</span>
      </div>

      <div>
        <span className="material-icons icons power-icon">
          power_settings_new
        </span>
      </div>
    </div>
  );
};
