import React from "react";
import PropTypes from "prop-types";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

export const ActivityCard = ({ data }) => {
  return (
    <div className="grid-item item6">
      <div className="item6-top">
        <h6>Activity</h6>
        <select>
          <option value="weekly">Weekly</option>
          <option value="daily">Today</option>
          <option value="monthly">Monthly</option>
          <option value="yearly">Yearly</option>
        </select>
      </div>
      <div className="item6-bottom">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{
              top: 15,
              right: 10,
              left: -30,
              bottom: 0,
            }}
          >
            <CartesianGrid
              stroke="#2c2c34"
              strokeDasharray="0"
              vertical={false}
            />
            <XAxis
              dataKey="name"
              tick={{ fontSize: 8 }}
              ticks={[
                "7",
                "9",
                "11",
                "13",
                "15",
                "17",
                "19",
                "21",
                "23",
                "25",
                "27",
              ]}
            />
            <YAxis
              domain={[0, 15]}
              tick={{ fontSize: 8 }}
              ticks={[0, 5, 10, 15]}
              tickFormatter={(tick) => (tick === 0 ? tick : `${tick}k`)}
              axisLine={false}
              tickLine={false}
            />
            <Bar dataKey="uv" fill="#7294ff" radius={[10, 10, 10, 10]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

ActivityCard.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      uv: PropTypes.number.isRequired,
    })
  ).isRequired,
};
