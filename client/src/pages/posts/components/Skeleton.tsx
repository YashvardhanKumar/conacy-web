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

export const CommentPageSkeleton = () => {
  return (
    <div className="flex flex-col  w-full md:w-3/5 lg:w-2/5 max-_390:w-[95vw]">
      <div className="flex items-center gap-3 w-full p-3">
        <div className="skeleton sm:h-14 sm:w-14 w-10 h-10" />
        <div className="flex flex-col w-full sm:gap-1">
          <div className="skeleton w-1/2 h-5" />
          <div className="skeleton h-4 w-1/2"></div>
        </div>
      </div>
      <div className="p-3">
        <div className="skeleton h-[520px] w-full" />
      </div>
      <div className="p-3">
        <div className="skeleton w-full flex items-center p-3 h-10" />
      </div>
      <div className="p-3">
        <div className="skeleton p-4 w-40 h-5" />
      </div>
      <CommentTileSkeleton />
      <CommentTileSkeleton />
      <CommentTileSkeleton />
    </div>
  );
};

export const CommentReplyPageSkeleton = () => {
  return (
    <div className="flex flex-col  w-full md:w-3/5 lg:w-2/5 max-_390:w-[95vw]">
      <div className="flex items-center gap-3 w-full p-3">
        <div className="skeleton sm:h-14 sm:w-14 w-10 h-10" />
        <div className="flex flex-col w-full sm:gap-1">
          <div className="skeleton w-1/2 h-5" />
          <div className="skeleton h-4 w-1/2"></div>
        </div>
      </div>
      <div className="p-3">
        <div className="skeleton h-32 w-full" />
      </div>
      <div className="p-3">
        <div className="skeleton w-full flex items-center p-3 h-10" />
      </div>
      <div className="p-3">
        <div className="skeleton p-4 w-40 h-5" />
      </div>
      <CommentTileSkeleton />
      <CommentTileSkeleton />
      <CommentTileSkeleton />
    </div>
  );
};

export const PostSkeleton = () => {
  return (
    <div className="w-[390px] max-_390:w-[95vw] flex flex-col gap-2">
      <div className="flex justify-between items-center">
        <div className="flex gap-2 items-center">
          <div className="skeleton rounded-full h-10 w-10"></div>
          <div className="flex flex-col gap-2">
            <div className="skeleton h-4 w-52"></div>
            <div className="skeleton h-3 w-32"></div>
          </div>
        </div>
        <div className="flex gap-1">
          <div className="h-7 w-7 rounded-lg skeleton"></div>
          <div className="h-7 w-7 rounded-lg skeleton"></div>
          <div className="h-7 w-7 rounded-lg skeleton"></div>
        </div>
      </div>
      <div className="skeleton rounded-lg w-full h-[420px]"></div>
      <div className="flex justify-between">
        <div className="flex gap-2">
        <div className="h-8 w-8 rounded-lg skeleton"></div>
        <div className="h-8 w-8 rounded-lg skeleton"></div>
        <div className="h-8 w-8 rounded-lg skeleton"></div>
        </div>
        <div className="h-8 w-32 rounded-lg skeleton"></div>


      </div>
      <div className="skeleton rounded-lg w-full h-4"></div>
      <div className="skeleton rounded-lg w-full h-4"></div>
      <div className="skeleton rounded-lg w-1/2 h-4"></div>
      <div className="skeleton rounded-lg w-full h-20"></div>
    </div>
  )
}