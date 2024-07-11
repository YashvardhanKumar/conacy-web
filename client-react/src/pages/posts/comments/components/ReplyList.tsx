import React from 'react'
import { useReplyCommentContext } from '../Providers/ReplyCommentProvider/ReplyCommentProvider';
import ReplyCommentForm from './ReplyCommentForm';
import SingleCommentProvider from '../Providers/SingleCommentProvider/SingleCommentProvider';
import CommentTile from './CommentTile';

const ReplyList = () => {
    const {

        inputRef,
        pointerRef,
        comment,
        setReplier
      } = useReplyCommentContext();
  return (
    <div className="flex flex-col  w-full md:w-3/5 lg:w-2/5 max-_390:w-[95vw]">
      <div className="flex items-center gap-3 p-3 border-b-[0.5px] border-t-[0.5px] border-slate-400">
        <div className="sm:h-14 sm:w-14 w-10 h-10">
          <div></div>
        </div>
        <div className="flex flex-col sm:gap-1">
          <div className="sm:text-xl text-lg">{comment.author.name}</div>
          <div className="sm:text-md text-sm text-gray-400">
            {"@" + comment.author.username}
          </div>
        </div>
      </div>
      <div className="text-2xl p-10">{comment.text}</div>
      <div
        ref={inputRef}
        className="bg-transparent border-b-[0.5px] border-t-[0.5px] border-slate-400 flex items-center p-3 gap-3"
        children={<ReplyCommentForm />}
      />
      <div className="p-4 text-xl ">Comments ({comment.replies.length})</div>
      {comment.replies.map((comment) => (
        <SingleCommentProvider
          id={comment.id}
          pointerRef={pointerRef}
          inputRef={inputRef}
          setReplier={setReplier}
          children={
            <CommentTile
              id={comment.id}
              pointerRef={pointerRef}
              inputRef={inputRef}
              setReplier={setReplier}
            />
          }
        />
      ))}
    </div>

  )
}

export default ReplyList