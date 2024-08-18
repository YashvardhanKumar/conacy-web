type Props = {
  steps: string[];
  page: number;
};

const StepsTracker: React.FC<Props> = ({ steps, page }) => {
  return (
    <ul
      className="steps steps-vertical h-96 max-sm:hidden"
      children={steps.map((v, i) => (
        <li
          key={v + i}
          data-content={`${i < page ? "✓" : i + 1}`}
          className={`step ${i < page ? "step-success text-success" : ""} ${
            i <= page ? "step-primary dark:[--fallback-p:white] [--fallback-p:black] text-primary" : ""
          }`}
          children={v}
        />
      ))}
    />
  );
};

export default StepsTracker;
