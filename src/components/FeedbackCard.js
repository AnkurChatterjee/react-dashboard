import React from "react";
import PropTypes from "prop-types";
import { CustomerFeedback } from "./CustomerFeedback";

export const FeedbackCard = ({ customerFeedbacks }) => {
  return (
    <div className="grid-item item9">
      <h6>Customer's Feedback</h6>
      <div className="feedback-container">
        {customerFeedbacks.map((customer, index) => (
          <CustomerFeedback
            key={index}
            customer={customer}
            hrTag={index === customerFeedbacks.length - 1}
          />
        ))}
      </div>
    </div>
  );
};

FeedbackCard.propTypes = {
  customerFeedbacks: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      photo: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
      comment: PropTypes.string.isRequired,
    })
  ).isRequired,
};
