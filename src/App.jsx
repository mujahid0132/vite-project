import { useState, useRef } from "react";
import Firstside from "./components/firstside";
import Secondside from "./components/secondside";
function App() {
  const bgrotatable = useRef(null);
  const content = useRef(null);
  const [side, setside] = useState(true); //true is firstside and false is second side
  const changeside = () => {
    side ? setside(false) : setside(true);
    bgrotatable.current.style.animation = side
    ? "animationsidechange 3s forwards"
    : "animationsidechange-reverse 3s forwards";
    
    content.current.style.transform = "scale(0.8)"
  };
  return (
    <>
      <button
        onClick={changeside}
        className="border border-white px-4 py-2 rounded-full capitalize transition-all duration-500 absolute top-10 right-10 z-50 text-white"
      >
        Go to {side ? "Second" : "First"} side
      </button>

      <div
        ref={bgrotatable}
        className={`bg-green-600 h-screen w-full fixed top-0 left-0`}
      ></div>
      <div ref={content} className="z-20 relativ h-screen w-full transition-all duration-500">{side ? <Firstside></Firstside> : <Secondside></Secondside>}</div>
    </>
  );
}

export default App;
