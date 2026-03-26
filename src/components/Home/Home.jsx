import React from "react";
import Banner from "../Banner/Banner";
import CurrentStatus from "../CurrentStatus/CurrentStatus";
import TrendingApps from "../TrendingApps/TrendingApps";
import { useLoaderData } from "react-router";

const Home = () => {
  const allApps = useLoaderData();

  return (
    <div>
      <Banner></Banner>
      <CurrentStatus></CurrentStatus>
      <TrendingApps allApps={allApps}></TrendingApps>
    </div>
  );
};

export default Home;
