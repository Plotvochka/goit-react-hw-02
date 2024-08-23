import css from "./Options.module.css";
import { useState } from "react";

export default function Options({ textContent }) {
  const [clicks, setClicks] = useState(0);
  const updateClicks = () => {
    setClicks(clicks + 1);
  };
  const resetClicks = () => {
    setClicks(0);
  };

  return (
    <div>
      <button onClick={updateClicks}>
        {textContent} {clicks}
      </button>
      {/* {clicks > 0 && <button onClick={resetClicks}>Reset</button>} */}
    </div>
  );
}
