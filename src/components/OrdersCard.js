import React from "react";
import PropTypes from "prop-types";

export const OrdersCard = ({ totalOrders }) => {
  return (
    <div className="grid-item item1">
      <div className="icon-bg total-bg">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          className="order-icons total-icon"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M10.5 3.5a2.5 2.5 0 0 0-5 0V4h5zm1 0V4H15v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4h3.5v-.5a3.5 3.5 0 1 1 7 0M8.5 8a.5.5 0 0 0-1 0v1.5H6a.5.5 0 0 0 0 1h1.5V12a.5.5 0 0 0 1 0v-1.5H10a.5.5 0 0 0 0-1H8.5z"
          />
        </svg>
      </div>
      <div className="orders-name">{totalOrders.title}</div>
      <div className="order-stats">
        <div className="fw-bold stat-numbers">{totalOrders.value}</div>
        <div
          className={`orders-change ${
            totalOrders.isIncreased ? "change-positive" : "change-negative"
          }`}
        >
          <span className="material-icons change-icon">
            {totalOrders.isIncreased ? "arrow_drop_up" : "arrow_drop_down"}
          </span>
          {totalOrders.changePercent}%
        </div>
      </div>
    </div>
  );
};

OrdersCard.propTypes = {
  totalOrders: PropTypes.shape({
    title: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired,
    changePercent: PropTypes.number.isRequired,
    isIncreased: PropTypes.bool.isRequired,
  }).isRequired,
};
