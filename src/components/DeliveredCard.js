import React from "react";
import PropTypes from "prop-types";

export const DeliveredCard = ({ totalDelivered }) => {
  return (
    <div className="grid-item item2">
      <div className="icon-bg delivered-bg">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          className="order-icons delivered-icon"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M10.5 3.5a2.5 2.5 0 0 0-5 0V4h5zm1 0V4H15v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4h3.5v-.5a3.5 3.5 0 1 1 7 0m-.646 5.354a.5.5 0 0 0-.708-.708L7.5 10.793 6.354 9.646a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0z"
          />
        </svg>
      </div>
      <div className="orders-name">{totalDelivered.title}</div>
      <div className="order-stats">
        <div className="fw-bold stat-numbers">{totalDelivered.value}</div>
        <div
          className={`orders-change ${
            totalDelivered.isIncreased ? "change-positive" : "change-negative"
          }`}
        >
          <span className="material-icons change-icon">
            {totalDelivered.isIncreased ? "arrow_drop_up" : "arrow_drop_down"}
          </span>
          {totalDelivered.changePercent}%
        </div>
      </div>
    </div>
  );
};

DeliveredCard.propTypes = {
  totalDelivered: PropTypes.shape({
    title: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired,
    changePercent: PropTypes.number.isRequired,
    isIncreased: PropTypes.bool.isRequired,
  }).isRequired,
};
