import logo from "../assets/conacylogo.svg";
const LoadingLogo = () => {
  return (
    <div className="flex h-screen w-screen absolute z-50 backdrop-blur-lg bg-black top-0 left-0 bg-opacity-30 items-center justify-center ">
      <div>
        <img
          height={100}
          width={100}
          className="animate-[bounce_700ms_ease-in-out_infinite]"
          src={logo}
          alt="logo"
        />
      </div>
    </div>
  );
};

export default LoadingLogo;
