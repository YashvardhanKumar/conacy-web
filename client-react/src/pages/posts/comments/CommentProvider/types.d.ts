interface CommentProps {
  children: React.ReactNode;
}
interface ReplierProps {
  username: string;
  cid: string;
  indent: number;
}
interface CommentContextProps {
  inputRef: React.MutableRefObject<HTMLDivElement | null>;
  pointerRef: React.MutableRefObject<HTMLInputElement | null>;
  pcq: QueryResult<
    PostComments2Query,
    Exact<{
      username: Scalars["ID"]["input"];
      pid: Scalars["ID"]["input"];
    }>
  >;
  pcntq: QueryResult<
    CommentsConnection2Query,
    Exact<{
      username: Scalars["ID"]["input"];
      pid: Scalars["ID"]["input"];
    }>
  >;
  pofc: QueryResult<
    PostsComment2Query,
    Exact<{
      pid: Scalars["ID"]["input"];
    }>
  >;
  replier: ReplierProps | null;
  ccm: MutationTuple<
    CreatePostComments2Mutation,
    Exact<{
      username: Scalars["ID"]["input"];
      comment: Scalars["String"]["input"];
      pid: Scalars["ID"]["input"];
    }>,
    DefaultContext,
    ApolloCache<any>
  >;
  comment: string;
  handleCancelReply: () => void;
  handleCommentChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleClick: () => Promise<void>;
}
