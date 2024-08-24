import css from "./Options.module.css";

export default function Options({ onChange, reset, total }) {
  const shouldShowReset = total >= 1;
  return (
    <div>
      <button onClick={() => onChange("good")}>Good</button>
      <button onClick={() => onChange("neutral")}>Neutral</button>
      <button onClick={() => onChange("bad")}>Bad</button>
      {shouldShowReset && <button onClick={reset}>Reset</button>}
    </div>
  );
}
