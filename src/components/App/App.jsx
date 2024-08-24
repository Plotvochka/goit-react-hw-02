import { useState, useEffect } from "react";
import css from "./App.module.css";
import Description from "../Description/Description";
import Options from "../Options/Options";
import Feedback from "../Feedback/Feedback";
import Notification from "../Notification/Notification";

const getInitialFeedback = () => {
  const savedFeedback = window.localStorage.getItem("my-feedback");
  return savedFeedback !== null
    ? JSON.parse(savedFeedback)
    : { good: 0, neutral: 0, bad: 0 };
};

export default function App() {
  const [values, setValues] = useState(getInitialFeedback);

  useEffect(() => {
    window.localStorage.setItem("my-feedback", JSON.stringify(values));
  }, [values]);

  const updateClicks = (key) => {
    setValues({
      ...values,
      [key]: values[key] + 1,
    });
  };
  const totalFeedback = values.good + values.neutral + values.bad;
  const resetFeedback = () => {
    setValues({ good: 0, neutral: 0, bad: 0 });
  };
  const percentOfGood = Math.round((values.good / totalFeedback) * 100);

  return (
    <div>
      <Description />
      <Options
        onChange={updateClicks}
        reset={resetFeedback}
        total={totalFeedback}
      />
      {totalFeedback > 0 ? (
        <Feedback
          good={values.good}
          neutral={values.neutral}
          bad={values.bad}
          total={totalFeedback}
          percent={percentOfGood}
        />
      ) : (
        <Notification />
      )}
    </div>
  );
}
