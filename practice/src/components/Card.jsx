import React from "react";

const Card = () => {
  const data = [
    {
      stock: true,
      name: "Amazon Basics",
      img: "https://plus.unsplash.com/premium_photo-1686810855843-cb595b8418bd?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      stock: false,
      name: "Apple Watch",
      img: "https://images.unsplash.com/photo-1598516802414-50a01bee818d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      stock: true,
      name: "Google Pixel 5",
      img: "https://images.unsplash.com/photo-1621458864479-295f4eebf17a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      stock: false,
      name: "Samsung Galaxy S21",
      img: "https://images.unsplash.com/photo-1659543038895-4c873e8b9a55?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  return (
    <div className="w-full  h-screen bg-zinc-400 flex gap-5 items-center justify-center flex-wrap">
      {data.map((elem, index) => (
        <div key={index} className="card bg-white rounded-lg w-fit">
          <div className="img w-[17vw] overflow-hidden">
            <img
              className="object-cover rounded-t-lg object-"
              src={elem.img}
              alt=""
            />
          </div>
          <div className="py-2 px-2">
            <h1 className="capitalize  font-bold text-xl mb-5">{elem.name}</h1>
            <p className="w-[15vw]  text-xs">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt
              deleniti cupiditate autem assumenda perferendis consequuntur, qui
              explicabo{" "}
            </p>
            <button className={`px-5 py-2 ${elem.stock ? 'bg-blue-500' : 'bg-red-500'} rounded-md mt-5 text-xs font-semibold text-white capitalize`}>
             {elem.stock ? "product availabe" : "product unavailable"}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
