import React from "react";
import { useLoaderData } from "react-router";
import Card from "../Card/Card";

const AllApps = () => {
  const allApps = useLoaderData();
  // console.log(allApps);
  return (
    <div className="w-11/12 mx-auto">
      <div>
        <h2 className="text-4xl my-4 font-bold">Our All Applications</h2>
        <p className="text-white/50 mb-4">
          Explore All Apps on the Market developed by us. We code for Millions
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 h-full">
        {allApps.map((app) => (
          <Card key={app.id} app={app}></Card>
        ))}
      </div>
    </div>
  );
};

export default AllApps;
