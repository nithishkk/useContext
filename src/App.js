import React from "react";
import "./style.css";
import { useGlobalContext } from "./context/Context";

export default function App() {
  const { name ,data} = useGlobalContext();

  return (
    <div>
      <h1>Hello StackBlitz!{name}</h1>
      <p>Start,{data(2,3)} editing to see some magic happen </p>
    </div>
  );
}
