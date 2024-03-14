import React from "react";

const WorkCard = ({ img, name, description,url, onClick }) => {
  return (
    <div
      className="overflow-hidden rounded-lg p-2 laptop:p-4 first:ml-0 link"
      onClick={onClick}
    >
      <div
        className="relative rounded-lg overflow-hidden transition-all ease-out duration-300 h-48 mob:h-auto"
        style={{ height: "600px" }}
      >
        <img
          alt={name}
          className="h-full w-full object-cover hover:scale-110 transition-all ease-out duration-300"
          src={img}
        ></img>
      </div>
      <h1 className="mt-5 text-3xl font-medium">
        {name}
      </h1>
      <h2 className="text-xl opacity-50">
        {description }
      </h2>
      <h2 className="text-xl opacity-50 ">
        Link to this project can be accessed at:{" \n"}
        <a className="text-blue-500 underline hover:cursor-pointer">
          {url}
        </a>
      </h2>

    </div>
  );
};

export default WorkCard;
