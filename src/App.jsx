import { useState } from "react"
import Main from "./components/main"

function App() {
  const [side, setside] = useState(Boolean)  //true is firstside and false is second side
  const changeside = ()=>{

    side?setside(false):setside(true)
  }
  return (
    <>
      <button
        onClick={changeside}
        className="border border-white px-4 py-2 rounded-full capitalize transition-all duration-500 absolute top-10 right-10 text-white"
      >
        Go to {side ? "Second" : "First"} side
      </button>
      <Main side={side}/>
    </>
  )
}

export default App
