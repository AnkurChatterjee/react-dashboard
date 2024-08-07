import React from "react";
import dp from "../images/ankur.jpg";
import PropTypes from "prop-types";

export const Header = (props) => {
  return (
    <div className="header">
      <div className="header-left">
        <div className="logo">
          <span className="material-icons flower-icon">local_florist</span>
        </div>
        {props.searchbar ? (
          <div>
            <input type="text" placeholder="Search" />
            <span className="material-icons icon-item search-icon">search</span>
          </div>
        ) : (
          ""
        )}
      </div>
      <div className="header-right">
        <div className="header-icon">
          <span className="material-icons icon-item mail-icon">
            mail_outline
          </span>
        </div>
        <div className="header-icon">
          <span className="material-icons icon-item settings-icon">
            settings
          </span>
        </div>
        <div className="header-icon">
          <span className="material-icons icon-item notifications-icon">
            notifications_none
          </span>
        </div>
        <span className="material-icons notification-alert">
          fiber_manual_record
        </span>
        <div className="header-img">
          <img src={dp} width={32} height={32} alt="profile-pic" />
        </div>
      </div>
    </div>
  );
};

Header.propTypes = {
  searchbar: PropTypes.bool.isRequired,
};
