import type { SelectionSetNode, DocumentNode } from "graphql";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T
> = { [_ in K]?: never };
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends " $fragmentName" | "__typename" ? T[P] : never;
    };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  /** The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID. */
  ID: { input: string; output: string };
  /** The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text. */
  String: { input: string; output: string };
  /** The `Boolean` scalar type represents `true` or `false`. */
  Boolean: { input: boolean; output: boolean };
  /** The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. */
  Int: { input: number; output: number };
  /** The `Float` scalar type represents signed double-precision fractional values as specified by [IEEE 754](https://en.wikipedia.org/wiki/IEEE_floating_point). */
  Float: { input: number; output: number };
  /** A date, represented as a 'yyyy-mm-dd' string */
  Date: { input: any; output: any };
  /** A date and time, represented as an ISO-8601 string */
  DateTime: { input: any; output: any };
};

export type Query = {
  __typename?: "Query";
  comments: Array<Comment>;
  commentsConnection: CommentsConnection;
  commentsAggregate: CommentAggregateSelection;
  users: Array<User>;
  usersConnection: UsersConnection;
  usersAggregate: UserAggregateSelection;
  posts: Array<Post>;
  postsConnection: PostsConnection;
  postsAggregate: PostAggregateSelection;
  postComments: Array<PostComment>;
  postCommentsConnection: PostCommentsConnection;
  postCommentsAggregate: PostCommentAggregateSelection;
  replyComments: Array<ReplyComment>;
  replyCommentsConnection: ReplyCommentsConnection;
  replyCommentsAggregate: ReplyCommentAggregateSelection;
};

export type QueryCommentsArgs = {
  where?: InputMaybe<CommentWhere>;
  options?: InputMaybe<CommentOptions>;
};

export type QueryCommentsConnectionArgs = {
  first?: InputMaybe<Scalars["Int"]["input"]>;
  after?: InputMaybe<Scalars["String"]["input"]>;
  where?: InputMaybe<CommentWhere>;
  sort?: InputMaybe<Array<InputMaybe<CommentSort>>>;
};

export type QueryCommentsAggregateArgs = {
  where?: InputMaybe<CommentWhere>;
};

export type QueryUsersArgs = {
  where?: InputMaybe<UserWhere>;
  options?: InputMaybe<UserOptions>;
};

export type QueryUsersConnectionArgs = {
  first?: InputMaybe<Scalars["Int"]["input"]>;
  after?: InputMaybe<Scalars["String"]["input"]>;
  where?: InputMaybe<UserWhere>;
  sort?: InputMaybe<Array<InputMaybe<UserSort>>>;
};

export type QueryUsersAggregateArgs = {
  where?: InputMaybe<UserWhere>;
};

export type QueryPostsArgs = {
  where?: InputMaybe<PostWhere>;
  options?: InputMaybe<PostOptions>;
};

export type QueryPostsConnectionArgs = {
  first?: InputMaybe<Scalars["Int"]["input"]>;
  after?: InputMaybe<Scalars["String"]["input"]>;
  where?: InputMaybe<PostWhere>;
  sort?: InputMaybe<Array<InputMaybe<PostSort>>>;
};

export type QueryPostsAggregateArgs = {
  where?: InputMaybe<PostWhere>;
};

export type QueryPostCommentsArgs = {
  where?: InputMaybe<PostCommentWhere>;
  options?: InputMaybe<PostCommentOptions>;
};

export type QueryPostCommentsConnectionArgs = {
  first?: InputMaybe<Scalars["Int"]["input"]>;
  after?: InputMaybe<Scalars["String"]["input"]>;
  where?: InputMaybe<PostCommentWhere>;
  sort?: InputMaybe<Array<InputMaybe<PostCommentSort>>>;
};

export type QueryPostCommentsAggregateArgs = {
  where?: InputMaybe<PostCommentWhere>;
};

export type QueryReplyCommentsArgs = {
  where?: InputMaybe<ReplyCommentWhere>;
  options?: InputMaybe<ReplyCommentOptions>;
};

export type QueryReplyCommentsConnectionArgs = {
  first?: InputMaybe<Scalars["Int"]["input"]>;
  after?: InputMaybe<Scalars["String"]["input"]>;
  where?: InputMaybe<ReplyCommentWhere>;
  sort?: InputMaybe<Array<InputMaybe<ReplyCommentSort>>>;
};

export type QueryReplyCommentsAggregateArgs = {
  where?: InputMaybe<ReplyCommentWhere>;
};

export type Mutation = {
  __typename?: "Mutation";
  createUsers: CreateUsersMutationResponse;
  deleteUsers: DeleteInfo;
  updateUsers: UpdateUsersMutationResponse;
  createPosts: CreatePostsMutationResponse;
  deletePosts: DeleteInfo;
  updatePosts: UpdatePostsMutationResponse;
  createPostComments: CreatePostCommentsMutationResponse;
  deletePostComments: DeleteInfo;
  updatePostComments: UpdatePostCommentsMutationResponse;
  createReplyComments: CreateReplyCommentsMutationResponse;
  deleteReplyComments: DeleteInfo;
  updateReplyComments: UpdateReplyCommentsMutationResponse;
};

export type MutationCreateUsersArgs = {
  input: Array<UserCreateInput>;
};

export type MutationDeleteUsersArgs = {
  where?: InputMaybe<UserWhere>;
  delete?: InputMaybe<UserDeleteInput>;
};

export type MutationUpdateUsersArgs = {
  where?: InputMaybe<UserWhere>;
  update?: InputMaybe<UserUpdateInput>;
  connect?: InputMaybe<UserConnectInput>;
  disconnect?: InputMaybe<UserDisconnectInput>;
  create?: InputMaybe<UserRelationInput>;
  delete?: InputMaybe<UserDeleteInput>;
};

export type MutationCreatePostsArgs = {
  input: Array<PostCreateInput>;
};

export type MutationDeletePostsArgs = {
  where?: InputMaybe<PostWhere>;
  delete?: InputMaybe<PostDeleteInput>;
};

export type MutationUpdatePostsArgs = {
  where?: InputMaybe<PostWhere>;
  update?: InputMaybe<PostUpdateInput>;
  connect?: InputMaybe<PostConnectInput>;
  disconnect?: InputMaybe<PostDisconnectInput>;
  create?: InputMaybe<PostRelationInput>;
  delete?: InputMaybe<PostDeleteInput>;
  connectOrCreate?: InputMaybe<PostConnectOrCreateInput>;
};

export type MutationCreatePostCommentsArgs = {
  input: Array<PostCommentCreateInput>;
};

export type MutationDeletePostCommentsArgs = {
  where?: InputMaybe<PostCommentWhere>;
  delete?: InputMaybe<PostCommentDeleteInput>;
};

export type MutationUpdatePostCommentsArgs = {
  where?: InputMaybe<PostCommentWhere>;
  update?: InputMaybe<PostCommentUpdateInput>;
  connect?: InputMaybe<PostCommentConnectInput>;
  disconnect?: InputMaybe<PostCommentDisconnectInput>;
  create?: InputMaybe<PostCommentRelationInput>;
  delete?: InputMaybe<PostCommentDeleteInput>;
  connectOrCreate?: InputMaybe<PostCommentConnectOrCreateInput>;
};

export type MutationCreateReplyCommentsArgs = {
  input: Array<ReplyCommentCreateInput>;
};

export type MutationDeleteReplyCommentsArgs = {
  where?: InputMaybe<ReplyCommentWhere>;
  delete?: InputMaybe<ReplyCommentDeleteInput>;
};

export type MutationUpdateReplyCommentsArgs = {
  where?: InputMaybe<ReplyCommentWhere>;
  update?: InputMaybe<ReplyCommentUpdateInput>;
  connect?: InputMaybe<ReplyCommentConnectInput>;
  disconnect?: InputMaybe<ReplyCommentDisconnectInput>;
  create?: InputMaybe<ReplyCommentRelationInput>;
  delete?: InputMaybe<ReplyCommentDeleteInput>;
  connectOrCreate?: InputMaybe<ReplyCommentConnectOrCreateInput>;
};

export enum CommentImplementation {
  PostComment = "PostComment",
  ReplyComment = "ReplyComment",
}

/** An enum for sorting in either ascending or descending order. */
export enum SortDirection {
  /** Sort by field values in ascending order. */
  Asc = "ASC",
  /** Sort by field values in descending order. */
  Desc = "DESC",
}

export type Comment = {
  id: Scalars["ID"]["output"];
  text: Scalars["String"]["output"];
  likes: Array<User>;
  likesConnection: CommentLikesConnection;
  author: User;
  authorConnection: CommentAuthorConnection;
  replies: Array<Comment>;
  repliesConnection: CommentRepliesConnection;
};

export type CommentLikesArgs = {
  where?: InputMaybe<UserWhere>;
  options?: InputMaybe<UserOptions>;
};

export type CommentLikesConnectionArgs = {
  where?: InputMaybe<CommentLikesConnectionWhere>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  after?: InputMaybe<Scalars["String"]["input"]>;
  sort?: InputMaybe<Array<CommentLikesConnectionSort>>;
};

export type CommentAuthorArgs = {
  where?: InputMaybe<UserWhere>;
  options?: InputMaybe<UserOptions>;
};

export type CommentAuthorConnectionArgs = {
  where?: InputMaybe<CommentAuthorConnectionWhere>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  after?: InputMaybe<Scalars["String"]["input"]>;
  sort?: InputMaybe<Array<CommentAuthorConnectionSort>>;
};

export type CommentRepliesArgs = {
  where?: InputMaybe<CommentWhere>;
  options?: InputMaybe<CommentOptions>;
};

export type CommentRepliesConnectionArgs = {
  where?: InputMaybe<CommentRepliesConnectionWhere>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  after?: InputMaybe<Scalars["String"]["input"]>;
  sort?: InputMaybe<Array<CommentRepliesConnectionSort>>;
};

export type CommentAggregateSelection = {
  __typename?: "CommentAggregateSelection";
  count: Scalars["Int"]["output"];
  id: IdAggregateSelection;
  text: StringAggregateSelection;
};

export type CommentAuthorConnection = {
  __typename?: "CommentAuthorConnection";
  edges: Array<CommentAuthorRelationship>;
  totalCount: Scalars["Int"]["output"];
  pageInfo: PageInfo;
};

export type CommentAuthorRelationship = {
  __typename?: "CommentAuthorRelationship";
  cursor: Scalars["String"]["output"];
  node: User;
};

export type CommentEdge = {
  __typename?: "CommentEdge";
  cursor: Scalars["String"]["output"];
  node: Comment;
};

export type CommentLikesConnection = {
  __typename?: "CommentLikesConnection";
  edges: Array<CommentLikesRelationship>;
  totalCount: Scalars["Int"]["output"];
  pageInfo: PageInfo;
};

export type CommentLikesRelationship = {
  __typename?: "CommentLikesRelationship";
  cursor: Scalars["String"]["output"];
  node: User;
};

export type CommentRepliesConnection = {
  __typename?: "CommentRepliesConnection";
  edges: Array<CommentRepliesRelationship>;
  totalCount: Scalars["Int"]["output"];
  pageInfo: PageInfo;
};

export type CommentRepliesRelationship = {
  __typename?: "CommentRepliesRelationship";
  cursor: Scalars["String"]["output"];
  node: Comment;
};

export type CommentsConnection = {
  __typename?: "CommentsConnection";
  totalCount: Scalars["Int"]["output"];
  pageInfo: PageInfo;
  edges: Array<CommentEdge>;
};

/** Information about the number of nodes and relationships created during a create mutation */
export type CreateInfo = {
  __typename?: "CreateInfo";
  /** @deprecated This field has been deprecated because bookmarks are now handled by the driver. */
  bookmark?: Maybe<Scalars["String"]["output"]>;
  nodesCreated: Scalars["Int"]["output"];
  relationshipsCreated: Scalars["Int"]["output"];
};

export type CreatePostCommentsMutationResponse = {
  __typename?: "CreatePostCommentsMutationResponse";
  info: CreateInfo;
  postComments: Array<PostComment>;
};

export type CreatePostsMutationResponse = {
  __typename?: "CreatePostsMutationResponse";
  info: CreateInfo;
  posts: Array<Post>;
};

export type CreateReplyCommentsMutationResponse = {
  __typename?: "CreateReplyCommentsMutationResponse";
  info: CreateInfo;
  replyComments: Array<ReplyComment>;
};

export type CreateUsersMutationResponse = {
  __typename?: "CreateUsersMutationResponse";
  info: CreateInfo;
  users: Array<User>;
};

export type DateTimeAggregateSelection = {
  __typename?: "DateTimeAggregateSelection";
  min?: Maybe<Scalars["DateTime"]["output"]>;
  max?: Maybe<Scalars["DateTime"]["output"]>;
};

/** Information about the number of nodes and relationships deleted during a delete mutation */
export type DeleteInfo = {
  __typename?: "DeleteInfo";
  /** @deprecated This field has been deprecated because bookmarks are now handled by the driver. */
  bookmark?: Maybe<Scalars["String"]["output"]>;
  nodesDeleted: Scalars["Int"]["output"];
  relationshipsDeleted: Scalars["Int"]["output"];
};

export type IdAggregateSelection = {
  __typename?: "IDAggregateSelection";
  shortest?: Maybe<Scalars["ID"]["output"]>;
  longest?: Maybe<Scalars["ID"]["output"]>;
};

/** Pagination information (Relay) */
export type PageInfo = {
  __typename?: "PageInfo";
  hasNextPage: Scalars["Boolean"]["output"];
  hasPreviousPage: Scalars["Boolean"]["output"];
  startCursor?: Maybe<Scalars["String"]["output"]>;
  endCursor?: Maybe<Scalars["String"]["output"]>;
};

export type Post = {
  __typename?: "Post";
  id: Scalars["ID"]["output"];
  url: Scalars["String"]["output"];
  description?: Maybe<Scalars["String"]["output"]>;
  visibility?: Maybe<Scalars["String"]["output"]>;
  createdAt?: Maybe<Scalars["DateTime"]["output"]>;
  updatedAt?: Maybe<Scalars["DateTime"]["output"]>;
  likesAggregate?: Maybe<PostUserLikesAggregationSelection>;
  likes: Array<User>;
  likesConnection: PostLikesConnection;
  creatorOfPostAggregate?: Maybe<PostUserCreatorOfPostAggregationSelection>;
  creatorOfPost: User;
  creatorOfPostConnection: PostCreatorOfPostConnection;
  commentsAggregate?: Maybe<PostCommentCommentsAggregationSelection>;
  comments: Array<Comment>;
  commentsConnection: PostCommentsConnection;
};

