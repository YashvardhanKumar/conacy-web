import feed from "../assets/feed.png";

const ScreenshotPhone = () => {
  return (
    <div className="h-[480px] w-[240px] relative flex-shrink-0">
      <div className="absolute">
        <img
          src={feed}
          alt=""
          height={480}
          width={240}
          className="bg-white rounded-3xl h-[480px] w-[240px] p-2"
        />
      </div>
      <div className="absolute border-8 border-black h-[480px] w-[240px] rounded-3xl bg-clip-border"></div>
    </div>
  );
};

export default ScreenshotPhone;
