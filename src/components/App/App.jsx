import { useState } from "react";
import css from "./App.module.css";
import Description from "../Description/Description";
import Options from "../Options/Options";

export default function App() {
  const [values, setValues] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  return (
    <div>
      <h1>Hello world</h1>
      <Description />
      <Options textContent="Good" />
      <Options textContent="Neutral" />
      <Options textContent="Bad" />
    </div>
  );
}
