import React from "react";
import PropTypes from "prop-types";

export const CancelledCard = ({ totalCancelled }) => {
  return (
    <div className="grid-item item3">
      <div className="icon-bg cancelled-bg">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          className="order-icons cancelled-icon"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M10.5 3.5a2.5 2.5 0 0 0-5 0V4h5zm1 0V4H15v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4h3.5v-.5a3.5 3.5 0 1 1 7 0M6.854 8.146a.5.5 0 1 0-.708.708L7.293 10l-1.147 1.146a.5.5 0 0 0 .708.708L8 10.707l1.146 1.147a.5.5 0 0 0 .708-.708L8.707 10l1.147-1.146a.5.5 0 0 0-.708-.708L8 9.293z"
          />
        </svg>
      </div>
      <div className="orders-name">{totalCancelled.title}</div>
      <div className="order-stats">
        <div className="fw-bold stat-numbers">{totalCancelled.value}</div>
        <div
          className={`orders-change ${
            totalCancelled.isIncreased ? "change-positive" : "change-negative"
          }`}
        >
          <span className="material-icons change-icon">
            {totalCancelled.isIncreased ? "arrow_drop_up" : "arrow_drop_down"}
          </span>
          {totalCancelled.changePercent}%
        </div>
      </div>
    </div>
  );
};

CancelledCard.propTypes = {
  totalCancelled: PropTypes.shape({
    title: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    changePercent: PropTypes.number.isRequired,
    isIncreased: PropTypes.bool.isRequired,
  }).isRequired,
};
