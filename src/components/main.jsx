import React from "react";
import Firstside from "./firstside";
import Secondside from "./secondside";

export default function Main(props) {
  return (
    <>
      <div
        id="rotatableDiv"
        className={`bg-black text-white h-screen w-full flex justify-end items-start p-4 origin-center ${props.side}`}
      >
        {props.side ? <Firstside></Firstside> : <Secondside></Secondside>}
      </div>
    </>
  );
}
