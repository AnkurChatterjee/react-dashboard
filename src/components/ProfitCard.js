import React from "react";
import PropTypes from "prop-types";

export const ProfitCard = ({ netProfit }) => {
  const radius = 50;
  const strokeWidth = 15;
  const circumference = 2 * Math.PI * radius;
  const percentage = netProfit.profitPercent;
  const blueOffset = circumference - (percentage / 100) * circumference;
  return (
    <div className="grid-item item5">
      <div className="item5-left">
        <div className="fs-6">{netProfit.title}</div>
        <div>
          <div className="fs-5 fw-bold">{netProfit.value}</div>
          <div
            className={netProfit.isIncreased ? "profit-change" : "loss-change"}
          >
            <span className="material-icons change-icon">
              {netProfit.isIncreased ? "arrow_drop_up" : "arrow_drop_down"}
            </span>
            {netProfit.changePercent}%
          </div>
        </div>
      </div>
      <div className="item5-right">
        <svg width={60} height={60} viewBox="0 0 120 120">
          <circle
            cx="60"
            cy="60"
            r={radius}
            fill="transparent"
            stroke="#283367"
            strokeWidth={strokeWidth}
          />
          <circle
            cx="60"
            cy="60"
            r={radius}
            fill="transparent"
            stroke="#7294fe"
            strokeWidth={strokeWidth}
            strokeDasharray={`${circumference} ${circumference}`}
            strokeDashoffset={blueOffset}
            strokeLinecap="round"
            transform="rotate(-90 60 60)"
          />
          <text
            x="60"
            y="50"
            textAnchor="middle"
            fontSize="22"
            fill="white"
            fontWeight="bold"
          >
            {`${percentage}%`}
          </text>
          <text x="60" y="70" textAnchor="middle" fontSize="10" fill="white">
            Goal
          </text>
          <text x="60" y="85" textAnchor="middle" fontSize="10" fill="white">
            {netProfit.isIncreased ? "Completed!" : "Missed!"}
          </text>
        </svg>
        <div className="notice-text">
          * The values here has been rounded off
        </div>
      </div>
    </div>
  );
};

ProfitCard.propTypes = {
  netProfit: PropTypes.shape({
    title: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    changePercent: PropTypes.number.isRequired,
    isIncreased: PropTypes.bool.isRequired,
    profitPercent: PropTypes.number.isRequired,
  }).isRequired,
};
