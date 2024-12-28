import React, { useState } from "react";
import Score from "./components/Score";
import Vak from "./components/Vak";
import Advanced from "./components/Advanced";
import Remove from "./components/remove";
import Add from "./components/Add";
import Hooks from "./components/Hooks";
import Image from "./components/Image";
import Card from "./components/Card";
import Button from "./components/Button";

const App = () => {
  const data = [
    {
      name: "John",
      Friends: false,
      profession: "painter",
      image:
        "https://images.unsplash.com/photo-1588206784266-724b802e8e4b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Jane",
      Friends: false,
      profession: "teacher",
      image:
        "https://images.unsplash.com/photo-1588738422136-602eb7c4a61c?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Mike",
      Friends: false,
      profession: "engineer",
      image:
        "https://images.unsplash.com/photo-1677237676760-d781ef75e787?q=80&w=1886&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Emma",
      Friends: false,
      profession: "doctor",
      image:
        "https://images.unsplash.com/photo-1486649567693-aaa9b2e59385?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Sarah",
      Friends: false,
      profession: "lawyer",
      image:
        "https://images.unsplash.com/flagged/photo-1573584232254-a3c32449ff36?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Olivia",
      Friends: false,
      profession: "student",
      image:
        "https://images.unsplash.com/photo-1596247865408-cb5107b24afc?q=80&w=1998&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];
  const [val, setVal] = useState(data);

  const clicked =(change)=> {
    setVal((prev)=>{
return prev.map((item,index)=> {
  if(index === change) {
    return {...item, Friends:!item.Friends}
  }
  return item
})
    })
  }




  return (
    <>
      <div className="bg-gray-200 flex-wrap w-full h-screen flex items-center gap-5 justify-center">
        {val.map((item,index) => (
          <Card key={index} clicked={clicked} index={index} item={item} />
        ))}
      </div>
    </>
  );
};

export default App;
