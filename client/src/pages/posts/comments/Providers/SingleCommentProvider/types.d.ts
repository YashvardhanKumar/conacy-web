import { Comment } from "../../../../../gql/graphql";

interface SingleCommentProps {
  children: React.ReactNode;
  id: string;
  // pointerRef: React.MutableRefObject<HTMLInputElement | null>;
  // inputRef: React.MutableRefObject<HTMLDivElement | null>;
  // setReplier: React.Dispatch<React.SetStateAction<ReplierProps | null>>;
}

interface SingleCommentContextProps {
  comment: Comment;
  replyList: Comment[] | null;
  like: boolean;
  showReplies: boolean;
  likesNo: number;
  commentRef: React.MutableRefObject<HTMLDivElement | null>;
  toggleReplies: () => void;
  toggleCommentLike: () => Promise<void>;
  handleReplies: () => void;
  handleDeleteComment: () => Promise<void>;
}
