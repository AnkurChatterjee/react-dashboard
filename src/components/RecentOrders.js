import React from "react";
import PropTypes from "prop-types";
import { RecentOrder } from "./RecentOrder";

export const RecentOrders = ({ recentOrderDetails }) => {
  return (
    <div className="grid-item item8">
      <h6>Recent Orders</h6>
      <div className="table-container">
        <table className="styled-table">
          <thead>
            <tr>
              <th>Customer</th>
              <th>Order No</th>
              <th>Amount</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {recentOrderDetails.map((order) => (
              <RecentOrder key={order.orderNo} order={order} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

RecentOrders.propTypes = {
  recentOrderDetails: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      photo: PropTypes.string.isRequired,
      orderNo: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      status: PropTypes.string.isRequired,
    })
  ).isRequired,
};
