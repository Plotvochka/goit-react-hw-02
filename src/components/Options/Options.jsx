import css from "./Options.module.css";

export default function Options({ onChange, reset, total }) {
  const shouldShowReset = total >= 1;
  return (
    <div>
      <button className={css.btn} onClick={() => onChange("good")}>
        Good
      </button>
      <button className={css.btn} onClick={() => onChange("neutral")}>
        Neutral
      </button>
      <button className={css.btn} onClick={() => onChange("bad")}>
        Bad
      </button>
      {shouldShowReset && <button onClick={reset}>Reset</button>}
    </div>
  );
}
