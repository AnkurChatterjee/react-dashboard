import React from "react";
import PropTypes from "prop-types";

export const OptionsCard = ({ menuTitles }) => {
  return (
    <div className="grid-item item7">
      <div className="menu">
        <div className="menu-left">
          <div className="circular-bg goal-bg">
            <span className="material-icons goal-icon">my_location</span>
          </div>
          <div className="menu-items">{menuTitles.goals}</div>
        </div>
        <div className="menu-right">
          <div className="arrow-bg">
            <span className="material-icons arrow-icon">chevron_right</span>
          </div>
        </div>
      </div>
      <div className="menu">
        <div className="menu-left">
          <div className="circular-bg popular-bg">
            <span className="material-icons popular-icon">local_dining</span>
          </div>
          <div className="menu-items">{menuTitles.popularDishes}</div>
        </div>
        <div className="menu-right">
          <div className="arrow-bg">
            <span className="material-icons arrow-icon">chevron_right</span>
          </div>
        </div>
      </div>
      <div className="menu">
        <div className="menu-left">
          <div className="circular-bg menus-bg">
            <span className="material-icons menus-icon">room_service</span>
          </div>
          <div className="menu-items">{menuTitles.menus}</div>
        </div>
        <div className="menu-right">
          <div className="arrow-bg">
            <span className="material-icons arrow-icon">chevron_right</span>
          </div>
        </div>
      </div>
    </div>
  );
};

OptionsCard.propTypes = {
  menuTitles: PropTypes.shape({
    goals: PropTypes.string.isRequired,
    popularDishes: PropTypes.string.isRequired,
    menus: PropTypes.string.isRequired,
  }).isRequired,
};