export type PostLikesAggregateArgs = {
  where?: InputMaybe<UserWhere>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type PostLikesArgs = {
  where?: InputMaybe<UserWhere>;
  options?: InputMaybe<UserOptions>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type PostLikesConnectionArgs = {
  where?: InputMaybe<PostLikesConnectionWhere>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  after?: InputMaybe<Scalars["String"]["input"]>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  sort?: InputMaybe<Array<PostLikesConnectionSort>>;
};

export type PostCreatorOfPostAggregateArgs = {
  where?: InputMaybe<UserWhere>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type PostCreatorOfPostArgs = {
  where?: InputMaybe<UserWhere>;
  options?: InputMaybe<UserOptions>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type PostCreatorOfPostConnectionArgs = {
  where?: InputMaybe<PostCreatorOfPostConnectionWhere>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  after?: InputMaybe<Scalars["String"]["input"]>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  sort?: InputMaybe<Array<PostCreatorOfPostConnectionSort>>;
};

export type PostCommentsAggregateArgs = {
  where?: InputMaybe<CommentWhere>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type PostCommentsArgs = {
  where?: InputMaybe<CommentWhere>;
  options?: InputMaybe<CommentOptions>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type PostCommentsConnectionArgs = {
  where?: InputMaybe<PostCommentsConnectionWhere>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  after?: InputMaybe<Scalars["String"]["input"]>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  sort?: InputMaybe<Array<PostCommentsConnectionSort>>;
};

export type PostAggregateSelection = {
  __typename?: "PostAggregateSelection";
  count: Scalars["Int"]["output"];
  id: IdAggregateSelection;
  url: StringAggregateSelection;
  description: StringAggregateSelection;
  visibility: StringAggregateSelection;
  createdAt: DateTimeAggregateSelection;
  updatedAt: DateTimeAggregateSelection;
};

export type PostComment = Comment & {
  __typename?: "PostComment";
  id: Scalars["ID"]["output"];
  text: Scalars["String"]["output"];
  createdAt?: Maybe<Scalars["DateTime"]["output"]>;
  updatedAt?: Maybe<Scalars["DateTime"]["output"]>;
  likesAggregate?: Maybe<PostCommentUserLikesAggregationSelection>;
  likes: Array<User>;
  likesConnection: CommentLikesConnection;
  authorAggregate?: Maybe<PostCommentUserAuthorAggregationSelection>;
  author: User;
  authorConnection: CommentAuthorConnection;
  commentOfPostAggregate?: Maybe<PostCommentPostCommentOfPostAggregationSelection>;
  commentOfPost: Post;
  commentOfPostConnection: PostCommentCommentOfPostConnection;
  repliesAggregate?: Maybe<PostCommentCommentRepliesAggregationSelection>;
  replies: Array<Comment>;
  repliesConnection: CommentRepliesConnection;
};

export type PostCommentLikesAggregateArgs = {
  where?: InputMaybe<UserWhere>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type PostCommentLikesArgs = {
  where?: InputMaybe<UserWhere>;
  options?: InputMaybe<UserOptions>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type PostCommentLikesConnectionArgs = {
  where?: InputMaybe<CommentLikesConnectionWhere>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  after?: InputMaybe<Scalars["String"]["input"]>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  sort?: InputMaybe<Array<CommentLikesConnectionSort>>;
};

export type PostCommentAuthorAggregateArgs = {
  where?: InputMaybe<UserWhere>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type PostCommentAuthorArgs = {
  where?: InputMaybe<UserWhere>;
  options?: InputMaybe<UserOptions>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type PostCommentAuthorConnectionArgs = {
  where?: InputMaybe<CommentAuthorConnectionWhere>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  after?: InputMaybe<Scalars["String"]["input"]>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  sort?: InputMaybe<Array<CommentAuthorConnectionSort>>;
};

export type PostCommentCommentOfPostAggregateArgs = {
  where?: InputMaybe<PostWhere>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type PostCommentCommentOfPostArgs = {
  where?: InputMaybe<PostWhere>;
  options?: InputMaybe<PostOptions>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type PostCommentCommentOfPostConnectionArgs = {
  where?: InputMaybe<PostCommentCommentOfPostConnectionWhere>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  after?: InputMaybe<Scalars["String"]["input"]>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  sort?: InputMaybe<Array<PostCommentCommentOfPostConnectionSort>>;
};

export type PostCommentRepliesAggregateArgs = {
  where?: InputMaybe<CommentWhere>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type PostCommentRepliesArgs = {
  where?: InputMaybe<CommentWhere>;
  options?: InputMaybe<CommentOptions>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type PostCommentRepliesConnectionArgs = {
  where?: InputMaybe<CommentRepliesConnectionWhere>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  after?: InputMaybe<Scalars["String"]["input"]>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  sort?: InputMaybe<Array<CommentRepliesConnectionSort>>;
};

export type PostCommentAggregateSelection = {
  __typename?: "PostCommentAggregateSelection";
  count: Scalars["Int"]["output"];
  id: IdAggregateSelection;
  text: StringAggregateSelection;
  createdAt: DateTimeAggregateSelection;
  updatedAt: DateTimeAggregateSelection;
};

export type PostCommentCommentOfPostConnection = {
  __typename?: "PostCommentCommentOfPostConnection";
  edges: Array<PostCommentCommentOfPostRelationship>;
  totalCount: Scalars["Int"]["output"];
  pageInfo: PageInfo;
};

export type PostCommentCommentOfPostRelationship = {
  __typename?: "PostCommentCommentOfPostRelationship";
  cursor: Scalars["String"]["output"];
  node: Post;
};

export type PostCommentCommentRepliesAggregationSelection = {
  __typename?: "PostCommentCommentRepliesAggregationSelection";
  count: Scalars["Int"]["output"];
  node?: Maybe<PostCommentCommentRepliesNodeAggregateSelection>;
};

export type PostCommentCommentRepliesNodeAggregateSelection = {
  __typename?: "PostCommentCommentRepliesNodeAggregateSelection";
  id: IdAggregateSelection;
  text: StringAggregateSelection;
};

export type PostCommentCommentsAggregationSelection = {
  __typename?: "PostCommentCommentsAggregationSelection";
  count: Scalars["Int"]["output"];
  node?: Maybe<PostCommentCommentsNodeAggregateSelection>;
};

export type PostCommentCommentsNodeAggregateSelection = {
  __typename?: "PostCommentCommentsNodeAggregateSelection";
  id: IdAggregateSelection;
  text: StringAggregateSelection;
};

export type PostCommentEdge = {
  __typename?: "PostCommentEdge";
  cursor: Scalars["String"]["output"];
  node: PostComment;
};

export type PostCommentPostCommentOfPostAggregationSelection = {
  __typename?: "PostCommentPostCommentOfPostAggregationSelection";
  count: Scalars["Int"]["output"];
  node?: Maybe<PostCommentPostCommentOfPostNodeAggregateSelection>;
};

export type PostCommentPostCommentOfPostNodeAggregateSelection = {
  __typename?: "PostCommentPostCommentOfPostNodeAggregateSelection";
  id: IdAggregateSelection;
  url: StringAggregateSelection;
  description: StringAggregateSelection;
  visibility: StringAggregateSelection;
  createdAt: DateTimeAggregateSelection;
  updatedAt: DateTimeAggregateSelection;
};

export type PostCommentsConnection = {
  __typename?: "PostCommentsConnection";
  edges: Array<PostCommentsRelationship>;
  totalCount: Scalars["Int"]["output"];
  pageInfo: PageInfo;
};

export type PostCommentsRelationship = {
  __typename?: "PostCommentsRelationship";
  cursor: Scalars["String"]["output"];
  node: Comment;
};

export type PostCommentUserAuthorAggregationSelection = {
  __typename?: "PostCommentUserAuthorAggregationSelection";
  count: Scalars["Int"]["output"];
  node?: Maybe<PostCommentUserAuthorNodeAggregateSelection>;
};

export type PostCommentUserAuthorNodeAggregateSelection = {
  __typename?: "PostCommentUserAuthorNodeAggregateSelection";
  id: IdAggregateSelection;
  name: StringAggregateSelection;
  email: StringAggregateSelection;
  hash: StringAggregateSelection;
  username: IdAggregateSelection;
  refreshToken: StringAggregateSelection;
  createdAt: DateTimeAggregateSelection;
  updatedAt: DateTimeAggregateSelection;
};

export type PostCommentUserLikesAggregationSelection = {
  __typename?: "PostCommentUserLikesAggregationSelection";
  count: Scalars["Int"]["output"];
  node?: Maybe<PostCommentUserLikesNodeAggregateSelection>;
};

export type PostCommentUserLikesNodeAggregateSelection = {
  __typename?: "PostCommentUserLikesNodeAggregateSelection";
  id: IdAggregateSelection;
  name: StringAggregateSelection;
  email: StringAggregateSelection;
  hash: StringAggregateSelection;
  username: IdAggregateSelection;
  refreshToken: StringAggregateSelection;
  createdAt: DateTimeAggregateSelection;
  updatedAt: DateTimeAggregateSelection;
};

export type PostCreatorOfPostConnection = {
  __typename?: "PostCreatorOfPostConnection";
  edges: Array<PostCreatorOfPostRelationship>;
  totalCount: Scalars["Int"]["output"];
  pageInfo: PageInfo;
};

export type PostCreatorOfPostRelationship = {
  __typename?: "PostCreatorOfPostRelationship";
  cursor: Scalars["String"]["output"];
  node: User;
};

export type PostEdge = {
  __typename?: "PostEdge";
  cursor: Scalars["String"]["output"];
  node: Post;
};

export type PostLikesConnection = {
  __typename?: "PostLikesConnection";
  edges: Array<PostLikesRelationship>;
  totalCount: Scalars["Int"]["output"];
  pageInfo: PageInfo;
};

export type PostLikesRelationship = {
  __typename?: "PostLikesRelationship";
  cursor: Scalars["String"]["output"];
  node: User;
};

export type PostsConnection = {
  __typename?: "PostsConnection";
  totalCount: Scalars["Int"]["output"];
  pageInfo: PageInfo;
  edges: Array<PostEdge>;
};

export type PostUserCreatorOfPostAggregationSelection = {
  __typename?: "PostUserCreatorOfPostAggregationSelection";
  count: Scalars["Int"]["output"];
  node?: Maybe<PostUserCreatorOfPostNodeAggregateSelection>;
};

export type PostUserCreatorOfPostNodeAggregateSelection = {
  __typename?: "PostUserCreatorOfPostNodeAggregateSelection";
  id: IdAggregateSelection;
  name: StringAggregateSelection;
  email: StringAggregateSelection;
  hash: StringAggregateSelection;
  username: IdAggregateSelection;
  refreshToken: StringAggregateSelection;
  createdAt: DateTimeAggregateSelection;
  updatedAt: DateTimeAggregateSelection;
};

export type PostUserLikesAggregationSelection = {
  __typename?: "PostUserLikesAggregationSelection";
  count: Scalars["Int"]["output"];
  node?: Maybe<PostUserLikesNodeAggregateSelection>;
};

export type PostUserLikesNodeAggregateSelection = {
  __typename?: "PostUserLikesNodeAggregateSelection";
  id: IdAggregateSelection;
  name: StringAggregateSelection;
  email: StringAggregateSelection;
  hash: StringAggregateSelection;
  username: IdAggregateSelection;
  refreshToken: StringAggregateSelection;
  createdAt: DateTimeAggregateSelection;
  updatedAt: DateTimeAggregateSelection;
};

export type ReplyComment = Comment & {
  __typename?: "ReplyComment";
  id: Scalars["ID"]["output"];
  text: Scalars["String"]["output"];
  createdAt?: Maybe<Scalars["DateTime"]["output"]>;
  updatedAt?: Maybe<Scalars["DateTime"]["output"]>;
  likesAggregate?: Maybe<ReplyCommentUserLikesAggregationSelection>;
  likes: Array<User>;
  likesConnection: CommentLikesConnection;
  authorAggregate?: Maybe<ReplyCommentUserAuthorAggregationSelection>;
  author: User;
  authorConnection: CommentAuthorConnection;
  replyOfCommentAggregate?: Maybe<ReplyCommentCommentReplyOfCommentAggregationSelection>;
  replyOfComment: Comment;
  replyOfCommentConnection: ReplyCommentReplyOfCommentConnection;
  repliesAggregate?: Maybe<ReplyCommentCommentRepliesAggregationSelection>;
  replies: Array<Comment>;
  repliesConnection: CommentRepliesConnection;
};

export type ReplyCommentLikesAggregateArgs = {
  where?: InputMaybe<UserWhere>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type ReplyCommentLikesArgs = {
  where?: InputMaybe<UserWhere>;
  options?: InputMaybe<UserOptions>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type ReplyCommentLikesConnectionArgs = {
  where?: InputMaybe<CommentLikesConnectionWhere>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  after?: InputMaybe<Scalars["String"]["input"]>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  sort?: InputMaybe<Array<CommentLikesConnectionSort>>;
};

export type ReplyCommentAuthorAggregateArgs = {
  where?: InputMaybe<UserWhere>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type ReplyCommentAuthorArgs = {
  where?: InputMaybe<UserWhere>;
  options?: InputMaybe<UserOptions>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type ReplyCommentAuthorConnectionArgs = {
  where?: InputMaybe<CommentAuthorConnectionWhere>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  after?: InputMaybe<Scalars["String"]["input"]>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  sort?: InputMaybe<Array<CommentAuthorConnectionSort>>;
};

export type ReplyCommentReplyOfCommentAggregateArgs = {
  where?: InputMaybe<CommentWhere>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type ReplyCommentReplyOfCommentArgs = {
  where?: InputMaybe<CommentWhere>;
  options?: InputMaybe<CommentOptions>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type ReplyCommentReplyOfCommentConnectionArgs = {
  where?: InputMaybe<ReplyCommentReplyOfCommentConnectionWhere>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  after?: InputMaybe<Scalars["String"]["input"]>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  sort?: InputMaybe<Array<ReplyCommentReplyOfCommentConnectionSort>>;
};

export type ReplyCommentRepliesAggregateArgs = {
  where?: InputMaybe<CommentWhere>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type ReplyCommentRepliesArgs = {
  where?: InputMaybe<CommentWhere>;
  options?: InputMaybe<CommentOptions>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type ReplyCommentRepliesConnectionArgs = {
  where?: InputMaybe<CommentRepliesConnectionWhere>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  after?: InputMaybe<Scalars["String"]["input"]>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  sort?: InputMaybe<Array<CommentRepliesConnectionSort>>;
};

export type ReplyCommentAggregateSelection = {
  __typename?: "ReplyCommentAggregateSelection";
  count: Scalars["Int"]["output"];
  id: IdAggregateSelection;
  text: StringAggregateSelection;
  createdAt: DateTimeAggregateSelection;
  updatedAt: DateTimeAggregateSelection;
};

export type ReplyCommentCommentRepliesAggregationSelection = {
  __typename?: "ReplyCommentCommentRepliesAggregationSelection";
  count: Scalars["Int"]["output"];
  node?: Maybe<ReplyCommentCommentRepliesNodeAggregateSelection>;
};

export type ReplyCommentCommentRepliesNodeAggregateSelection = {
  __typename?: "ReplyCommentCommentRepliesNodeAggregateSelection";
  id: IdAggregateSelection;
  text: StringAggregateSelection;
};

export type ReplyCommentCommentReplyOfCommentAggregationSelection = {
  __typename?: "ReplyCommentCommentReplyOfCommentAggregationSelection";
  count: Scalars["Int"]["output"];
  node?: Maybe<ReplyCommentCommentReplyOfCommentNodeAggregateSelection>;
};

export type ReplyCommentCommentReplyOfCommentNodeAggregateSelection = {
  __typename?: "ReplyCommentCommentReplyOfCommentNodeAggregateSelection";
  id: IdAggregateSelection;
  text: StringAggregateSelection;
};

export type ReplyCommentEdge = {
  __typename?: "ReplyCommentEdge";
  cursor: Scalars["String"]["output"];
  node: ReplyComment;
};

export type ReplyCommentReplyOfCommentConnection = {
  __typename?: "ReplyCommentReplyOfCommentConnection";
  edges: Array<ReplyCommentReplyOfCommentRelationship>;
  totalCount: Scalars["Int"]["output"];
  pageInfo: PageInfo;
};

export type ReplyCommentReplyOfCommentRelationship = {
  __typename?: "ReplyCommentReplyOfCommentRelationship";
  cursor: Scalars["String"]["output"];
  node: Comment;
};

export type ReplyCommentsConnection = {
  __typename?: "ReplyCommentsConnection";
  totalCount: Scalars["Int"]["output"];
  pageInfo: PageInfo;
  edges: Array<ReplyCommentEdge>;
};

export type ReplyCommentUserAuthorAggregationSelection = {
  __typename?: "ReplyCommentUserAuthorAggregationSelection";
  count: Scalars["Int"]["output"];
  node?: Maybe<ReplyCommentUserAuthorNodeAggregateSelection>;
};

export type ReplyCommentUserAuthorNodeAggregateSelection = {
  __typename?: "ReplyCommentUserAuthorNodeAggregateSelection";
  id: IdAggregateSelection;
  name: StringAggregateSelection;
  email: StringAggregateSelection;
  hash: StringAggregateSelection;
  username: IdAggregateSelection;
  refreshToken: StringAggregateSelection;
  createdAt: DateTimeAggregateSelection;
  updatedAt: DateTimeAggregateSelection;
};

export type ReplyCommentUserLikesAggregationSelection = {
  __typename?: "ReplyCommentUserLikesAggregationSelection";
  count: Scalars["Int"]["output"];
  node?: Maybe<ReplyCommentUserLikesNodeAggregateSelection>;
};

export type ReplyCommentUserLikesNodeAggregateSelection = {
  __typename?: "ReplyCommentUserLikesNodeAggregateSelection";
  id: IdAggregateSelection;
  name: StringAggregateSelection;
  email: StringAggregateSelection;
  hash: StringAggregateSelection;
  username: IdAggregateSelection;
  refreshToken: StringAggregateSelection;
  createdAt: DateTimeAggregateSelection;
  updatedAt: DateTimeAggregateSelection;
};

export type StringAggregateSelection = {
  __typename?: "StringAggregateSelection";
  shortest?: Maybe<Scalars["String"]["output"]>;
  longest?: Maybe<Scalars["String"]["output"]>;
};

/** Information about the number of nodes and relationships created and deleted during an update mutation */
export type UpdateInfo = {
  __typename?: "UpdateInfo";
  /** @deprecated This field has been deprecated because bookmarks are now handled by the driver. */
  bookmark?: Maybe<Scalars["String"]["output"]>;
  nodesCreated: Scalars["Int"]["output"];
  nodesDeleted: Scalars["Int"]["output"];
  relationshipsCreated: Scalars["Int"]["output"];
  relationshipsDeleted: Scalars["Int"]["output"];
};

export type UpdatePostCommentsMutationResponse = {
  __typename?: "UpdatePostCommentsMutationResponse";
  info: UpdateInfo;
  postComments: Array<PostComment>;
};

export type UpdatePostsMutationResponse = {
  __typename?: "UpdatePostsMutationResponse";
  info: UpdateInfo;
  posts: Array<Post>;
};

export type UpdateReplyCommentsMutationResponse = {
  __typename?: "UpdateReplyCommentsMutationResponse";
  info: UpdateInfo;
  replyComments: Array<ReplyComment>;
};

export type UpdateUsersMutationResponse = {
  __typename?: "UpdateUsersMutationResponse";
  info: UpdateInfo;
  users: Array<User>;
};

export type User = {
  __typename?: "User";
  id: Scalars["ID"]["output"];
  name: Scalars["String"]["output"];
  email: Scalars["String"]["output"];
  hash: Scalars["String"]["output"];
  username: Scalars["ID"]["output"];
  dob?: Maybe<Scalars["Date"]["output"]>;
  refreshToken?: Maybe<Scalars["String"]["output"]>;
  blackList?: Maybe<Array<Scalars["String"]["output"]>>;
  createdAt?: Maybe<Scalars["DateTime"]["output"]>;
  updatedAt?: Maybe<Scalars["DateTime"]["output"]>;
  postsAggregate?: Maybe<UserPostPostsAggregationSelection>;
  posts: Array<Post>;
  postsConnection: UserPostsConnection;
  likedPostsAggregate?: Maybe<UserPostLikedPostsAggregationSelection>;
  likedPosts: Array<Post>;
  likedPostsConnection: UserLikedPostsConnection;
  likedCommentsAggregate?: Maybe<UserCommentLikedCommentsAggregationSelection>;
  likedComments: Array<Comment>;
  likedCommentsConnection: UserLikedCommentsConnection;
  authorOfCommentsAggregate?: Maybe<UserCommentAuthorOfCommentsAggregationSelection>;
  authorOfComments: Array<Comment>;
  authorOfCommentsConnection: UserAuthorOfCommentsConnection;
};

export type UserPostsAggregateArgs = {
  where?: InputMaybe<PostWhere>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type UserPostsArgs = {
  where?: InputMaybe<PostWhere>;
  options?: InputMaybe<PostOptions>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type UserPostsConnectionArgs = {
  where?: InputMaybe<UserPostsConnectionWhere>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  after?: InputMaybe<Scalars["String"]["input"]>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  sort?: InputMaybe<Array<UserPostsConnectionSort>>;
};

export type UserLikedPostsAggregateArgs = {
  where?: InputMaybe<PostWhere>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type UserLikedPostsArgs = {
  where?: InputMaybe<PostWhere>;
  options?: InputMaybe<PostOptions>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type UserLikedPostsConnectionArgs = {
  where?: InputMaybe<UserLikedPostsConnectionWhere>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  after?: InputMaybe<Scalars["String"]["input"]>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  sort?: InputMaybe<Array<UserLikedPostsConnectionSort>>;
};

export type UserLikedCommentsAggregateArgs = {
  where?: InputMaybe<CommentWhere>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type UserLikedCommentsArgs = {
  where?: InputMaybe<CommentWhere>;
  options?: InputMaybe<CommentOptions>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type UserLikedCommentsConnectionArgs = {
  where?: InputMaybe<UserLikedCommentsConnectionWhere>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  after?: InputMaybe<Scalars["String"]["input"]>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  sort?: InputMaybe<Array<UserLikedCommentsConnectionSort>>;
};

export type UserAuthorOfCommentsAggregateArgs = {
  where?: InputMaybe<CommentWhere>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type UserAuthorOfCommentsArgs = {
  where?: InputMaybe<CommentWhere>;
  options?: InputMaybe<CommentOptions>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type UserAuthorOfCommentsConnectionArgs = {
  where?: InputMaybe<UserAuthorOfCommentsConnectionWhere>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  after?: InputMaybe<Scalars["String"]["input"]>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  sort?: InputMaybe<Array<UserAuthorOfCommentsConnectionSort>>;
};

export type UserAggregateSelection = {
  __typename?: "UserAggregateSelection";
  count: Scalars["Int"]["output"];
  id: IdAggregateSelection;
  name: StringAggregateSelection;
  email: StringAggregateSelection;
  hash: StringAggregateSelection;
  username: IdAggregateSelection;
  refreshToken: StringAggregateSelection;
  createdAt: DateTimeAggregateSelection;
  updatedAt: DateTimeAggregateSelection;
};

export type UserAuthorOfCommentsConnection = {
  __typename?: "UserAuthorOfCommentsConnection";
  edges: Array<UserAuthorOfCommentsRelationship>;
  totalCount: Scalars["Int"]["output"];
  pageInfo: PageInfo;
};

export type UserAuthorOfCommentsRelationship = {
  __typename?: "UserAuthorOfCommentsRelationship";
  cursor: Scalars["String"]["output"];
  node: Comment;
};

export type UserCommentAuthorOfCommentsAggregationSelection = {
  __typename?: "UserCommentAuthorOfCommentsAggregationSelection";
  count: Scalars["Int"]["output"];
  node?: Maybe<UserCommentAuthorOfCommentsNodeAggregateSelection>;
};

export type UserCommentAuthorOfCommentsNodeAggregateSelection = {
  __typename?: "UserCommentAuthorOfCommentsNodeAggregateSelection";
  id: IdAggregateSelection;
  text: StringAggregateSelection;
};

export type UserCommentLikedCommentsAggregationSelection = {
  __typename?: "UserCommentLikedCommentsAggregationSelection";
  count: Scalars["Int"]["output"];
  node?: Maybe<UserCommentLikedCommentsNodeAggregateSelection>;
};

export type UserCommentLikedCommentsNodeAggregateSelection = {
  __typename?: "UserCommentLikedCommentsNodeAggregateSelection";
  id: IdAggregateSelection;
  text: StringAggregateSelection;
};

export type UserEdge = {
  __typename?: "UserEdge";
  cursor: Scalars["String"]["output"];
  node: User;
};

export type UserLikedCommentsConnection = {
  __typename?: "UserLikedCommentsConnection";
  edges: Array<UserLikedCommentsRelationship>;
  totalCount: Scalars["Int"]["output"];
  pageInfo: PageInfo;
};

export type UserLikedCommentsRelationship = {
  __typename?: "UserLikedCommentsRelationship";
  cursor: Scalars["String"]["output"];
  node: Comment;
};

export type UserLikedPostsConnection = {
  __typename?: "UserLikedPostsConnection";
  edges: Array<UserLikedPostsRelationship>;
  totalCount: Scalars["Int"]["output"];
  pageInfo: PageInfo;
};

export type UserLikedPostsRelationship = {
  __typename?: "UserLikedPostsRelationship";
  cursor: Scalars["String"]["output"];
  node: Post;
};

export type UserPostLikedPostsAggregationSelection = {
  __typename?: "UserPostLikedPostsAggregationSelection";
  count: Scalars["Int"]["output"];
  node?: Maybe<UserPostLikedPostsNodeAggregateSelection>;
};

export type UserPostLikedPostsNodeAggregateSelection = {
  __typename?: "UserPostLikedPostsNodeAggregateSelection";
  id: IdAggregateSelection;
  url: StringAggregateSelection;
  description: StringAggregateSelection;
  visibility: StringAggregateSelection;
  createdAt: DateTimeAggregateSelection;
  updatedAt: DateTimeAggregateSelection;
};

export type UserPostPostsAggregationSelection = {
  __typename?: "UserPostPostsAggregationSelection";
  count: Scalars["Int"]["output"];
  node?: Maybe<UserPostPostsNodeAggregateSelection>;
};

export type UserPostPostsNodeAggregateSelection = {
  __typename?: "UserPostPostsNodeAggregateSelection";
  id: IdAggregateSelection;
  url: StringAggregateSelection;
  description: StringAggregateSelection;
  visibility: StringAggregateSelection;
  createdAt: DateTimeAggregateSelection;
  updatedAt: DateTimeAggregateSelection;
};

export type UserPostsConnection = {
  __typename?: "UserPostsConnection";
  edges: Array<UserPostsRelationship>;
  totalCount: Scalars["Int"]["output"];
  pageInfo: PageInfo;
};

export type UserPostsRelationship = {
  __typename?: "UserPostsRelationship";
  cursor: Scalars["String"]["output"];
  node: Post;
};

export type UsersConnection = {
  __typename?: "UsersConnection";
  totalCount: Scalars["Int"]["output"];
  pageInfo: PageInfo;
  edges: Array<UserEdge>;
};

export type CommentAuthorAggregateInput = {
  count?: InputMaybe<Scalars["Int"]["input"]>;
  count_LT?: InputMaybe<Scalars["Int"]["input"]>;
  count_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  count_GT?: InputMaybe<Scalars["Int"]["input"]>;
  count_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  AND?: InputMaybe<Array<CommentAuthorAggregateInput>>;
  OR?: InputMaybe<Array<CommentAuthorAggregateInput>>;
  NOT?: InputMaybe<CommentAuthorAggregateInput>;
  node?: InputMaybe<CommentAuthorNodeAggregationWhereInput>;
};

export type CommentAuthorConnectFieldInput = {
  where?: InputMaybe<UserConnectWhere>;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars["Boolean"]["input"];
  connect?: InputMaybe<UserConnectInput>;
};

export type CommentAuthorConnectionSort = {
  node?: InputMaybe<UserSort>;
};

export type CommentAuthorConnectionWhere = {
  AND?: InputMaybe<Array<CommentAuthorConnectionWhere>>;
  OR?: InputMaybe<Array<CommentAuthorConnectionWhere>>;
  NOT?: InputMaybe<CommentAuthorConnectionWhere>;
  node?: InputMaybe<UserWhere>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  node_NOT?: InputMaybe<UserWhere>;
};

export type CommentAuthorConnectOrCreateFieldInput = {
  where: UserConnectOrCreateWhere;
  onCreate: CommentAuthorConnectOrCreateFieldInputOnCreate;
};

export type CommentAuthorConnectOrCreateFieldInputOnCreate = {
  node: UserOnCreateInput;
};

export type CommentAuthorCreateFieldInput = {
  node: UserCreateInput;
};

export type CommentAuthorDeleteFieldInput = {
  where?: InputMaybe<CommentAuthorConnectionWhere>;
  delete?: InputMaybe<UserDeleteInput>;
};

export type CommentAuthorDisconnectFieldInput = {
  where?: InputMaybe<CommentAuthorConnectionWhere>;
  disconnect?: InputMaybe<UserDisconnectInput>;
};

export type CommentAuthorNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<CommentAuthorNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<CommentAuthorNodeAggregationWhereInput>>;
  NOT?: InputMaybe<CommentAuthorNodeAggregationWhereInput>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  id_EQUAL?: InputMaybe<Scalars["ID"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  name_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  name_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  name_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  name_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  name_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  name_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  name_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  name_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  name_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  name_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  email_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  email_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  email_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  email_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  email_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  email_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  email_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  email_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  email_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  email_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  email_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  email_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  email_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  email_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  email_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  email_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  email_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  email_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  email_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  email_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  email_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  email_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  email_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  email_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  email_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  email_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  email_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  email_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  email_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  email_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  email_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  email_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  email_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  email_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  email_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  hash_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  hash_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  hash_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  hash_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  hash_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  hash_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  hash_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  hash_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  hash_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  hash_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  hash_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  hash_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  hash_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  hash_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  hash_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  hash_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  hash_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  hash_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  hash_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  hash_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  hash_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  hash_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  hash_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  hash_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  hash_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  hash_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  hash_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  hash_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  hash_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  hash_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  hash_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  hash_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  hash_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  hash_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  hash_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  username_EQUAL?: InputMaybe<Scalars["ID"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  refreshToken_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  refreshToken_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  refreshToken_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  refreshToken_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  refreshToken_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  refreshToken_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  refreshToken_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  refreshToken_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  refreshToken_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  refreshToken_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  refreshToken_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  refreshToken_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  refreshToken_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  refreshToken_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  refreshToken_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  refreshToken_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  refreshToken_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  refreshToken_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  refreshToken_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  refreshToken_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  refreshToken_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  refreshToken_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  refreshToken_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  refreshToken_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  refreshToken_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  refreshToken_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  refreshToken_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  refreshToken_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  refreshToken_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  refreshToken_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  refreshToken_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  refreshToken_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  refreshToken_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  refreshToken_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  refreshToken_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  createdAt_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MIN_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MAX_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  createdAt_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MIN_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MAX_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  createdAt_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MIN_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MAX_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  createdAt_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MIN_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MAX_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  createdAt_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MIN_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MAX_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  updatedAt_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MIN_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MAX_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  updatedAt_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MIN_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MAX_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  updatedAt_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MIN_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MAX_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  updatedAt_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MIN_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MAX_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  updatedAt_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MIN_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MAX_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
};

export type CommentAuthorUpdateConnectionInput = {
  node?: InputMaybe<UserUpdateInput>;
};

export type CommentAuthorUpdateFieldInput = {
  where?: InputMaybe<CommentAuthorConnectionWhere>;
  connectOrCreate?: InputMaybe<CommentAuthorConnectOrCreateFieldInput>;
  connect?: InputMaybe<CommentAuthorConnectFieldInput>;
  disconnect?: InputMaybe<CommentAuthorDisconnectFieldInput>;
  create?: InputMaybe<CommentAuthorCreateFieldInput>;
  update?: InputMaybe<CommentAuthorUpdateConnectionInput>;
  delete?: InputMaybe<CommentAuthorDeleteFieldInput>;
};

export type CommentConnectInput = {
  likes?: InputMaybe<Array<CommentLikesConnectFieldInput>>;
  author?: InputMaybe<CommentAuthorConnectFieldInput>;
  replies?: InputMaybe<Array<CommentRepliesConnectFieldInput>>;
};

export type CommentConnectWhere = {
  node: CommentWhere;
};

export type CommentCreateInput = {
  PostComment?: InputMaybe<PostCommentCreateInput>;
  ReplyComment?: InputMaybe<ReplyCommentCreateInput>;
};

export type CommentDeleteInput = {
  likes?: InputMaybe<Array<CommentLikesDeleteFieldInput>>;
  author?: InputMaybe<CommentAuthorDeleteFieldInput>;
  replies?: InputMaybe<Array<CommentRepliesDeleteFieldInput>>;
};

export type CommentDisconnectInput = {
  likes?: InputMaybe<Array<CommentLikesDisconnectFieldInput>>;
  author?: InputMaybe<CommentAuthorDisconnectFieldInput>;
  replies?: InputMaybe<Array<CommentRepliesDisconnectFieldInput>>;
};

export type CommentLikesAggregateInput = {
  count?: InputMaybe<Scalars["Int"]["input"]>;
  count_LT?: InputMaybe<Scalars["Int"]["input"]>;
  count_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  count_GT?: InputMaybe<Scalars["Int"]["input"]>;
  count_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  AND?: InputMaybe<Array<CommentLikesAggregateInput>>;
  OR?: InputMaybe<Array<CommentLikesAggregateInput>>;
  NOT?: InputMaybe<CommentLikesAggregateInput>;
  node?: InputMaybe<CommentLikesNodeAggregationWhereInput>;
};

export type CommentLikesConnectFieldInput = {
  where?: InputMaybe<UserConnectWhere>;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars["Boolean"]["input"];
  connect?: InputMaybe<Array<UserConnectInput>>;
};

export type CommentLikesConnectionSort = {
  node?: InputMaybe<UserSort>;
};

export type CommentLikesConnectionWhere = {
  AND?: InputMaybe<Array<CommentLikesConnectionWhere>>;
  OR?: InputMaybe<Array<CommentLikesConnectionWhere>>;
  NOT?: InputMaybe<CommentLikesConnectionWhere>;
  node?: InputMaybe<UserWhere>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  node_NOT?: InputMaybe<UserWhere>;
};

export type CommentLikesConnectOrCreateFieldInput = {
  where: UserConnectOrCreateWhere;
  onCreate: CommentLikesConnectOrCreateFieldInputOnCreate;
};

export type CommentLikesConnectOrCreateFieldInputOnCreate = {
  node: UserOnCreateInput;
};

export type CommentLikesCreateFieldInput = {
  node: UserCreateInput;
};

export type CommentLikesDeleteFieldInput = {
  where?: InputMaybe<CommentLikesConnectionWhere>;
  delete?: InputMaybe<UserDeleteInput>;
};

export type CommentLikesDisconnectFieldInput = {
  where?: InputMaybe<CommentLikesConnectionWhere>;
  disconnect?: InputMaybe<UserDisconnectInput>;
};

export type CommentLikesNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<CommentLikesNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<CommentLikesNodeAggregationWhereInput>>;
  NOT?: InputMaybe<CommentLikesNodeAggregationWhereInput>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  id_EQUAL?: InputMaybe<Scalars["ID"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  name_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  name_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  name_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  name_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  name_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  name_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  name_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  name_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  name_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  name_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  email_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  email_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  email_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  email_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  email_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  email_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  email_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  email_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  email_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  email_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  email_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  email_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  email_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  email_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  email_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  email_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  email_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  email_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  email_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  email_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  email_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  email_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  email_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  email_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  email_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  email_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  email_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  email_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  email_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  email_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  email_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  email_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  email_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  email_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  email_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  hash_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  hash_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  hash_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  hash_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  hash_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  hash_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  hash_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  hash_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  hash_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  hash_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  hash_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  hash_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  hash_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  hash_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  hash_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  hash_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  hash_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  hash_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  hash_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  hash_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  hash_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  hash_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  hash_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  hash_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  hash_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  hash_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  hash_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  hash_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  hash_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  hash_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  hash_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  hash_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  hash_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  hash_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  hash_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  username_EQUAL?: InputMaybe<Scalars["ID"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  refreshToken_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  refreshToken_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  refreshToken_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  refreshToken_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  refreshToken_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  refreshToken_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  refreshToken_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  refreshToken_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  refreshToken_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  refreshToken_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  refreshToken_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  refreshToken_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  refreshToken_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  refreshToken_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  refreshToken_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  refreshToken_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  refreshToken_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  refreshToken_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  refreshToken_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  refreshToken_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  refreshToken_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  refreshToken_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  refreshToken_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  refreshToken_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  refreshToken_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  refreshToken_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  refreshToken_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  refreshToken_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  refreshToken_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  refreshToken_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  refreshToken_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  refreshToken_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  refreshToken_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  refreshToken_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  refreshToken_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  createdAt_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MIN_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MAX_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  createdAt_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MIN_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MAX_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  createdAt_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MIN_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MAX_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  createdAt_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MIN_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MAX_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  createdAt_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MIN_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MAX_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  updatedAt_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MIN_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MAX_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  updatedAt_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MIN_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MAX_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  updatedAt_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MIN_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MAX_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  updatedAt_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MIN_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MAX_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  updatedAt_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MIN_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MAX_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
};

export type CommentLikesUpdateConnectionInput = {
  node?: InputMaybe<UserUpdateInput>;
};

export type CommentLikesUpdateFieldInput = {
  where?: InputMaybe<CommentLikesConnectionWhere>;
  connectOrCreate?: InputMaybe<Array<CommentLikesConnectOrCreateFieldInput>>;
  connect?: InputMaybe<Array<CommentLikesConnectFieldInput>>;
  disconnect?: InputMaybe<Array<CommentLikesDisconnectFieldInput>>;
  create?: InputMaybe<Array<CommentLikesCreateFieldInput>>;
  update?: InputMaybe<CommentLikesUpdateConnectionInput>;
  delete?: InputMaybe<Array<CommentLikesDeleteFieldInput>>;
};

export type CommentOptions = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  /** Specify one or more CommentSort objects to sort Comments by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<InputMaybe<CommentSort>>>;
};

export type CommentRepliesAggregateInput = {
  count?: InputMaybe<Scalars["Int"]["input"]>;
  count_LT?: InputMaybe<Scalars["Int"]["input"]>;
  count_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  count_GT?: InputMaybe<Scalars["Int"]["input"]>;
  count_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  AND?: InputMaybe<Array<CommentRepliesAggregateInput>>;
  OR?: InputMaybe<Array<CommentRepliesAggregateInput>>;
  NOT?: InputMaybe<CommentRepliesAggregateInput>;
  node?: InputMaybe<CommentRepliesNodeAggregationWhereInput>;
};

export type CommentRepliesConnectFieldInput = {
  where?: InputMaybe<CommentConnectWhere>;
  connect?: InputMaybe<CommentConnectInput>;
};

export type CommentRepliesConnectionSort = {
  node?: InputMaybe<CommentSort>;
};

export type CommentRepliesConnectionWhere = {
  AND?: InputMaybe<Array<CommentRepliesConnectionWhere>>;
  OR?: InputMaybe<Array<CommentRepliesConnectionWhere>>;
  NOT?: InputMaybe<CommentRepliesConnectionWhere>;
  node?: InputMaybe<CommentWhere>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  node_NOT?: InputMaybe<CommentWhere>;
};

export type CommentRepliesCreateFieldInput = {
  node: CommentCreateInput;
};

export type CommentRepliesDeleteFieldInput = {
  where?: InputMaybe<CommentRepliesConnectionWhere>;
  delete?: InputMaybe<CommentDeleteInput>;
};

export type CommentRepliesDisconnectFieldInput = {
  where?: InputMaybe<CommentRepliesConnectionWhere>;
  disconnect?: InputMaybe<CommentDisconnectInput>;
};

export type CommentRepliesNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<CommentRepliesNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<CommentRepliesNodeAggregationWhereInput>>;
  NOT?: InputMaybe<CommentRepliesNodeAggregationWhereInput>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  id_EQUAL?: InputMaybe<Scalars["ID"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  text_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  text_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  text_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  text_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  text_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  text_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  text_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  text_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  text_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  text_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  text_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  text_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  text_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  text_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  text_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  text_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  text_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  text_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  text_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  text_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  text_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  text_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  text_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  text_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  text_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  text_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  text_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  text_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  text_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  text_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  text_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  text_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  text_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  text_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  text_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
};

export type CommentRepliesUpdateConnectionInput = {
  node?: InputMaybe<CommentUpdateInput>;
};

export type CommentRepliesUpdateFieldInput = {
  where?: InputMaybe<CommentRepliesConnectionWhere>;
  connect?: InputMaybe<Array<CommentRepliesConnectFieldInput>>;
  disconnect?: InputMaybe<Array<CommentRepliesDisconnectFieldInput>>;
  create?: InputMaybe<Array<CommentRepliesCreateFieldInput>>;
  update?: InputMaybe<CommentRepliesUpdateConnectionInput>;
  delete?: InputMaybe<Array<CommentRepliesDeleteFieldInput>>;
};

/** Fields to sort Comments by. The order in which sorts are applied is not guaranteed when specifying many fields in one CommentSort object. */
export type CommentSort = {
  id?: InputMaybe<SortDirection>;
  text?: InputMaybe<SortDirection>;
};

export type CommentUpdateInput = {
  id?: InputMaybe<Scalars["ID"]["input"]>;
  text?: InputMaybe<Scalars["String"]["input"]>;
  likes?: InputMaybe<Array<CommentLikesUpdateFieldInput>>;
  author?: InputMaybe<CommentAuthorUpdateFieldInput>;
  replies?: InputMaybe<Array<CommentRepliesUpdateFieldInput>>;
};

export type CommentWhere = {
  id?: InputMaybe<Scalars["ID"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT?: InputMaybe<Scalars["ID"]["input"]>;
  id_IN?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT_IN?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  id_CONTAINS?: InputMaybe<Scalars["ID"]["input"]>;
  id_STARTS_WITH?: InputMaybe<Scalars["ID"]["input"]>;
  id_ENDS_WITH?: InputMaybe<Scalars["ID"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT_CONTAINS?: InputMaybe<Scalars["ID"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT_STARTS_WITH?: InputMaybe<Scalars["ID"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT_ENDS_WITH?: InputMaybe<Scalars["ID"]["input"]>;
  text?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  text_NOT?: InputMaybe<Scalars["String"]["input"]>;
  text_IN?: InputMaybe<Array<Scalars["String"]["input"]>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  text_NOT_IN?: InputMaybe<Array<Scalars["String"]["input"]>>;
  text_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  text_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  text_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  text_NOT_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  text_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  text_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  OR?: InputMaybe<Array<CommentWhere>>;
  AND?: InputMaybe<Array<CommentWhere>>;
  NOT?: InputMaybe<CommentWhere>;
  typename_IN?: InputMaybe<Array<CommentImplementation>>;
  /** @deprecated Use `likes_SOME` instead. */
  likes?: InputMaybe<UserWhere>;
  /** @deprecated Use `likes_NONE` instead. */
  likes_NOT?: InputMaybe<UserWhere>;
  /** Return Comments where all of the related Users match this filter */
  likes_ALL?: InputMaybe<UserWhere>;
  /** Return Comments where none of the related Users match this filter */
  likes_NONE?: InputMaybe<UserWhere>;
  /** Return Comments where one of the related Users match this filter */
  likes_SINGLE?: InputMaybe<UserWhere>;
  /** Return Comments where some of the related Users match this filter */
  likes_SOME?: InputMaybe<UserWhere>;
  /** @deprecated Use `likesConnection_SOME` instead. */
  likesConnection?: InputMaybe<CommentLikesConnectionWhere>;
  /** @deprecated Use `likesConnection_NONE` instead. */
  likesConnection_NOT?: InputMaybe<CommentLikesConnectionWhere>;
  /** Return Comments where all of the related CommentLikesConnections match this filter */
  likesConnection_ALL?: InputMaybe<CommentLikesConnectionWhere>;
  /** Return Comments where none of the related CommentLikesConnections match this filter */
  likesConnection_NONE?: InputMaybe<CommentLikesConnectionWhere>;
  /** Return Comments where one of the related CommentLikesConnections match this filter */
  likesConnection_SINGLE?: InputMaybe<CommentLikesConnectionWhere>;
  /** Return Comments where some of the related CommentLikesConnections match this filter */
  likesConnection_SOME?: InputMaybe<CommentLikesConnectionWhere>;
  likesAggregate?: InputMaybe<CommentLikesAggregateInput>;
  author?: InputMaybe<UserWhere>;
  author_NOT?: InputMaybe<UserWhere>;
  authorConnection?: InputMaybe<CommentAuthorConnectionWhere>;
  authorConnection_NOT?: InputMaybe<CommentAuthorConnectionWhere>;
  authorAggregate?: InputMaybe<CommentAuthorAggregateInput>;
  /** @deprecated Use `replies_SOME` instead. */
  replies?: InputMaybe<CommentWhere>;
  /** @deprecated Use `replies_NONE` instead. */
  replies_NOT?: InputMaybe<CommentWhere>;
  /** Return Comments where all of the related Comments match this filter */
  replies_ALL?: InputMaybe<CommentWhere>;
  /** Return Comments where none of the related Comments match this filter */
  replies_NONE?: InputMaybe<CommentWhere>;
  /** Return Comments where one of the related Comments match this filter */
  replies_SINGLE?: InputMaybe<CommentWhere>;
  /** Return Comments where some of the related Comments match this filter */
  replies_SOME?: InputMaybe<CommentWhere>;
  /** @deprecated Use `repliesConnection_SOME` instead. */
  repliesConnection?: InputMaybe<CommentRepliesConnectionWhere>;
  /** @deprecated Use `repliesConnection_NONE` instead. */
  repliesConnection_NOT?: InputMaybe<CommentRepliesConnectionWhere>;
  /** Return Comments where all of the related CommentRepliesConnections match this filter */
  repliesConnection_ALL?: InputMaybe<CommentRepliesConnectionWhere>;
  /** Return Comments where none of the related CommentRepliesConnections match this filter */
  repliesConnection_NONE?: InputMaybe<CommentRepliesConnectionWhere>;
  /** Return Comments where one of the related CommentRepliesConnections match this filter */
  repliesConnection_SINGLE?: InputMaybe<CommentRepliesConnectionWhere>;
  /** Return Comments where some of the related CommentRepliesConnections match this filter */
  repliesConnection_SOME?: InputMaybe<CommentRepliesConnectionWhere>;
  repliesAggregate?: InputMaybe<CommentRepliesAggregateInput>;
};

export type PostCommentAuthorAggregateInput = {
  count?: InputMaybe<Scalars["Int"]["input"]>;
  count_LT?: InputMaybe<Scalars["Int"]["input"]>;
  count_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  count_GT?: InputMaybe<Scalars["Int"]["input"]>;
  count_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  AND?: InputMaybe<Array<PostCommentAuthorAggregateInput>>;
  OR?: InputMaybe<Array<PostCommentAuthorAggregateInput>>;
  NOT?: InputMaybe<PostCommentAuthorAggregateInput>;
  node?: InputMaybe<PostCommentAuthorNodeAggregationWhereInput>;
};

export type PostCommentAuthorConnectFieldInput = {
  where?: InputMaybe<UserConnectWhere>;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars["Boolean"]["input"];
  connect?: InputMaybe<UserConnectInput>;
};

export type PostCommentAuthorConnectOrCreateFieldInput = {
  where: UserConnectOrCreateWhere;
  onCreate: PostCommentAuthorConnectOrCreateFieldInputOnCreate;
};

export type PostCommentAuthorConnectOrCreateFieldInputOnCreate = {
  node: UserOnCreateInput;
};

export type PostCommentAuthorCreateFieldInput = {
  node: UserCreateInput;
};

export type PostCommentAuthorFieldInput = {
  connectOrCreate?: InputMaybe<PostCommentAuthorConnectOrCreateFieldInput>;
  connect?: InputMaybe<PostCommentAuthorConnectFieldInput>;
  create?: InputMaybe<PostCommentAuthorCreateFieldInput>;
};

export type PostCommentAuthorNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<PostCommentAuthorNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<PostCommentAuthorNodeAggregationWhereInput>>;
  NOT?: InputMaybe<PostCommentAuthorNodeAggregationWhereInput>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  id_EQUAL?: InputMaybe<Scalars["ID"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  name_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  name_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  name_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  name_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  name_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  name_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  name_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  name_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  name_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  name_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  email_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  email_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  email_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  email_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  email_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  email_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  email_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  email_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  email_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  email_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  email_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  email_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  email_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  email_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  email_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  email_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  email_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  email_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  email_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  email_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  email_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  email_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  email_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  email_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  email_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  email_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  email_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  email_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  email_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  email_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  email_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  email_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  email_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  email_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  email_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  hash_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  hash_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  hash_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  hash_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  hash_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  hash_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  hash_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  hash_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  hash_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  hash_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  hash_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  hash_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  hash_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  hash_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  hash_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  hash_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  hash_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  hash_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  hash_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  hash_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  hash_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  hash_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  hash_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  hash_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  hash_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  hash_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  hash_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  hash_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  hash_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  hash_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  hash_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  hash_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  hash_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  hash_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  hash_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  username_EQUAL?: InputMaybe<Scalars["ID"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  refreshToken_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  refreshToken_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  refreshToken_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  refreshToken_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  refreshToken_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  refreshToken_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  refreshToken_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  refreshToken_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  refreshToken_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  refreshToken_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  refreshToken_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  refreshToken_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  refreshToken_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  refreshToken_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  refreshToken_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  refreshToken_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  refreshToken_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  refreshToken_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  refreshToken_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  refreshToken_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  refreshToken_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  refreshToken_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  refreshToken_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  refreshToken_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  refreshToken_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  refreshToken_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  refreshToken_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  refreshToken_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  refreshToken_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  refreshToken_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  refreshToken_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  refreshToken_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  refreshToken_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  refreshToken_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  refreshToken_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  createdAt_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MIN_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MAX_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  createdAt_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MIN_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MAX_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  createdAt_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MIN_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MAX_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  createdAt_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MIN_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MAX_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  createdAt_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MIN_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MAX_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  updatedAt_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MIN_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MAX_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  updatedAt_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MIN_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MAX_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  updatedAt_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MIN_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MAX_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  updatedAt_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MIN_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MAX_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  updatedAt_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MIN_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MAX_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
};

export type PostCommentAuthorUpdateConnectionInput = {
  node?: InputMaybe<UserUpdateInput>;
};

export type PostCommentAuthorUpdateFieldInput = {
  where?: InputMaybe<CommentAuthorConnectionWhere>;
  connectOrCreate?: InputMaybe<PostCommentAuthorConnectOrCreateFieldInput>;
  connect?: InputMaybe<PostCommentAuthorConnectFieldInput>;
  disconnect?: InputMaybe<CommentAuthorDisconnectFieldInput>;
  create?: InputMaybe<PostCommentAuthorCreateFieldInput>;
  update?: InputMaybe<PostCommentAuthorUpdateConnectionInput>;
  delete?: InputMaybe<CommentAuthorDeleteFieldInput>;
};

export type PostCommentCommentOfPostAggregateInput = {
  count?: InputMaybe<Scalars["Int"]["input"]>;
  count_LT?: InputMaybe<Scalars["Int"]["input"]>;
  count_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  count_GT?: InputMaybe<Scalars["Int"]["input"]>;
  count_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  AND?: InputMaybe<Array<PostCommentCommentOfPostAggregateInput>>;
  OR?: InputMaybe<Array<PostCommentCommentOfPostAggregateInput>>;
  NOT?: InputMaybe<PostCommentCommentOfPostAggregateInput>;
  node?: InputMaybe<PostCommentCommentOfPostNodeAggregationWhereInput>;
};

export type PostCommentCommentOfPostConnectFieldInput = {
  where?: InputMaybe<PostConnectWhere>;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars["Boolean"]["input"];
  connect?: InputMaybe<PostConnectInput>;
};

export type PostCommentCommentOfPostConnectionSort = {
  node?: InputMaybe<PostSort>;
};

export type PostCommentCommentOfPostConnectionWhere = {
  AND?: InputMaybe<Array<PostCommentCommentOfPostConnectionWhere>>;
  OR?: InputMaybe<Array<PostCommentCommentOfPostConnectionWhere>>;
  NOT?: InputMaybe<PostCommentCommentOfPostConnectionWhere>;
  node?: InputMaybe<PostWhere>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  node_NOT?: InputMaybe<PostWhere>;
};

export type PostCommentCommentOfPostCreateFieldInput = {
  node: PostCreateInput;
};

export type PostCommentCommentOfPostDeleteFieldInput = {
  where?: InputMaybe<PostCommentCommentOfPostConnectionWhere>;
  delete?: InputMaybe<PostDeleteInput>;
};

export type PostCommentCommentOfPostDisconnectFieldInput = {
  where?: InputMaybe<PostCommentCommentOfPostConnectionWhere>;
  disconnect?: InputMaybe<PostDisconnectInput>;
};

export type PostCommentCommentOfPostFieldInput = {
  connect?: InputMaybe<PostCommentCommentOfPostConnectFieldInput>;
  create?: InputMaybe<PostCommentCommentOfPostCreateFieldInput>;
};

export type PostCommentCommentOfPostNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<PostCommentCommentOfPostNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<PostCommentCommentOfPostNodeAggregationWhereInput>>;
  NOT?: InputMaybe<PostCommentCommentOfPostNodeAggregationWhereInput>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  id_EQUAL?: InputMaybe<Scalars["ID"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  url_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  url_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  url_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  url_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  url_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  url_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  url_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  url_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  url_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  url_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  url_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  url_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  url_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  url_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  url_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  url_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  url_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  url_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  url_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  url_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  url_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  url_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  url_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  url_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  url_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  url_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  url_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  url_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  url_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  url_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  url_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  url_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  url_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  url_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  url_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  description_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  description_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  description_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  description_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  description_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  description_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  description_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  description_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  description_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  description_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  description_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  description_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  description_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  description_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  description_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  description_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  description_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  description_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  description_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  description_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  description_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  description_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  description_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  description_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  description_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  description_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  description_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  description_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  description_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  description_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  description_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  description_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  description_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  description_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  description_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  visibility_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  visibility_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  visibility_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  visibility_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  visibility_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  visibility_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  visibility_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  visibility_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  visibility_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  visibility_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  visibility_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  visibility_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  visibility_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  visibility_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  visibility_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  visibility_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  visibility_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  visibility_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  visibility_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  visibility_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  visibility_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  visibility_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  visibility_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  visibility_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  visibility_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  visibility_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  visibility_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  visibility_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  visibility_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  visibility_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  visibility_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  visibility_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  visibility_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  visibility_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  visibility_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  createdAt_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MIN_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MAX_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  createdAt_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MIN_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MAX_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  createdAt_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MIN_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MAX_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  createdAt_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MIN_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MAX_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  createdAt_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MIN_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MAX_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  updatedAt_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MIN_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MAX_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  updatedAt_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MIN_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MAX_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  updatedAt_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MIN_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MAX_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  updatedAt_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MIN_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MAX_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  updatedAt_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MIN_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MAX_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
};

export type PostCommentCommentOfPostUpdateConnectionInput = {
  node?: InputMaybe<PostUpdateInput>;
};

export type PostCommentCommentOfPostUpdateFieldInput = {
  where?: InputMaybe<PostCommentCommentOfPostConnectionWhere>;
  connect?: InputMaybe<PostCommentCommentOfPostConnectFieldInput>;
  disconnect?: InputMaybe<PostCommentCommentOfPostDisconnectFieldInput>;
  create?: InputMaybe<PostCommentCommentOfPostCreateFieldInput>;
  update?: InputMaybe<PostCommentCommentOfPostUpdateConnectionInput>;
  delete?: InputMaybe<PostCommentCommentOfPostDeleteFieldInput>;
};

export type PostCommentConnectInput = {
  likes?: InputMaybe<Array<PostCommentLikesConnectFieldInput>>;
  author?: InputMaybe<PostCommentAuthorConnectFieldInput>;
  commentOfPost?: InputMaybe<PostCommentCommentOfPostConnectFieldInput>;
  replies?: InputMaybe<Array<PostCommentRepliesConnectFieldInput>>;
};

export type PostCommentConnectOrCreateInput = {
  likes?: InputMaybe<Array<PostCommentLikesConnectOrCreateFieldInput>>;
  author?: InputMaybe<PostCommentAuthorConnectOrCreateFieldInput>;
};

export type PostCommentCreateInput = {
  text: Scalars["String"]["input"];
  updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  likes?: InputMaybe<PostCommentLikesFieldInput>;
  author?: InputMaybe<PostCommentAuthorFieldInput>;
  commentOfPost?: InputMaybe<PostCommentCommentOfPostFieldInput>;
  replies?: InputMaybe<PostCommentRepliesFieldInput>;
};

export type PostCommentDeleteInput = {
  likes?: InputMaybe<Array<CommentLikesDeleteFieldInput>>;
  author?: InputMaybe<CommentAuthorDeleteFieldInput>;
  commentOfPost?: InputMaybe<PostCommentCommentOfPostDeleteFieldInput>;
  replies?: InputMaybe<Array<PostCommentRepliesDeleteFieldInput>>;
};

export type PostCommentDisconnectInput = {
  likes?: InputMaybe<Array<CommentLikesDisconnectFieldInput>>;
  author?: InputMaybe<CommentAuthorDisconnectFieldInput>;
  commentOfPost?: InputMaybe<PostCommentCommentOfPostDisconnectFieldInput>;
  replies?: InputMaybe<Array<PostCommentRepliesDisconnectFieldInput>>;
};

export type PostCommentLikesAggregateInput = {
  count?: InputMaybe<Scalars["Int"]["input"]>;
  count_LT?: InputMaybe<Scalars["Int"]["input"]>;
  count_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  count_GT?: InputMaybe<Scalars["Int"]["input"]>;
  count_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  AND?: InputMaybe<Array<PostCommentLikesAggregateInput>>;
  OR?: InputMaybe<Array<PostCommentLikesAggregateInput>>;
  NOT?: InputMaybe<PostCommentLikesAggregateInput>;
  node?: InputMaybe<PostCommentLikesNodeAggregationWhereInput>;
};

export type PostCommentLikesConnectFieldInput = {
  where?: InputMaybe<UserConnectWhere>;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars["Boolean"]["input"];
  connect?: InputMaybe<Array<UserConnectInput>>;
};

export type PostCommentLikesConnectOrCreateFieldInput = {
  where: UserConnectOrCreateWhere;
  onCreate: PostCommentLikesConnectOrCreateFieldInputOnCreate;
};

export type PostCommentLikesConnectOrCreateFieldInputOnCreate = {
  node: UserOnCreateInput;
};

export type PostCommentLikesCreateFieldInput = {
  node: UserCreateInput;
};

export type PostCommentLikesFieldInput = {
  connectOrCreate?: InputMaybe<
    Array<PostCommentLikesConnectOrCreateFieldInput>
  >;
  connect?: InputMaybe<Array<PostCommentLikesConnectFieldInput>>;
  create?: InputMaybe<Array<PostCommentLikesCreateFieldInput>>;
};

export type PostCommentLikesNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<PostCommentLikesNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<PostCommentLikesNodeAggregationWhereInput>>;
  NOT?: InputMaybe<PostCommentLikesNodeAggregationWhereInput>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  id_EQUAL?: InputMaybe<Scalars["ID"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  name_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  name_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  name_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  name_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  name_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  name_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  name_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  name_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  name_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  name_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  email_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  email_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  email_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  email_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  email_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  email_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  email_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  email_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  email_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  email_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  email_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  email_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  email_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  email_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  email_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  email_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  email_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  email_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  email_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  email_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  email_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  email_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  email_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  email_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  email_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  email_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  email_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  email_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  email_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  email_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  email_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  email_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  email_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  email_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  email_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  hash_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  hash_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  hash_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  hash_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  hash_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  hash_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  hash_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  hash_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  hash_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  hash_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  hash_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  hash_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  hash_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  hash_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  hash_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  hash_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  hash_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  hash_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  hash_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  hash_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  hash_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  hash_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  hash_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  hash_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  hash_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  hash_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  hash_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  hash_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  hash_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  hash_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  hash_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  hash_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  hash_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  hash_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  hash_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  username_EQUAL?: InputMaybe<Scalars["ID"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  refreshToken_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  refreshToken_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  refreshToken_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  refreshToken_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  refreshToken_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  refreshToken_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  refreshToken_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  refreshToken_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  refreshToken_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  refreshToken_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  refreshToken_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  refreshToken_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  refreshToken_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  refreshToken_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  refreshToken_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  refreshToken_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  refreshToken_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  refreshToken_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  refreshToken_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  refreshToken_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  refreshToken_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  refreshToken_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  refreshToken_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  refreshToken_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  refreshToken_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  refreshToken_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  refreshToken_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  refreshToken_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  refreshToken_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  refreshToken_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  refreshToken_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  refreshToken_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  refreshToken_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  refreshToken_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  refreshToken_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  createdAt_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MIN_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MAX_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  createdAt_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MIN_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MAX_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  createdAt_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MIN_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MAX_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  createdAt_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MIN_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MAX_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  createdAt_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MIN_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MAX_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  updatedAt_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MIN_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MAX_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  updatedAt_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MIN_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MAX_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  updatedAt_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MIN_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MAX_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  updatedAt_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MIN_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MAX_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  updatedAt_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MIN_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MAX_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
};

export type PostCommentLikesUpdateConnectionInput = {
  node?: InputMaybe<UserUpdateInput>;
};

export type PostCommentLikesUpdateFieldInput = {
  where?: InputMaybe<CommentLikesConnectionWhere>;
  connectOrCreate?: InputMaybe<
    Array<PostCommentLikesConnectOrCreateFieldInput>
  >;
  connect?: InputMaybe<Array<PostCommentLikesConnectFieldInput>>;
  disconnect?: InputMaybe<Array<CommentLikesDisconnectFieldInput>>;
  create?: InputMaybe<Array<PostCommentLikesCreateFieldInput>>;
  update?: InputMaybe<PostCommentLikesUpdateConnectionInput>;
  delete?: InputMaybe<Array<CommentLikesDeleteFieldInput>>;
};

export type PostCommentOptions = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  /** Specify one or more PostCommentSort objects to sort PostComments by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<PostCommentSort>>;
};

export type PostCommentRelationInput = {
  likes?: InputMaybe<Array<PostCommentLikesCreateFieldInput>>;
  author?: InputMaybe<PostCommentAuthorCreateFieldInput>;
  commentOfPost?: InputMaybe<PostCommentCommentOfPostCreateFieldInput>;
  replies?: InputMaybe<Array<PostCommentRepliesCreateFieldInput>>;
};

export type PostCommentRepliesAggregateInput = {
  count?: InputMaybe<Scalars["Int"]["input"]>;
  count_LT?: InputMaybe<Scalars["Int"]["input"]>;
  count_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  count_GT?: InputMaybe<Scalars["Int"]["input"]>;
  count_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  AND?: InputMaybe<Array<PostCommentRepliesAggregateInput>>;
  OR?: InputMaybe<Array<PostCommentRepliesAggregateInput>>;
  NOT?: InputMaybe<PostCommentRepliesAggregateInput>;
  node?: InputMaybe<PostCommentRepliesNodeAggregationWhereInput>;
};

export type PostCommentRepliesConnectFieldInput = {
  where?: InputMaybe<CommentConnectWhere>;
  connect?: InputMaybe<CommentConnectInput>;
};

export type PostCommentRepliesCreateFieldInput = {
  node: CommentCreateInput;
};

export type PostCommentRepliesDeleteFieldInput = {
  where?: InputMaybe<CommentRepliesConnectionWhere>;
  delete?: InputMaybe<CommentDeleteInput>;
};

export type PostCommentRepliesDisconnectFieldInput = {
  where?: InputMaybe<CommentRepliesConnectionWhere>;
  disconnect?: InputMaybe<CommentDisconnectInput>;
};

export type PostCommentRepliesFieldInput = {
  connect?: InputMaybe<Array<PostCommentRepliesConnectFieldInput>>;
  create?: InputMaybe<Array<PostCommentRepliesCreateFieldInput>>;
};

export type PostCommentRepliesNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<PostCommentRepliesNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<PostCommentRepliesNodeAggregationWhereInput>>;
  NOT?: InputMaybe<PostCommentRepliesNodeAggregationWhereInput>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  id_EQUAL?: InputMaybe<Scalars["ID"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  text_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  text_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  text_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  text_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  text_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  text_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  text_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  text_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  text_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  text_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  text_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  text_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  text_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  text_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  text_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  text_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  text_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  text_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  text_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  text_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  text_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  text_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  text_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  text_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  text_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  text_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  text_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  text_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  text_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  text_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  text_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  text_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  text_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  text_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  text_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
};

export type PostCommentRepliesUpdateConnectionInput = {
  node?: InputMaybe<CommentUpdateInput>;
};

export type PostCommentRepliesUpdateFieldInput = {
  where?: InputMaybe<CommentRepliesConnectionWhere>;
  connect?: InputMaybe<Array<PostCommentRepliesConnectFieldInput>>;
  disconnect?: InputMaybe<Array<PostCommentRepliesDisconnectFieldInput>>;
  create?: InputMaybe<Array<PostCommentRepliesCreateFieldInput>>;
  update?: InputMaybe<PostCommentRepliesUpdateConnectionInput>;
  delete?: InputMaybe<Array<PostCommentRepliesDeleteFieldInput>>;
};

export type PostCommentsAggregateInput = {
  count?: InputMaybe<Scalars["Int"]["input"]>;
  count_LT?: InputMaybe<Scalars["Int"]["input"]>;
  count_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  count_GT?: InputMaybe<Scalars["Int"]["input"]>;
  count_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  AND?: InputMaybe<Array<PostCommentsAggregateInput>>;
  OR?: InputMaybe<Array<PostCommentsAggregateInput>>;
  NOT?: InputMaybe<PostCommentsAggregateInput>;
  node?: InputMaybe<PostCommentsNodeAggregationWhereInput>;
};

export type PostCommentsConnectFieldInput = {
  where?: InputMaybe<CommentConnectWhere>;
  connect?: InputMaybe<CommentConnectInput>;
};

export type PostCommentsConnectionSort = {
  node?: InputMaybe<CommentSort>;
};

export type PostCommentsConnectionWhere = {
  AND?: InputMaybe<Array<PostCommentsConnectionWhere>>;
  OR?: InputMaybe<Array<PostCommentsConnectionWhere>>;
  NOT?: InputMaybe<PostCommentsConnectionWhere>;
  node?: InputMaybe<CommentWhere>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  node_NOT?: InputMaybe<CommentWhere>;
};

export type PostCommentsCreateFieldInput = {
  node: CommentCreateInput;
};

export type PostCommentsDeleteFieldInput = {
  where?: InputMaybe<PostCommentsConnectionWhere>;
  delete?: InputMaybe<CommentDeleteInput>;
};

export type PostCommentsDisconnectFieldInput = {
  where?: InputMaybe<PostCommentsConnectionWhere>;
  disconnect?: InputMaybe<CommentDisconnectInput>;
};

export type PostCommentsFieldInput = {
  connect?: InputMaybe<Array<PostCommentsConnectFieldInput>>;
  create?: InputMaybe<Array<PostCommentsCreateFieldInput>>;
};

export type PostCommentsNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<PostCommentsNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<PostCommentsNodeAggregationWhereInput>>;
  NOT?: InputMaybe<PostCommentsNodeAggregationWhereInput>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  id_EQUAL?: InputMaybe<Scalars["ID"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  text_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  text_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  text_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  text_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  text_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  text_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  text_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  text_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  text_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  text_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  text_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  text_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  text_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  text_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  text_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  text_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  text_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  text_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  text_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  text_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  text_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  text_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  text_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  text_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  text_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  text_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  text_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  text_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  text_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  text_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  text_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  text_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  text_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  text_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  text_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
};

/** Fields to sort PostComments by. The order in which sorts are applied is not guaranteed when specifying many fields in one PostCommentSort object. */
export type PostCommentSort = {
  id?: InputMaybe<SortDirection>;
  text?: InputMaybe<SortDirection>;
  createdAt?: InputMaybe<SortDirection>;
  updatedAt?: InputMaybe<SortDirection>;
};

export type PostCommentsUpdateConnectionInput = {
  node?: InputMaybe<CommentUpdateInput>;
};

export type PostCommentsUpdateFieldInput = {
  where?: InputMaybe<PostCommentsConnectionWhere>;
  connect?: InputMaybe<Array<PostCommentsConnectFieldInput>>;
  disconnect?: InputMaybe<Array<PostCommentsDisconnectFieldInput>>;
  create?: InputMaybe<Array<PostCommentsCreateFieldInput>>;
  update?: InputMaybe<PostCommentsUpdateConnectionInput>;
  delete?: InputMaybe<Array<PostCommentsDeleteFieldInput>>;
};

export type PostCommentUpdateInput = {
  text?: InputMaybe<Scalars["String"]["input"]>;
  createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  likes?: InputMaybe<Array<PostCommentLikesUpdateFieldInput>>;
  author?: InputMaybe<PostCommentAuthorUpdateFieldInput>;
  commentOfPost?: InputMaybe<PostCommentCommentOfPostUpdateFieldInput>;
  replies?: InputMaybe<Array<PostCommentRepliesUpdateFieldInput>>;
};

export type PostCommentWhere = {
  id?: InputMaybe<Scalars["ID"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT?: InputMaybe<Scalars["ID"]["input"]>;
  id_IN?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT_IN?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  id_CONTAINS?: InputMaybe<Scalars["ID"]["input"]>;
  id_STARTS_WITH?: InputMaybe<Scalars["ID"]["input"]>;
  id_ENDS_WITH?: InputMaybe<Scalars["ID"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT_CONTAINS?: InputMaybe<Scalars["ID"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT_STARTS_WITH?: InputMaybe<Scalars["ID"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT_ENDS_WITH?: InputMaybe<Scalars["ID"]["input"]>;
  text?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  text_NOT?: InputMaybe<Scalars["String"]["input"]>;
  text_IN?: InputMaybe<Array<Scalars["String"]["input"]>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  text_NOT_IN?: InputMaybe<Array<Scalars["String"]["input"]>>;
  text_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  text_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  text_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  text_NOT_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  text_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  text_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  createdAt_NOT?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_IN?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  createdAt_NOT_IN?: InputMaybe<
    Array<InputMaybe<Scalars["DateTime"]["input"]>>
  >;
  createdAt_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  updatedAt_NOT?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_IN?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  updatedAt_NOT_IN?: InputMaybe<
    Array<InputMaybe<Scalars["DateTime"]["input"]>>
  >;
  updatedAt_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  OR?: InputMaybe<Array<PostCommentWhere>>;
  AND?: InputMaybe<Array<PostCommentWhere>>;
  NOT?: InputMaybe<PostCommentWhere>;
  /** @deprecated Use `likes_SOME` instead. */
  likes?: InputMaybe<UserWhere>;
  /** @deprecated Use `likes_NONE` instead. */
  likes_NOT?: InputMaybe<UserWhere>;
  /** Return PostComments where all of the related Users match this filter */
  likes_ALL?: InputMaybe<UserWhere>;
  /** Return PostComments where none of the related Users match this filter */
  likes_NONE?: InputMaybe<UserWhere>;
  /** Return PostComments where one of the related Users match this filter */
  likes_SINGLE?: InputMaybe<UserWhere>;
  /** Return PostComments where some of the related Users match this filter */
  likes_SOME?: InputMaybe<UserWhere>;
  /** @deprecated Use `likesConnection_SOME` instead. */
  likesConnection?: InputMaybe<CommentLikesConnectionWhere>;
  /** @deprecated Use `likesConnection_NONE` instead. */
  likesConnection_NOT?: InputMaybe<CommentLikesConnectionWhere>;
  /** Return PostComments where all of the related CommentLikesConnections match this filter */
  likesConnection_ALL?: InputMaybe<CommentLikesConnectionWhere>;
  /** Return PostComments where none of the related CommentLikesConnections match this filter */
  likesConnection_NONE?: InputMaybe<CommentLikesConnectionWhere>;
  /** Return PostComments where one of the related CommentLikesConnections match this filter */
  likesConnection_SINGLE?: InputMaybe<CommentLikesConnectionWhere>;
  /** Return PostComments where some of the related CommentLikesConnections match this filter */
  likesConnection_SOME?: InputMaybe<CommentLikesConnectionWhere>;
  likesAggregate?: InputMaybe<PostCommentLikesAggregateInput>;
  author?: InputMaybe<UserWhere>;
  author_NOT?: InputMaybe<UserWhere>;
  authorConnection?: InputMaybe<CommentAuthorConnectionWhere>;
  authorConnection_NOT?: InputMaybe<CommentAuthorConnectionWhere>;
  authorAggregate?: InputMaybe<PostCommentAuthorAggregateInput>;
  commentOfPost?: InputMaybe<PostWhere>;
  commentOfPost_NOT?: InputMaybe<PostWhere>;
  commentOfPostConnection?: InputMaybe<PostCommentCommentOfPostConnectionWhere>;
  commentOfPostConnection_NOT?: InputMaybe<PostCommentCommentOfPostConnectionWhere>;
  commentOfPostAggregate?: InputMaybe<PostCommentCommentOfPostAggregateInput>;
  /** @deprecated Use `replies_SOME` instead. */
  replies?: InputMaybe<CommentWhere>;
  /** @deprecated Use `replies_NONE` instead. */
  replies_NOT?: InputMaybe<CommentWhere>;
  /** Return PostComments where all of the related Comments match this filter */
  replies_ALL?: InputMaybe<CommentWhere>;
  /** Return PostComments where none of the related Comments match this filter */
  replies_NONE?: InputMaybe<CommentWhere>;
  /** Return PostComments where one of the related Comments match this filter */
  replies_SINGLE?: InputMaybe<CommentWhere>;
  /** Return PostComments where some of the related Comments match this filter */
  replies_SOME?: InputMaybe<CommentWhere>;
  /** @deprecated Use `repliesConnection_SOME` instead. */
  repliesConnection?: InputMaybe<CommentRepliesConnectionWhere>;
  /** @deprecated Use `repliesConnection_NONE` instead. */
  repliesConnection_NOT?: InputMaybe<CommentRepliesConnectionWhere>;
  /** Return PostComments where all of the related CommentRepliesConnections match this filter */
  repliesConnection_ALL?: InputMaybe<CommentRepliesConnectionWhere>;
  /** Return PostComments where none of the related CommentRepliesConnections match this filter */
  repliesConnection_NONE?: InputMaybe<CommentRepliesConnectionWhere>;
  /** Return PostComments where one of the related CommentRepliesConnections match this filter */
  repliesConnection_SINGLE?: InputMaybe<CommentRepliesConnectionWhere>;
  /** Return PostComments where some of the related CommentRepliesConnections match this filter */
  repliesConnection_SOME?: InputMaybe<CommentRepliesConnectionWhere>;
  repliesAggregate?: InputMaybe<PostCommentRepliesAggregateInput>;
};

export type PostConnectInput = {
  likes?: InputMaybe<Array<PostLikesConnectFieldInput>>;
  creatorOfPost?: InputMaybe<PostCreatorOfPostConnectFieldInput>;
  comments?: InputMaybe<Array<PostCommentsConnectFieldInput>>;
};

export type PostConnectOrCreateInput = {
  likes?: InputMaybe<Array<PostLikesConnectOrCreateFieldInput>>;
  creatorOfPost?: InputMaybe<PostCreatorOfPostConnectOrCreateFieldInput>;
};

export type PostConnectWhere = {
  node: PostWhere;
};

export type PostCreateInput = {
  url: Scalars["String"]["input"];
  description?: InputMaybe<Scalars["String"]["input"]>;
  visibility?: InputMaybe<Scalars["String"]["input"]>;
  updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  likes?: InputMaybe<PostLikesFieldInput>;
  creatorOfPost?: InputMaybe<PostCreatorOfPostFieldInput>;
  comments?: InputMaybe<PostCommentsFieldInput>;
};

export type PostCreatorOfPostAggregateInput = {
  count?: InputMaybe<Scalars["Int"]["input"]>;
  count_LT?: InputMaybe<Scalars["Int"]["input"]>;
  count_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  count_GT?: InputMaybe<Scalars["Int"]["input"]>;
  count_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  AND?: InputMaybe<Array<PostCreatorOfPostAggregateInput>>;
  OR?: InputMaybe<Array<PostCreatorOfPostAggregateInput>>;
  NOT?: InputMaybe<PostCreatorOfPostAggregateInput>;
  node?: InputMaybe<PostCreatorOfPostNodeAggregationWhereInput>;
};

export type PostCreatorOfPostConnectFieldInput = {
  where?: InputMaybe<UserConnectWhere>;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars["Boolean"]["input"];
  connect?: InputMaybe<UserConnectInput>;
};

export type PostCreatorOfPostConnectionSort = {
  node?: InputMaybe<UserSort>;
};

export type PostCreatorOfPostConnectionWhere = {
  AND?: InputMaybe<Array<PostCreatorOfPostConnectionWhere>>;
  OR?: InputMaybe<Array<PostCreatorOfPostConnectionWhere>>;
  NOT?: InputMaybe<PostCreatorOfPostConnectionWhere>;
  node?: InputMaybe<UserWhere>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  node_NOT?: InputMaybe<UserWhere>;
};

export type PostCreatorOfPostConnectOrCreateFieldInput = {
  where: UserConnectOrCreateWhere;
  onCreate: PostCreatorOfPostConnectOrCreateFieldInputOnCreate;
};

export type PostCreatorOfPostConnectOrCreateFieldInputOnCreate = {
  node: UserOnCreateInput;
};

export type PostCreatorOfPostCreateFieldInput = {
  node: UserCreateInput;
};

export type PostCreatorOfPostDeleteFieldInput = {
  where?: InputMaybe<PostCreatorOfPostConnectionWhere>;
  delete?: InputMaybe<UserDeleteInput>;
};

export type PostCreatorOfPostDisconnectFieldInput = {
  where?: InputMaybe<PostCreatorOfPostConnectionWhere>;
  disconnect?: InputMaybe<UserDisconnectInput>;
};

export type PostCreatorOfPostFieldInput = {
  connectOrCreate?: InputMaybe<PostCreatorOfPostConnectOrCreateFieldInput>;
  connect?: InputMaybe<PostCreatorOfPostConnectFieldInput>;
  create?: InputMaybe<PostCreatorOfPostCreateFieldInput>;
};

export type PostCreatorOfPostNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<PostCreatorOfPostNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<PostCreatorOfPostNodeAggregationWhereInput>>;
  NOT?: InputMaybe<PostCreatorOfPostNodeAggregationWhereInput>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  id_EQUAL?: InputMaybe<Scalars["ID"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  name_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  name_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  name_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  name_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  name_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  name_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  name_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  name_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  name_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  name_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  email_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  email_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  email_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  email_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  email_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  email_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  email_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  email_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  email_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  email_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  email_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  email_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  email_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  email_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  email_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  email_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  email_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  email_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  email_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  email_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  email_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  email_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  email_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  email_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  email_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  email_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  email_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  email_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  email_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  email_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  email_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  email_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  email_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  email_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  email_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  hash_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  hash_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  hash_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  hash_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  hash_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  hash_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  hash_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  hash_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  hash_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  hash_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  hash_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  hash_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  hash_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  hash_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  hash_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  hash_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  hash_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  hash_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  hash_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  hash_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  hash_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  hash_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  hash_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  hash_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  hash_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  hash_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  hash_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  hash_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  hash_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  hash_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  hash_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  hash_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  hash_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  hash_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  hash_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  username_EQUAL?: InputMaybe<Scalars["ID"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  refreshToken_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  refreshToken_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  refreshToken_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  refreshToken_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  refreshToken_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  refreshToken_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  refreshToken_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  refreshToken_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  refreshToken_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  refreshToken_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  refreshToken_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  refreshToken_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  refreshToken_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  refreshToken_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  refreshToken_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  refreshToken_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  refreshToken_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  refreshToken_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  refreshToken_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  refreshToken_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  refreshToken_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  refreshToken_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  refreshToken_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  refreshToken_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  refreshToken_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  refreshToken_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  refreshToken_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  refreshToken_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  refreshToken_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  refreshToken_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  refreshToken_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  refreshToken_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  refreshToken_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  refreshToken_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  refreshToken_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  createdAt_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MIN_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MAX_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  createdAt_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MIN_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MAX_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  createdAt_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MIN_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MAX_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  createdAt_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MIN_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MAX_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  createdAt_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MIN_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MAX_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  updatedAt_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MIN_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MAX_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  updatedAt_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MIN_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MAX_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  updatedAt_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MIN_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MAX_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  updatedAt_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MIN_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MAX_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  updatedAt_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MIN_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MAX_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
};

export type PostCreatorOfPostUpdateConnectionInput = {
  node?: InputMaybe<UserUpdateInput>;
};

export type PostCreatorOfPostUpdateFieldInput = {
  where?: InputMaybe<PostCreatorOfPostConnectionWhere>;
  connectOrCreate?: InputMaybe<PostCreatorOfPostConnectOrCreateFieldInput>;
  connect?: InputMaybe<PostCreatorOfPostConnectFieldInput>;
  disconnect?: InputMaybe<PostCreatorOfPostDisconnectFieldInput>;
  create?: InputMaybe<PostCreatorOfPostCreateFieldInput>;
  update?: InputMaybe<PostCreatorOfPostUpdateConnectionInput>;
  delete?: InputMaybe<PostCreatorOfPostDeleteFieldInput>;
};

export type PostDeleteInput = {
  likes?: InputMaybe<Array<PostLikesDeleteFieldInput>>;
  creatorOfPost?: InputMaybe<PostCreatorOfPostDeleteFieldInput>;
  comments?: InputMaybe<Array<PostCommentsDeleteFieldInput>>;
};

export type PostDisconnectInput = {
  likes?: InputMaybe<Array<PostLikesDisconnectFieldInput>>;
  creatorOfPost?: InputMaybe<PostCreatorOfPostDisconnectFieldInput>;
  comments?: InputMaybe<Array<PostCommentsDisconnectFieldInput>>;
};

export type PostLikesAggregateInput = {
  count?: InputMaybe<Scalars["Int"]["input"]>;
  count_LT?: InputMaybe<Scalars["Int"]["input"]>;
  count_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  count_GT?: InputMaybe<Scalars["Int"]["input"]>;
  count_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  AND?: InputMaybe<Array<PostLikesAggregateInput>>;
  OR?: InputMaybe<Array<PostLikesAggregateInput>>;
  NOT?: InputMaybe<PostLikesAggregateInput>;
  node?: InputMaybe<PostLikesNodeAggregationWhereInput>;
};

export type PostLikesConnectFieldInput = {
  where?: InputMaybe<UserConnectWhere>;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars["Boolean"]["input"];
  connect?: InputMaybe<Array<UserConnectInput>>;
};

export type PostLikesConnectionSort = {
  node?: InputMaybe<UserSort>;
};

export type PostLikesConnectionWhere = {
  AND?: InputMaybe<Array<PostLikesConnectionWhere>>;
  OR?: InputMaybe<Array<PostLikesConnectionWhere>>;
  NOT?: InputMaybe<PostLikesConnectionWhere>;
  node?: InputMaybe<UserWhere>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  node_NOT?: InputMaybe<UserWhere>;
};

export type PostLikesConnectOrCreateFieldInput = {
  where: UserConnectOrCreateWhere;
  onCreate: PostLikesConnectOrCreateFieldInputOnCreate;
};

export type PostLikesConnectOrCreateFieldInputOnCreate = {
  node: UserOnCreateInput;
};

export type PostLikesCreateFieldInput = {
  node: UserCreateInput;
};

export type PostLikesDeleteFieldInput = {
  where?: InputMaybe<PostLikesConnectionWhere>;
  delete?: InputMaybe<UserDeleteInput>;
};

export type PostLikesDisconnectFieldInput = {
  where?: InputMaybe<PostLikesConnectionWhere>;
  disconnect?: InputMaybe<UserDisconnectInput>;
};

export type PostLikesFieldInput = {
  connectOrCreate?: InputMaybe<Array<PostLikesConnectOrCreateFieldInput>>;
  connect?: InputMaybe<Array<PostLikesConnectFieldInput>>;
  create?: InputMaybe<Array<PostLikesCreateFieldInput>>;
};

export type PostLikesNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<PostLikesNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<PostLikesNodeAggregationWhereInput>>;
  NOT?: InputMaybe<PostLikesNodeAggregationWhereInput>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  id_EQUAL?: InputMaybe<Scalars["ID"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  name_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  name_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  name_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  name_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  name_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  name_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  name_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  name_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  name_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  name_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  email_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  email_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  email_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  email_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  email_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  email_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  email_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  email_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  email_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  email_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  email_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  email_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  email_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  email_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  email_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  email_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  email_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  email_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  email_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  email_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  email_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  email_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  email_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  email_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  email_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  email_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  email_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  email_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  email_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  email_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  email_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  email_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  email_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  email_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  email_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  hash_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  hash_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  hash_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  hash_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  hash_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  hash_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  hash_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  hash_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  hash_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  hash_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  hash_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  hash_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  hash_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  hash_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  hash_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  hash_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  hash_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  hash_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  hash_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  hash_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  hash_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  hash_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  hash_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  hash_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  hash_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  hash_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  hash_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  hash_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  hash_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  hash_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  hash_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  hash_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  hash_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  hash_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  hash_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  username_EQUAL?: InputMaybe<Scalars["ID"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  refreshToken_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  refreshToken_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  refreshToken_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  refreshToken_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  refreshToken_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  refreshToken_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  refreshToken_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  refreshToken_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  refreshToken_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  refreshToken_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  refreshToken_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  refreshToken_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  refreshToken_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  refreshToken_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  refreshToken_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  refreshToken_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  refreshToken_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  refreshToken_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  refreshToken_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  refreshToken_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  refreshToken_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  refreshToken_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  refreshToken_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  refreshToken_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  refreshToken_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  refreshToken_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  refreshToken_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  refreshToken_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  refreshToken_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  refreshToken_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  refreshToken_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  refreshToken_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  refreshToken_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  refreshToken_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  refreshToken_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  createdAt_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MIN_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MAX_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  createdAt_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MIN_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MAX_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  createdAt_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MIN_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MAX_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  createdAt_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MIN_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MAX_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  createdAt_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MIN_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MAX_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  updatedAt_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MIN_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MAX_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  updatedAt_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MIN_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MAX_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  updatedAt_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MIN_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MAX_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  updatedAt_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MIN_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MAX_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  updatedAt_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MIN_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MAX_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
};

export type PostLikesUpdateConnectionInput = {
  node?: InputMaybe<UserUpdateInput>;
};

export type PostLikesUpdateFieldInput = {
  where?: InputMaybe<PostLikesConnectionWhere>;
  connectOrCreate?: InputMaybe<Array<PostLikesConnectOrCreateFieldInput>>;
  connect?: InputMaybe<Array<PostLikesConnectFieldInput>>;
  disconnect?: InputMaybe<Array<PostLikesDisconnectFieldInput>>;
  create?: InputMaybe<Array<PostLikesCreateFieldInput>>;
  update?: InputMaybe<PostLikesUpdateConnectionInput>;
  delete?: InputMaybe<Array<PostLikesDeleteFieldInput>>;
};

export type PostOptions = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  /** Specify one or more PostSort objects to sort Posts by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<PostSort>>;
};

export type PostRelationInput = {
  likes?: InputMaybe<Array<PostLikesCreateFieldInput>>;
  creatorOfPost?: InputMaybe<PostCreatorOfPostCreateFieldInput>;
  comments?: InputMaybe<Array<PostCommentsCreateFieldInput>>;
};

/** Fields to sort Posts by. The order in which sorts are applied is not guaranteed when specifying many fields in one PostSort object. */
export type PostSort = {
  id?: InputMaybe<SortDirection>;
  url?: InputMaybe<SortDirection>;
  description?: InputMaybe<SortDirection>;
  visibility?: InputMaybe<SortDirection>;
  createdAt?: InputMaybe<SortDirection>;
  updatedAt?: InputMaybe<SortDirection>;
};

export type PostUpdateInput = {
  url?: InputMaybe<Scalars["String"]["input"]>;
  description?: InputMaybe<Scalars["String"]["input"]>;
  visibility?: InputMaybe<Scalars["String"]["input"]>;
  createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  likes?: InputMaybe<Array<PostLikesUpdateFieldInput>>;
  creatorOfPost?: InputMaybe<PostCreatorOfPostUpdateFieldInput>;
  comments?: InputMaybe<Array<PostCommentsUpdateFieldInput>>;
};

export type PostWhere = {
  id?: InputMaybe<Scalars["ID"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT?: InputMaybe<Scalars["ID"]["input"]>;
  id_IN?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT_IN?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  id_CONTAINS?: InputMaybe<Scalars["ID"]["input"]>;
  id_STARTS_WITH?: InputMaybe<Scalars["ID"]["input"]>;
  id_ENDS_WITH?: InputMaybe<Scalars["ID"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT_CONTAINS?: InputMaybe<Scalars["ID"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT_STARTS_WITH?: InputMaybe<Scalars["ID"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT_ENDS_WITH?: InputMaybe<Scalars["ID"]["input"]>;
  url?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  url_NOT?: InputMaybe<Scalars["String"]["input"]>;
  url_IN?: InputMaybe<Array<Scalars["String"]["input"]>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  url_NOT_IN?: InputMaybe<Array<Scalars["String"]["input"]>>;
  url_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  url_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  url_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  url_NOT_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  url_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  url_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  description?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  description_NOT?: InputMaybe<Scalars["String"]["input"]>;
  description_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  description_NOT_IN?: InputMaybe<
    Array<InputMaybe<Scalars["String"]["input"]>>
  >;
  description_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  description_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  description_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  description_NOT_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  description_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  description_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  visibility?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  visibility_NOT?: InputMaybe<Scalars["String"]["input"]>;
  visibility_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  visibility_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  visibility_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  visibility_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  visibility_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  visibility_NOT_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  visibility_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  visibility_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  createdAt_NOT?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_IN?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  createdAt_NOT_IN?: InputMaybe<
    Array<InputMaybe<Scalars["DateTime"]["input"]>>
  >;
  createdAt_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  updatedAt_NOT?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_IN?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  updatedAt_NOT_IN?: InputMaybe<
    Array<InputMaybe<Scalars["DateTime"]["input"]>>
  >;
  updatedAt_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  OR?: InputMaybe<Array<PostWhere>>;
  AND?: InputMaybe<Array<PostWhere>>;
  NOT?: InputMaybe<PostWhere>;
  /** @deprecated Use `likes_SOME` instead. */
  likes?: InputMaybe<UserWhere>;
  /** @deprecated Use `likes_NONE` instead. */
  likes_NOT?: InputMaybe<UserWhere>;
  /** Return Posts where all of the related Users match this filter */
  likes_ALL?: InputMaybe<UserWhere>;
  /** Return Posts where none of the related Users match this filter */
  likes_NONE?: InputMaybe<UserWhere>;
  /** Return Posts where one of the related Users match this filter */
  likes_SINGLE?: InputMaybe<UserWhere>;
  /** Return Posts where some of the related Users match this filter */
  likes_SOME?: InputMaybe<UserWhere>;
  /** @deprecated Use `likesConnection_SOME` instead. */
  likesConnection?: InputMaybe<PostLikesConnectionWhere>;
  /** @deprecated Use `likesConnection_NONE` instead. */
  likesConnection_NOT?: InputMaybe<PostLikesConnectionWhere>;
  /** Return Posts where all of the related PostLikesConnections match this filter */
  likesConnection_ALL?: InputMaybe<PostLikesConnectionWhere>;
  /** Return Posts where none of the related PostLikesConnections match this filter */
  likesConnection_NONE?: InputMaybe<PostLikesConnectionWhere>;
  /** Return Posts where one of the related PostLikesConnections match this filter */
  likesConnection_SINGLE?: InputMaybe<PostLikesConnectionWhere>;
  /** Return Posts where some of the related PostLikesConnections match this filter */
  likesConnection_SOME?: InputMaybe<PostLikesConnectionWhere>;
  likesAggregate?: InputMaybe<PostLikesAggregateInput>;
  creatorOfPost?: InputMaybe<UserWhere>;
  creatorOfPost_NOT?: InputMaybe<UserWhere>;
  creatorOfPostConnection?: InputMaybe<PostCreatorOfPostConnectionWhere>;
  creatorOfPostConnection_NOT?: InputMaybe<PostCreatorOfPostConnectionWhere>;
  creatorOfPostAggregate?: InputMaybe<PostCreatorOfPostAggregateInput>;
  /** @deprecated Use `comments_SOME` instead. */
  comments?: InputMaybe<CommentWhere>;
  /** @deprecated Use `comments_NONE` instead. */
  comments_NOT?: InputMaybe<CommentWhere>;
  /** Return Posts where all of the related Comments match this filter */
  comments_ALL?: InputMaybe<CommentWhere>;
  /** Return Posts where none of the related Comments match this filter */
  comments_NONE?: InputMaybe<CommentWhere>;
  /** Return Posts where one of the related Comments match this filter */
  comments_SINGLE?: InputMaybe<CommentWhere>;
  /** Return Posts where some of the related Comments match this filter */
  comments_SOME?: InputMaybe<CommentWhere>;
  /** @deprecated Use `commentsConnection_SOME` instead. */
  commentsConnection?: InputMaybe<PostCommentsConnectionWhere>;
  /** @deprecated Use `commentsConnection_NONE` instead. */
  commentsConnection_NOT?: InputMaybe<PostCommentsConnectionWhere>;
  /** Return Posts where all of the related PostCommentsConnections match this filter */
  commentsConnection_ALL?: InputMaybe<PostCommentsConnectionWhere>;
  /** Return Posts where none of the related PostCommentsConnections match this filter */
  commentsConnection_NONE?: InputMaybe<PostCommentsConnectionWhere>;
  /** Return Posts where one of the related PostCommentsConnections match this filter */
  commentsConnection_SINGLE?: InputMaybe<PostCommentsConnectionWhere>;
  /** Return Posts where some of the related PostCommentsConnections match this filter */
  commentsConnection_SOME?: InputMaybe<PostCommentsConnectionWhere>;
  commentsAggregate?: InputMaybe<PostCommentsAggregateInput>;
};

export type ReplyCommentAuthorAggregateInput = {
  count?: InputMaybe<Scalars["Int"]["input"]>;
  count_LT?: InputMaybe<Scalars["Int"]["input"]>;
  count_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  count_GT?: InputMaybe<Scalars["Int"]["input"]>;
  count_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  AND?: InputMaybe<Array<ReplyCommentAuthorAggregateInput>>;
  OR?: InputMaybe<Array<ReplyCommentAuthorAggregateInput>>;
  NOT?: InputMaybe<ReplyCommentAuthorAggregateInput>;
  node?: InputMaybe<ReplyCommentAuthorNodeAggregationWhereInput>;
};

export type ReplyCommentAuthorConnectFieldInput = {
  where?: InputMaybe<UserConnectWhere>;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars["Boolean"]["input"];
  connect?: InputMaybe<UserConnectInput>;
};

export type ReplyCommentAuthorConnectOrCreateFieldInput = {
  where: UserConnectOrCreateWhere;
  onCreate: ReplyCommentAuthorConnectOrCreateFieldInputOnCreate;
};

export type ReplyCommentAuthorConnectOrCreateFieldInputOnCreate = {
  node: UserOnCreateInput;
};

export type ReplyCommentAuthorCreateFieldInput = {
  node: UserCreateInput;
};

export type ReplyCommentAuthorFieldInput = {
  connectOrCreate?: InputMaybe<ReplyCommentAuthorConnectOrCreateFieldInput>;
  connect?: InputMaybe<ReplyCommentAuthorConnectFieldInput>;
  create?: InputMaybe<ReplyCommentAuthorCreateFieldInput>;
};

export type ReplyCommentAuthorNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<ReplyCommentAuthorNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<ReplyCommentAuthorNodeAggregationWhereInput>>;
  NOT?: InputMaybe<ReplyCommentAuthorNodeAggregationWhereInput>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  id_EQUAL?: InputMaybe<Scalars["ID"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  name_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  name_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  name_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  name_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  name_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  name_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  name_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  name_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  name_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  name_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  email_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  email_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  email_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  email_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  email_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  email_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  email_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  email_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  email_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  email_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  email_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  email_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  email_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  email_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  email_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  email_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  email_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  email_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  email_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  email_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  email_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  email_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  email_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  email_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  email_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  email_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  email_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  email_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  email_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  email_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  email_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  email_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  email_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  email_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  email_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  hash_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  hash_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  hash_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  hash_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  hash_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  hash_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  hash_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  hash_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  hash_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  hash_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  hash_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  hash_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  hash_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  hash_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  hash_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  hash_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  hash_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  hash_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  hash_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  hash_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  hash_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  hash_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  hash_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  hash_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  hash_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  hash_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  hash_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  hash_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  hash_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  hash_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  hash_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  hash_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  hash_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  hash_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  hash_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  username_EQUAL?: InputMaybe<Scalars["ID"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  refreshToken_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  refreshToken_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  refreshToken_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  refreshToken_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  refreshToken_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  refreshToken_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  refreshToken_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  refreshToken_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  refreshToken_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  refreshToken_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  refreshToken_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  refreshToken_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  refreshToken_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  refreshToken_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  refreshToken_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  refreshToken_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  refreshToken_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  refreshToken_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  refreshToken_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  refreshToken_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  refreshToken_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  refreshToken_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  refreshToken_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  refreshToken_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  refreshToken_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  refreshToken_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  refreshToken_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  refreshToken_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  refreshToken_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  refreshToken_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  refreshToken_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  refreshToken_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  refreshToken_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  refreshToken_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  refreshToken_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  createdAt_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MIN_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MAX_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  createdAt_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MIN_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MAX_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  createdAt_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MIN_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MAX_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  createdAt_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MIN_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MAX_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  createdAt_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MIN_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MAX_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  updatedAt_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MIN_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MAX_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  updatedAt_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MIN_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MAX_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  updatedAt_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MIN_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MAX_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  updatedAt_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MIN_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MAX_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  updatedAt_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MIN_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MAX_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
};

export type ReplyCommentAuthorUpdateConnectionInput = {
  node?: InputMaybe<UserUpdateInput>;
};

export type ReplyCommentAuthorUpdateFieldInput = {
  where?: InputMaybe<CommentAuthorConnectionWhere>;
  connectOrCreate?: InputMaybe<ReplyCommentAuthorConnectOrCreateFieldInput>;
  connect?: InputMaybe<ReplyCommentAuthorConnectFieldInput>;
  disconnect?: InputMaybe<CommentAuthorDisconnectFieldInput>;
  create?: InputMaybe<ReplyCommentAuthorCreateFieldInput>;
  update?: InputMaybe<ReplyCommentAuthorUpdateConnectionInput>;
  delete?: InputMaybe<CommentAuthorDeleteFieldInput>;
};

export type ReplyCommentConnectInput = {
  likes?: InputMaybe<Array<ReplyCommentLikesConnectFieldInput>>;
  author?: InputMaybe<ReplyCommentAuthorConnectFieldInput>;
  replyOfComment?: InputMaybe<ReplyCommentReplyOfCommentConnectFieldInput>;
  replies?: InputMaybe<Array<ReplyCommentRepliesConnectFieldInput>>;
};

export type ReplyCommentConnectOrCreateInput = {
  likes?: InputMaybe<Array<ReplyCommentLikesConnectOrCreateFieldInput>>;
  author?: InputMaybe<ReplyCommentAuthorConnectOrCreateFieldInput>;
};

export type ReplyCommentCreateInput = {
  text: Scalars["String"]["input"];
  updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  likes?: InputMaybe<ReplyCommentLikesFieldInput>;
  author?: InputMaybe<ReplyCommentAuthorFieldInput>;
  replyOfComment?: InputMaybe<ReplyCommentReplyOfCommentFieldInput>;
  replies?: InputMaybe<ReplyCommentRepliesFieldInput>;
};

export type ReplyCommentDeleteInput = {
  likes?: InputMaybe<Array<CommentLikesDeleteFieldInput>>;
  author?: InputMaybe<CommentAuthorDeleteFieldInput>;
  replyOfComment?: InputMaybe<ReplyCommentReplyOfCommentDeleteFieldInput>;
  replies?: InputMaybe<Array<ReplyCommentRepliesDeleteFieldInput>>;
};

export type ReplyCommentDisconnectInput = {
  likes?: InputMaybe<Array<CommentLikesDisconnectFieldInput>>;
  author?: InputMaybe<CommentAuthorDisconnectFieldInput>;
  replyOfComment?: InputMaybe<ReplyCommentReplyOfCommentDisconnectFieldInput>;
  replies?: InputMaybe<Array<ReplyCommentRepliesDisconnectFieldInput>>;
};

export type ReplyCommentLikesAggregateInput = {
  count?: InputMaybe<Scalars["Int"]["input"]>;
  count_LT?: InputMaybe<Scalars["Int"]["input"]>;
  count_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  count_GT?: InputMaybe<Scalars["Int"]["input"]>;
  count_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  AND?: InputMaybe<Array<ReplyCommentLikesAggregateInput>>;
  OR?: InputMaybe<Array<ReplyCommentLikesAggregateInput>>;
  NOT?: InputMaybe<ReplyCommentLikesAggregateInput>;
  node?: InputMaybe<ReplyCommentLikesNodeAggregationWhereInput>;
};

export type ReplyCommentLikesConnectFieldInput = {
  where?: InputMaybe<UserConnectWhere>;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars["Boolean"]["input"];
  connect?: InputMaybe<Array<UserConnectInput>>;
};

export type ReplyCommentLikesConnectOrCreateFieldInput = {
  where: UserConnectOrCreateWhere;
  onCreate: ReplyCommentLikesConnectOrCreateFieldInputOnCreate;
};

export type ReplyCommentLikesConnectOrCreateFieldInputOnCreate = {
  node: UserOnCreateInput;
};

export type ReplyCommentLikesCreateFieldInput = {
  node: UserCreateInput;
};

export type ReplyCommentLikesFieldInput = {
  connectOrCreate?: InputMaybe<
    Array<ReplyCommentLikesConnectOrCreateFieldInput>
  >;
  connect?: InputMaybe<Array<ReplyCommentLikesConnectFieldInput>>;
  create?: InputMaybe<Array<ReplyCommentLikesCreateFieldInput>>;
};

export type ReplyCommentLikesNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<ReplyCommentLikesNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<ReplyCommentLikesNodeAggregationWhereInput>>;
  NOT?: InputMaybe<ReplyCommentLikesNodeAggregationWhereInput>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  id_EQUAL?: InputMaybe<Scalars["ID"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  name_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  name_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  name_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  name_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  name_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  name_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  name_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  name_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  name_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  name_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  email_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  email_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  email_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  email_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  email_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  email_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  email_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  email_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  email_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  email_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  email_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  email_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  email_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  email_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  email_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  email_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  email_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  email_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  email_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  email_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  email_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  email_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  email_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  email_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  email_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  email_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  email_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  email_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  email_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  email_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  email_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  email_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  email_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  email_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  email_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  hash_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  hash_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  hash_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  hash_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  hash_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  hash_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  hash_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  hash_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  hash_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  hash_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  hash_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  hash_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  hash_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  hash_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  hash_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  hash_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  hash_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  hash_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  hash_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  hash_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  hash_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  hash_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  hash_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  hash_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  hash_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  hash_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  hash_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  hash_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  hash_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  hash_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  hash_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  hash_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  hash_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  hash_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  hash_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  username_EQUAL?: InputMaybe<Scalars["ID"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  refreshToken_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  refreshToken_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  refreshToken_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  refreshToken_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  refreshToken_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  refreshToken_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  refreshToken_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  refreshToken_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  refreshToken_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  refreshToken_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  refreshToken_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  refreshToken_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  refreshToken_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  refreshToken_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  refreshToken_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  refreshToken_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  refreshToken_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  refreshToken_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  refreshToken_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  refreshToken_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  refreshToken_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  refreshToken_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  refreshToken_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  refreshToken_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  refreshToken_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  refreshToken_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  refreshToken_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  refreshToken_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  refreshToken_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  refreshToken_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  refreshToken_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  refreshToken_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  refreshToken_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  refreshToken_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  refreshToken_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  createdAt_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MIN_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MAX_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  createdAt_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MIN_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MAX_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  createdAt_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MIN_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MAX_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  createdAt_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MIN_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MAX_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  createdAt_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MIN_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MAX_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  updatedAt_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MIN_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MAX_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  updatedAt_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MIN_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MAX_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  updatedAt_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MIN_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MAX_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  updatedAt_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MIN_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MAX_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  updatedAt_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MIN_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MAX_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
};

export type ReplyCommentLikesUpdateConnectionInput = {
  node?: InputMaybe<UserUpdateInput>;
};

export type ReplyCommentLikesUpdateFieldInput = {
  where?: InputMaybe<CommentLikesConnectionWhere>;
  connectOrCreate?: InputMaybe<
    Array<ReplyCommentLikesConnectOrCreateFieldInput>
  >;
  connect?: InputMaybe<Array<ReplyCommentLikesConnectFieldInput>>;
  disconnect?: InputMaybe<Array<CommentLikesDisconnectFieldInput>>;
  create?: InputMaybe<Array<ReplyCommentLikesCreateFieldInput>>;
  update?: InputMaybe<ReplyCommentLikesUpdateConnectionInput>;
  delete?: InputMaybe<Array<CommentLikesDeleteFieldInput>>;
};

export type ReplyCommentOptions = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  /** Specify one or more ReplyCommentSort objects to sort ReplyComments by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<ReplyCommentSort>>;
};

export type ReplyCommentRelationInput = {
  likes?: InputMaybe<Array<ReplyCommentLikesCreateFieldInput>>;
  author?: InputMaybe<ReplyCommentAuthorCreateFieldInput>;
  replyOfComment?: InputMaybe<ReplyCommentReplyOfCommentCreateFieldInput>;
  replies?: InputMaybe<Array<ReplyCommentRepliesCreateFieldInput>>;
};

export type ReplyCommentRepliesAggregateInput = {
  count?: InputMaybe<Scalars["Int"]["input"]>;
  count_LT?: InputMaybe<Scalars["Int"]["input"]>;
  count_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  count_GT?: InputMaybe<Scalars["Int"]["input"]>;
  count_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  AND?: InputMaybe<Array<ReplyCommentRepliesAggregateInput>>;
  OR?: InputMaybe<Array<ReplyCommentRepliesAggregateInput>>;
  NOT?: InputMaybe<ReplyCommentRepliesAggregateInput>;
  node?: InputMaybe<ReplyCommentRepliesNodeAggregationWhereInput>;
};

export type ReplyCommentRepliesConnectFieldInput = {
  where?: InputMaybe<CommentConnectWhere>;
  connect?: InputMaybe<CommentConnectInput>;
};

export type ReplyCommentRepliesCreateFieldInput = {
  node: CommentCreateInput;
};

export type ReplyCommentRepliesDeleteFieldInput = {
  where?: InputMaybe<CommentRepliesConnectionWhere>;
  delete?: InputMaybe<CommentDeleteInput>;
};

export type ReplyCommentRepliesDisconnectFieldInput = {
  where?: InputMaybe<CommentRepliesConnectionWhere>;
  disconnect?: InputMaybe<CommentDisconnectInput>;
};

export type ReplyCommentRepliesFieldInput = {
  connect?: InputMaybe<Array<ReplyCommentRepliesConnectFieldInput>>;
  create?: InputMaybe<Array<ReplyCommentRepliesCreateFieldInput>>;
};

export type ReplyCommentRepliesNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<ReplyCommentRepliesNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<ReplyCommentRepliesNodeAggregationWhereInput>>;
  NOT?: InputMaybe<ReplyCommentRepliesNodeAggregationWhereInput>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  id_EQUAL?: InputMaybe<Scalars["ID"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  text_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  text_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  text_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  text_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  text_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  text_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  text_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  text_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  text_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  text_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  text_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  text_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  text_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  text_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  text_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  text_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  text_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  text_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  text_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  text_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  text_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  text_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  text_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  text_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  text_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  text_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  text_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  text_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  text_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  text_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  text_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  text_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  text_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  text_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  text_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
};

export type ReplyCommentRepliesUpdateConnectionInput = {
  node?: InputMaybe<CommentUpdateInput>;
};

export type ReplyCommentRepliesUpdateFieldInput = {
  where?: InputMaybe<CommentRepliesConnectionWhere>;
  connect?: InputMaybe<Array<ReplyCommentRepliesConnectFieldInput>>;
  disconnect?: InputMaybe<Array<ReplyCommentRepliesDisconnectFieldInput>>;
  create?: InputMaybe<Array<ReplyCommentRepliesCreateFieldInput>>;
  update?: InputMaybe<ReplyCommentRepliesUpdateConnectionInput>;
  delete?: InputMaybe<Array<ReplyCommentRepliesDeleteFieldInput>>;
};

export type ReplyCommentReplyOfCommentAggregateInput = {
  count?: InputMaybe<Scalars["Int"]["input"]>;
  count_LT?: InputMaybe<Scalars["Int"]["input"]>;
  count_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  count_GT?: InputMaybe<Scalars["Int"]["input"]>;
  count_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  AND?: InputMaybe<Array<ReplyCommentReplyOfCommentAggregateInput>>;
  OR?: InputMaybe<Array<ReplyCommentReplyOfCommentAggregateInput>>;
  NOT?: InputMaybe<ReplyCommentReplyOfCommentAggregateInput>;
  node?: InputMaybe<ReplyCommentReplyOfCommentNodeAggregationWhereInput>;
};

export type ReplyCommentReplyOfCommentConnectFieldInput = {
  where?: InputMaybe<CommentConnectWhere>;
  connect?: InputMaybe<CommentConnectInput>;
};

export type ReplyCommentReplyOfCommentConnectionSort = {
  node?: InputMaybe<CommentSort>;
};

export type ReplyCommentReplyOfCommentConnectionWhere = {
  AND?: InputMaybe<Array<ReplyCommentReplyOfCommentConnectionWhere>>;
  OR?: InputMaybe<Array<ReplyCommentReplyOfCommentConnectionWhere>>;
  NOT?: InputMaybe<ReplyCommentReplyOfCommentConnectionWhere>;
  node?: InputMaybe<CommentWhere>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  node_NOT?: InputMaybe<CommentWhere>;
};

export type ReplyCommentReplyOfCommentCreateFieldInput = {
  node: CommentCreateInput;
};

export type ReplyCommentReplyOfCommentDeleteFieldInput = {
  where?: InputMaybe<ReplyCommentReplyOfCommentConnectionWhere>;
  delete?: InputMaybe<CommentDeleteInput>;
};

export type ReplyCommentReplyOfCommentDisconnectFieldInput = {
  where?: InputMaybe<ReplyCommentReplyOfCommentConnectionWhere>;
  disconnect?: InputMaybe<CommentDisconnectInput>;
};

export type ReplyCommentReplyOfCommentFieldInput = {
  connect?: InputMaybe<ReplyCommentReplyOfCommentConnectFieldInput>;
  create?: InputMaybe<ReplyCommentReplyOfCommentCreateFieldInput>;
};

export type ReplyCommentReplyOfCommentNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<ReplyCommentReplyOfCommentNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<ReplyCommentReplyOfCommentNodeAggregationWhereInput>>;
  NOT?: InputMaybe<ReplyCommentReplyOfCommentNodeAggregationWhereInput>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  id_EQUAL?: InputMaybe<Scalars["ID"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  text_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  text_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  text_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  text_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  text_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  text_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  text_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  text_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  text_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  text_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  text_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  text_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  text_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  text_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  text_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  text_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  text_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  text_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  text_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  text_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  text_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  text_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  text_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  text_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  text_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  text_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  text_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  text_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  text_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  text_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  text_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  text_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  text_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  text_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  text_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
};

export type ReplyCommentReplyOfCommentUpdateConnectionInput = {
  node?: InputMaybe<CommentUpdateInput>;
};

export type ReplyCommentReplyOfCommentUpdateFieldInput = {
  where?: InputMaybe<ReplyCommentReplyOfCommentConnectionWhere>;
  connect?: InputMaybe<ReplyCommentReplyOfCommentConnectFieldInput>;
  disconnect?: InputMaybe<ReplyCommentReplyOfCommentDisconnectFieldInput>;
  create?: InputMaybe<ReplyCommentReplyOfCommentCreateFieldInput>;
  update?: InputMaybe<ReplyCommentReplyOfCommentUpdateConnectionInput>;
  delete?: InputMaybe<ReplyCommentReplyOfCommentDeleteFieldInput>;
};

/** Fields to sort ReplyComments by. The order in which sorts are applied is not guaranteed when specifying many fields in one ReplyCommentSort object. */
export type ReplyCommentSort = {
  id?: InputMaybe<SortDirection>;
  text?: InputMaybe<SortDirection>;
  createdAt?: InputMaybe<SortDirection>;
  updatedAt?: InputMaybe<SortDirection>;
};

export type ReplyCommentUpdateInput = {
  text?: InputMaybe<Scalars["String"]["input"]>;
  createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  likes?: InputMaybe<Array<ReplyCommentLikesUpdateFieldInput>>;
  author?: InputMaybe<ReplyCommentAuthorUpdateFieldInput>;
  replyOfComment?: InputMaybe<ReplyCommentReplyOfCommentUpdateFieldInput>;
  replies?: InputMaybe<Array<ReplyCommentRepliesUpdateFieldInput>>;
};

export type ReplyCommentWhere = {
  id?: InputMaybe<Scalars["ID"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT?: InputMaybe<Scalars["ID"]["input"]>;
  id_IN?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT_IN?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  id_CONTAINS?: InputMaybe<Scalars["ID"]["input"]>;
  id_STARTS_WITH?: InputMaybe<Scalars["ID"]["input"]>;
  id_ENDS_WITH?: InputMaybe<Scalars["ID"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT_CONTAINS?: InputMaybe<Scalars["ID"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT_STARTS_WITH?: InputMaybe<Scalars["ID"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT_ENDS_WITH?: InputMaybe<Scalars["ID"]["input"]>;
  text?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  text_NOT?: InputMaybe<Scalars["String"]["input"]>;
  text_IN?: InputMaybe<Array<Scalars["String"]["input"]>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  text_NOT_IN?: InputMaybe<Array<Scalars["String"]["input"]>>;
  text_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  text_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  text_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  text_NOT_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  text_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  text_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  createdAt_NOT?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_IN?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  createdAt_NOT_IN?: InputMaybe<
    Array<InputMaybe<Scalars["DateTime"]["input"]>>
  >;
  createdAt_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  updatedAt_NOT?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_IN?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  updatedAt_NOT_IN?: InputMaybe<
    Array<InputMaybe<Scalars["DateTime"]["input"]>>
  >;
  updatedAt_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  OR?: InputMaybe<Array<ReplyCommentWhere>>;
  AND?: InputMaybe<Array<ReplyCommentWhere>>;
  NOT?: InputMaybe<ReplyCommentWhere>;
  /** @deprecated Use `likes_SOME` instead. */
  likes?: InputMaybe<UserWhere>;
  /** @deprecated Use `likes_NONE` instead. */
  likes_NOT?: InputMaybe<UserWhere>;
  /** Return ReplyComments where all of the related Users match this filter */
  likes_ALL?: InputMaybe<UserWhere>;
  /** Return ReplyComments where none of the related Users match this filter */
  likes_NONE?: InputMaybe<UserWhere>;
  /** Return ReplyComments where one of the related Users match this filter */
  likes_SINGLE?: InputMaybe<UserWhere>;
  /** Return ReplyComments where some of the related Users match this filter */
  likes_SOME?: InputMaybe<UserWhere>;
  /** @deprecated Use `likesConnection_SOME` instead. */
  likesConnection?: InputMaybe<CommentLikesConnectionWhere>;
  /** @deprecated Use `likesConnection_NONE` instead. */
  likesConnection_NOT?: InputMaybe<CommentLikesConnectionWhere>;
  /** Return ReplyComments where all of the related CommentLikesConnections match this filter */
  likesConnection_ALL?: InputMaybe<CommentLikesConnectionWhere>;
  /** Return ReplyComments where none of the related CommentLikesConnections match this filter */
  likesConnection_NONE?: InputMaybe<CommentLikesConnectionWhere>;
  /** Return ReplyComments where one of the related CommentLikesConnections match this filter */
  likesConnection_SINGLE?: InputMaybe<CommentLikesConnectionWhere>;
  /** Return ReplyComments where some of the related CommentLikesConnections match this filter */
  likesConnection_SOME?: InputMaybe<CommentLikesConnectionWhere>;
  likesAggregate?: InputMaybe<ReplyCommentLikesAggregateInput>;
  author?: InputMaybe<UserWhere>;
  author_NOT?: InputMaybe<UserWhere>;
  authorConnection?: InputMaybe<CommentAuthorConnectionWhere>;
  authorConnection_NOT?: InputMaybe<CommentAuthorConnectionWhere>;
  authorAggregate?: InputMaybe<ReplyCommentAuthorAggregateInput>;
  replyOfComment?: InputMaybe<CommentWhere>;
  replyOfComment_NOT?: InputMaybe<CommentWhere>;
  replyOfCommentConnection?: InputMaybe<ReplyCommentReplyOfCommentConnectionWhere>;
  replyOfCommentConnection_NOT?: InputMaybe<ReplyCommentReplyOfCommentConnectionWhere>;
  replyOfCommentAggregate?: InputMaybe<ReplyCommentReplyOfCommentAggregateInput>;
  /** @deprecated Use `replies_SOME` instead. */
  replies?: InputMaybe<CommentWhere>;
  /** @deprecated Use `replies_NONE` instead. */
  replies_NOT?: InputMaybe<CommentWhere>;
  /** Return ReplyComments where all of the related Comments match this filter */
  replies_ALL?: InputMaybe<CommentWhere>;
  /** Return ReplyComments where none of the related Comments match this filter */
  replies_NONE?: InputMaybe<CommentWhere>;
  /** Return ReplyComments where one of the related Comments match this filter */
  replies_SINGLE?: InputMaybe<CommentWhere>;
  /** Return ReplyComments where some of the related Comments match this filter */
  replies_SOME?: InputMaybe<CommentWhere>;
  /** @deprecated Use `repliesConnection_SOME` instead. */
  repliesConnection?: InputMaybe<CommentRepliesConnectionWhere>;
  /** @deprecated Use `repliesConnection_NONE` instead. */
  repliesConnection_NOT?: InputMaybe<CommentRepliesConnectionWhere>;
  /** Return ReplyComments where all of the related CommentRepliesConnections match this filter */
  repliesConnection_ALL?: InputMaybe<CommentRepliesConnectionWhere>;
  /** Return ReplyComments where none of the related CommentRepliesConnections match this filter */
  repliesConnection_NONE?: InputMaybe<CommentRepliesConnectionWhere>;
  /** Return ReplyComments where one of the related CommentRepliesConnections match this filter */
  repliesConnection_SINGLE?: InputMaybe<CommentRepliesConnectionWhere>;
  /** Return ReplyComments where some of the related CommentRepliesConnections match this filter */
  repliesConnection_SOME?: InputMaybe<CommentRepliesConnectionWhere>;
  repliesAggregate?: InputMaybe<ReplyCommentRepliesAggregateInput>;
};

export type UserAuthorOfCommentsAggregateInput = {
  count?: InputMaybe<Scalars["Int"]["input"]>;
  count_LT?: InputMaybe<Scalars["Int"]["input"]>;
  count_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  count_GT?: InputMaybe<Scalars["Int"]["input"]>;
  count_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  AND?: InputMaybe<Array<UserAuthorOfCommentsAggregateInput>>;
  OR?: InputMaybe<Array<UserAuthorOfCommentsAggregateInput>>;
  NOT?: InputMaybe<UserAuthorOfCommentsAggregateInput>;
  node?: InputMaybe<UserAuthorOfCommentsNodeAggregationWhereInput>;
};

export type UserAuthorOfCommentsConnectFieldInput = {
  where?: InputMaybe<CommentConnectWhere>;
  connect?: InputMaybe<CommentConnectInput>;
};

export type UserAuthorOfCommentsConnectionSort = {
  node?: InputMaybe<CommentSort>;
};

export type UserAuthorOfCommentsConnectionWhere = {
  AND?: InputMaybe<Array<UserAuthorOfCommentsConnectionWhere>>;
  OR?: InputMaybe<Array<UserAuthorOfCommentsConnectionWhere>>;
  NOT?: InputMaybe<UserAuthorOfCommentsConnectionWhere>;
  node?: InputMaybe<CommentWhere>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  node_NOT?: InputMaybe<CommentWhere>;
};

export type UserAuthorOfCommentsCreateFieldInput = {
  node: CommentCreateInput;
};

export type UserAuthorOfCommentsDeleteFieldInput = {
  where?: InputMaybe<UserAuthorOfCommentsConnectionWhere>;
  delete?: InputMaybe<CommentDeleteInput>;
};

export type UserAuthorOfCommentsDisconnectFieldInput = {
  where?: InputMaybe<UserAuthorOfCommentsConnectionWhere>;
  disconnect?: InputMaybe<CommentDisconnectInput>;
};

export type UserAuthorOfCommentsFieldInput = {
  connect?: InputMaybe<Array<UserAuthorOfCommentsConnectFieldInput>>;
  create?: InputMaybe<Array<UserAuthorOfCommentsCreateFieldInput>>;
};

export type UserAuthorOfCommentsNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<UserAuthorOfCommentsNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<UserAuthorOfCommentsNodeAggregationWhereInput>>;
  NOT?: InputMaybe<UserAuthorOfCommentsNodeAggregationWhereInput>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  id_EQUAL?: InputMaybe<Scalars["ID"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  text_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  text_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  text_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  text_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  text_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  text_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  text_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  text_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  text_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  text_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  text_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  text_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  text_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  text_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  text_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  text_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  text_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  text_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  text_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  text_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  text_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  text_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  text_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  text_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  text_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  text_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  text_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  text_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  text_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  text_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  text_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  text_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  text_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  text_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  text_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
};

export type UserAuthorOfCommentsUpdateConnectionInput = {
  node?: InputMaybe<CommentUpdateInput>;
};

export type UserAuthorOfCommentsUpdateFieldInput = {
  where?: InputMaybe<UserAuthorOfCommentsConnectionWhere>;
  connect?: InputMaybe<Array<UserAuthorOfCommentsConnectFieldInput>>;
  disconnect?: InputMaybe<Array<UserAuthorOfCommentsDisconnectFieldInput>>;
  create?: InputMaybe<Array<UserAuthorOfCommentsCreateFieldInput>>;
  update?: InputMaybe<UserAuthorOfCommentsUpdateConnectionInput>;
  delete?: InputMaybe<Array<UserAuthorOfCommentsDeleteFieldInput>>;
};

export type UserConnectInput = {
  posts?: InputMaybe<Array<UserPostsConnectFieldInput>>;
  likedPosts?: InputMaybe<Array<UserLikedPostsConnectFieldInput>>;
  likedComments?: InputMaybe<Array<UserLikedCommentsConnectFieldInput>>;
  authorOfComments?: InputMaybe<Array<UserAuthorOfCommentsConnectFieldInput>>;
};

export type UserConnectOrCreateWhere = {
  node: UserUniqueWhere;
};

export type UserConnectWhere = {
  node: UserWhere;
};

export type UserCreateInput = {
  name: Scalars["String"]["input"];
  email: Scalars["String"]["input"];
  hash: Scalars["String"]["input"];
  username: Scalars["ID"]["input"];
  dob?: InputMaybe<Scalars["Date"]["input"]>;
  refreshToken?: InputMaybe<Scalars["String"]["input"]>;
  blackList?: InputMaybe<Array<Scalars["String"]["input"]>>;
  updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  posts?: InputMaybe<UserPostsFieldInput>;
  likedPosts?: InputMaybe<UserLikedPostsFieldInput>;
  likedComments?: InputMaybe<UserLikedCommentsFieldInput>;
  authorOfComments?: InputMaybe<UserAuthorOfCommentsFieldInput>;
};

export type UserDeleteInput = {
  posts?: InputMaybe<Array<UserPostsDeleteFieldInput>>;
  likedPosts?: InputMaybe<Array<UserLikedPostsDeleteFieldInput>>;
  likedComments?: InputMaybe<Array<UserLikedCommentsDeleteFieldInput>>;
  authorOfComments?: InputMaybe<Array<UserAuthorOfCommentsDeleteFieldInput>>;
};

export type UserDisconnectInput = {
  posts?: InputMaybe<Array<UserPostsDisconnectFieldInput>>;
  likedPosts?: InputMaybe<Array<UserLikedPostsDisconnectFieldInput>>;
  likedComments?: InputMaybe<Array<UserLikedCommentsDisconnectFieldInput>>;
  authorOfComments?: InputMaybe<
    Array<UserAuthorOfCommentsDisconnectFieldInput>
  >;
};

export type UserLikedCommentsAggregateInput = {
  count?: InputMaybe<Scalars["Int"]["input"]>;
  count_LT?: InputMaybe<Scalars["Int"]["input"]>;
  count_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  count_GT?: InputMaybe<Scalars["Int"]["input"]>;
  count_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  AND?: InputMaybe<Array<UserLikedCommentsAggregateInput>>;
  OR?: InputMaybe<Array<UserLikedCommentsAggregateInput>>;
  NOT?: InputMaybe<UserLikedCommentsAggregateInput>;
  node?: InputMaybe<UserLikedCommentsNodeAggregationWhereInput>;
};

export type UserLikedCommentsConnectFieldInput = {
  where?: InputMaybe<CommentConnectWhere>;
  connect?: InputMaybe<CommentConnectInput>;
};

export type UserLikedCommentsConnectionSort = {
  node?: InputMaybe<CommentSort>;
};

export type UserLikedCommentsConnectionWhere = {
  AND?: InputMaybe<Array<UserLikedCommentsConnectionWhere>>;
  OR?: InputMaybe<Array<UserLikedCommentsConnectionWhere>>;
  NOT?: InputMaybe<UserLikedCommentsConnectionWhere>;
  node?: InputMaybe<CommentWhere>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  node_NOT?: InputMaybe<CommentWhere>;
};

export type UserLikedCommentsCreateFieldInput = {
  node: CommentCreateInput;
};

export type UserLikedCommentsDeleteFieldInput = {
  where?: InputMaybe<UserLikedCommentsConnectionWhere>;
  delete?: InputMaybe<CommentDeleteInput>;
};

export type UserLikedCommentsDisconnectFieldInput = {
  where?: InputMaybe<UserLikedCommentsConnectionWhere>;
  disconnect?: InputMaybe<CommentDisconnectInput>;
};

export type UserLikedCommentsFieldInput = {
  connect?: InputMaybe<Array<UserLikedCommentsConnectFieldInput>>;
  create?: InputMaybe<Array<UserLikedCommentsCreateFieldInput>>;
};

export type UserLikedCommentsNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<UserLikedCommentsNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<UserLikedCommentsNodeAggregationWhereInput>>;
  NOT?: InputMaybe<UserLikedCommentsNodeAggregationWhereInput>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  id_EQUAL?: InputMaybe<Scalars["ID"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  text_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  text_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  text_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  text_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  text_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  text_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  text_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  text_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  text_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  text_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  text_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  text_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  text_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  text_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  text_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  text_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  text_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  text_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  text_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  text_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  text_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  text_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  text_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  text_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  text_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  text_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  text_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  text_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  text_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  text_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  text_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  text_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  text_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  text_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  text_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
};

export type UserLikedCommentsUpdateConnectionInput = {
  node?: InputMaybe<CommentUpdateInput>;
};

export type UserLikedCommentsUpdateFieldInput = {
  where?: InputMaybe<UserLikedCommentsConnectionWhere>;
  connect?: InputMaybe<Array<UserLikedCommentsConnectFieldInput>>;
  disconnect?: InputMaybe<Array<UserLikedCommentsDisconnectFieldInput>>;
  create?: InputMaybe<Array<UserLikedCommentsCreateFieldInput>>;
  update?: InputMaybe<UserLikedCommentsUpdateConnectionInput>;
  delete?: InputMaybe<Array<UserLikedCommentsDeleteFieldInput>>;
};

export type UserLikedPostsAggregateInput = {
  count?: InputMaybe<Scalars["Int"]["input"]>;
  count_LT?: InputMaybe<Scalars["Int"]["input"]>;
  count_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  count_GT?: InputMaybe<Scalars["Int"]["input"]>;
  count_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  AND?: InputMaybe<Array<UserLikedPostsAggregateInput>>;
  OR?: InputMaybe<Array<UserLikedPostsAggregateInput>>;
  NOT?: InputMaybe<UserLikedPostsAggregateInput>;
  node?: InputMaybe<UserLikedPostsNodeAggregationWhereInput>;
};

export type UserLikedPostsConnectFieldInput = {
  where?: InputMaybe<PostConnectWhere>;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars["Boolean"]["input"];
  connect?: InputMaybe<Array<PostConnectInput>>;
};

export type UserLikedPostsConnectionSort = {
  node?: InputMaybe<PostSort>;
};

export type UserLikedPostsConnectionWhere = {
  AND?: InputMaybe<Array<UserLikedPostsConnectionWhere>>;
  OR?: InputMaybe<Array<UserLikedPostsConnectionWhere>>;
  NOT?: InputMaybe<UserLikedPostsConnectionWhere>;
  node?: InputMaybe<PostWhere>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  node_NOT?: InputMaybe<PostWhere>;
};

export type UserLikedPostsCreateFieldInput = {
  node: PostCreateInput;
};

export type UserLikedPostsDeleteFieldInput = {
  where?: InputMaybe<UserLikedPostsConnectionWhere>;
  delete?: InputMaybe<PostDeleteInput>;
};

export type UserLikedPostsDisconnectFieldInput = {
  where?: InputMaybe<UserLikedPostsConnectionWhere>;
  disconnect?: InputMaybe<PostDisconnectInput>;
};

export type UserLikedPostsFieldInput = {
  connect?: InputMaybe<Array<UserLikedPostsConnectFieldInput>>;
  create?: InputMaybe<Array<UserLikedPostsCreateFieldInput>>;
};

export type UserLikedPostsNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<UserLikedPostsNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<UserLikedPostsNodeAggregationWhereInput>>;
  NOT?: InputMaybe<UserLikedPostsNodeAggregationWhereInput>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  id_EQUAL?: InputMaybe<Scalars["ID"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  url_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  url_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  url_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  url_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  url_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  url_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  url_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  url_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  url_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  url_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  url_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  url_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  url_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  url_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  url_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  url_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  url_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  url_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  url_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  url_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  url_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  url_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  url_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  url_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  url_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  url_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  url_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  url_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  url_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  url_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  url_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  url_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  url_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  url_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  url_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  description_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  description_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  description_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  description_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  description_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  description_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  description_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  description_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  description_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  description_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  description_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  description_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  description_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  description_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  description_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  description_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  description_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  description_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  description_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  description_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  description_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  description_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  description_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  description_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  description_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  description_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  description_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  description_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  description_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  description_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  description_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  description_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  description_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  description_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  description_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  visibility_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  visibility_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  visibility_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  visibility_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  visibility_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  visibility_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  visibility_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  visibility_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  visibility_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  visibility_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  visibility_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  visibility_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  visibility_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  visibility_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  visibility_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  visibility_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  visibility_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  visibility_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  visibility_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  visibility_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  visibility_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  visibility_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  visibility_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  visibility_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  visibility_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  visibility_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  visibility_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  visibility_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  visibility_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  visibility_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  visibility_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  visibility_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  visibility_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  visibility_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  visibility_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  createdAt_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MIN_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MAX_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  createdAt_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MIN_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MAX_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  createdAt_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MIN_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MAX_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  createdAt_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MIN_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MAX_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  createdAt_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MIN_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MAX_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  updatedAt_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MIN_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MAX_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  updatedAt_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MIN_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MAX_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  updatedAt_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MIN_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MAX_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  updatedAt_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MIN_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MAX_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  updatedAt_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MIN_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MAX_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
};

export type UserLikedPostsUpdateConnectionInput = {
  node?: InputMaybe<PostUpdateInput>;
};

export type UserLikedPostsUpdateFieldInput = {
  where?: InputMaybe<UserLikedPostsConnectionWhere>;
  connect?: InputMaybe<Array<UserLikedPostsConnectFieldInput>>;
  disconnect?: InputMaybe<Array<UserLikedPostsDisconnectFieldInput>>;
  create?: InputMaybe<Array<UserLikedPostsCreateFieldInput>>;
  update?: InputMaybe<UserLikedPostsUpdateConnectionInput>;
  delete?: InputMaybe<Array<UserLikedPostsDeleteFieldInput>>;
};

export type UserOnCreateInput = {
  name: Scalars["String"]["input"];
  email: Scalars["String"]["input"];
  hash: Scalars["String"]["input"];
  username: Scalars["ID"]["input"];
  dob?: InputMaybe<Scalars["Date"]["input"]>;
  refreshToken?: InputMaybe<Scalars["String"]["input"]>;
  blackList?: InputMaybe<Array<Scalars["String"]["input"]>>;
  updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
};

export type UserOptions = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  /** Specify one or more UserSort objects to sort Users by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<UserSort>>;
};

export type UserPostsAggregateInput = {
  count?: InputMaybe<Scalars["Int"]["input"]>;
  count_LT?: InputMaybe<Scalars["Int"]["input"]>;
  count_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  count_GT?: InputMaybe<Scalars["Int"]["input"]>;
  count_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  AND?: InputMaybe<Array<UserPostsAggregateInput>>;
  OR?: InputMaybe<Array<UserPostsAggregateInput>>;
  NOT?: InputMaybe<UserPostsAggregateInput>;
  node?: InputMaybe<UserPostsNodeAggregationWhereInput>;
};

export type UserPostsConnectFieldInput = {
  where?: InputMaybe<PostConnectWhere>;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars["Boolean"]["input"];
  connect?: InputMaybe<Array<PostConnectInput>>;
};

export type UserPostsConnectionSort = {
  node?: InputMaybe<PostSort>;
};

export type UserPostsConnectionWhere = {
  AND?: InputMaybe<Array<UserPostsConnectionWhere>>;
  OR?: InputMaybe<Array<UserPostsConnectionWhere>>;
  NOT?: InputMaybe<UserPostsConnectionWhere>;
  node?: InputMaybe<PostWhere>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  node_NOT?: InputMaybe<PostWhere>;
};

export type UserPostsCreateFieldInput = {
  node: PostCreateInput;
};

export type UserPostsDeleteFieldInput = {
  where?: InputMaybe<UserPostsConnectionWhere>;
  delete?: InputMaybe<PostDeleteInput>;
};

export type UserPostsDisconnectFieldInput = {
  where?: InputMaybe<UserPostsConnectionWhere>;
  disconnect?: InputMaybe<PostDisconnectInput>;
};

export type UserPostsFieldInput = {
  connect?: InputMaybe<Array<UserPostsConnectFieldInput>>;
  create?: InputMaybe<Array<UserPostsCreateFieldInput>>;
};

export type UserPostsNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<UserPostsNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<UserPostsNodeAggregationWhereInput>>;
  NOT?: InputMaybe<UserPostsNodeAggregationWhereInput>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  id_EQUAL?: InputMaybe<Scalars["ID"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  url_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  url_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  url_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  url_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  url_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  url_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  url_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  url_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  url_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  url_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  url_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  url_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  url_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  url_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  url_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  url_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  url_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  url_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  url_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  url_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  url_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  url_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  url_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  url_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  url_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  url_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  url_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  url_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  url_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  url_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  url_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  url_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  url_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  url_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  url_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  description_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  description_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  description_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  description_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  description_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  description_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  description_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  description_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  description_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  description_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  description_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  description_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  description_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  description_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  description_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  description_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  description_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  description_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  description_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  description_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  description_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  description_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  description_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  description_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  description_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  description_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  description_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  description_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  description_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  description_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  description_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  description_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  description_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  description_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  description_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  visibility_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  visibility_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  visibility_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  visibility_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  visibility_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  visibility_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  visibility_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  visibility_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  visibility_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  visibility_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  visibility_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  visibility_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  visibility_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  visibility_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  visibility_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  visibility_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  visibility_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  visibility_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  visibility_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  visibility_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  visibility_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  visibility_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  visibility_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  visibility_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  visibility_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  visibility_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  visibility_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  visibility_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  visibility_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  visibility_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  visibility_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  visibility_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  visibility_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  visibility_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  visibility_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  createdAt_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MIN_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MAX_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  createdAt_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MIN_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MAX_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  createdAt_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MIN_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MAX_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  createdAt_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MIN_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MAX_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  createdAt_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MIN_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MAX_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  updatedAt_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MIN_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MAX_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  updatedAt_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MIN_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MAX_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  updatedAt_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MIN_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MAX_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  updatedAt_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MIN_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MAX_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  updatedAt_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MIN_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MAX_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
};

export type UserPostsUpdateConnectionInput = {
  node?: InputMaybe<PostUpdateInput>;
};

export type UserPostsUpdateFieldInput = {
  where?: InputMaybe<UserPostsConnectionWhere>;
  connect?: InputMaybe<Array<UserPostsConnectFieldInput>>;
  disconnect?: InputMaybe<Array<UserPostsDisconnectFieldInput>>;
  create?: InputMaybe<Array<UserPostsCreateFieldInput>>;
  update?: InputMaybe<UserPostsUpdateConnectionInput>;
  delete?: InputMaybe<Array<UserPostsDeleteFieldInput>>;
};

export type UserRelationInput = {
  posts?: InputMaybe<Array<UserPostsCreateFieldInput>>;
  likedPosts?: InputMaybe<Array<UserLikedPostsCreateFieldInput>>;
  likedComments?: InputMaybe<Array<UserLikedCommentsCreateFieldInput>>;
  authorOfComments?: InputMaybe<Array<UserAuthorOfCommentsCreateFieldInput>>;
};

/** Fields to sort Users by. The order in which sorts are applied is not guaranteed when specifying many fields in one UserSort object. */
export type UserSort = {
  id?: InputMaybe<SortDirection>;
  name?: InputMaybe<SortDirection>;
  email?: InputMaybe<SortDirection>;
  hash?: InputMaybe<SortDirection>;
  username?: InputMaybe<SortDirection>;
  dob?: InputMaybe<SortDirection>;
  refreshToken?: InputMaybe<SortDirection>;
  createdAt?: InputMaybe<SortDirection>;
  updatedAt?: InputMaybe<SortDirection>;
};

export type UserUniqueWhere = {
  email?: InputMaybe<Scalars["String"]["input"]>;
};

export type UserUpdateInput = {
  name?: InputMaybe<Scalars["String"]["input"]>;
  email?: InputMaybe<Scalars["String"]["input"]>;
  hash?: InputMaybe<Scalars["String"]["input"]>;
  username?: InputMaybe<Scalars["ID"]["input"]>;
  dob?: InputMaybe<Scalars["Date"]["input"]>;
  refreshToken?: InputMaybe<Scalars["String"]["input"]>;
  blackList?: InputMaybe<Array<Scalars["String"]["input"]>>;
  blackList_POP?: InputMaybe<Scalars["Int"]["input"]>;
  blackList_PUSH?: InputMaybe<Array<Scalars["String"]["input"]>>;
  createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  posts?: InputMaybe<Array<UserPostsUpdateFieldInput>>;
  likedPosts?: InputMaybe<Array<UserLikedPostsUpdateFieldInput>>;
  likedComments?: InputMaybe<Array<UserLikedCommentsUpdateFieldInput>>;
  authorOfComments?: InputMaybe<Array<UserAuthorOfCommentsUpdateFieldInput>>;
};

export type UserWhere = {
  id?: InputMaybe<Scalars["ID"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT?: InputMaybe<Scalars["ID"]["input"]>;
  id_IN?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT_IN?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  id_CONTAINS?: InputMaybe<Scalars["ID"]["input"]>;
  id_STARTS_WITH?: InputMaybe<Scalars["ID"]["input"]>;
  id_ENDS_WITH?: InputMaybe<Scalars["ID"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT_CONTAINS?: InputMaybe<Scalars["ID"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT_STARTS_WITH?: InputMaybe<Scalars["ID"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT_ENDS_WITH?: InputMaybe<Scalars["ID"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  name_NOT?: InputMaybe<Scalars["String"]["input"]>;
  name_IN?: InputMaybe<Array<Scalars["String"]["input"]>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  name_NOT_IN?: InputMaybe<Array<Scalars["String"]["input"]>>;
  name_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  name_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  name_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  name_NOT_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  name_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  name_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  email?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  email_NOT?: InputMaybe<Scalars["String"]["input"]>;
  email_IN?: InputMaybe<Array<Scalars["String"]["input"]>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  email_NOT_IN?: InputMaybe<Array<Scalars["String"]["input"]>>;
  email_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  email_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  email_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  email_NOT_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  email_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  email_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  hash?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  hash_NOT?: InputMaybe<Scalars["String"]["input"]>;
  hash_IN?: InputMaybe<Array<Scalars["String"]["input"]>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  hash_NOT_IN?: InputMaybe<Array<Scalars["String"]["input"]>>;
  hash_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  hash_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  hash_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  hash_NOT_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  hash_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  hash_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  username?: InputMaybe<Scalars["ID"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  username_NOT?: InputMaybe<Scalars["ID"]["input"]>;
  username_IN?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  username_NOT_IN?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  username_CONTAINS?: InputMaybe<Scalars["ID"]["input"]>;
  username_STARTS_WITH?: InputMaybe<Scalars["ID"]["input"]>;
  username_ENDS_WITH?: InputMaybe<Scalars["ID"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  username_NOT_CONTAINS?: InputMaybe<Scalars["ID"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  username_NOT_STARTS_WITH?: InputMaybe<Scalars["ID"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  username_NOT_ENDS_WITH?: InputMaybe<Scalars["ID"]["input"]>;
  dob?: InputMaybe<Scalars["Date"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  dob_NOT?: InputMaybe<Scalars["Date"]["input"]>;
  dob_IN?: InputMaybe<Array<InputMaybe<Scalars["Date"]["input"]>>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  dob_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars["Date"]["input"]>>>;
  dob_LT?: InputMaybe<Scalars["Date"]["input"]>;
  dob_LTE?: InputMaybe<Scalars["Date"]["input"]>;
  dob_GT?: InputMaybe<Scalars["Date"]["input"]>;
  dob_GTE?: InputMaybe<Scalars["Date"]["input"]>;
  refreshToken?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  refreshToken_NOT?: InputMaybe<Scalars["String"]["input"]>;
  refreshToken_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  refreshToken_NOT_IN?: InputMaybe<
    Array<InputMaybe<Scalars["String"]["input"]>>
  >;
  refreshToken_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  refreshToken_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  refreshToken_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  refreshToken_NOT_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  refreshToken_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  refreshToken_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  blackList?: InputMaybe<Array<Scalars["String"]["input"]>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  blackList_NOT?: InputMaybe<Array<Scalars["String"]["input"]>>;
  blackList_INCLUDES?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  blackList_NOT_INCLUDES?: InputMaybe<Scalars["String"]["input"]>;
  createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  createdAt_NOT?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_IN?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  createdAt_NOT_IN?: InputMaybe<
    Array<InputMaybe<Scalars["DateTime"]["input"]>>
  >;
  createdAt_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  updatedAt_NOT?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_IN?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  updatedAt_NOT_IN?: InputMaybe<
    Array<InputMaybe<Scalars["DateTime"]["input"]>>
  >;
  updatedAt_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  OR?: InputMaybe<Array<UserWhere>>;
  AND?: InputMaybe<Array<UserWhere>>;
  NOT?: InputMaybe<UserWhere>;
  /** @deprecated Use `posts_SOME` instead. */
  posts?: InputMaybe<PostWhere>;
  /** @deprecated Use `posts_NONE` instead. */
  posts_NOT?: InputMaybe<PostWhere>;
  /** Return Users where all of the related Posts match this filter */
  posts_ALL?: InputMaybe<PostWhere>;
  /** Return Users where none of the related Posts match this filter */
  posts_NONE?: InputMaybe<PostWhere>;
  /** Return Users where one of the related Posts match this filter */
  posts_SINGLE?: InputMaybe<PostWhere>;
  /** Return Users where some of the related Posts match this filter */
  posts_SOME?: InputMaybe<PostWhere>;
  /** @deprecated Use `postsConnection_SOME` instead. */
  postsConnection?: InputMaybe<UserPostsConnectionWhere>;
  /** @deprecated Use `postsConnection_NONE` instead. */
  postsConnection_NOT?: InputMaybe<UserPostsConnectionWhere>;
  /** Return Users where all of the related UserPostsConnections match this filter */
  postsConnection_ALL?: InputMaybe<UserPostsConnectionWhere>;
  /** Return Users where none of the related UserPostsConnections match this filter */
  postsConnection_NONE?: InputMaybe<UserPostsConnectionWhere>;
  /** Return Users where one of the related UserPostsConnections match this filter */
  postsConnection_SINGLE?: InputMaybe<UserPostsConnectionWhere>;
  /** Return Users where some of the related UserPostsConnections match this filter */
  postsConnection_SOME?: InputMaybe<UserPostsConnectionWhere>;
  postsAggregate?: InputMaybe<UserPostsAggregateInput>;
  /** @deprecated Use `likedPosts_SOME` instead. */
  likedPosts?: InputMaybe<PostWhere>;
  /** @deprecated Use `likedPosts_NONE` instead. */
  likedPosts_NOT?: InputMaybe<PostWhere>;
  /** Return Users where all of the related Posts match this filter */
  likedPosts_ALL?: InputMaybe<PostWhere>;
  /** Return Users where none of the related Posts match this filter */
  likedPosts_NONE?: InputMaybe<PostWhere>;
  /** Return Users where one of the related Posts match this filter */
  likedPosts_SINGLE?: InputMaybe<PostWhere>;
  /** Return Users where some of the related Posts match this filter */
  likedPosts_SOME?: InputMaybe<PostWhere>;
  /** @deprecated Use `likedPostsConnection_SOME` instead. */
  likedPostsConnection?: InputMaybe<UserLikedPostsConnectionWhere>;
  /** @deprecated Use `likedPostsConnection_NONE` instead. */
  likedPostsConnection_NOT?: InputMaybe<UserLikedPostsConnectionWhere>;
  /** Return Users where all of the related UserLikedPostsConnections match this filter */
  likedPostsConnection_ALL?: InputMaybe<UserLikedPostsConnectionWhere>;
  /** Return Users where none of the related UserLikedPostsConnections match this filter */
  likedPostsConnection_NONE?: InputMaybe<UserLikedPostsConnectionWhere>;
  /** Return Users where one of the related UserLikedPostsConnections match this filter */
  likedPostsConnection_SINGLE?: InputMaybe<UserLikedPostsConnectionWhere>;
  /** Return Users where some of the related UserLikedPostsConnections match this filter */
  likedPostsConnection_SOME?: InputMaybe<UserLikedPostsConnectionWhere>;
  likedPostsAggregate?: InputMaybe<UserLikedPostsAggregateInput>;
  /** @deprecated Use `likedComments_SOME` instead. */
  likedComments?: InputMaybe<CommentWhere>;
  /** @deprecated Use `likedComments_NONE` instead. */
  likedComments_NOT?: InputMaybe<CommentWhere>;
  /** Return Users where all of the related Comments match this filter */
  likedComments_ALL?: InputMaybe<CommentWhere>;
  /** Return Users where none of the related Comments match this filter */
  likedComments_NONE?: InputMaybe<CommentWhere>;
  /** Return Users where one of the related Comments match this filter */
  likedComments_SINGLE?: InputMaybe<CommentWhere>;
  /** Return Users where some of the related Comments match this filter */
  likedComments_SOME?: InputMaybe<CommentWhere>;
  /** @deprecated Use `likedCommentsConnection_SOME` instead. */
  likedCommentsConnection?: InputMaybe<UserLikedCommentsConnectionWhere>;
  /** @deprecated Use `likedCommentsConnection_NONE` instead. */
  likedCommentsConnection_NOT?: InputMaybe<UserLikedCommentsConnectionWhere>;
  /** Return Users where all of the related UserLikedCommentsConnections match this filter */
  likedCommentsConnection_ALL?: InputMaybe<UserLikedCommentsConnectionWhere>;
  /** Return Users where none of the related UserLikedCommentsConnections match this filter */
  likedCommentsConnection_NONE?: InputMaybe<UserLikedCommentsConnectionWhere>;
  /** Return Users where one of the related UserLikedCommentsConnections match this filter */
  likedCommentsConnection_SINGLE?: InputMaybe<UserLikedCommentsConnectionWhere>;
  /** Return Users where some of the related UserLikedCommentsConnections match this filter */
  likedCommentsConnection_SOME?: InputMaybe<UserLikedCommentsConnectionWhere>;
  likedCommentsAggregate?: InputMaybe<UserLikedCommentsAggregateInput>;
  /** @deprecated Use `authorOfComments_SOME` instead. */
  authorOfComments?: InputMaybe<CommentWhere>;
  /** @deprecated Use `authorOfComments_NONE` instead. */
  authorOfComments_NOT?: InputMaybe<CommentWhere>;
  /** Return Users where all of the related Comments match this filter */
  authorOfComments_ALL?: InputMaybe<CommentWhere>;
  /** Return Users where none of the related Comments match this filter */
  authorOfComments_NONE?: InputMaybe<CommentWhere>;
  /** Return Users where one of the related Comments match this filter */
  authorOfComments_SINGLE?: InputMaybe<CommentWhere>;
  /** Return Users where some of the related Comments match this filter */
  authorOfComments_SOME?: InputMaybe<CommentWhere>;
  /** @deprecated Use `authorOfCommentsConnection_SOME` instead. */
  authorOfCommentsConnection?: InputMaybe<UserAuthorOfCommentsConnectionWhere>;
  /** @deprecated Use `authorOfCommentsConnection_NONE` instead. */
  authorOfCommentsConnection_NOT?: InputMaybe<UserAuthorOfCommentsConnectionWhere>;
  /** Return Users where all of the related UserAuthorOfCommentsConnections match this filter */
  authorOfCommentsConnection_ALL?: InputMaybe<UserAuthorOfCommentsConnectionWhere>;
  /** Return Users where none of the related UserAuthorOfCommentsConnections match this filter */
  authorOfCommentsConnection_NONE?: InputMaybe<UserAuthorOfCommentsConnectionWhere>;
  /** Return Users where one of the related UserAuthorOfCommentsConnections match this filter */
  authorOfCommentsConnection_SINGLE?: InputMaybe<UserAuthorOfCommentsConnectionWhere>;
  /** Return Users where some of the related UserAuthorOfCommentsConnections match this filter */
  authorOfCommentsConnection_SOME?: InputMaybe<UserAuthorOfCommentsConnectionWhere>;
  authorOfCommentsAggregate?: InputMaybe<UserAuthorOfCommentsAggregateInput>;
};

export interface UserAggregateSelectionInput {
  count?: boolean;
  id?: boolean;
  name?: boolean;
  email?: boolean;
  hash?: boolean;
  username?: boolean;
  refreshToken?: boolean;
  createdAt?: boolean;
  updatedAt?: boolean;
}

export declare class UserModel {
  public find(args?: {
    where?: UserWhere;

    options?: UserOptions;
    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<User[]>;
  public create(args: {
    input: UserCreateInput[];
    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<CreateUsersMutationResponse>;
  public update(args: {
    where?: UserWhere;
    update?: UserUpdateInput;
    connect?: UserConnectInput;
    disconnect?: UserDisconnectInput;
    create?: UserCreateInput;

    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<UpdateUsersMutationResponse>;
  public delete(args: {
    where?: UserWhere;
    delete?: UserDeleteInput;
    context?: any;
    rootValue?: any;
  }): Promise<{ nodesDeleted: number; relationshipsDeleted: number }>;
  public aggregate(args: {
    where?: UserWhere;

    aggregate: UserAggregateSelectionInput;
    context?: any;
    rootValue?: any;
  }): Promise<UserAggregateSelection>;
}

export interface PostAggregateSelectionInput {
  count?: boolean;
  id?: boolean;
  url?: boolean;
  description?: boolean;
  visibility?: boolean;
  createdAt?: boolean;
  updatedAt?: boolean;
}

export declare class PostModel {
  public find(args?: {
    where?: PostWhere;

    options?: PostOptions;
    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<Post[]>;
  public create(args: {
    input: PostCreateInput[];
    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<CreatePostsMutationResponse>;
  public update(args: {
    where?: PostWhere;
    update?: PostUpdateInput;
    connect?: PostConnectInput;
    disconnect?: PostDisconnectInput;
    create?: PostCreateInput;
    connectOrCreate?: PostConnectOrCreateInput;
    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<UpdatePostsMutationResponse>;
  public delete(args: {
    where?: PostWhere;
    delete?: PostDeleteInput;
    context?: any;
    rootValue?: any;
  }): Promise<{ nodesDeleted: number; relationshipsDeleted: number }>;
  public aggregate(args: {
    where?: PostWhere;

    aggregate: PostAggregateSelectionInput;
    context?: any;
    rootValue?: any;
  }): Promise<PostAggregateSelection>;
}

export interface PostCommentAggregateSelectionInput {
  count?: boolean;
  id?: boolean;
  text?: boolean;
  createdAt?: boolean;
  updatedAt?: boolean;
}

export declare class PostCommentModel {
  public find(args?: {
    where?: PostCommentWhere;

    options?: PostCommentOptions;
    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<PostComment[]>;
  public create(args: {
    input: PostCommentCreateInput[];
    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<CreatePostCommentsMutationResponse>;
  public update(args: {
    where?: PostCommentWhere;
    update?: PostCommentUpdateInput;
    connect?: PostCommentConnectInput;
    disconnect?: PostCommentDisconnectInput;
    create?: PostCommentCreateInput;
    connectOrCreate?: PostCommentConnectOrCreateInput;
    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<UpdatePostCommentsMutationResponse>;
  public delete(args: {
    where?: PostCommentWhere;
    delete?: PostCommentDeleteInput;
    context?: any;
    rootValue?: any;
  }): Promise<{ nodesDeleted: number; relationshipsDeleted: number }>;
  public aggregate(args: {
    where?: PostCommentWhere;

    aggregate: PostCommentAggregateSelectionInput;
    context?: any;
    rootValue?: any;
  }): Promise<PostCommentAggregateSelection>;
}

export interface ReplyCommentAggregateSelectionInput {
  count?: boolean;
  id?: boolean;
  text?: boolean;
  createdAt?: boolean;
  updatedAt?: boolean;
}

export declare class ReplyCommentModel {
  public find(args?: {
    where?: ReplyCommentWhere;

    options?: ReplyCommentOptions;
    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<ReplyComment[]>;
  public create(args: {
    input: ReplyCommentCreateInput[];
    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<CreateReplyCommentsMutationResponse>;
  public update(args: {
    where?: ReplyCommentWhere;
    update?: ReplyCommentUpdateInput;
    connect?: ReplyCommentConnectInput;
    disconnect?: ReplyCommentDisconnectInput;
    create?: ReplyCommentCreateInput;
    connectOrCreate?: ReplyCommentConnectOrCreateInput;
    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<UpdateReplyCommentsMutationResponse>;
  public delete(args: {
    where?: ReplyCommentWhere;
    delete?: ReplyCommentDeleteInput;
    context?: any;
    rootValue?: any;
  }): Promise<{ nodesDeleted: number; relationshipsDeleted: number }>;
  public aggregate(args: {
    where?: ReplyCommentWhere;

    aggregate: ReplyCommentAggregateSelectionInput;
    context?: any;
    rootValue?: any;
  }): Promise<ReplyCommentAggregateSelection>;
}

export interface ModelMap {
  User: UserModel;
  Post: PostModel;
  PostComment: PostCommentModel;
  ReplyComment: ReplyCommentModel;
}
