import { Comment } from "../../../../../gql/graphql";

interface ReplyCommentProps {
    children: React.ReactNode;
    params: Readonly<Params<string>>
  }
  interface ReplyReplierProps {
    username: string;
    cid: string?;
    indent: number;
    parentsOfComment: string[];
  }
  interface ReplyCommentContextProps {
    inputRef: React.MutableRefObject<HTMLDivElement | null>;
    pointerRef: React.MutableRefObject<HTMLInputElement | null>;
    comment: Comment;
    replier: ReplierProps | null;
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
    reply: string;
    handleCancelReply: () => void;
    handleCommentChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleClick: () => Promise<void>;
    setReplier: React.Dispatch<React.SetStateAction<ReplierProps | null>>
  }
  