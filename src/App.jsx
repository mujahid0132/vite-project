import { useState, useRef } from "react";
import Firstside from "./components/firstside";
import Secondside from "./components/secondside";
function App() {
  const bgrotatable = useRef(null);
  const content = useRef(null);
  const [side, setside] = useState(true); //true is firstside and false is second side
  const [zindex, setzindex] = useState(true);
  const animationtime = 2000; //in milliseconds
  const changeside = () => {
    side ? setside(false) : setside(true);
    bgrotatable.current.style.animation = side
      ? `animationsidechange ${animationtime}ms forwards`
      : `animationsidechange-reverse ${animationtime}ms forwards`;
    setTimeout(() => {
      side ? setzindex(false) : setzindex(true);
    }, animationtime / 2);
    // content.current.style.transform = "scale(0.8)";
  };
  return (
    <>
      <button
        onClick={changeside}
        className="border border-black overflow-hidden px-4 py-2 rounded-full capitalize transition-all duration-500 absolute top-10 right-10 z-50"
      >
        go to {side ? "second" : "first"} side
      </button>

      <div
        ref={bgrotatable}
        className={`h-screen w-full fixed top-0 left-0 overflow-hidden`}
      >
        <div
          className={`${
            zindex ? "z-10" : "-z-10"
          } absolute h-full w-full bg-pink-500`}
        >
          first
        </div>
        <div
          className={`${
            zindex ? "-z-10" : "z-10"
          }  zabsolute h-full w-full bg-blue-600`}
          style={{ transform: "rotateY(180deg)" }}
        >
          second
        </div>
      </div>
    </>
  );
}

export default App;
