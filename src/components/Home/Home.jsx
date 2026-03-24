import React from "react";
import Banner from "../Banner/Banner";
import CurrentStatus from "../CurrentStatus/CurrentStatus";
import TrendingApps from "../TrendingApps/TrendingApps";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <CurrentStatus></CurrentStatus>
      <TrendingApps></TrendingApps>
    </div>
  );
};

export default Home;
