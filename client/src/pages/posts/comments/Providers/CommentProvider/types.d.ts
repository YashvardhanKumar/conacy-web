import { Comment, Post } from "../../../../../gql/graphql";
import { ReplierProps } from "../ReplyCommentProvider/types";

interface CommentProps {
  children: React.ReactNode;
  params: Readonly<Params<string>>
}

interface CommentContextProps {
  inputRef: React.MutableRefObject<HTMLDivElement | null>;
  pointerRef: React.MutableRefObject<HTMLInputElement | null>;
  comments: Comment[];
  commentCount: number;
  post: Post;
  replier: ReplierProps | null;
  // ccm: MutationTuple<
  //   CreatePostComments2Mutation,
  //   Exact<{
  //     username: Scalars["ID"]["input"];
  //     comment: Scalars["String"]["input"];
  //     pid: Scalars["ID"]["input"];
  //   }>,
  //   DefaultContext,
  //   ApolloCache<any>
  // >;
  ccrm: MutationTuple<
    CreateComments2Mutation,
    Exact<{
      username: Scalars["ID"]["input"];
      cid: Scalars["ID"]["input"];
      comment: Scalars["String"]["input"];
      pid: Scalars["ID"]["input"];
      cuser: Scalars["ID"]["input"];
      indent: Scalars["Int"]["input"];
    }>,
    DefaultContext,
    ApolloCache<any>
  >;
  comment: string;
  handleCancelReply: () => void;
  handleCommentChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleClick: () => Promise<void>;
  setReplier: React.Dispatch<React.SetStateAction<ReplierProps | null>>
}
