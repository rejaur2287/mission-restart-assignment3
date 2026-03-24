import React from "react";

const CurrentStatus = () => {
  return (
    <div className="bg-linear-to-br from-[#632EE3] to-[#9F62F2] ">
      <h3 className="text-4xl py-8 font-semibold">
        Trusted by Millions, Built for You
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-8">
        <div>
          <p className="text-white/50">
            <small>Total Downloads</small>
          </p>
          <h4 className="text-3xl font-extrabold">29.6M</h4>
          <p className="text-white/50">
            <small>21% more than last month</small>
          </p>
        </div>
        <div>
          <p className="text-white/50">
            <small>Total Reviews</small>
          </p>
          <h4 className="text-3xl font-extrabold">906K</h4>
          <p className="text-white/50">
            <small>46% more than last month</small>
          </p>
        </div>
        <div>
          <p className="text-white/50">
            <small>Active Apps</small>
          </p>
          <h4 className="text-3xl font-extrabold">132+</h4>
          <p className="text-white/50">
            <small>31 more will Launch</small>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CurrentStatus;
