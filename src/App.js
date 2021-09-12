import Aside from "./components/Aside";
import profileimg from "./images/image-jeremy.png"
import Data from "./components/Data";
import { useState } from "react";

document.title = "Time tracking dashboard"
function App() {
  const [time, setTime] = useState("weekly")
  function toggleTime(time) {
    setTime(time)
  }

  return (
    <main className="container" >
      <div className="dashboard">
        <Aside toggleTime={toggleTime} profileimg={profileimg} />
        <Data time={time} />
      </div>
      <div className="attribution">
        Coded by <a className="link" href="https://www.instagram.com/vishal_brdr">Vishal Biradar</a>
      </div>
    </main>
  );
}

export default App;
