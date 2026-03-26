import React from "react";
import Card from "../Card/Card";
import { Link } from "react-router";

const TrendingApps = ({ allApps }) => {
  // const newApps = allApps.allApps;
  // console.log(newApps);

  return (
    <div className="w-11/12 mx-auto">
      <div>
        <h2 className="text-4xl my-4 font-bold">Trending Apps</h2>
        <p className="text-white/50 mb-4">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {allApps.slice(0, 8).map((app) => (
          <Card key={app.id} app={app}></Card>
        ))}
      </div>
      <Link to="apps">
        <button className="btn btn-primary btn-xs sm:btn-sm md:btn-md lg:btn-lg my-5">
          Show All
        </button>
      </Link>
    </div>
  );
};

export default TrendingApps;
