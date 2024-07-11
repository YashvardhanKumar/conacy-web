export const CommentTileSkeleton = () => {
  return (
    <div
      className="flex w-full flex-col gap-4 p-3"
      children={
        <div className="flex items-center gap-4 w-full">
          <div className="skeleton h-6 w-6 shrink-0 rounded-full" />
          <div className="flex flex-col gap-2 w-full">
            <div className="skeleton h-3 w-1/4" />
            <div className="skeleton h-3 w-1/2" />
            <div className="w-full flex gap-1">
              <span className="skeleton h-3 w-12" />
              <span className="skeleton h-3 w-12" />
              <span className="skeleton h-3 w-20" />
            </div>
          </div>
        </div>
      }
    />
  );
};