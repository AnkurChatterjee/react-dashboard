import React from "react";
import PropTypes from "prop-types";
import { OrdersCard } from "./OrdersCard";
import { DeliveredCard } from "./DeliveredCard";
import { CancelledCard } from "./CancelledCard";
import { RevenueCard } from "./RevenueCard";
import { ProfitCard } from "./ProfitCard";
import { ActivityCard } from "./ActivityCard";
import { OptionsCard } from "./OptionsCard";
import { RecentOrders } from "./RecentOrders";
import { FeedbackCard } from "./FeedbackCard";

export const Content = ({
  title,
  totalOrders,
  totalDelivered,
  totalCancelled,
  totalRevenue,
  netProfit,
  graphData,
  menuTitles,
  recentOrderDetails,
  customerFeedbacks,
}) => {
  return (
    <div className="content">
      <h3>{title}</h3>
      <div className="dashboard my-3">
        <OrdersCard totalOrders={totalOrders} />
        <DeliveredCard totalDelivered={totalDelivered} />
        <CancelledCard totalCancelled={totalCancelled} />
        <RevenueCard totalRevenue={totalRevenue} />
        <ProfitCard netProfit={netProfit} />
        <ActivityCard data={graphData} />
        <OptionsCard menuTitles={menuTitles} />
        <RecentOrders recentOrderDetails={recentOrderDetails} />
        <FeedbackCard customerFeedbacks={customerFeedbacks} />
      </div>
    </div>
  );
};

Content.propTypes = {
  title: PropTypes.string.isRequired,
  totalOrders: PropTypes.shape({
    title: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired,
    changePercent: PropTypes.number.isRequired,
    isIncreased: PropTypes.bool.isRequired,
  }).isRequired,
  totalDelivered: PropTypes.shape({
    title: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired,
    changePercent: PropTypes.number.isRequired,
    isIncreased: PropTypes.bool.isRequired,
  }).isRequired,
  totalCancelled: PropTypes.shape({
    title: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    changePercent: PropTypes.number.isRequired,
    isIncreased: PropTypes.bool.isRequired,
  }).isRequired,
  totalRevenue: PropTypes.shape({
    title: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    changePercent: PropTypes.number.isRequired,
    isIncreased: PropTypes.bool.isRequired,
  }).isRequired,
  netProfit: PropTypes.shape({
    title: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    changePercent: PropTypes.number.isRequired,
    isIncreased: PropTypes.bool.isRequired,
    profitPercent: PropTypes.number.isRequired,
  }).isRequired,
  graphData: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      uv: PropTypes.number.isRequired,
    })
  ).isRequired,
  menuTitles: PropTypes.shape({
    goals: PropTypes.string.isRequired,
    popularDishes: PropTypes.string.isRequired,
    menus: PropTypes.string.isRequired,
  }).isRequired,
  recentOrderDetails: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      photo: PropTypes.string.isRequired,
      orderNo: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      status: PropTypes.string.isRequired,
    })
  ).isRequired,
  customerFeedbacks: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      photo: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
      comment: PropTypes.string.isRequired,
    })
  ).isRequired,
};
