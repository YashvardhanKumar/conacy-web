import { Post } from "../../../gql/graphql";

interface SinglePostProps {
  children: React.ReactNode;
  id: string
}

interface SinglePostContextProps {
  post: Post
  likeFunc: (
    options?:
      | MutationFunctionOptions<
          LikeQueryMutation,
          Exact<{
            username: Scalars["ID"]["input"];
            id: Scalars["ID"]["input"];
          }>,
          DefaultContext,
          ApolloCache<any>
        >
      | undefined
  ) => Promise<FetchResult<LikeQueryMutation>>;
  unlikeFunc: (
    options?:
      | MutationFunctionOptions<
          UnLikeQueryMutation,
          Exact<{
            id: Scalars["ID"]["input"];
            username: Scalars["ID"]["input"];
          }>,
          DefaultContext,
          ApolloCache<any>
        >
      | undefined
  ) => Promise<FetchResult<UnLikeQueryMutation>>;
  liked: boolean;
  likesNo: number;
  handleLike: () => void;
}
