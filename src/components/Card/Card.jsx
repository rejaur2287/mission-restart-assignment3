import React from "react";
import downloadIcon from "../../assets/icon-downloads.png";
import ratingIcon from "../../assets/icon-ratings.png";

const Card = ({ app }) => {
  const { image, title, downloads, ratingAvg } = app;
  return (
    <div className="card bg-gray-50 text-black border shadow-sm">
      <figure>
        <img
          className="mt-6 rounded-xl"
          width={348}
          height={435}
          src={image}
          alt=""
        />
      </figure>
      <div className="card-body">
        <p className="text-start font-semibold sm:text-xl md:text-base">
          {title}
        </p>
        <div className="card-actions justify-between w-full">
          <div className="badge border-0 bg-[#F1F5E8] text-[#00D390]">
            <img src={downloadIcon} alt="" width={16} height={16} />
            {downloads / 1000000} M
          </div>
          <div className="badge border-0 bg-[#FFF0E1] text-[#FF8811]">
            <img src={ratingIcon} alt="" width={16} height={16} />
            {ratingAvg}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
