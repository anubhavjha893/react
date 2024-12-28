import React from "react";
import Button from "./Button";

const Card = ({item,clicked,index}) => {
  const { name, image, profession,Friends } = item;
  return (
    <div className="w-[17vw] h-[40vh] bg-white rounded-lg overflow-hidden">
      <div className="img w-full h-[60%] bg-red-200">
        <img className="w-full h-full object-cover" src={image} alt="" />
      </div>
      <div className="textarea w-full h-[40%] px-5 mt-2">
        <h1 className="text-xl font-bold capitalize">{name}</h1>
        <p className="text-xs font-semibold capitalize">{profession}</p>
   
          {/* <Button
            name={name}
            onclick={onclick}
            text="Add friend"
            color="bg-blue-400"
            style="py-1 mt-2 px-2"
          /> */}

<button
          onClick={() => clicked(index)}
          className={`px-5 py-1 font-bold mt-3 text-xs text-white rounded-md ${
            Friends ? "bg-green-400" : "bg-blue-400"
          }`}
        >
          {Friends ? "Friends" : "Add Friend"}
        </button>
      </div> 
    </div>
  );
};

export default Card;
