import React from "react";
import PropTypes from "prop-types";

export const RecentOrder = ({ order }) => {
  return (
    <tr>
      <td>
        <div>
          <img src={order.photo} width={32} height={32} alt="pic" />
          <div className="customer-name">{order.name}</div>
        </div>
      </td>
      <td>{order.orderNo}</td>
      <td>{order.amount}</td>
      <td>
        <div
          className={`pill ${
            order.status.toLowerCase() === "delivered"
              ? "delivered-pill"
              : "cancelled-pill"
          }`}
        >
          <div
            className={
              order.status.toLowerCase() === "delivered"
                ? "delivered-text"
                : "cancelled-text"
            }
          >
            {order.status}
          </div>
        </div>
      </td>
    </tr>
  );
};

RecentOrder.propTypes = {
  order: PropTypes.shape({
    name: PropTypes.string.isRequired,
    photo: PropTypes.string.isRequired,
    orderNo: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
  }),
};
