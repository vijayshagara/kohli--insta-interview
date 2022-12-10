import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "../dashboard/Dashboard";
import Profile from "../profile/Profile";
import Message from "../message/Message";
import Create from "../create/Create";

const Router = () => {
 const post = [
    {
    image:"https://tse3.mm.bing.net/th?id=OIF.%2fL5POQap1ZXl76e7SCmzSA&pid=Api&P=0"
  },
    {
    image:"https://tse4.mm.bing.net/th?id=OIF.WZaDp%2b0Z5VJ1sBCOaMrs5w&pid=Api&P=0"
  },
    {
    image:"https://tse3.mm.bing.net/th?id=OIF.j7QytcvhuIm5hCN9KwSgYQ&pid=Api&P=0"
  },
    {
    image:"https://tse3.mm.bing.net/th?id=OIF.p2xkEO%2fb3Ks%2b0g5Erwf2yQ&pid=Api&P=0"
  },
    {
    image:"https://tse2.mm.bing.net/th?id=OIF.lpVmWWsxn5z3RTB5pZt0qw&pid=Api&P=0"
  },
    {
    image:"https://tse3.mm.bing.net/th?id=OIF.SDEIxLn4bUMSR8x4D%2bbdlQ&pid=Api&P=0"
  },
    {
    image:"https://tse1.mm.bing.net/th?id=OIF.PEOMjhwj6nMIaA%2bVyM0dHg&pid=Api&P=0"
  },
    {
    image:"https://tse1.mm.bing.net/th?id=OIP.wDeanAm1V_Y0XLPf7pnG8wHaEK&pid=Api&P=0"
  },
    {
    image:"https://tse1.mm.bing.net/th?id=OIF.t0ZtM%2bMShO2orKavk9bcJA&pid=Api&P=0"
  },
    {
    image:"https://tse3.mm.bing.net/th?id=OIP.7Hd2uqoYBynOT3YIH_sKvwHaEB&pid=Api&P=0"
  },
    {
    image:"https://tse3.mm.bing.net/th?id=OIP.tHyloGilN1vPoC6uW2IEPQHaFW&pid=Api&P=0"
  },
    {
    image:"https://tse4.mm.bing.net/th?id=OIP.defmtwl1SFwOTbtE3mV8cAHaEc&pid=Api&P=0"
  },
]
  return (
    <div>  
      <Routes>
        <Route path="/" element={<Dashboard postItem={post}/>} />
        <Route path="/message" element={<Message />} />
        <Route path="/create" element={<Create />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
};

export default Router;
