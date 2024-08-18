const LoadingSpinner = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-base-100">
      <span className="loading loading-spinner loading-lg"></span>
      {/* <div className="animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-blue-500"></div> */}
    </div>
  );
};

export default LoadingSpinner;
