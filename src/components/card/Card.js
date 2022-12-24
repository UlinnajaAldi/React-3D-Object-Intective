import React from "react";
import { Link } from "react-router-dom";

const Card = (props) => {
  return (
    <Link
      to={`/detail/${encodeURI(props.name.toLowerCase()).replace(/%20/g, "-")}`}
      className="flex items-center justify-center"
    >
      <div className="rounded-2xl cursor-pointer w-96 shadow-xl">
        <div className="px-6 pt-4 rounded-xl flex justify-center">
          <img
            className="rounded max-w-full h-[21rem]"
            src={props.image}
            alt={props.name}
          />
        </div>
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{props.name}</div>
          <p className="text-gray-700 text-base">{props.desc}</p>
        </div>
      </div>
    </Link>
  );
};

export default Card;
