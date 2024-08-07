import React from "react";
import PropTypes from "prop-types";

export const CustomerFeedback = ({ customer, hrTag }) => {
  return (
    <div className="feedback">
      <div className="feedback-owner">
        <img src={customer.photo} width={32} height={32} alt="pic" />
        <div className="feedback-username">{customer.name}</div>
      </div>
      <div className="rating">
        {[...Array(5)].map((_, index) => {
          const fill =
            index + 1 <= Math.floor(customer.rating)
              ? "full"
              : index < customer.rating
              ? "half"
              : "none";
          return (
            <span key={index} className={`star ${fill}`}>
              &#9733;
            </span>
          );
        })}
      </div>
      <div className="comments">{customer.comment}</div>
      {hrTag ? "" : <hr />}
    </div>
  );
};

CustomerFeedback.propTypes = {
  customer: PropTypes.shape({
    name: PropTypes.string.isRequired,
    photo: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    comment: PropTypes.string.isRequired,
  }),
  hrTag: PropTypes.bool,
};
