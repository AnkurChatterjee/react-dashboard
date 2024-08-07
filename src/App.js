import "./App.css";
import { Header } from "./components/Header";
import { Navbar } from "./components/Navbar";
import { Content } from "./components/Content";
import wade from "./images/person1.jpg";
import jane from "./images/person14.jpg";
import guy from "./images/person3.jpg";
import kristin from "./images/person11.jpg";
import jenny from "./images/person4.jpg";
import devon from "./images/person15.jpg";
import cody from "./images/person10.jpg";
import emma from "./images/person9.jpg";
import { useEffect } from "react";

function App() {
  const totalOrders = {
    title: "Total Orders",
    value: 75,
    changePercent: 3,
    isIncreased: true,
  };

  const totalDelivered = {
    title: "Total Delivered",
    value: 70,
    changePercent: 3,
    isIncreased: false,
  };

  const totalCancelled = {
    title: "Total Cancelled",
    value: "05",
    changePercent: 3,
    isIncreased: true,
  };

  const totalRevenue = {
    title: "Total Revenue",
    value: "$12k",
    changePercent: 3,
    isIncreased: false,
  };

  const netProfit = {
    title: "Net Profit",
    value: "$6759.25",
    changePercent: 3,
    isIncreased: true,
    profitPercent: 70,
  };

  const graphData = [
    { name: "7", uv: 3 },
    { name: "8", uv: 10 },
    { name: "9", uv: 4 },
    { name: "10", uv: 7 },
    { name: "11", uv: 6 },
    { name: "12", uv: 6 },
    { name: "13", uv: 5 },
    { name: "14", uv: 4 },
    { name: "15", uv: 2 },
    { name: "16", uv: 7 },
    { name: "17", uv: 8 },
    { name: "18", uv: 11 },
    { name: "19", uv: 9 },
    { name: "20", uv: 12 },
    { name: "21", uv: 14 },
    { name: "22", uv: 8 },
    { name: "23", uv: 4 },
    { name: "24", uv: 6 },
    { name: "25", uv: 12 },
    { name: "26", uv: 7 },
    { name: "27", uv: 5 },
  ];

  const menuTitles = {
    goals: "Goals",
    popularDishes: "Popular Dishes",
    menus: "Menus",
  };

  const recentOrderDetails = [
    {
      name: "Wade Warren",
      photo: wade,
      orderNo: "15478256",
      amount: "$124.00",
      status: "Delivered",
    },
    {
      name: "Jane Cooper",
      photo: jane,
      orderNo: "48965786",
      amount: "$365.02",
      status: "Cancelled",
    },
    {
      name: "Guy Hawkins",
      photo: guy,
      orderNo: "78958215",
      amount: "$45.88",
      status: "Delivered",
    },
    {
      name: "Kristin Watson",
      photo: kristin,
      orderNo: "20965732",
      amount: "$65.00",
      status: "Pending",
    },
  ];

  const customerFeedbacks = [
    {
      name: "Jenny Wilson",
      photo: jenny,
      rating: 4.5,
      comment:
        "The food was excellent and so was the service. I had the mushroom risotto with scallops which was awesome.I had a burger over greens (glutten free) which was also very good.",
    },
    {
      name: "Devon Lane",
      photo: devon,
      rating: 4,
      comment:
        "We enjoyed the Eggs Benedict served on homemade focaccia bread and hot coffee. Perfect service",
    },
    {
      name: "Cody Fisher",
      photo: cody,
      rating: 3,
      comment:
        "Food was awesome. Perfect blend of spices made the items delicious and appealing. But service was a bit slow, maybe because of the rush hours.",
    },
    {
      name: "Emma Robbie",
      photo: emma,
      rating: 5,
      comment:
        "The food was exceptionally tasty, with each dish bursting with flavor and cooked to perfection. The service was equally impressive. The staff were courteous, attentive, and ensured that all our needs were met promptly. The ambiance of the restaurant was cozy and inviting, making it a great place for both casual dining and special occasions.",
    },
  ];

  useEffect(() => {
    const originalConsoleError = console.error;
    console.error = (...args) => {
      if (typeof args[0] === "string" && /defaultProps/.test(args[0])) {
        return;
      }
      originalConsoleError(...args);
    };
    return () => {
      console.error = originalConsoleError;
    };
  }, []);

  return (
    <div className="App">
      <Header searchbar={true} />
      <Navbar />
      <Content
        title="Dashboard"
        totalOrders={totalOrders}
        totalDelivered={totalDelivered}
        totalCancelled={totalCancelled}
        totalRevenue={totalRevenue}
        netProfit={netProfit}
        graphData={graphData}
        menuTitles={menuTitles}
        recentOrderDetails={recentOrderDetails}
        customerFeedbacks={customerFeedbacks}
      />
    </div>
  );
}

export default App;
