import React from "react";

type Props = {
  steps: string[];
  page: number;
}

const StepsTracker: React.FC<Props> = ({steps,page}) => {
  return (
    <ul className="steps steps-vertical h-96 max-sm:hidden">
      {steps.map((v, i) => (
        <li
          key={v + i}
          data-content={`${i < page ? "✓" : i + 1}`}
          className={`step ${i < page ? "step-success text-success" : ""} ${
            i == page ? "step-primary text-primary" : ""
          }`}
        >
          {v}
        </li>
      ))}
    </ul>
  );
};

export default StepsTracker;
