import {
  GraphQLResolveInfo,
  GraphQLScalarType,
  GraphQLScalarTypeConfig,
} from 'graphql';
import gql from 'graphql-tag';
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
  K extends keyof T,
> = {
  [_ in K]?: never;
};
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never;
    };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export type RequireFields<T, K extends keyof T> = Omit<T, K> & {
  [P in K]-?: NonNullable<T[P]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
  DateTime: { input: any; output: any };
};

export type Comment = {
  author: User;
  authorConnection: CommentAuthorConnection;
  id: Scalars['String']['output'];
  replies: Array<Comment>;
  repliesConnection: CommentRepliesConnection;
  text: Scalars['String']['output'];
};

export type CommentAuthorArgs = {
  options?: InputMaybe<UserOptions>;
  where?: InputMaybe<UserWhere>;
};

export type CommentAuthorConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<CommentAuthorConnectionSort>>;
  where?: InputMaybe<CommentAuthorConnectionWhere>;
};

export type CommentRepliesArgs = {
  options?: InputMaybe<CommentOptions>;
  where?: InputMaybe<CommentWhere>;
};

export type CommentRepliesConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<CommentRepliesConnectionSort>>;
  where?: InputMaybe<CommentRepliesConnectionWhere>;
};

export type CommentAggregateSelection = {
  __typename?: 'CommentAggregateSelection';
  count: Scalars['Int']['output'];
  id: StringAggregateSelection;
  text: StringAggregateSelection;
};

export type CommentAuthorAggregateInput = {
  AND?: InputMaybe<Array<CommentAuthorAggregateInput>>;
  NOT?: InputMaybe<CommentAuthorAggregateInput>;
  OR?: InputMaybe<Array<CommentAuthorAggregateInput>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  node?: InputMaybe<CommentAuthorNodeAggregationWhereInput>;
};

export type CommentAuthorConnectFieldInput = {
  connect?: InputMaybe<UserConnectInput>;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars['Boolean']['input'];
  where?: InputMaybe<UserConnectWhere>;
};

export type CommentAuthorConnection = {
  __typename?: 'CommentAuthorConnection';
  edges: Array<CommentAuthorRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type CommentAuthorConnectionSort = {
  node?: InputMaybe<UserSort>;
};

export type CommentAuthorConnectionWhere = {
  AND?: InputMaybe<Array<CommentAuthorConnectionWhere>>;
  NOT?: InputMaybe<CommentAuthorConnectionWhere>;
  OR?: InputMaybe<Array<CommentAuthorConnectionWhere>>;
  node?: InputMaybe<UserWhere>;
};

export type CommentAuthorCreateFieldInput = {
  node: UserCreateInput;
};

export type CommentAuthorDeleteFieldInput = {
  delete?: InputMaybe<UserDeleteInput>;
  where?: InputMaybe<CommentAuthorConnectionWhere>;
};

export type CommentAuthorDisconnectFieldInput = {
  disconnect?: InputMaybe<UserDisconnectInput>;
  where?: InputMaybe<CommentAuthorConnectionWhere>;
};

export type CommentAuthorNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<CommentAuthorNodeAggregationWhereInput>>;
  NOT?: InputMaybe<CommentAuthorNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<CommentAuthorNodeAggregationWhereInput>>;
  dob_MAX_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  dob_MAX_GT?: InputMaybe<Scalars['DateTime']['input']>;
  dob_MAX_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  dob_MAX_LT?: InputMaybe<Scalars['DateTime']['input']>;
  dob_MAX_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  dob_MIN_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  dob_MIN_GT?: InputMaybe<Scalars['DateTime']['input']>;
  dob_MIN_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  dob_MIN_LT?: InputMaybe<Scalars['DateTime']['input']>;
  dob_MIN_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  email_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  email_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  email_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  email_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  email_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  email_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  email_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  email_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  email_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  email_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  email_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  email_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  email_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  email_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  email_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  id_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  id_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  id_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  id_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  id_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  id_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  id_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  id_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  id_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  id_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  id_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  id_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  id_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  id_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  id_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  name_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  name_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  username_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  username_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  username_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  username_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  username_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  username_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  username_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  username_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  username_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  username_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  username_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  username_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  username_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  username_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  username_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
};

export type CommentAuthorRelationship = {
  __typename?: 'CommentAuthorRelationship';
  cursor: Scalars['String']['output'];
  node: User;
};

export type CommentAuthorUpdateConnectionInput = {
  node?: InputMaybe<UserUpdateInput>;
};

export type CommentAuthorUpdateFieldInput = {
  connect?: InputMaybe<CommentAuthorConnectFieldInput>;
  create?: InputMaybe<CommentAuthorCreateFieldInput>;
  delete?: InputMaybe<CommentAuthorDeleteFieldInput>;
  disconnect?: InputMaybe<CommentAuthorDisconnectFieldInput>;
  update?: InputMaybe<CommentAuthorUpdateConnectionInput>;
  where?: InputMaybe<CommentAuthorConnectionWhere>;
};

export type CommentConnectInput = {
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
  author?: InputMaybe<CommentAuthorDeleteFieldInput>;
  replies?: InputMaybe<Array<CommentRepliesDeleteFieldInput>>;
};

export type CommentDisconnectInput = {
  author?: InputMaybe<CommentAuthorDisconnectFieldInput>;
  replies?: InputMaybe<Array<CommentRepliesDisconnectFieldInput>>;
};

export type CommentEdge = {
  __typename?: 'CommentEdge';
  cursor: Scalars['String']['output'];
  node: Comment;
};

export enum CommentImplementation {
  PostComment = 'PostComment',
  ReplyComment = 'ReplyComment',
}

export type CommentOptions = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  /** Specify one or more CommentSort objects to sort Comments by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<InputMaybe<CommentSort>>>;
};

export type CommentRepliesAggregateInput = {
  AND?: InputMaybe<Array<CommentRepliesAggregateInput>>;
  NOT?: InputMaybe<CommentRepliesAggregateInput>;
  OR?: InputMaybe<Array<CommentRepliesAggregateInput>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  node?: InputMaybe<CommentRepliesNodeAggregationWhereInput>;
};

export type CommentRepliesConnectFieldInput = {
  connect?: InputMaybe<CommentConnectInput>;
  where?: InputMaybe<CommentConnectWhere>;
};

export type CommentRepliesConnection = {
  __typename?: 'CommentRepliesConnection';
  edges: Array<CommentRepliesRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type CommentRepliesConnectionSort = {
  node?: InputMaybe<CommentSort>;
};

export type CommentRepliesConnectionWhere = {
  AND?: InputMaybe<Array<CommentRepliesConnectionWhere>>;
  NOT?: InputMaybe<CommentRepliesConnectionWhere>;
  OR?: InputMaybe<Array<CommentRepliesConnectionWhere>>;
  node?: InputMaybe<CommentWhere>;
};

export type CommentRepliesCreateFieldInput = {
  node: CommentCreateInput;
};

export type CommentRepliesDeleteFieldInput = {
  delete?: InputMaybe<CommentDeleteInput>;
  where?: InputMaybe<CommentRepliesConnectionWhere>;
};

export type CommentRepliesDisconnectFieldInput = {
  disconnect?: InputMaybe<CommentDisconnectInput>;
  where?: InputMaybe<CommentRepliesConnectionWhere>;
};

export type CommentRepliesNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<CommentRepliesNodeAggregationWhereInput>>;
  NOT?: InputMaybe<CommentRepliesNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<CommentRepliesNodeAggregationWhereInput>>;
  id_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  id_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  id_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  id_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  id_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  id_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  id_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  id_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  id_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  id_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  id_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  id_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  id_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  id_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  id_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  text_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  text_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  text_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  text_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  text_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  text_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  text_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  text_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  text_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  text_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  text_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  text_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  text_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  text_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  text_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
};

export type CommentRepliesRelationship = {
  __typename?: 'CommentRepliesRelationship';
  cursor: Scalars['String']['output'];
  node: Comment;
};

export type CommentRepliesUpdateConnectionInput = {
  node?: InputMaybe<CommentUpdateInput>;
};

export type CommentRepliesUpdateFieldInput = {
  connect?: InputMaybe<Array<CommentRepliesConnectFieldInput>>;
  create?: InputMaybe<Array<CommentRepliesCreateFieldInput>>;
  delete?: InputMaybe<Array<CommentRepliesDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<CommentRepliesDisconnectFieldInput>>;
  update?: InputMaybe<CommentRepliesUpdateConnectionInput>;
  where?: InputMaybe<CommentRepliesConnectionWhere>;
};

/** Fields to sort Comments by. The order in which sorts are applied is not guaranteed when specifying many fields in one CommentSort object. */
export type CommentSort = {
  id?: InputMaybe<SortDirection>;
  text?: InputMaybe<SortDirection>;
};

export type CommentUpdateInput = {
  author?: InputMaybe<CommentAuthorUpdateFieldInput>;
  id?: InputMaybe<Scalars['String']['input']>;
  replies?: InputMaybe<Array<CommentRepliesUpdateFieldInput>>;
  text?: InputMaybe<Scalars['String']['input']>;
};

export type CommentWhere = {
  AND?: InputMaybe<Array<CommentWhere>>;
  NOT?: InputMaybe<CommentWhere>;
  OR?: InputMaybe<Array<CommentWhere>>;
  author?: InputMaybe<UserWhere>;
  authorAggregate?: InputMaybe<CommentAuthorAggregateInput>;
  authorConnection?: InputMaybe<CommentAuthorConnectionWhere>;
  authorConnection_NOT?: InputMaybe<CommentAuthorConnectionWhere>;
  author_NOT?: InputMaybe<UserWhere>;
  id?: InputMaybe<Scalars['String']['input']>;
  id_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  id_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  id_IN?: InputMaybe<Array<Scalars['String']['input']>>;
  id_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
  repliesAggregate?: InputMaybe<CommentRepliesAggregateInput>;
  /** Return Comments where all of the related CommentRepliesConnections match this filter */
  repliesConnection_ALL?: InputMaybe<CommentRepliesConnectionWhere>;
  /** Return Comments where none of the related CommentRepliesConnections match this filter */
  repliesConnection_NONE?: InputMaybe<CommentRepliesConnectionWhere>;
  /** Return Comments where one of the related CommentRepliesConnections match this filter */
  repliesConnection_SINGLE?: InputMaybe<CommentRepliesConnectionWhere>;
  /** Return Comments where some of the related CommentRepliesConnections match this filter */
  repliesConnection_SOME?: InputMaybe<CommentRepliesConnectionWhere>;
  /** Return Comments where all of the related Comments match this filter */
  replies_ALL?: InputMaybe<CommentWhere>;
  /** Return Comments where none of the related Comments match this filter */
  replies_NONE?: InputMaybe<CommentWhere>;
  /** Return Comments where one of the related Comments match this filter */
  replies_SINGLE?: InputMaybe<CommentWhere>;
  /** Return Comments where some of the related Comments match this filter */
  replies_SOME?: InputMaybe<CommentWhere>;
  text?: InputMaybe<Scalars['String']['input']>;
  text_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  text_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  text_IN?: InputMaybe<Array<Scalars['String']['input']>>;
  text_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
  typename_IN?: InputMaybe<Array<CommentImplementation>>;
};

export type CommentsConnection = {
  __typename?: 'CommentsConnection';
  edges: Array<CommentEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

/** Information about the number of nodes and relationships created during a create mutation */
export type CreateInfo = {
  __typename?: 'CreateInfo';
  /** @deprecated This field has been deprecated because bookmarks are now handled by the driver. */
  bookmark?: Maybe<Scalars['String']['output']>;
  nodesCreated: Scalars['Int']['output'];
  relationshipsCreated: Scalars['Int']['output'];
};

export type CreatePostCommentsMutationResponse = {
  __typename?: 'CreatePostCommentsMutationResponse';
  info: CreateInfo;
  postComments: Array<PostComment>;
};

export type CreatePostsMutationResponse = {
  __typename?: 'CreatePostsMutationResponse';
  info: CreateInfo;
  posts: Array<Post>;
};

export type CreateReplyCommentsMutationResponse = {
  __typename?: 'CreateReplyCommentsMutationResponse';
  info: CreateInfo;
  replyComments: Array<ReplyComment>;
};

export type CreateUsersMutationResponse = {
  __typename?: 'CreateUsersMutationResponse';
  info: CreateInfo;
  users: Array<User>;
};

export type DateTimeAggregateSelection = {
  __typename?: 'DateTimeAggregateSelection';
  max?: Maybe<Scalars['DateTime']['output']>;
  min?: Maybe<Scalars['DateTime']['output']>;
};

/** Information about the number of nodes and relationships deleted during a delete mutation */
export type DeleteInfo = {
  __typename?: 'DeleteInfo';
  /** @deprecated This field has been deprecated because bookmarks are now handled by the driver. */
  bookmark?: Maybe<Scalars['String']['output']>;
  nodesDeleted: Scalars['Int']['output'];
  relationshipsDeleted: Scalars['Int']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createPostComments: CreatePostCommentsMutationResponse;
  createPosts: CreatePostsMutationResponse;
  createReplyComments: CreateReplyCommentsMutationResponse;
  createUsers: CreateUsersMutationResponse;
  deletePostComments: DeleteInfo;
  deletePosts: DeleteInfo;
  deleteReplyComments: DeleteInfo;
  deleteUsers: DeleteInfo;
  signIn: Scalars['String']['output'];
  updatePostComments: UpdatePostCommentsMutationResponse;
  updatePosts: UpdatePostsMutationResponse;
  updateReplyComments: UpdateReplyCommentsMutationResponse;
  updateUsers: UpdateUsersMutationResponse;
};

export type MutationCreatePostCommentsArgs = {
  input: Array<PostCommentCreateInput>;
};

export type MutationCreatePostsArgs = {
  input: Array<PostCreateInput>;
};

export type MutationCreateReplyCommentsArgs = {
  input: Array<ReplyCommentCreateInput>;
};

export type MutationCreateUsersArgs = {
  input: Array<UserCreateInput>;
};

export type MutationDeletePostCommentsArgs = {
  delete?: InputMaybe<PostCommentDeleteInput>;
  where?: InputMaybe<PostCommentWhere>;
};

export type MutationDeletePostsArgs = {
  delete?: InputMaybe<PostDeleteInput>;
  where?: InputMaybe<PostWhere>;
};

export type MutationDeleteReplyCommentsArgs = {
  delete?: InputMaybe<ReplyCommentDeleteInput>;
  where?: InputMaybe<ReplyCommentWhere>;
};

export type MutationDeleteUsersArgs = {
  delete?: InputMaybe<UserDeleteInput>;
  where?: InputMaybe<UserWhere>;
};

export type MutationSignInArgs = {
  email: Scalars['String']['input'];
  id: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type MutationUpdatePostCommentsArgs = {
  connect?: InputMaybe<PostCommentConnectInput>;
  create?: InputMaybe<PostCommentRelationInput>;
  delete?: InputMaybe<PostCommentDeleteInput>;
  disconnect?: InputMaybe<PostCommentDisconnectInput>;
  update?: InputMaybe<PostCommentUpdateInput>;
  where?: InputMaybe<PostCommentWhere>;
};

export type MutationUpdatePostsArgs = {
  connect?: InputMaybe<PostConnectInput>;
  create?: InputMaybe<PostRelationInput>;
  delete?: InputMaybe<PostDeleteInput>;
  disconnect?: InputMaybe<PostDisconnectInput>;
  update?: InputMaybe<PostUpdateInput>;
  where?: InputMaybe<PostWhere>;
};

export type MutationUpdateReplyCommentsArgs = {
  connect?: InputMaybe<ReplyCommentConnectInput>;
  create?: InputMaybe<ReplyCommentRelationInput>;
  delete?: InputMaybe<ReplyCommentDeleteInput>;
  disconnect?: InputMaybe<ReplyCommentDisconnectInput>;
  update?: InputMaybe<ReplyCommentUpdateInput>;
  where?: InputMaybe<ReplyCommentWhere>;
};

export type MutationUpdateUsersArgs = {
  connect?: InputMaybe<UserConnectInput>;
  create?: InputMaybe<UserRelationInput>;
  delete?: InputMaybe<UserDeleteInput>;
  disconnect?: InputMaybe<UserDisconnectInput>;
  update?: InputMaybe<UserUpdateInput>;
  where?: InputMaybe<UserWhere>;
};

/** Pagination information (Relay) */
export type PageInfo = {
  __typename?: 'PageInfo';
  endCursor?: Maybe<Scalars['String']['output']>;
  hasNextPage: Scalars['Boolean']['output'];
  hasPreviousPage: Scalars['Boolean']['output'];
  startCursor?: Maybe<Scalars['String']['output']>;
};

export type Post = {
  __typename?: 'Post';
  comments: Array<Comment>;
  commentsAggregate?: Maybe<PostCommentCommentsAggregationSelection>;
  commentsConnection: PostCommentsConnection;
  creatorOfPost: User;
  creatorOfPostAggregate?: Maybe<PostUserCreatorOfPostAggregationSelection>;
  creatorOfPostConnection: PostCreatorOfPostConnection;
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  url: Scalars['String']['output'];
};

export type PostCommentsArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<CommentOptions>;
  where?: InputMaybe<CommentWhere>;
};

export type PostCommentsAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<CommentWhere>;
};

export type PostCommentsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<PostCommentsConnectionSort>>;
  where?: InputMaybe<PostCommentsConnectionWhere>;
};

export type PostCreatorOfPostArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<UserOptions>;
  where?: InputMaybe<UserWhere>;
};

export type PostCreatorOfPostAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<UserWhere>;
};

export type PostCreatorOfPostConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<PostCreatorOfPostConnectionSort>>;
  where?: InputMaybe<PostCreatorOfPostConnectionWhere>;
};

export type PostAggregateSelection = {
  __typename?: 'PostAggregateSelection';
  count: Scalars['Int']['output'];
  description: StringAggregateSelection;
  id: StringAggregateSelection;
  url: StringAggregateSelection;
};

export type PostComment = Comment & {
  __typename?: 'PostComment';
  author: User;
  authorAggregate?: Maybe<PostCommentUserAuthorAggregationSelection>;
  authorConnection: CommentAuthorConnection;
  commentOfPost: Post;
  commentOfPostAggregate?: Maybe<PostCommentPostCommentOfPostAggregationSelection>;
  commentOfPostConnection: PostCommentCommentOfPostConnection;
  id: Scalars['String']['output'];
  replies: Array<Comment>;
  repliesAggregate?: Maybe<PostCommentCommentRepliesAggregationSelection>;
  repliesConnection: CommentRepliesConnection;
  text: Scalars['String']['output'];
};

export type PostCommentAuthorArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<UserOptions>;
  where?: InputMaybe<UserWhere>;
};

export type PostCommentAuthorAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<UserWhere>;
};

export type PostCommentAuthorConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<CommentAuthorConnectionSort>>;
  where?: InputMaybe<CommentAuthorConnectionWhere>;
};

export type PostCommentCommentOfPostArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<PostOptions>;
  where?: InputMaybe<PostWhere>;
};

export type PostCommentCommentOfPostAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<PostWhere>;
};

export type PostCommentCommentOfPostConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<PostCommentCommentOfPostConnectionSort>>;
  where?: InputMaybe<PostCommentCommentOfPostConnectionWhere>;
};

export type PostCommentRepliesArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<CommentOptions>;
  where?: InputMaybe<CommentWhere>;
};

export type PostCommentRepliesAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<CommentWhere>;
};

export type PostCommentRepliesConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<CommentRepliesConnectionSort>>;
  where?: InputMaybe<CommentRepliesConnectionWhere>;
};

export type PostCommentAggregateSelection = {
  __typename?: 'PostCommentAggregateSelection';
  count: Scalars['Int']['output'];
  id: StringAggregateSelection;
  text: StringAggregateSelection;
};

export type PostCommentAuthorAggregateInput = {
  AND?: InputMaybe<Array<PostCommentAuthorAggregateInput>>;
  NOT?: InputMaybe<PostCommentAuthorAggregateInput>;
  OR?: InputMaybe<Array<PostCommentAuthorAggregateInput>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  node?: InputMaybe<PostCommentAuthorNodeAggregationWhereInput>;
};

export type PostCommentAuthorConnectFieldInput = {
  connect?: InputMaybe<UserConnectInput>;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars['Boolean']['input'];
  where?: InputMaybe<UserConnectWhere>;
};

export type PostCommentAuthorCreateFieldInput = {
  node: UserCreateInput;
};

export type PostCommentAuthorFieldInput = {
  connect?: InputMaybe<PostCommentAuthorConnectFieldInput>;
  create?: InputMaybe<PostCommentAuthorCreateFieldInput>;
};

export type PostCommentAuthorNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<PostCommentAuthorNodeAggregationWhereInput>>;
  NOT?: InputMaybe<PostCommentAuthorNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<PostCommentAuthorNodeAggregationWhereInput>>;
  dob_MAX_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  dob_MAX_GT?: InputMaybe<Scalars['DateTime']['input']>;
  dob_MAX_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  dob_MAX_LT?: InputMaybe<Scalars['DateTime']['input']>;
  dob_MAX_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  dob_MIN_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  dob_MIN_GT?: InputMaybe<Scalars['DateTime']['input']>;
  dob_MIN_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  dob_MIN_LT?: InputMaybe<Scalars['DateTime']['input']>;
  dob_MIN_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  email_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  email_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  email_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  email_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  email_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  email_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  email_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  email_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  email_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  email_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  email_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  email_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  email_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  email_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  email_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  id_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  id_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  id_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  id_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  id_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  id_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  id_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  id_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  id_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  id_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  id_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  id_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  id_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  id_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  id_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  name_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  name_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  username_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  username_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  username_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  username_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  username_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  username_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  username_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  username_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  username_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  username_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  username_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  username_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  username_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  username_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  username_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
};

export type PostCommentAuthorUpdateConnectionInput = {
  node?: InputMaybe<UserUpdateInput>;
};

export type PostCommentAuthorUpdateFieldInput = {
  connect?: InputMaybe<PostCommentAuthorConnectFieldInput>;
  create?: InputMaybe<PostCommentAuthorCreateFieldInput>;
  delete?: InputMaybe<CommentAuthorDeleteFieldInput>;
  disconnect?: InputMaybe<CommentAuthorDisconnectFieldInput>;
  update?: InputMaybe<PostCommentAuthorUpdateConnectionInput>;
  where?: InputMaybe<CommentAuthorConnectionWhere>;
};

export type PostCommentCommentOfPostAggregateInput = {
  AND?: InputMaybe<Array<PostCommentCommentOfPostAggregateInput>>;
  NOT?: InputMaybe<PostCommentCommentOfPostAggregateInput>;
  OR?: InputMaybe<Array<PostCommentCommentOfPostAggregateInput>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  node?: InputMaybe<PostCommentCommentOfPostNodeAggregationWhereInput>;
};

export type PostCommentCommentOfPostConnectFieldInput = {
  connect?: InputMaybe<PostConnectInput>;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars['Boolean']['input'];
  where?: InputMaybe<PostConnectWhere>;
};

export type PostCommentCommentOfPostConnection = {
  __typename?: 'PostCommentCommentOfPostConnection';
  edges: Array<PostCommentCommentOfPostRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type PostCommentCommentOfPostConnectionSort = {
  node?: InputMaybe<PostSort>;
};

export type PostCommentCommentOfPostConnectionWhere = {
  AND?: InputMaybe<Array<PostCommentCommentOfPostConnectionWhere>>;
  NOT?: InputMaybe<PostCommentCommentOfPostConnectionWhere>;
  OR?: InputMaybe<Array<PostCommentCommentOfPostConnectionWhere>>;
  node?: InputMaybe<PostWhere>;
};

export type PostCommentCommentOfPostCreateFieldInput = {
  node: PostCreateInput;
};

export type PostCommentCommentOfPostDeleteFieldInput = {
  delete?: InputMaybe<PostDeleteInput>;
  where?: InputMaybe<PostCommentCommentOfPostConnectionWhere>;
};

export type PostCommentCommentOfPostDisconnectFieldInput = {
  disconnect?: InputMaybe<PostDisconnectInput>;
  where?: InputMaybe<PostCommentCommentOfPostConnectionWhere>;
};

export type PostCommentCommentOfPostFieldInput = {
  connect?: InputMaybe<PostCommentCommentOfPostConnectFieldInput>;
  create?: InputMaybe<PostCommentCommentOfPostCreateFieldInput>;
};

export type PostCommentCommentOfPostNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<PostCommentCommentOfPostNodeAggregationWhereInput>>;
  NOT?: InputMaybe<PostCommentCommentOfPostNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<PostCommentCommentOfPostNodeAggregationWhereInput>>;
  description_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  description_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  description_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  description_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  description_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  description_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  description_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  description_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  description_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  description_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  description_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  description_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  description_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  description_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  description_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  id_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  id_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  id_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  id_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  id_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  id_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  id_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  id_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  id_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  id_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  id_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  id_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  id_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  id_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  id_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  url_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  url_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  url_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  url_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  url_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  url_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  url_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  url_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  url_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  url_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  url_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  url_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  url_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  url_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  url_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
};

export type PostCommentCommentOfPostRelationship = {
  __typename?: 'PostCommentCommentOfPostRelationship';
  cursor: Scalars['String']['output'];
  node: Post;
};

export type PostCommentCommentOfPostUpdateConnectionInput = {
  node?: InputMaybe<PostUpdateInput>;
};

export type PostCommentCommentOfPostUpdateFieldInput = {
  connect?: InputMaybe<PostCommentCommentOfPostConnectFieldInput>;
  create?: InputMaybe<PostCommentCommentOfPostCreateFieldInput>;
  delete?: InputMaybe<PostCommentCommentOfPostDeleteFieldInput>;
  disconnect?: InputMaybe<PostCommentCommentOfPostDisconnectFieldInput>;
  update?: InputMaybe<PostCommentCommentOfPostUpdateConnectionInput>;
  where?: InputMaybe<PostCommentCommentOfPostConnectionWhere>;
};

export type PostCommentCommentRepliesAggregationSelection = {
  __typename?: 'PostCommentCommentRepliesAggregationSelection';
  count: Scalars['Int']['output'];
  node?: Maybe<PostCommentCommentRepliesNodeAggregateSelection>;
};

export type PostCommentCommentRepliesNodeAggregateSelection = {
  __typename?: 'PostCommentCommentRepliesNodeAggregateSelection';
  id: StringAggregateSelection;
  text: StringAggregateSelection;
};

export type PostCommentCommentsAggregationSelection = {
  __typename?: 'PostCommentCommentsAggregationSelection';
  count: Scalars['Int']['output'];
  node?: Maybe<PostCommentCommentsNodeAggregateSelection>;
};

export type PostCommentCommentsNodeAggregateSelection = {
  __typename?: 'PostCommentCommentsNodeAggregateSelection';
  id: StringAggregateSelection;
  text: StringAggregateSelection;
};

export type PostCommentConnectInput = {
  author?: InputMaybe<PostCommentAuthorConnectFieldInput>;
  commentOfPost?: InputMaybe<PostCommentCommentOfPostConnectFieldInput>;
  replies?: InputMaybe<Array<PostCommentRepliesConnectFieldInput>>;
};

export type PostCommentCreateInput = {
  author?: InputMaybe<PostCommentAuthorFieldInput>;
  commentOfPost?: InputMaybe<PostCommentCommentOfPostFieldInput>;
  id: Scalars['String']['input'];
  replies?: InputMaybe<PostCommentRepliesFieldInput>;
  text: Scalars['String']['input'];
};

export type PostCommentDeleteInput = {
  author?: InputMaybe<CommentAuthorDeleteFieldInput>;
  commentOfPost?: InputMaybe<PostCommentCommentOfPostDeleteFieldInput>;
  replies?: InputMaybe<Array<PostCommentRepliesDeleteFieldInput>>;
};

export type PostCommentDisconnectInput = {
  author?: InputMaybe<CommentAuthorDisconnectFieldInput>;
  commentOfPost?: InputMaybe<PostCommentCommentOfPostDisconnectFieldInput>;
  replies?: InputMaybe<Array<PostCommentRepliesDisconnectFieldInput>>;
};

export type PostCommentEdge = {
  __typename?: 'PostCommentEdge';
  cursor: Scalars['String']['output'];
  node: PostComment;
};

export type PostCommentOptions = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  /** Specify one or more PostCommentSort objects to sort PostComments by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<PostCommentSort>>;
};

export type PostCommentPostCommentOfPostAggregationSelection = {
  __typename?: 'PostCommentPostCommentOfPostAggregationSelection';
  count: Scalars['Int']['output'];
  node?: Maybe<PostCommentPostCommentOfPostNodeAggregateSelection>;
};

export type PostCommentPostCommentOfPostNodeAggregateSelection = {
  __typename?: 'PostCommentPostCommentOfPostNodeAggregateSelection';
  description: StringAggregateSelection;
  id: StringAggregateSelection;
  url: StringAggregateSelection;
};

export type PostCommentRelationInput = {
  author?: InputMaybe<PostCommentAuthorCreateFieldInput>;
  commentOfPost?: InputMaybe<PostCommentCommentOfPostCreateFieldInput>;
  replies?: InputMaybe<Array<PostCommentRepliesCreateFieldInput>>;
};

export type PostCommentRepliesAggregateInput = {
  AND?: InputMaybe<Array<PostCommentRepliesAggregateInput>>;
  NOT?: InputMaybe<PostCommentRepliesAggregateInput>;
  OR?: InputMaybe<Array<PostCommentRepliesAggregateInput>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  node?: InputMaybe<PostCommentRepliesNodeAggregationWhereInput>;
};

export type PostCommentRepliesConnectFieldInput = {
  connect?: InputMaybe<CommentConnectInput>;
  where?: InputMaybe<CommentConnectWhere>;
};

export type PostCommentRepliesCreateFieldInput = {
  node: CommentCreateInput;
};

export type PostCommentRepliesDeleteFieldInput = {
  delete?: InputMaybe<CommentDeleteInput>;
  where?: InputMaybe<CommentRepliesConnectionWhere>;
};

export type PostCommentRepliesDisconnectFieldInput = {
  disconnect?: InputMaybe<CommentDisconnectInput>;
  where?: InputMaybe<CommentRepliesConnectionWhere>;
};

export type PostCommentRepliesFieldInput = {
  connect?: InputMaybe<Array<PostCommentRepliesConnectFieldInput>>;
  create?: InputMaybe<Array<PostCommentRepliesCreateFieldInput>>;
};

export type PostCommentRepliesNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<PostCommentRepliesNodeAggregationWhereInput>>;
  NOT?: InputMaybe<PostCommentRepliesNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<PostCommentRepliesNodeAggregationWhereInput>>;
  id_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  id_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  id_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  id_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  id_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  id_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  id_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  id_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  id_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  id_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  id_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  id_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  id_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  id_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  id_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  text_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  text_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  text_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  text_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  text_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  text_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  text_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  text_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  text_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  text_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  text_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  text_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  text_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  text_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  text_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
};

export type PostCommentRepliesUpdateConnectionInput = {
  node?: InputMaybe<CommentUpdateInput>;
};

export type PostCommentRepliesUpdateFieldInput = {
  connect?: InputMaybe<Array<PostCommentRepliesConnectFieldInput>>;
  create?: InputMaybe<Array<PostCommentRepliesCreateFieldInput>>;
  delete?: InputMaybe<Array<PostCommentRepliesDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<PostCommentRepliesDisconnectFieldInput>>;
  update?: InputMaybe<PostCommentRepliesUpdateConnectionInput>;
  where?: InputMaybe<CommentRepliesConnectionWhere>;
};

/** Fields to sort PostComments by. The order in which sorts are applied is not guaranteed when specifying many fields in one PostCommentSort object. */
export type PostCommentSort = {
  id?: InputMaybe<SortDirection>;
  text?: InputMaybe<SortDirection>;
};

export type PostCommentUpdateInput = {
  author?: InputMaybe<PostCommentAuthorUpdateFieldInput>;
  commentOfPost?: InputMaybe<PostCommentCommentOfPostUpdateFieldInput>;
  id?: InputMaybe<Scalars['String']['input']>;
  replies?: InputMaybe<Array<PostCommentRepliesUpdateFieldInput>>;
  text?: InputMaybe<Scalars['String']['input']>;
};

export type PostCommentUserAuthorAggregationSelection = {
  __typename?: 'PostCommentUserAuthorAggregationSelection';
  count: Scalars['Int']['output'];
  node?: Maybe<PostCommentUserAuthorNodeAggregateSelection>;
};

export type PostCommentUserAuthorNodeAggregateSelection = {
  __typename?: 'PostCommentUserAuthorNodeAggregateSelection';
  dob: DateTimeAggregateSelection;
  email: StringAggregateSelection;
  id: StringAggregateSelection;
  name: StringAggregateSelection;
  username: StringAggregateSelection;
};

export type PostCommentWhere = {
  AND?: InputMaybe<Array<PostCommentWhere>>;
  NOT?: InputMaybe<PostCommentWhere>;
  OR?: InputMaybe<Array<PostCommentWhere>>;
  author?: InputMaybe<UserWhere>;
  authorAggregate?: InputMaybe<PostCommentAuthorAggregateInput>;
  authorConnection?: InputMaybe<CommentAuthorConnectionWhere>;
  authorConnection_NOT?: InputMaybe<CommentAuthorConnectionWhere>;
  author_NOT?: InputMaybe<UserWhere>;
  commentOfPost?: InputMaybe<PostWhere>;
  commentOfPostAggregate?: InputMaybe<PostCommentCommentOfPostAggregateInput>;
  commentOfPostConnection?: InputMaybe<PostCommentCommentOfPostConnectionWhere>;
  commentOfPostConnection_NOT?: InputMaybe<PostCommentCommentOfPostConnectionWhere>;
  commentOfPost_NOT?: InputMaybe<PostWhere>;
  id?: InputMaybe<Scalars['String']['input']>;
  id_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  id_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  id_IN?: InputMaybe<Array<Scalars['String']['input']>>;
  id_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
  repliesAggregate?: InputMaybe<PostCommentRepliesAggregateInput>;
  /** Return PostComments where all of the related CommentRepliesConnections match this filter */
  repliesConnection_ALL?: InputMaybe<CommentRepliesConnectionWhere>;
  /** Return PostComments where none of the related CommentRepliesConnections match this filter */
  repliesConnection_NONE?: InputMaybe<CommentRepliesConnectionWhere>;
  /** Return PostComments where one of the related CommentRepliesConnections match this filter */
  repliesConnection_SINGLE?: InputMaybe<CommentRepliesConnectionWhere>;
  /** Return PostComments where some of the related CommentRepliesConnections match this filter */
  repliesConnection_SOME?: InputMaybe<CommentRepliesConnectionWhere>;
  /** Return PostComments where all of the related Comments match this filter */
  replies_ALL?: InputMaybe<CommentWhere>;
  /** Return PostComments where none of the related Comments match this filter */
  replies_NONE?: InputMaybe<CommentWhere>;
  /** Return PostComments where one of the related Comments match this filter */
  replies_SINGLE?: InputMaybe<CommentWhere>;
  /** Return PostComments where some of the related Comments match this filter */
  replies_SOME?: InputMaybe<CommentWhere>;
  text?: InputMaybe<Scalars['String']['input']>;
  text_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  text_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  text_IN?: InputMaybe<Array<Scalars['String']['input']>>;
  text_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
};

export type PostCommentsAggregateInput = {
  AND?: InputMaybe<Array<PostCommentsAggregateInput>>;
  NOT?: InputMaybe<PostCommentsAggregateInput>;
  OR?: InputMaybe<Array<PostCommentsAggregateInput>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  node?: InputMaybe<PostCommentsNodeAggregationWhereInput>;
};

export type PostCommentsConnectFieldInput = {
  connect?: InputMaybe<CommentConnectInput>;
  where?: InputMaybe<CommentConnectWhere>;
};

export type PostCommentsConnection = {
  __typename?: 'PostCommentsConnection';
  edges: Array<PostCommentsRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type PostCommentsConnectionSort = {
  node?: InputMaybe<CommentSort>;
};

export type PostCommentsConnectionWhere = {
  AND?: InputMaybe<Array<PostCommentsConnectionWhere>>;
  NOT?: InputMaybe<PostCommentsConnectionWhere>;
  OR?: InputMaybe<Array<PostCommentsConnectionWhere>>;
  node?: InputMaybe<CommentWhere>;
};

export type PostCommentsCreateFieldInput = {
  node: CommentCreateInput;
};

export type PostCommentsDeleteFieldInput = {
  delete?: InputMaybe<CommentDeleteInput>;
  where?: InputMaybe<PostCommentsConnectionWhere>;
};

export type PostCommentsDisconnectFieldInput = {
  disconnect?: InputMaybe<CommentDisconnectInput>;
  where?: InputMaybe<PostCommentsConnectionWhere>;
};

export type PostCommentsFieldInput = {
  connect?: InputMaybe<Array<PostCommentsConnectFieldInput>>;
  create?: InputMaybe<Array<PostCommentsCreateFieldInput>>;
};

export type PostCommentsNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<PostCommentsNodeAggregationWhereInput>>;
  NOT?: InputMaybe<PostCommentsNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<PostCommentsNodeAggregationWhereInput>>;
  id_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  id_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  id_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  id_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  id_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  id_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  id_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  id_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  id_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  id_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  id_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  id_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  id_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  id_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  id_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  text_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  text_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  text_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  text_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  text_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  text_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  text_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  text_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  text_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  text_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  text_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  text_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  text_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  text_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  text_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
};

export type PostCommentsRelationship = {
  __typename?: 'PostCommentsRelationship';
  cursor: Scalars['String']['output'];
  node: Comment;
};

export type PostCommentsUpdateConnectionInput = {
  node?: InputMaybe<CommentUpdateInput>;
};

export type PostCommentsUpdateFieldInput = {
  connect?: InputMaybe<Array<PostCommentsConnectFieldInput>>;
  create?: InputMaybe<Array<PostCommentsCreateFieldInput>>;
  delete?: InputMaybe<Array<PostCommentsDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<PostCommentsDisconnectFieldInput>>;
  update?: InputMaybe<PostCommentsUpdateConnectionInput>;
  where?: InputMaybe<PostCommentsConnectionWhere>;
};

export type PostConnectInput = {
  comments?: InputMaybe<Array<PostCommentsConnectFieldInput>>;
  creatorOfPost?: InputMaybe<PostCreatorOfPostConnectFieldInput>;
};

export type PostConnectWhere = {
  node: PostWhere;
};

export type PostCreateInput = {
  comments?: InputMaybe<PostCommentsFieldInput>;
  creatorOfPost?: InputMaybe<PostCreatorOfPostFieldInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['String']['input'];
  url: Scalars['String']['input'];
};

export type PostCreatorOfPostAggregateInput = {
  AND?: InputMaybe<Array<PostCreatorOfPostAggregateInput>>;
  NOT?: InputMaybe<PostCreatorOfPostAggregateInput>;
  OR?: InputMaybe<Array<PostCreatorOfPostAggregateInput>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  node?: InputMaybe<PostCreatorOfPostNodeAggregationWhereInput>;
};

export type PostCreatorOfPostConnectFieldInput = {
  connect?: InputMaybe<UserConnectInput>;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars['Boolean']['input'];
  where?: InputMaybe<UserConnectWhere>;
};

export type PostCreatorOfPostConnection = {
  __typename?: 'PostCreatorOfPostConnection';
  edges: Array<PostCreatorOfPostRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type PostCreatorOfPostConnectionSort = {
  node?: InputMaybe<UserSort>;
};

export type PostCreatorOfPostConnectionWhere = {
  AND?: InputMaybe<Array<PostCreatorOfPostConnectionWhere>>;
  NOT?: InputMaybe<PostCreatorOfPostConnectionWhere>;
  OR?: InputMaybe<Array<PostCreatorOfPostConnectionWhere>>;
  node?: InputMaybe<UserWhere>;
};

export type PostCreatorOfPostCreateFieldInput = {
  node: UserCreateInput;
};

export type PostCreatorOfPostDeleteFieldInput = {
  delete?: InputMaybe<UserDeleteInput>;
  where?: InputMaybe<PostCreatorOfPostConnectionWhere>;
};

export type PostCreatorOfPostDisconnectFieldInput = {
  disconnect?: InputMaybe<UserDisconnectInput>;
  where?: InputMaybe<PostCreatorOfPostConnectionWhere>;
};

export type PostCreatorOfPostFieldInput = {
  connect?: InputMaybe<PostCreatorOfPostConnectFieldInput>;
  create?: InputMaybe<PostCreatorOfPostCreateFieldInput>;
};

export type PostCreatorOfPostNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<PostCreatorOfPostNodeAggregationWhereInput>>;
  NOT?: InputMaybe<PostCreatorOfPostNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<PostCreatorOfPostNodeAggregationWhereInput>>;
  dob_MAX_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  dob_MAX_GT?: InputMaybe<Scalars['DateTime']['input']>;
  dob_MAX_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  dob_MAX_LT?: InputMaybe<Scalars['DateTime']['input']>;
  dob_MAX_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  dob_MIN_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  dob_MIN_GT?: InputMaybe<Scalars['DateTime']['input']>;
  dob_MIN_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  dob_MIN_LT?: InputMaybe<Scalars['DateTime']['input']>;
  dob_MIN_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  email_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  email_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  email_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  email_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  email_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  email_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  email_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  email_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  email_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  email_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  email_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  email_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  email_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  email_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  email_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  id_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  id_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  id_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  id_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  id_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  id_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  id_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  id_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  id_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  id_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  id_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  id_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  id_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  id_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  id_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  name_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  name_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  username_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  username_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  username_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  username_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  username_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  username_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  username_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  username_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  username_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  username_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  username_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  username_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  username_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  username_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  username_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
};

export type PostCreatorOfPostRelationship = {
  __typename?: 'PostCreatorOfPostRelationship';
  cursor: Scalars['String']['output'];
  node: User;
};

export type PostCreatorOfPostUpdateConnectionInput = {
  node?: InputMaybe<UserUpdateInput>;
};

export type PostCreatorOfPostUpdateFieldInput = {
  connect?: InputMaybe<PostCreatorOfPostConnectFieldInput>;
  create?: InputMaybe<PostCreatorOfPostCreateFieldInput>;
  delete?: InputMaybe<PostCreatorOfPostDeleteFieldInput>;
  disconnect?: InputMaybe<PostCreatorOfPostDisconnectFieldInput>;
  update?: InputMaybe<PostCreatorOfPostUpdateConnectionInput>;
  where?: InputMaybe<PostCreatorOfPostConnectionWhere>;
};

export type PostDeleteInput = {
  comments?: InputMaybe<Array<PostCommentsDeleteFieldInput>>;
  creatorOfPost?: InputMaybe<PostCreatorOfPostDeleteFieldInput>;
};

export type PostDisconnectInput = {
  comments?: InputMaybe<Array<PostCommentsDisconnectFieldInput>>;
  creatorOfPost?: InputMaybe<PostCreatorOfPostDisconnectFieldInput>;
};

export type PostEdge = {
  __typename?: 'PostEdge';
  cursor: Scalars['String']['output'];
  node: Post;
};

export type PostOptions = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  /** Specify one or more PostSort objects to sort Posts by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<PostSort>>;
};

export type PostRelationInput = {
  comments?: InputMaybe<Array<PostCommentsCreateFieldInput>>;
  creatorOfPost?: InputMaybe<PostCreatorOfPostCreateFieldInput>;
};

/** Fields to sort Posts by. The order in which sorts are applied is not guaranteed when specifying many fields in one PostSort object. */
export type PostSort = {
  description?: InputMaybe<SortDirection>;
  id?: InputMaybe<SortDirection>;
  url?: InputMaybe<SortDirection>;
};

export type PostUpdateInput = {
  comments?: InputMaybe<Array<PostCommentsUpdateFieldInput>>;
  creatorOfPost?: InputMaybe<PostCreatorOfPostUpdateFieldInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
};

export type PostUserCreatorOfPostAggregationSelection = {
  __typename?: 'PostUserCreatorOfPostAggregationSelection';
  count: Scalars['Int']['output'];
  node?: Maybe<PostUserCreatorOfPostNodeAggregateSelection>;
};

export type PostUserCreatorOfPostNodeAggregateSelection = {
  __typename?: 'PostUserCreatorOfPostNodeAggregateSelection';
  dob: DateTimeAggregateSelection;
  email: StringAggregateSelection;
  id: StringAggregateSelection;
  name: StringAggregateSelection;
  username: StringAggregateSelection;
};

export type PostWhere = {
  AND?: InputMaybe<Array<PostWhere>>;
  NOT?: InputMaybe<PostWhere>;
  OR?: InputMaybe<Array<PostWhere>>;
  commentsAggregate?: InputMaybe<PostCommentsAggregateInput>;
  /** Return Posts where all of the related PostCommentsConnections match this filter */
  commentsConnection_ALL?: InputMaybe<PostCommentsConnectionWhere>;
  /** Return Posts where none of the related PostCommentsConnections match this filter */
  commentsConnection_NONE?: InputMaybe<PostCommentsConnectionWhere>;
  /** Return Posts where one of the related PostCommentsConnections match this filter */
  commentsConnection_SINGLE?: InputMaybe<PostCommentsConnectionWhere>;
  /** Return Posts where some of the related PostCommentsConnections match this filter */
  commentsConnection_SOME?: InputMaybe<PostCommentsConnectionWhere>;
  /** Return Posts where all of the related Comments match this filter */
  comments_ALL?: InputMaybe<CommentWhere>;
  /** Return Posts where none of the related Comments match this filter */
  comments_NONE?: InputMaybe<CommentWhere>;
  /** Return Posts where one of the related Comments match this filter */
  comments_SINGLE?: InputMaybe<CommentWhere>;
  /** Return Posts where some of the related Comments match this filter */
  comments_SOME?: InputMaybe<CommentWhere>;
  creatorOfPost?: InputMaybe<UserWhere>;
  creatorOfPostAggregate?: InputMaybe<PostCreatorOfPostAggregateInput>;
  creatorOfPostConnection?: InputMaybe<PostCreatorOfPostConnectionWhere>;
  creatorOfPostConnection_NOT?: InputMaybe<PostCreatorOfPostConnectionWhere>;
  creatorOfPost_NOT?: InputMaybe<UserWhere>;
  description?: InputMaybe<Scalars['String']['input']>;
  description_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  description_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  description_IN?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  description_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  id_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  id_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  id_IN?: InputMaybe<Array<Scalars['String']['input']>>;
  id_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
  url_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  url_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  url_IN?: InputMaybe<Array<Scalars['String']['input']>>;
  url_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
};

export type PostsConnection = {
  __typename?: 'PostsConnection';
  edges: Array<PostEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type Query = {
  __typename?: 'Query';
  comments: Array<Comment>;
  commentsAggregate: CommentAggregateSelection;
  commentsConnection: CommentsConnection;
  postComments: Array<PostComment>;
  postCommentsAggregate: PostCommentAggregateSelection;
  postCommentsConnection: PostCommentsConnection;
  posts: Array<Post>;
  postsAggregate: PostAggregateSelection;
  postsConnection: PostsConnection;
  replyComments: Array<ReplyComment>;
  replyCommentsAggregate: ReplyCommentAggregateSelection;
  replyCommentsConnection: ReplyCommentsConnection;
  users: Array<User>;
  usersAggregate: UserAggregateSelection;
  usersConnection: UsersConnection;
};

export type QueryCommentsArgs = {
  options?: InputMaybe<CommentOptions>;
  where?: InputMaybe<CommentWhere>;
};

export type QueryCommentsAggregateArgs = {
  where?: InputMaybe<CommentWhere>;
};

export type QueryCommentsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<CommentSort>>>;
  where?: InputMaybe<CommentWhere>;
};

export type QueryPostCommentsArgs = {
  options?: InputMaybe<PostCommentOptions>;
  where?: InputMaybe<PostCommentWhere>;
};

export type QueryPostCommentsAggregateArgs = {
  where?: InputMaybe<PostCommentWhere>;
};

export type QueryPostCommentsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<PostCommentSort>>>;
  where?: InputMaybe<PostCommentWhere>;
};

export type QueryPostsArgs = {
  options?: InputMaybe<PostOptions>;
  where?: InputMaybe<PostWhere>;
};

export type QueryPostsAggregateArgs = {
  where?: InputMaybe<PostWhere>;
};

export type QueryPostsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<PostSort>>>;
  where?: InputMaybe<PostWhere>;
};

export type QueryReplyCommentsArgs = {
  options?: InputMaybe<ReplyCommentOptions>;
  where?: InputMaybe<ReplyCommentWhere>;
};

export type QueryReplyCommentsAggregateArgs = {
  where?: InputMaybe<ReplyCommentWhere>;
};

export type QueryReplyCommentsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<ReplyCommentSort>>>;
  where?: InputMaybe<ReplyCommentWhere>;
};

export type QueryUsersArgs = {
  options?: InputMaybe<UserOptions>;
  where?: InputMaybe<UserWhere>;
};

export type QueryUsersAggregateArgs = {
  where?: InputMaybe<UserWhere>;
};

export type QueryUsersConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<UserSort>>>;
  where?: InputMaybe<UserWhere>;
};

export type ReplyComment = Comment & {
  __typename?: 'ReplyComment';
  author: User;
  authorAggregate?: Maybe<ReplyCommentUserAuthorAggregationSelection>;
  authorConnection: CommentAuthorConnection;
  id: Scalars['String']['output'];
  replies: Array<Comment>;
  repliesAggregate?: Maybe<ReplyCommentCommentRepliesAggregationSelection>;
  repliesConnection: CommentRepliesConnection;
  replyOfComment: Comment;
  replyOfCommentAggregate?: Maybe<ReplyCommentCommentReplyOfCommentAggregationSelection>;
  replyOfCommentConnection: ReplyCommentReplyOfCommentConnection;
  text: Scalars['String']['output'];
};

export type ReplyCommentAuthorArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<UserOptions>;
  where?: InputMaybe<UserWhere>;
};

export type ReplyCommentAuthorAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<UserWhere>;
};

export type ReplyCommentAuthorConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<CommentAuthorConnectionSort>>;
  where?: InputMaybe<CommentAuthorConnectionWhere>;
};

export type ReplyCommentRepliesArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<CommentOptions>;
  where?: InputMaybe<CommentWhere>;
};

export type ReplyCommentRepliesAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<CommentWhere>;
};

export type ReplyCommentRepliesConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<CommentRepliesConnectionSort>>;
  where?: InputMaybe<CommentRepliesConnectionWhere>;
};

export type ReplyCommentReplyOfCommentArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<CommentOptions>;
  where?: InputMaybe<CommentWhere>;
};

export type ReplyCommentReplyOfCommentAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<CommentWhere>;
};

export type ReplyCommentReplyOfCommentConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<ReplyCommentReplyOfCommentConnectionSort>>;
  where?: InputMaybe<ReplyCommentReplyOfCommentConnectionWhere>;
};

export type ReplyCommentAggregateSelection = {
  __typename?: 'ReplyCommentAggregateSelection';
  count: Scalars['Int']['output'];
  id: StringAggregateSelection;
  text: StringAggregateSelection;
};

export type ReplyCommentAuthorAggregateInput = {
  AND?: InputMaybe<Array<ReplyCommentAuthorAggregateInput>>;
  NOT?: InputMaybe<ReplyCommentAuthorAggregateInput>;
  OR?: InputMaybe<Array<ReplyCommentAuthorAggregateInput>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  node?: InputMaybe<ReplyCommentAuthorNodeAggregationWhereInput>;
};

export type ReplyCommentAuthorConnectFieldInput = {
  connect?: InputMaybe<UserConnectInput>;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars['Boolean']['input'];
  where?: InputMaybe<UserConnectWhere>;
};

export type ReplyCommentAuthorCreateFieldInput = {
  node: UserCreateInput;
};

export type ReplyCommentAuthorFieldInput = {
  connect?: InputMaybe<ReplyCommentAuthorConnectFieldInput>;
  create?: InputMaybe<ReplyCommentAuthorCreateFieldInput>;
};

export type ReplyCommentAuthorNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<ReplyCommentAuthorNodeAggregationWhereInput>>;
  NOT?: InputMaybe<ReplyCommentAuthorNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<ReplyCommentAuthorNodeAggregationWhereInput>>;
  dob_MAX_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  dob_MAX_GT?: InputMaybe<Scalars['DateTime']['input']>;
  dob_MAX_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  dob_MAX_LT?: InputMaybe<Scalars['DateTime']['input']>;
  dob_MAX_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  dob_MIN_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  dob_MIN_GT?: InputMaybe<Scalars['DateTime']['input']>;
  dob_MIN_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  dob_MIN_LT?: InputMaybe<Scalars['DateTime']['input']>;
  dob_MIN_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  email_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  email_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  email_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  email_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  email_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  email_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  email_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  email_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  email_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  email_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  email_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  email_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  email_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  email_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  email_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  id_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  id_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  id_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  id_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  id_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  id_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  id_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  id_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  id_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  id_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  id_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  id_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  id_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  id_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  id_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  name_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  name_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  username_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  username_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  username_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  username_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  username_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  username_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  username_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  username_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  username_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  username_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  username_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  username_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  username_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  username_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  username_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
};

export type ReplyCommentAuthorUpdateConnectionInput = {
  node?: InputMaybe<UserUpdateInput>;
};

export type ReplyCommentAuthorUpdateFieldInput = {
  connect?: InputMaybe<ReplyCommentAuthorConnectFieldInput>;
  create?: InputMaybe<ReplyCommentAuthorCreateFieldInput>;
  delete?: InputMaybe<CommentAuthorDeleteFieldInput>;
  disconnect?: InputMaybe<CommentAuthorDisconnectFieldInput>;
  update?: InputMaybe<ReplyCommentAuthorUpdateConnectionInput>;
  where?: InputMaybe<CommentAuthorConnectionWhere>;
};

export type ReplyCommentCommentRepliesAggregationSelection = {
  __typename?: 'ReplyCommentCommentRepliesAggregationSelection';
  count: Scalars['Int']['output'];
  node?: Maybe<ReplyCommentCommentRepliesNodeAggregateSelection>;
};

export type ReplyCommentCommentRepliesNodeAggregateSelection = {
  __typename?: 'ReplyCommentCommentRepliesNodeAggregateSelection';
  id: StringAggregateSelection;
  text: StringAggregateSelection;
};

export type ReplyCommentCommentReplyOfCommentAggregationSelection = {
  __typename?: 'ReplyCommentCommentReplyOfCommentAggregationSelection';
  count: Scalars['Int']['output'];
  node?: Maybe<ReplyCommentCommentReplyOfCommentNodeAggregateSelection>;
};

export type ReplyCommentCommentReplyOfCommentNodeAggregateSelection = {
  __typename?: 'ReplyCommentCommentReplyOfCommentNodeAggregateSelection';
  id: StringAggregateSelection;
  text: StringAggregateSelection;
};

export type ReplyCommentConnectInput = {
  author?: InputMaybe<ReplyCommentAuthorConnectFieldInput>;
  replies?: InputMaybe<Array<ReplyCommentRepliesConnectFieldInput>>;
  replyOfComment?: InputMaybe<ReplyCommentReplyOfCommentConnectFieldInput>;
};

export type ReplyCommentCreateInput = {
  author?: InputMaybe<ReplyCommentAuthorFieldInput>;
  id: Scalars['String']['input'];
  replies?: InputMaybe<ReplyCommentRepliesFieldInput>;
  replyOfComment?: InputMaybe<ReplyCommentReplyOfCommentFieldInput>;
  text: Scalars['String']['input'];
};

export type ReplyCommentDeleteInput = {
  author?: InputMaybe<CommentAuthorDeleteFieldInput>;
  replies?: InputMaybe<Array<ReplyCommentRepliesDeleteFieldInput>>;
  replyOfComment?: InputMaybe<ReplyCommentReplyOfCommentDeleteFieldInput>;
};

export type ReplyCommentDisconnectInput = {
  author?: InputMaybe<CommentAuthorDisconnectFieldInput>;
  replies?: InputMaybe<Array<ReplyCommentRepliesDisconnectFieldInput>>;
  replyOfComment?: InputMaybe<ReplyCommentReplyOfCommentDisconnectFieldInput>;
};

export type ReplyCommentEdge = {
  __typename?: 'ReplyCommentEdge';
  cursor: Scalars['String']['output'];
  node: ReplyComment;
};

export type ReplyCommentOptions = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  /** Specify one or more ReplyCommentSort objects to sort ReplyComments by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<ReplyCommentSort>>;
};

export type ReplyCommentRelationInput = {
  author?: InputMaybe<ReplyCommentAuthorCreateFieldInput>;
  replies?: InputMaybe<Array<ReplyCommentRepliesCreateFieldInput>>;
  replyOfComment?: InputMaybe<ReplyCommentReplyOfCommentCreateFieldInput>;
};

export type ReplyCommentRepliesAggregateInput = {
  AND?: InputMaybe<Array<ReplyCommentRepliesAggregateInput>>;
  NOT?: InputMaybe<ReplyCommentRepliesAggregateInput>;
  OR?: InputMaybe<Array<ReplyCommentRepliesAggregateInput>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  node?: InputMaybe<ReplyCommentRepliesNodeAggregationWhereInput>;
};

export type ReplyCommentRepliesConnectFieldInput = {
  connect?: InputMaybe<CommentConnectInput>;
  where?: InputMaybe<CommentConnectWhere>;
};

export type ReplyCommentRepliesCreateFieldInput = {
  node: CommentCreateInput;
};

export type ReplyCommentRepliesDeleteFieldInput = {
  delete?: InputMaybe<CommentDeleteInput>;
  where?: InputMaybe<CommentRepliesConnectionWhere>;
};

export type ReplyCommentRepliesDisconnectFieldInput = {
  disconnect?: InputMaybe<CommentDisconnectInput>;
  where?: InputMaybe<CommentRepliesConnectionWhere>;
};

export type ReplyCommentRepliesFieldInput = {
  connect?: InputMaybe<Array<ReplyCommentRepliesConnectFieldInput>>;
  create?: InputMaybe<Array<ReplyCommentRepliesCreateFieldInput>>;
};

export type ReplyCommentRepliesNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<ReplyCommentRepliesNodeAggregationWhereInput>>;
  NOT?: InputMaybe<ReplyCommentRepliesNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<ReplyCommentRepliesNodeAggregationWhereInput>>;
  id_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  id_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  id_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  id_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  id_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  id_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  id_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  id_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  id_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  id_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  id_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  id_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  id_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  id_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  id_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  text_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  text_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  text_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  text_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  text_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  text_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  text_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  text_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  text_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  text_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  text_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  text_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  text_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  text_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  text_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
};

export type ReplyCommentRepliesUpdateConnectionInput = {
  node?: InputMaybe<CommentUpdateInput>;
};

export type ReplyCommentRepliesUpdateFieldInput = {
  connect?: InputMaybe<Array<ReplyCommentRepliesConnectFieldInput>>;
  create?: InputMaybe<Array<ReplyCommentRepliesCreateFieldInput>>;
  delete?: InputMaybe<Array<ReplyCommentRepliesDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<ReplyCommentRepliesDisconnectFieldInput>>;
  update?: InputMaybe<ReplyCommentRepliesUpdateConnectionInput>;
  where?: InputMaybe<CommentRepliesConnectionWhere>;
};

export type ReplyCommentReplyOfCommentAggregateInput = {
  AND?: InputMaybe<Array<ReplyCommentReplyOfCommentAggregateInput>>;
  NOT?: InputMaybe<ReplyCommentReplyOfCommentAggregateInput>;
  OR?: InputMaybe<Array<ReplyCommentReplyOfCommentAggregateInput>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  node?: InputMaybe<ReplyCommentReplyOfCommentNodeAggregationWhereInput>;
};

export type ReplyCommentReplyOfCommentConnectFieldInput = {
  connect?: InputMaybe<CommentConnectInput>;
  where?: InputMaybe<CommentConnectWhere>;
};

export type ReplyCommentReplyOfCommentConnection = {
  __typename?: 'ReplyCommentReplyOfCommentConnection';
  edges: Array<ReplyCommentReplyOfCommentRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type ReplyCommentReplyOfCommentConnectionSort = {
  node?: InputMaybe<CommentSort>;
};

export type ReplyCommentReplyOfCommentConnectionWhere = {
  AND?: InputMaybe<Array<ReplyCommentReplyOfCommentConnectionWhere>>;
  NOT?: InputMaybe<ReplyCommentReplyOfCommentConnectionWhere>;
  OR?: InputMaybe<Array<ReplyCommentReplyOfCommentConnectionWhere>>;
  node?: InputMaybe<CommentWhere>;
};

export type ReplyCommentReplyOfCommentCreateFieldInput = {
  node: CommentCreateInput;
};

export type ReplyCommentReplyOfCommentDeleteFieldInput = {
  delete?: InputMaybe<CommentDeleteInput>;
  where?: InputMaybe<ReplyCommentReplyOfCommentConnectionWhere>;
};

export type ReplyCommentReplyOfCommentDisconnectFieldInput = {
  disconnect?: InputMaybe<CommentDisconnectInput>;
  where?: InputMaybe<ReplyCommentReplyOfCommentConnectionWhere>;
};

export type ReplyCommentReplyOfCommentFieldInput = {
  connect?: InputMaybe<ReplyCommentReplyOfCommentConnectFieldInput>;
  create?: InputMaybe<ReplyCommentReplyOfCommentCreateFieldInput>;
};

export type ReplyCommentReplyOfCommentNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<ReplyCommentReplyOfCommentNodeAggregationWhereInput>>;
  NOT?: InputMaybe<ReplyCommentReplyOfCommentNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<ReplyCommentReplyOfCommentNodeAggregationWhereInput>>;
  id_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  id_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  id_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  id_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  id_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  id_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  id_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  id_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  id_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  id_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  id_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  id_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  id_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  id_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  id_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  text_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  text_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  text_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  text_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  text_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  text_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  text_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  text_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  text_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  text_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  text_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  text_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  text_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  text_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  text_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
};

export type ReplyCommentReplyOfCommentRelationship = {
  __typename?: 'ReplyCommentReplyOfCommentRelationship';
  cursor: Scalars['String']['output'];
  node: Comment;
};

export type ReplyCommentReplyOfCommentUpdateConnectionInput = {
  node?: InputMaybe<CommentUpdateInput>;
};

export type ReplyCommentReplyOfCommentUpdateFieldInput = {
  connect?: InputMaybe<ReplyCommentReplyOfCommentConnectFieldInput>;
  create?: InputMaybe<ReplyCommentReplyOfCommentCreateFieldInput>;
  delete?: InputMaybe<ReplyCommentReplyOfCommentDeleteFieldInput>;
  disconnect?: InputMaybe<ReplyCommentReplyOfCommentDisconnectFieldInput>;
  update?: InputMaybe<ReplyCommentReplyOfCommentUpdateConnectionInput>;
  where?: InputMaybe<ReplyCommentReplyOfCommentConnectionWhere>;
};

/** Fields to sort ReplyComments by. The order in which sorts are applied is not guaranteed when specifying many fields in one ReplyCommentSort object. */
export type ReplyCommentSort = {
  id?: InputMaybe<SortDirection>;
  text?: InputMaybe<SortDirection>;
};

export type ReplyCommentUpdateInput = {
  author?: InputMaybe<ReplyCommentAuthorUpdateFieldInput>;
  id?: InputMaybe<Scalars['String']['input']>;
  replies?: InputMaybe<Array<ReplyCommentRepliesUpdateFieldInput>>;
  replyOfComment?: InputMaybe<ReplyCommentReplyOfCommentUpdateFieldInput>;
  text?: InputMaybe<Scalars['String']['input']>;
};

export type ReplyCommentUserAuthorAggregationSelection = {
  __typename?: 'ReplyCommentUserAuthorAggregationSelection';
  count: Scalars['Int']['output'];
  node?: Maybe<ReplyCommentUserAuthorNodeAggregateSelection>;
};

export type ReplyCommentUserAuthorNodeAggregateSelection = {
  __typename?: 'ReplyCommentUserAuthorNodeAggregateSelection';
  dob: DateTimeAggregateSelection;
  email: StringAggregateSelection;
  id: StringAggregateSelection;
  name: StringAggregateSelection;
  username: StringAggregateSelection;
};

export type ReplyCommentWhere = {
  AND?: InputMaybe<Array<ReplyCommentWhere>>;
  NOT?: InputMaybe<ReplyCommentWhere>;
  OR?: InputMaybe<Array<ReplyCommentWhere>>;
  author?: InputMaybe<UserWhere>;
  authorAggregate?: InputMaybe<ReplyCommentAuthorAggregateInput>;
  authorConnection?: InputMaybe<CommentAuthorConnectionWhere>;
  authorConnection_NOT?: InputMaybe<CommentAuthorConnectionWhere>;
  author_NOT?: InputMaybe<UserWhere>;
  id?: InputMaybe<Scalars['String']['input']>;
  id_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  id_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  id_IN?: InputMaybe<Array<Scalars['String']['input']>>;
  id_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
  repliesAggregate?: InputMaybe<ReplyCommentRepliesAggregateInput>;
  /** Return ReplyComments where all of the related CommentRepliesConnections match this filter */
  repliesConnection_ALL?: InputMaybe<CommentRepliesConnectionWhere>;
  /** Return ReplyComments where none of the related CommentRepliesConnections match this filter */
  repliesConnection_NONE?: InputMaybe<CommentRepliesConnectionWhere>;
  /** Return ReplyComments where one of the related CommentRepliesConnections match this filter */
  repliesConnection_SINGLE?: InputMaybe<CommentRepliesConnectionWhere>;
  /** Return ReplyComments where some of the related CommentRepliesConnections match this filter */
  repliesConnection_SOME?: InputMaybe<CommentRepliesConnectionWhere>;
  /** Return ReplyComments where all of the related Comments match this filter */
  replies_ALL?: InputMaybe<CommentWhere>;
  /** Return ReplyComments where none of the related Comments match this filter */
  replies_NONE?: InputMaybe<CommentWhere>;
  /** Return ReplyComments where one of the related Comments match this filter */
  replies_SINGLE?: InputMaybe<CommentWhere>;
  /** Return ReplyComments where some of the related Comments match this filter */
  replies_SOME?: InputMaybe<CommentWhere>;
  replyOfComment?: InputMaybe<CommentWhere>;
  replyOfCommentAggregate?: InputMaybe<ReplyCommentReplyOfCommentAggregateInput>;
  replyOfCommentConnection?: InputMaybe<ReplyCommentReplyOfCommentConnectionWhere>;
  replyOfCommentConnection_NOT?: InputMaybe<ReplyCommentReplyOfCommentConnectionWhere>;
  replyOfComment_NOT?: InputMaybe<CommentWhere>;
  text?: InputMaybe<Scalars['String']['input']>;
  text_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  text_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  text_IN?: InputMaybe<Array<Scalars['String']['input']>>;
  text_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
};

export type ReplyCommentsConnection = {
  __typename?: 'ReplyCommentsConnection';
  edges: Array<ReplyCommentEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

/** An enum for sorting in either ascending or descending order. */
export enum SortDirection {
  /** Sort by field values in ascending order. */
  Asc = 'ASC',
  /** Sort by field values in descending order. */
  Desc = 'DESC',
}

export type StringAggregateSelection = {
  __typename?: 'StringAggregateSelection';
  longest?: Maybe<Scalars['String']['output']>;
  shortest?: Maybe<Scalars['String']['output']>;
};

/** Information about the number of nodes and relationships created and deleted during an update mutation */
export type UpdateInfo = {
  __typename?: 'UpdateInfo';
  /** @deprecated This field has been deprecated because bookmarks are now handled by the driver. */
  bookmark?: Maybe<Scalars['String']['output']>;
  nodesCreated: Scalars['Int']['output'];
  nodesDeleted: Scalars['Int']['output'];
  relationshipsCreated: Scalars['Int']['output'];
  relationshipsDeleted: Scalars['Int']['output'];
};

export type UpdatePostCommentsMutationResponse = {
  __typename?: 'UpdatePostCommentsMutationResponse';
  info: UpdateInfo;
  postComments: Array<PostComment>;
};

export type UpdatePostsMutationResponse = {
  __typename?: 'UpdatePostsMutationResponse';
  info: UpdateInfo;
  posts: Array<Post>;
};

export type UpdateReplyCommentsMutationResponse = {
  __typename?: 'UpdateReplyCommentsMutationResponse';
  info: UpdateInfo;
  replyComments: Array<ReplyComment>;
};

export type UpdateUsersMutationResponse = {
  __typename?: 'UpdateUsersMutationResponse';
  info: UpdateInfo;
  users: Array<User>;
};

export type User = {
  __typename?: 'User';
  authorOfComments: Array<Comment>;
  authorOfCommentsAggregate?: Maybe<UserCommentAuthorOfCommentsAggregationSelection>;
  authorOfCommentsConnection: UserAuthorOfCommentsConnection;
  dob?: Maybe<Scalars['DateTime']['output']>;
  email: Scalars['String']['output'];
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
  posts: Array<Post>;
  postsAggregate?: Maybe<UserPostPostsAggregationSelection>;
  postsConnection: UserPostsConnection;
  username: Scalars['String']['output'];
};

export type UserAuthorOfCommentsArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<CommentOptions>;
  where?: InputMaybe<CommentWhere>;
};

export type UserAuthorOfCommentsAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<CommentWhere>;
};

export type UserAuthorOfCommentsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<UserAuthorOfCommentsConnectionSort>>;
  where?: InputMaybe<UserAuthorOfCommentsConnectionWhere>;
};

export type UserPostsArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<PostOptions>;
  where?: InputMaybe<PostWhere>;
};

export type UserPostsAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<PostWhere>;
};

export type UserPostsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<UserPostsConnectionSort>>;
  where?: InputMaybe<UserPostsConnectionWhere>;
};

export type UserAggregateSelection = {
  __typename?: 'UserAggregateSelection';
  count: Scalars['Int']['output'];
  dob: DateTimeAggregateSelection;
  email: StringAggregateSelection;
  id: StringAggregateSelection;
  name: StringAggregateSelection;
  username: StringAggregateSelection;
};

export type UserAuthorOfCommentsAggregateInput = {
  AND?: InputMaybe<Array<UserAuthorOfCommentsAggregateInput>>;
  NOT?: InputMaybe<UserAuthorOfCommentsAggregateInput>;
  OR?: InputMaybe<Array<UserAuthorOfCommentsAggregateInput>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  node?: InputMaybe<UserAuthorOfCommentsNodeAggregationWhereInput>;
};

export type UserAuthorOfCommentsConnectFieldInput = {
  connect?: InputMaybe<CommentConnectInput>;
  where?: InputMaybe<CommentConnectWhere>;
};

export type UserAuthorOfCommentsConnection = {
  __typename?: 'UserAuthorOfCommentsConnection';
  edges: Array<UserAuthorOfCommentsRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type UserAuthorOfCommentsConnectionSort = {
  node?: InputMaybe<CommentSort>;
};

export type UserAuthorOfCommentsConnectionWhere = {
  AND?: InputMaybe<Array<UserAuthorOfCommentsConnectionWhere>>;
  NOT?: InputMaybe<UserAuthorOfCommentsConnectionWhere>;
  OR?: InputMaybe<Array<UserAuthorOfCommentsConnectionWhere>>;
  node?: InputMaybe<CommentWhere>;
};

export type UserAuthorOfCommentsCreateFieldInput = {
  node: CommentCreateInput;
};

export type UserAuthorOfCommentsDeleteFieldInput = {
  delete?: InputMaybe<CommentDeleteInput>;
  where?: InputMaybe<UserAuthorOfCommentsConnectionWhere>;
};

export type UserAuthorOfCommentsDisconnectFieldInput = {
  disconnect?: InputMaybe<CommentDisconnectInput>;
  where?: InputMaybe<UserAuthorOfCommentsConnectionWhere>;
};

export type UserAuthorOfCommentsFieldInput = {
  connect?: InputMaybe<Array<UserAuthorOfCommentsConnectFieldInput>>;
  create?: InputMaybe<Array<UserAuthorOfCommentsCreateFieldInput>>;
};

export type UserAuthorOfCommentsNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<UserAuthorOfCommentsNodeAggregationWhereInput>>;
  NOT?: InputMaybe<UserAuthorOfCommentsNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<UserAuthorOfCommentsNodeAggregationWhereInput>>;
  id_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  id_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  id_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  id_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  id_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  id_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  id_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  id_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  id_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  id_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  id_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  id_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  id_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  id_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  id_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  text_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  text_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  text_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  text_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  text_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  text_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  text_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  text_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  text_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  text_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  text_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  text_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  text_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  text_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  text_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
};

export type UserAuthorOfCommentsRelationship = {
  __typename?: 'UserAuthorOfCommentsRelationship';
  cursor: Scalars['String']['output'];
  node: Comment;
};

export type UserAuthorOfCommentsUpdateConnectionInput = {
  node?: InputMaybe<CommentUpdateInput>;
};

export type UserAuthorOfCommentsUpdateFieldInput = {
  connect?: InputMaybe<Array<UserAuthorOfCommentsConnectFieldInput>>;
  create?: InputMaybe<Array<UserAuthorOfCommentsCreateFieldInput>>;
  delete?: InputMaybe<Array<UserAuthorOfCommentsDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<UserAuthorOfCommentsDisconnectFieldInput>>;
  update?: InputMaybe<UserAuthorOfCommentsUpdateConnectionInput>;
  where?: InputMaybe<UserAuthorOfCommentsConnectionWhere>;
};

export type UserCommentAuthorOfCommentsAggregationSelection = {
  __typename?: 'UserCommentAuthorOfCommentsAggregationSelection';
  count: Scalars['Int']['output'];
  node?: Maybe<UserCommentAuthorOfCommentsNodeAggregateSelection>;
};

export type UserCommentAuthorOfCommentsNodeAggregateSelection = {
  __typename?: 'UserCommentAuthorOfCommentsNodeAggregateSelection';
  id: StringAggregateSelection;
  text: StringAggregateSelection;
};

export type UserConnectInput = {
  authorOfComments?: InputMaybe<Array<UserAuthorOfCommentsConnectFieldInput>>;
  posts?: InputMaybe<Array<UserPostsConnectFieldInput>>;
};

export type UserConnectWhere = {
  node: UserWhere;
};

export type UserCreateInput = {
  authorOfComments?: InputMaybe<UserAuthorOfCommentsFieldInput>;
  dob?: InputMaybe<Scalars['DateTime']['input']>;
  email: Scalars['String']['input'];
  id: Scalars['String']['input'];
  name: Scalars['String']['input'];
  posts?: InputMaybe<UserPostsFieldInput>;
  username: Scalars['String']['input'];
};

export type UserDeleteInput = {
  authorOfComments?: InputMaybe<Array<UserAuthorOfCommentsDeleteFieldInput>>;
  posts?: InputMaybe<Array<UserPostsDeleteFieldInput>>;
};

export type UserDisconnectInput = {
  authorOfComments?: InputMaybe<
    Array<UserAuthorOfCommentsDisconnectFieldInput>
  >;
  posts?: InputMaybe<Array<UserPostsDisconnectFieldInput>>;
};

export type UserEdge = {
  __typename?: 'UserEdge';
  cursor: Scalars['String']['output'];
  node: User;
};

export type UserOptions = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  /** Specify one or more UserSort objects to sort Users by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<UserSort>>;
};

export type UserPostPostsAggregationSelection = {
  __typename?: 'UserPostPostsAggregationSelection';
  count: Scalars['Int']['output'];
  node?: Maybe<UserPostPostsNodeAggregateSelection>;
};

export type UserPostPostsNodeAggregateSelection = {
  __typename?: 'UserPostPostsNodeAggregateSelection';
  description: StringAggregateSelection;
  id: StringAggregateSelection;
  url: StringAggregateSelection;
};

export type UserPostsAggregateInput = {
  AND?: InputMaybe<Array<UserPostsAggregateInput>>;
  NOT?: InputMaybe<UserPostsAggregateInput>;
  OR?: InputMaybe<Array<UserPostsAggregateInput>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  node?: InputMaybe<UserPostsNodeAggregationWhereInput>;
};

export type UserPostsConnectFieldInput = {
  connect?: InputMaybe<Array<PostConnectInput>>;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars['Boolean']['input'];
  where?: InputMaybe<PostConnectWhere>;
};

export type UserPostsConnection = {
  __typename?: 'UserPostsConnection';
  edges: Array<UserPostsRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type UserPostsConnectionSort = {
  node?: InputMaybe<PostSort>;
};

export type UserPostsConnectionWhere = {
  AND?: InputMaybe<Array<UserPostsConnectionWhere>>;
  NOT?: InputMaybe<UserPostsConnectionWhere>;
  OR?: InputMaybe<Array<UserPostsConnectionWhere>>;
  node?: InputMaybe<PostWhere>;
};

export type UserPostsCreateFieldInput = {
  node: PostCreateInput;
};

export type UserPostsDeleteFieldInput = {
  delete?: InputMaybe<PostDeleteInput>;
  where?: InputMaybe<UserPostsConnectionWhere>;
};

export type UserPostsDisconnectFieldInput = {
  disconnect?: InputMaybe<PostDisconnectInput>;
  where?: InputMaybe<UserPostsConnectionWhere>;
};

export type UserPostsFieldInput = {
  connect?: InputMaybe<Array<UserPostsConnectFieldInput>>;
  create?: InputMaybe<Array<UserPostsCreateFieldInput>>;
};

export type UserPostsNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<UserPostsNodeAggregationWhereInput>>;
  NOT?: InputMaybe<UserPostsNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<UserPostsNodeAggregationWhereInput>>;
  description_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  description_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  description_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  description_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  description_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  description_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  description_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  description_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  description_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  description_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  description_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  description_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  description_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  description_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  description_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  id_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  id_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  id_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  id_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  id_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  id_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  id_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  id_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  id_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  id_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  id_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  id_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  id_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  id_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  id_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  url_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  url_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  url_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  url_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  url_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  url_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  url_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  url_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  url_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  url_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  url_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  url_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  url_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  url_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  url_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
};

export type UserPostsRelationship = {
  __typename?: 'UserPostsRelationship';
  cursor: Scalars['String']['output'];
  node: Post;
};

export type UserPostsUpdateConnectionInput = {
  node?: InputMaybe<PostUpdateInput>;
};

export type UserPostsUpdateFieldInput = {
  connect?: InputMaybe<Array<UserPostsConnectFieldInput>>;
  create?: InputMaybe<Array<UserPostsCreateFieldInput>>;
  delete?: InputMaybe<Array<UserPostsDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<UserPostsDisconnectFieldInput>>;
  update?: InputMaybe<UserPostsUpdateConnectionInput>;
  where?: InputMaybe<UserPostsConnectionWhere>;
};

export type UserRelationInput = {
  authorOfComments?: InputMaybe<Array<UserAuthorOfCommentsCreateFieldInput>>;
  posts?: InputMaybe<Array<UserPostsCreateFieldInput>>;
};

/** Fields to sort Users by. The order in which sorts are applied is not guaranteed when specifying many fields in one UserSort object. */
export type UserSort = {
  dob?: InputMaybe<SortDirection>;
  email?: InputMaybe<SortDirection>;
  id?: InputMaybe<SortDirection>;
  name?: InputMaybe<SortDirection>;
  username?: InputMaybe<SortDirection>;
};

export type UserUpdateInput = {
  authorOfComments?: InputMaybe<Array<UserAuthorOfCommentsUpdateFieldInput>>;
  dob?: InputMaybe<Scalars['DateTime']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  posts?: InputMaybe<Array<UserPostsUpdateFieldInput>>;
  username?: InputMaybe<Scalars['String']['input']>;
};

export type UserWhere = {
  AND?: InputMaybe<Array<UserWhere>>;
  NOT?: InputMaybe<UserWhere>;
  OR?: InputMaybe<Array<UserWhere>>;
  authorOfCommentsAggregate?: InputMaybe<UserAuthorOfCommentsAggregateInput>;
  /** Return Users where all of the related UserAuthorOfCommentsConnections match this filter */
  authorOfCommentsConnection_ALL?: InputMaybe<UserAuthorOfCommentsConnectionWhere>;
  /** Return Users where none of the related UserAuthorOfCommentsConnections match this filter */
  authorOfCommentsConnection_NONE?: InputMaybe<UserAuthorOfCommentsConnectionWhere>;
  /** Return Users where one of the related UserAuthorOfCommentsConnections match this filter */
  authorOfCommentsConnection_SINGLE?: InputMaybe<UserAuthorOfCommentsConnectionWhere>;
  /** Return Users where some of the related UserAuthorOfCommentsConnections match this filter */
  authorOfCommentsConnection_SOME?: InputMaybe<UserAuthorOfCommentsConnectionWhere>;
  /** Return Users where all of the related Comments match this filter */
  authorOfComments_ALL?: InputMaybe<CommentWhere>;
  /** Return Users where none of the related Comments match this filter */
  authorOfComments_NONE?: InputMaybe<CommentWhere>;
  /** Return Users where one of the related Comments match this filter */
  authorOfComments_SINGLE?: InputMaybe<CommentWhere>;
  /** Return Users where some of the related Comments match this filter */
  authorOfComments_SOME?: InputMaybe<CommentWhere>;
  dob?: InputMaybe<Scalars['DateTime']['input']>;
  dob_GT?: InputMaybe<Scalars['DateTime']['input']>;
  dob_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  dob_IN?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  dob_LT?: InputMaybe<Scalars['DateTime']['input']>;
  dob_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  email_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  email_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  email_IN?: InputMaybe<Array<Scalars['String']['input']>>;
  email_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  id_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  id_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  id_IN?: InputMaybe<Array<Scalars['String']['input']>>;
  id_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  name_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  name_IN?: InputMaybe<Array<Scalars['String']['input']>>;
  name_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
  postsAggregate?: InputMaybe<UserPostsAggregateInput>;
  /** Return Users where all of the related UserPostsConnections match this filter */
  postsConnection_ALL?: InputMaybe<UserPostsConnectionWhere>;
  /** Return Users where none of the related UserPostsConnections match this filter */
  postsConnection_NONE?: InputMaybe<UserPostsConnectionWhere>;
  /** Return Users where one of the related UserPostsConnections match this filter */
  postsConnection_SINGLE?: InputMaybe<UserPostsConnectionWhere>;
  /** Return Users where some of the related UserPostsConnections match this filter */
  postsConnection_SOME?: InputMaybe<UserPostsConnectionWhere>;
  /** Return Users where all of the related Posts match this filter */
  posts_ALL?: InputMaybe<PostWhere>;
  /** Return Users where none of the related Posts match this filter */
  posts_NONE?: InputMaybe<PostWhere>;
  /** Return Users where one of the related Posts match this filter */
  posts_SINGLE?: InputMaybe<PostWhere>;
  /** Return Users where some of the related Posts match this filter */
  posts_SOME?: InputMaybe<PostWhere>;
  username?: InputMaybe<Scalars['String']['input']>;
  username_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  username_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  username_IN?: InputMaybe<Array<Scalars['String']['input']>>;
  username_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
};

export type UsersConnection = {
  __typename?: 'UsersConnection';
  edges: Array<UserEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type ResolverTypeWrapper<T> = Promise<T> | T;

export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs,
> {
  subscribe: SubscriptionSubscribeFn<
    { [key in TKey]: TResult },
    TParent,
    TContext,
    TArgs
  >;
  resolve?: SubscriptionResolveFn<
    TResult,
    { [key in TKey]: TResult },
    TContext,
    TArgs
  >;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs,
> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<
  TResult,
  TKey extends string,
  TParent = {},
  TContext = {},
  TArgs = {},
> =
  | ((
      ...args: any[]
    ) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo,
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (
  obj: T,
  context: TContext,
  info: GraphQLResolveInfo,
) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<
  TResult = {},
  TParent = {},
  TContext = {},
  TArgs = {},
> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => TResult | Promise<TResult>;

/** Mapping of interface types */
export type ResolversInterfaceTypes<_RefType extends Record<string, unknown>> =
  {
    Comment:
      | (Omit<PostComment, 'replies'> & { replies: Array<_RefType['Comment']> })
      | (Omit<ReplyComment, 'replies' | 'replyOfComment'> & {
          replies: Array<_RefType['Comment']>;
          replyOfComment: _RefType['Comment'];
        });
  };

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  Comment: ResolverTypeWrapper<
    ResolversInterfaceTypes<ResolversTypes>['Comment']
  >;
  CommentAggregateSelection: ResolverTypeWrapper<CommentAggregateSelection>;
  CommentAuthorAggregateInput: CommentAuthorAggregateInput;
  CommentAuthorConnectFieldInput: CommentAuthorConnectFieldInput;
  CommentAuthorConnection: ResolverTypeWrapper<CommentAuthorConnection>;
  CommentAuthorConnectionSort: CommentAuthorConnectionSort;
  CommentAuthorConnectionWhere: CommentAuthorConnectionWhere;
  CommentAuthorCreateFieldInput: CommentAuthorCreateFieldInput;
  CommentAuthorDeleteFieldInput: CommentAuthorDeleteFieldInput;
  CommentAuthorDisconnectFieldInput: CommentAuthorDisconnectFieldInput;
  CommentAuthorNodeAggregationWhereInput: CommentAuthorNodeAggregationWhereInput;
  CommentAuthorRelationship: ResolverTypeWrapper<CommentAuthorRelationship>;
  CommentAuthorUpdateConnectionInput: CommentAuthorUpdateConnectionInput;
  CommentAuthorUpdateFieldInput: CommentAuthorUpdateFieldInput;
  CommentConnectInput: CommentConnectInput;
  CommentConnectWhere: CommentConnectWhere;
  CommentCreateInput: CommentCreateInput;
  CommentDeleteInput: CommentDeleteInput;
  CommentDisconnectInput: CommentDisconnectInput;
  CommentEdge: ResolverTypeWrapper<
    Omit<CommentEdge, 'node'> & { node: ResolversTypes['Comment'] }
  >;
  CommentImplementation: CommentImplementation;
  CommentOptions: CommentOptions;
  CommentRepliesAggregateInput: CommentRepliesAggregateInput;
  CommentRepliesConnectFieldInput: CommentRepliesConnectFieldInput;
  CommentRepliesConnection: ResolverTypeWrapper<CommentRepliesConnection>;
  CommentRepliesConnectionSort: CommentRepliesConnectionSort;
  CommentRepliesConnectionWhere: CommentRepliesConnectionWhere;
  CommentRepliesCreateFieldInput: CommentRepliesCreateFieldInput;
  CommentRepliesDeleteFieldInput: CommentRepliesDeleteFieldInput;
  CommentRepliesDisconnectFieldInput: CommentRepliesDisconnectFieldInput;
  CommentRepliesNodeAggregationWhereInput: CommentRepliesNodeAggregationWhereInput;
  CommentRepliesRelationship: ResolverTypeWrapper<
    Omit<CommentRepliesRelationship, 'node'> & {
      node: ResolversTypes['Comment'];
    }
  >;
  CommentRepliesUpdateConnectionInput: CommentRepliesUpdateConnectionInput;
  CommentRepliesUpdateFieldInput: CommentRepliesUpdateFieldInput;
  CommentSort: CommentSort;
  CommentUpdateInput: CommentUpdateInput;
  CommentWhere: CommentWhere;
  CommentsConnection: ResolverTypeWrapper<CommentsConnection>;
  CreateInfo: ResolverTypeWrapper<CreateInfo>;
  CreatePostCommentsMutationResponse: ResolverTypeWrapper<CreatePostCommentsMutationResponse>;
  CreatePostsMutationResponse: ResolverTypeWrapper<CreatePostsMutationResponse>;
  CreateReplyCommentsMutationResponse: ResolverTypeWrapper<CreateReplyCommentsMutationResponse>;
  CreateUsersMutationResponse: ResolverTypeWrapper<CreateUsersMutationResponse>;
  DateTime: ResolverTypeWrapper<Scalars['DateTime']['output']>;
  DateTimeAggregateSelection: ResolverTypeWrapper<DateTimeAggregateSelection>;
  DeleteInfo: ResolverTypeWrapper<DeleteInfo>;
  Float: ResolverTypeWrapper<Scalars['Float']['output']>;
  Int: ResolverTypeWrapper<Scalars['Int']['output']>;
  Mutation: ResolverTypeWrapper<{}>;
  PageInfo: ResolverTypeWrapper<PageInfo>;
  Post: ResolverTypeWrapper<
    Omit<Post, 'comments'> & { comments: Array<ResolversTypes['Comment']> }
  >;
  PostAggregateSelection: ResolverTypeWrapper<PostAggregateSelection>;
  PostComment: ResolverTypeWrapper<
    Omit<PostComment, 'replies'> & { replies: Array<ResolversTypes['Comment']> }
  >;
  PostCommentAggregateSelection: ResolverTypeWrapper<PostCommentAggregateSelection>;
  PostCommentAuthorAggregateInput: PostCommentAuthorAggregateInput;
  PostCommentAuthorConnectFieldInput: PostCommentAuthorConnectFieldInput;
  PostCommentAuthorCreateFieldInput: PostCommentAuthorCreateFieldInput;
  PostCommentAuthorFieldInput: PostCommentAuthorFieldInput;
  PostCommentAuthorNodeAggregationWhereInput: PostCommentAuthorNodeAggregationWhereInput;
  PostCommentAuthorUpdateConnectionInput: PostCommentAuthorUpdateConnectionInput;
  PostCommentAuthorUpdateFieldInput: PostCommentAuthorUpdateFieldInput;
  PostCommentCommentOfPostAggregateInput: PostCommentCommentOfPostAggregateInput;
  PostCommentCommentOfPostConnectFieldInput: PostCommentCommentOfPostConnectFieldInput;
  PostCommentCommentOfPostConnection: ResolverTypeWrapper<PostCommentCommentOfPostConnection>;
  PostCommentCommentOfPostConnectionSort: PostCommentCommentOfPostConnectionSort;
  PostCommentCommentOfPostConnectionWhere: PostCommentCommentOfPostConnectionWhere;
  PostCommentCommentOfPostCreateFieldInput: PostCommentCommentOfPostCreateFieldInput;
  PostCommentCommentOfPostDeleteFieldInput: PostCommentCommentOfPostDeleteFieldInput;
  PostCommentCommentOfPostDisconnectFieldInput: PostCommentCommentOfPostDisconnectFieldInput;
  PostCommentCommentOfPostFieldInput: PostCommentCommentOfPostFieldInput;
  PostCommentCommentOfPostNodeAggregationWhereInput: PostCommentCommentOfPostNodeAggregationWhereInput;
  PostCommentCommentOfPostRelationship: ResolverTypeWrapper<PostCommentCommentOfPostRelationship>;
  PostCommentCommentOfPostUpdateConnectionInput: PostCommentCommentOfPostUpdateConnectionInput;
  PostCommentCommentOfPostUpdateFieldInput: PostCommentCommentOfPostUpdateFieldInput;
  PostCommentCommentRepliesAggregationSelection: ResolverTypeWrapper<PostCommentCommentRepliesAggregationSelection>;
  PostCommentCommentRepliesNodeAggregateSelection: ResolverTypeWrapper<PostCommentCommentRepliesNodeAggregateSelection>;
  PostCommentCommentsAggregationSelection: ResolverTypeWrapper<PostCommentCommentsAggregationSelection>;
  PostCommentCommentsNodeAggregateSelection: ResolverTypeWrapper<PostCommentCommentsNodeAggregateSelection>;
  PostCommentConnectInput: PostCommentConnectInput;
  PostCommentCreateInput: PostCommentCreateInput;
  PostCommentDeleteInput: PostCommentDeleteInput;
  PostCommentDisconnectInput: PostCommentDisconnectInput;
  PostCommentEdge: ResolverTypeWrapper<PostCommentEdge>;
  PostCommentOptions: PostCommentOptions;
  PostCommentPostCommentOfPostAggregationSelection: ResolverTypeWrapper<PostCommentPostCommentOfPostAggregationSelection>;
  PostCommentPostCommentOfPostNodeAggregateSelection: ResolverTypeWrapper<PostCommentPostCommentOfPostNodeAggregateSelection>;
  PostCommentRelationInput: PostCommentRelationInput;
  PostCommentRepliesAggregateInput: PostCommentRepliesAggregateInput;
  PostCommentRepliesConnectFieldInput: PostCommentRepliesConnectFieldInput;
  PostCommentRepliesCreateFieldInput: PostCommentRepliesCreateFieldInput;
  PostCommentRepliesDeleteFieldInput: PostCommentRepliesDeleteFieldInput;
  PostCommentRepliesDisconnectFieldInput: PostCommentRepliesDisconnectFieldInput;
  PostCommentRepliesFieldInput: PostCommentRepliesFieldInput;
  PostCommentRepliesNodeAggregationWhereInput: PostCommentRepliesNodeAggregationWhereInput;
  PostCommentRepliesUpdateConnectionInput: PostCommentRepliesUpdateConnectionInput;
  PostCommentRepliesUpdateFieldInput: PostCommentRepliesUpdateFieldInput;
  PostCommentSort: PostCommentSort;
  PostCommentUpdateInput: PostCommentUpdateInput;
  PostCommentUserAuthorAggregationSelection: ResolverTypeWrapper<PostCommentUserAuthorAggregationSelection>;
  PostCommentUserAuthorNodeAggregateSelection: ResolverTypeWrapper<PostCommentUserAuthorNodeAggregateSelection>;
  PostCommentWhere: PostCommentWhere;
  PostCommentsAggregateInput: PostCommentsAggregateInput;
  PostCommentsConnectFieldInput: PostCommentsConnectFieldInput;
  PostCommentsConnection: ResolverTypeWrapper<PostCommentsConnection>;
  PostCommentsConnectionSort: PostCommentsConnectionSort;
  PostCommentsConnectionWhere: PostCommentsConnectionWhere;
  PostCommentsCreateFieldInput: PostCommentsCreateFieldInput;
  PostCommentsDeleteFieldInput: PostCommentsDeleteFieldInput;
  PostCommentsDisconnectFieldInput: PostCommentsDisconnectFieldInput;
  PostCommentsFieldInput: PostCommentsFieldInput;
  PostCommentsNodeAggregationWhereInput: PostCommentsNodeAggregationWhereInput;
  PostCommentsRelationship: ResolverTypeWrapper<
    Omit<PostCommentsRelationship, 'node'> & { node: ResolversTypes['Comment'] }
  >;
  PostCommentsUpdateConnectionInput: PostCommentsUpdateConnectionInput;
  PostCommentsUpdateFieldInput: PostCommentsUpdateFieldInput;
  PostConnectInput: PostConnectInput;
  PostConnectWhere: PostConnectWhere;
  PostCreateInput: PostCreateInput;
  PostCreatorOfPostAggregateInput: PostCreatorOfPostAggregateInput;
  PostCreatorOfPostConnectFieldInput: PostCreatorOfPostConnectFieldInput;
  PostCreatorOfPostConnection: ResolverTypeWrapper<PostCreatorOfPostConnection>;
  PostCreatorOfPostConnectionSort: PostCreatorOfPostConnectionSort;
  PostCreatorOfPostConnectionWhere: PostCreatorOfPostConnectionWhere;
  PostCreatorOfPostCreateFieldInput: PostCreatorOfPostCreateFieldInput;
  PostCreatorOfPostDeleteFieldInput: PostCreatorOfPostDeleteFieldInput;
  PostCreatorOfPostDisconnectFieldInput: PostCreatorOfPostDisconnectFieldInput;
  PostCreatorOfPostFieldInput: PostCreatorOfPostFieldInput;
  PostCreatorOfPostNodeAggregationWhereInput: PostCreatorOfPostNodeAggregationWhereInput;
  PostCreatorOfPostRelationship: ResolverTypeWrapper<PostCreatorOfPostRelationship>;
  PostCreatorOfPostUpdateConnectionInput: PostCreatorOfPostUpdateConnectionInput;
  PostCreatorOfPostUpdateFieldInput: PostCreatorOfPostUpdateFieldInput;
  PostDeleteInput: PostDeleteInput;
  PostDisconnectInput: PostDisconnectInput;
  PostEdge: ResolverTypeWrapper<PostEdge>;
  PostOptions: PostOptions;
  PostRelationInput: PostRelationInput;
  PostSort: PostSort;
  PostUpdateInput: PostUpdateInput;
  PostUserCreatorOfPostAggregationSelection: ResolverTypeWrapper<PostUserCreatorOfPostAggregationSelection>;
  PostUserCreatorOfPostNodeAggregateSelection: ResolverTypeWrapper<PostUserCreatorOfPostNodeAggregateSelection>;
  PostWhere: PostWhere;
  PostsConnection: ResolverTypeWrapper<PostsConnection>;
  Query: ResolverTypeWrapper<{}>;
  ReplyComment: ResolverTypeWrapper<
    Omit<ReplyComment, 'replies' | 'replyOfComment'> & {
      replies: Array<ResolversTypes['Comment']>;
      replyOfComment: ResolversTypes['Comment'];
    }
  >;
  ReplyCommentAggregateSelection: ResolverTypeWrapper<ReplyCommentAggregateSelection>;
  ReplyCommentAuthorAggregateInput: ReplyCommentAuthorAggregateInput;
  ReplyCommentAuthorConnectFieldInput: ReplyCommentAuthorConnectFieldInput;
  ReplyCommentAuthorCreateFieldInput: ReplyCommentAuthorCreateFieldInput;
  ReplyCommentAuthorFieldInput: ReplyCommentAuthorFieldInput;
  ReplyCommentAuthorNodeAggregationWhereInput: ReplyCommentAuthorNodeAggregationWhereInput;
  ReplyCommentAuthorUpdateConnectionInput: ReplyCommentAuthorUpdateConnectionInput;
  ReplyCommentAuthorUpdateFieldInput: ReplyCommentAuthorUpdateFieldInput;
  ReplyCommentCommentRepliesAggregationSelection: ResolverTypeWrapper<ReplyCommentCommentRepliesAggregationSelection>;
  ReplyCommentCommentRepliesNodeAggregateSelection: ResolverTypeWrapper<ReplyCommentCommentRepliesNodeAggregateSelection>;
  ReplyCommentCommentReplyOfCommentAggregationSelection: ResolverTypeWrapper<ReplyCommentCommentReplyOfCommentAggregationSelection>;
  ReplyCommentCommentReplyOfCommentNodeAggregateSelection: ResolverTypeWrapper<ReplyCommentCommentReplyOfCommentNodeAggregateSelection>;
  ReplyCommentConnectInput: ReplyCommentConnectInput;
  ReplyCommentCreateInput: ReplyCommentCreateInput;
  ReplyCommentDeleteInput: ReplyCommentDeleteInput;
  ReplyCommentDisconnectInput: ReplyCommentDisconnectInput;
  ReplyCommentEdge: ResolverTypeWrapper<ReplyCommentEdge>;
  ReplyCommentOptions: ReplyCommentOptions;
  ReplyCommentRelationInput: ReplyCommentRelationInput;
  ReplyCommentRepliesAggregateInput: ReplyCommentRepliesAggregateInput;
  ReplyCommentRepliesConnectFieldInput: ReplyCommentRepliesConnectFieldInput;
  ReplyCommentRepliesCreateFieldInput: ReplyCommentRepliesCreateFieldInput;
  ReplyCommentRepliesDeleteFieldInput: ReplyCommentRepliesDeleteFieldInput;
  ReplyCommentRepliesDisconnectFieldInput: ReplyCommentRepliesDisconnectFieldInput;
  ReplyCommentRepliesFieldInput: ReplyCommentRepliesFieldInput;
  ReplyCommentRepliesNodeAggregationWhereInput: ReplyCommentRepliesNodeAggregationWhereInput;
  ReplyCommentRepliesUpdateConnectionInput: ReplyCommentRepliesUpdateConnectionInput;
  ReplyCommentRepliesUpdateFieldInput: ReplyCommentRepliesUpdateFieldInput;
  ReplyCommentReplyOfCommentAggregateInput: ReplyCommentReplyOfCommentAggregateInput;
  ReplyCommentReplyOfCommentConnectFieldInput: ReplyCommentReplyOfCommentConnectFieldInput;
  ReplyCommentReplyOfCommentConnection: ResolverTypeWrapper<ReplyCommentReplyOfCommentConnection>;
  ReplyCommentReplyOfCommentConnectionSort: ReplyCommentReplyOfCommentConnectionSort;
  ReplyCommentReplyOfCommentConnectionWhere: ReplyCommentReplyOfCommentConnectionWhere;
  ReplyCommentReplyOfCommentCreateFieldInput: ReplyCommentReplyOfCommentCreateFieldInput;
  ReplyCommentReplyOfCommentDeleteFieldInput: ReplyCommentReplyOfCommentDeleteFieldInput;
  ReplyCommentReplyOfCommentDisconnectFieldInput: ReplyCommentReplyOfCommentDisconnectFieldInput;
  ReplyCommentReplyOfCommentFieldInput: ReplyCommentReplyOfCommentFieldInput;
  ReplyCommentReplyOfCommentNodeAggregationWhereInput: ReplyCommentReplyOfCommentNodeAggregationWhereInput;
  ReplyCommentReplyOfCommentRelationship: ResolverTypeWrapper<
    Omit<ReplyCommentReplyOfCommentRelationship, 'node'> & {
      node: ResolversTypes['Comment'];
    }
  >;
  ReplyCommentReplyOfCommentUpdateConnectionInput: ReplyCommentReplyOfCommentUpdateConnectionInput;
  ReplyCommentReplyOfCommentUpdateFieldInput: ReplyCommentReplyOfCommentUpdateFieldInput;
  ReplyCommentSort: ReplyCommentSort;
  ReplyCommentUpdateInput: ReplyCommentUpdateInput;
  ReplyCommentUserAuthorAggregationSelection: ResolverTypeWrapper<ReplyCommentUserAuthorAggregationSelection>;
  ReplyCommentUserAuthorNodeAggregateSelection: ResolverTypeWrapper<ReplyCommentUserAuthorNodeAggregateSelection>;
  ReplyCommentWhere: ReplyCommentWhere;
  ReplyCommentsConnection: ResolverTypeWrapper<ReplyCommentsConnection>;
  SortDirection: SortDirection;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  StringAggregateSelection: ResolverTypeWrapper<StringAggregateSelection>;
  UpdateInfo: ResolverTypeWrapper<UpdateInfo>;
  UpdatePostCommentsMutationResponse: ResolverTypeWrapper<UpdatePostCommentsMutationResponse>;
  UpdatePostsMutationResponse: ResolverTypeWrapper<UpdatePostsMutationResponse>;
  UpdateReplyCommentsMutationResponse: ResolverTypeWrapper<UpdateReplyCommentsMutationResponse>;
  UpdateUsersMutationResponse: ResolverTypeWrapper<UpdateUsersMutationResponse>;
  User: ResolverTypeWrapper<
    Omit<User, 'authorOfComments'> & {
      authorOfComments: Array<ResolversTypes['Comment']>;
    }
  >;
  UserAggregateSelection: ResolverTypeWrapper<UserAggregateSelection>;
  UserAuthorOfCommentsAggregateInput: UserAuthorOfCommentsAggregateInput;
  UserAuthorOfCommentsConnectFieldInput: UserAuthorOfCommentsConnectFieldInput;
  UserAuthorOfCommentsConnection: ResolverTypeWrapper<UserAuthorOfCommentsConnection>;
  UserAuthorOfCommentsConnectionSort: UserAuthorOfCommentsConnectionSort;
  UserAuthorOfCommentsConnectionWhere: UserAuthorOfCommentsConnectionWhere;
  UserAuthorOfCommentsCreateFieldInput: UserAuthorOfCommentsCreateFieldInput;
  UserAuthorOfCommentsDeleteFieldInput: UserAuthorOfCommentsDeleteFieldInput;
  UserAuthorOfCommentsDisconnectFieldInput: UserAuthorOfCommentsDisconnectFieldInput;
  UserAuthorOfCommentsFieldInput: UserAuthorOfCommentsFieldInput;
  UserAuthorOfCommentsNodeAggregationWhereInput: UserAuthorOfCommentsNodeAggregationWhereInput;
  UserAuthorOfCommentsRelationship: ResolverTypeWrapper<
    Omit<UserAuthorOfCommentsRelationship, 'node'> & {
      node: ResolversTypes['Comment'];
    }
  >;
  UserAuthorOfCommentsUpdateConnectionInput: UserAuthorOfCommentsUpdateConnectionInput;
  UserAuthorOfCommentsUpdateFieldInput: UserAuthorOfCommentsUpdateFieldInput;
  UserCommentAuthorOfCommentsAggregationSelection: ResolverTypeWrapper<UserCommentAuthorOfCommentsAggregationSelection>;
  UserCommentAuthorOfCommentsNodeAggregateSelection: ResolverTypeWrapper<UserCommentAuthorOfCommentsNodeAggregateSelection>;
  UserConnectInput: UserConnectInput;
  UserConnectWhere: UserConnectWhere;
  UserCreateInput: UserCreateInput;
  UserDeleteInput: UserDeleteInput;
  UserDisconnectInput: UserDisconnectInput;
  UserEdge: ResolverTypeWrapper<UserEdge>;
  UserOptions: UserOptions;
  UserPostPostsAggregationSelection: ResolverTypeWrapper<UserPostPostsAggregationSelection>;
  UserPostPostsNodeAggregateSelection: ResolverTypeWrapper<UserPostPostsNodeAggregateSelection>;
  UserPostsAggregateInput: UserPostsAggregateInput;
  UserPostsConnectFieldInput: UserPostsConnectFieldInput;
  UserPostsConnection: ResolverTypeWrapper<UserPostsConnection>;
  UserPostsConnectionSort: UserPostsConnectionSort;
  UserPostsConnectionWhere: UserPostsConnectionWhere;
  UserPostsCreateFieldInput: UserPostsCreateFieldInput;
  UserPostsDeleteFieldInput: UserPostsDeleteFieldInput;
  UserPostsDisconnectFieldInput: UserPostsDisconnectFieldInput;
  UserPostsFieldInput: UserPostsFieldInput;
  UserPostsNodeAggregationWhereInput: UserPostsNodeAggregationWhereInput;
  UserPostsRelationship: ResolverTypeWrapper<UserPostsRelationship>;
  UserPostsUpdateConnectionInput: UserPostsUpdateConnectionInput;
  UserPostsUpdateFieldInput: UserPostsUpdateFieldInput;
  UserRelationInput: UserRelationInput;
  UserSort: UserSort;
  UserUpdateInput: UserUpdateInput;
  UserWhere: UserWhere;
  UsersConnection: ResolverTypeWrapper<UsersConnection>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Boolean: Scalars['Boolean']['output'];
  Comment: ResolversInterfaceTypes<ResolversParentTypes>['Comment'];
  CommentAggregateSelection: CommentAggregateSelection;
  CommentAuthorAggregateInput: CommentAuthorAggregateInput;
  CommentAuthorConnectFieldInput: CommentAuthorConnectFieldInput;
  CommentAuthorConnection: CommentAuthorConnection;
  CommentAuthorConnectionSort: CommentAuthorConnectionSort;
  CommentAuthorConnectionWhere: CommentAuthorConnectionWhere;
  CommentAuthorCreateFieldInput: CommentAuthorCreateFieldInput;
  CommentAuthorDeleteFieldInput: CommentAuthorDeleteFieldInput;
  CommentAuthorDisconnectFieldInput: CommentAuthorDisconnectFieldInput;
  CommentAuthorNodeAggregationWhereInput: CommentAuthorNodeAggregationWhereInput;
  CommentAuthorRelationship: CommentAuthorRelationship;
  CommentAuthorUpdateConnectionInput: CommentAuthorUpdateConnectionInput;
  CommentAuthorUpdateFieldInput: CommentAuthorUpdateFieldInput;
  CommentConnectInput: CommentConnectInput;
  CommentConnectWhere: CommentConnectWhere;
  CommentCreateInput: CommentCreateInput;
  CommentDeleteInput: CommentDeleteInput;
  CommentDisconnectInput: CommentDisconnectInput;
  CommentEdge: Omit<CommentEdge, 'node'> & {
    node: ResolversParentTypes['Comment'];
  };
  CommentOptions: CommentOptions;
  CommentRepliesAggregateInput: CommentRepliesAggregateInput;
  CommentRepliesConnectFieldInput: CommentRepliesConnectFieldInput;
  CommentRepliesConnection: CommentRepliesConnection;
  CommentRepliesConnectionSort: CommentRepliesConnectionSort;
  CommentRepliesConnectionWhere: CommentRepliesConnectionWhere;
  CommentRepliesCreateFieldInput: CommentRepliesCreateFieldInput;
  CommentRepliesDeleteFieldInput: CommentRepliesDeleteFieldInput;
  CommentRepliesDisconnectFieldInput: CommentRepliesDisconnectFieldInput;
  CommentRepliesNodeAggregationWhereInput: CommentRepliesNodeAggregationWhereInput;
  CommentRepliesRelationship: Omit<CommentRepliesRelationship, 'node'> & {
    node: ResolversParentTypes['Comment'];
  };
  CommentRepliesUpdateConnectionInput: CommentRepliesUpdateConnectionInput;
  CommentRepliesUpdateFieldInput: CommentRepliesUpdateFieldInput;
  CommentSort: CommentSort;
  CommentUpdateInput: CommentUpdateInput;
  CommentWhere: CommentWhere;
  CommentsConnection: CommentsConnection;
  CreateInfo: CreateInfo;
  CreatePostCommentsMutationResponse: CreatePostCommentsMutationResponse;
  CreatePostsMutationResponse: CreatePostsMutationResponse;
  CreateReplyCommentsMutationResponse: CreateReplyCommentsMutationResponse;
  CreateUsersMutationResponse: CreateUsersMutationResponse;
  DateTime: Scalars['DateTime']['output'];
  DateTimeAggregateSelection: DateTimeAggregateSelection;
  DeleteInfo: DeleteInfo;
  Float: Scalars['Float']['output'];
  Int: Scalars['Int']['output'];
  Mutation: {};
  PageInfo: PageInfo;
  Post: Omit<Post, 'comments'> & {
    comments: Array<ResolversParentTypes['Comment']>;
  };
  PostAggregateSelection: PostAggregateSelection;
  PostComment: Omit<PostComment, 'replies'> & {
    replies: Array<ResolversParentTypes['Comment']>;
  };
  PostCommentAggregateSelection: PostCommentAggregateSelection;
  PostCommentAuthorAggregateInput: PostCommentAuthorAggregateInput;
  PostCommentAuthorConnectFieldInput: PostCommentAuthorConnectFieldInput;
  PostCommentAuthorCreateFieldInput: PostCommentAuthorCreateFieldInput;
  PostCommentAuthorFieldInput: PostCommentAuthorFieldInput;
  PostCommentAuthorNodeAggregationWhereInput: PostCommentAuthorNodeAggregationWhereInput;
  PostCommentAuthorUpdateConnectionInput: PostCommentAuthorUpdateConnectionInput;
  PostCommentAuthorUpdateFieldInput: PostCommentAuthorUpdateFieldInput;
  PostCommentCommentOfPostAggregateInput: PostCommentCommentOfPostAggregateInput;
  PostCommentCommentOfPostConnectFieldInput: PostCommentCommentOfPostConnectFieldInput;
  PostCommentCommentOfPostConnection: PostCommentCommentOfPostConnection;
  PostCommentCommentOfPostConnectionSort: PostCommentCommentOfPostConnectionSort;
  PostCommentCommentOfPostConnectionWhere: PostCommentCommentOfPostConnectionWhere;
  PostCommentCommentOfPostCreateFieldInput: PostCommentCommentOfPostCreateFieldInput;
  PostCommentCommentOfPostDeleteFieldInput: PostCommentCommentOfPostDeleteFieldInput;
  PostCommentCommentOfPostDisconnectFieldInput: PostCommentCommentOfPostDisconnectFieldInput;
  PostCommentCommentOfPostFieldInput: PostCommentCommentOfPostFieldInput;
  PostCommentCommentOfPostNodeAggregationWhereInput: PostCommentCommentOfPostNodeAggregationWhereInput;
  PostCommentCommentOfPostRelationship: PostCommentCommentOfPostRelationship;
  PostCommentCommentOfPostUpdateConnectionInput: PostCommentCommentOfPostUpdateConnectionInput;
  PostCommentCommentOfPostUpdateFieldInput: PostCommentCommentOfPostUpdateFieldInput;
  PostCommentCommentRepliesAggregationSelection: PostCommentCommentRepliesAggregationSelection;
  PostCommentCommentRepliesNodeAggregateSelection: PostCommentCommentRepliesNodeAggregateSelection;
  PostCommentCommentsAggregationSelection: PostCommentCommentsAggregationSelection;
  PostCommentCommentsNodeAggregateSelection: PostCommentCommentsNodeAggregateSelection;
  PostCommentConnectInput: PostCommentConnectInput;
  PostCommentCreateInput: PostCommentCreateInput;
  PostCommentDeleteInput: PostCommentDeleteInput;
  PostCommentDisconnectInput: PostCommentDisconnectInput;
  PostCommentEdge: PostCommentEdge;
  PostCommentOptions: PostCommentOptions;
  PostCommentPostCommentOfPostAggregationSelection: PostCommentPostCommentOfPostAggregationSelection;
  PostCommentPostCommentOfPostNodeAggregateSelection: PostCommentPostCommentOfPostNodeAggregateSelection;
  PostCommentRelationInput: PostCommentRelationInput;
  PostCommentRepliesAggregateInput: PostCommentRepliesAggregateInput;
  PostCommentRepliesConnectFieldInput: PostCommentRepliesConnectFieldInput;
  PostCommentRepliesCreateFieldInput: PostCommentRepliesCreateFieldInput;
  PostCommentRepliesDeleteFieldInput: PostCommentRepliesDeleteFieldInput;
  PostCommentRepliesDisconnectFieldInput: PostCommentRepliesDisconnectFieldInput;
  PostCommentRepliesFieldInput: PostCommentRepliesFieldInput;
  PostCommentRepliesNodeAggregationWhereInput: PostCommentRepliesNodeAggregationWhereInput;
  PostCommentRepliesUpdateConnectionInput: PostCommentRepliesUpdateConnectionInput;
  PostCommentRepliesUpdateFieldInput: PostCommentRepliesUpdateFieldInput;
  PostCommentSort: PostCommentSort;
  PostCommentUpdateInput: PostCommentUpdateInput;
  PostCommentUserAuthorAggregationSelection: PostCommentUserAuthorAggregationSelection;
  PostCommentUserAuthorNodeAggregateSelection: PostCommentUserAuthorNodeAggregateSelection;
  PostCommentWhere: PostCommentWhere;
  PostCommentsAggregateInput: PostCommentsAggregateInput;
  PostCommentsConnectFieldInput: PostCommentsConnectFieldInput;
  PostCommentsConnection: PostCommentsConnection;
  PostCommentsConnectionSort: PostCommentsConnectionSort;
  PostCommentsConnectionWhere: PostCommentsConnectionWhere;
  PostCommentsCreateFieldInput: PostCommentsCreateFieldInput;
  PostCommentsDeleteFieldInput: PostCommentsDeleteFieldInput;
  PostCommentsDisconnectFieldInput: PostCommentsDisconnectFieldInput;
  PostCommentsFieldInput: PostCommentsFieldInput;
  PostCommentsNodeAggregationWhereInput: PostCommentsNodeAggregationWhereInput;
  PostCommentsRelationship: Omit<PostCommentsRelationship, 'node'> & {
    node: ResolversParentTypes['Comment'];
  };
  PostCommentsUpdateConnectionInput: PostCommentsUpdateConnectionInput;
  PostCommentsUpdateFieldInput: PostCommentsUpdateFieldInput;
  PostConnectInput: PostConnectInput;
  PostConnectWhere: PostConnectWhere;
  PostCreateInput: PostCreateInput;
  PostCreatorOfPostAggregateInput: PostCreatorOfPostAggregateInput;
  PostCreatorOfPostConnectFieldInput: PostCreatorOfPostConnectFieldInput;
  PostCreatorOfPostConnection: PostCreatorOfPostConnection;
  PostCreatorOfPostConnectionSort: PostCreatorOfPostConnectionSort;
  PostCreatorOfPostConnectionWhere: PostCreatorOfPostConnectionWhere;
  PostCreatorOfPostCreateFieldInput: PostCreatorOfPostCreateFieldInput;
  PostCreatorOfPostDeleteFieldInput: PostCreatorOfPostDeleteFieldInput;
  PostCreatorOfPostDisconnectFieldInput: PostCreatorOfPostDisconnectFieldInput;
  PostCreatorOfPostFieldInput: PostCreatorOfPostFieldInput;
  PostCreatorOfPostNodeAggregationWhereInput: PostCreatorOfPostNodeAggregationWhereInput;
  PostCreatorOfPostRelationship: PostCreatorOfPostRelationship;
  PostCreatorOfPostUpdateConnectionInput: PostCreatorOfPostUpdateConnectionInput;
  PostCreatorOfPostUpdateFieldInput: PostCreatorOfPostUpdateFieldInput;
  PostDeleteInput: PostDeleteInput;
  PostDisconnectInput: PostDisconnectInput;
  PostEdge: PostEdge;
  PostOptions: PostOptions;
  PostRelationInput: PostRelationInput;
  PostSort: PostSort;
  PostUpdateInput: PostUpdateInput;
  PostUserCreatorOfPostAggregationSelection: PostUserCreatorOfPostAggregationSelection;
  PostUserCreatorOfPostNodeAggregateSelection: PostUserCreatorOfPostNodeAggregateSelection;
  PostWhere: PostWhere;
  PostsConnection: PostsConnection;
  Query: {};
  ReplyComment: Omit<ReplyComment, 'replies' | 'replyOfComment'> & {
    replies: Array<ResolversParentTypes['Comment']>;
    replyOfComment: ResolversParentTypes['Comment'];
  };
  ReplyCommentAggregateSelection: ReplyCommentAggregateSelection;
  ReplyCommentAuthorAggregateInput: ReplyCommentAuthorAggregateInput;
  ReplyCommentAuthorConnectFieldInput: ReplyCommentAuthorConnectFieldInput;
  ReplyCommentAuthorCreateFieldInput: ReplyCommentAuthorCreateFieldInput;
  ReplyCommentAuthorFieldInput: ReplyCommentAuthorFieldInput;
  ReplyCommentAuthorNodeAggregationWhereInput: ReplyCommentAuthorNodeAggregationWhereInput;
  ReplyCommentAuthorUpdateConnectionInput: ReplyCommentAuthorUpdateConnectionInput;
  ReplyCommentAuthorUpdateFieldInput: ReplyCommentAuthorUpdateFieldInput;
  ReplyCommentCommentRepliesAggregationSelection: ReplyCommentCommentRepliesAggregationSelection;
  ReplyCommentCommentRepliesNodeAggregateSelection: ReplyCommentCommentRepliesNodeAggregateSelection;
  ReplyCommentCommentReplyOfCommentAggregationSelection: ReplyCommentCommentReplyOfCommentAggregationSelection;
  ReplyCommentCommentReplyOfCommentNodeAggregateSelection: ReplyCommentCommentReplyOfCommentNodeAggregateSelection;
  ReplyCommentConnectInput: ReplyCommentConnectInput;
  ReplyCommentCreateInput: ReplyCommentCreateInput;
  ReplyCommentDeleteInput: ReplyCommentDeleteInput;
  ReplyCommentDisconnectInput: ReplyCommentDisconnectInput;
  ReplyCommentEdge: ReplyCommentEdge;
  ReplyCommentOptions: ReplyCommentOptions;
  ReplyCommentRelationInput: ReplyCommentRelationInput;
  ReplyCommentRepliesAggregateInput: ReplyCommentRepliesAggregateInput;
  ReplyCommentRepliesConnectFieldInput: ReplyCommentRepliesConnectFieldInput;
  ReplyCommentRepliesCreateFieldInput: ReplyCommentRepliesCreateFieldInput;
  ReplyCommentRepliesDeleteFieldInput: ReplyCommentRepliesDeleteFieldInput;
  ReplyCommentRepliesDisconnectFieldInput: ReplyCommentRepliesDisconnectFieldInput;
  ReplyCommentRepliesFieldInput: ReplyCommentRepliesFieldInput;
  ReplyCommentRepliesNodeAggregationWhereInput: ReplyCommentRepliesNodeAggregationWhereInput;
  ReplyCommentRepliesUpdateConnectionInput: ReplyCommentRepliesUpdateConnectionInput;
  ReplyCommentRepliesUpdateFieldInput: ReplyCommentRepliesUpdateFieldInput;
  ReplyCommentReplyOfCommentAggregateInput: ReplyCommentReplyOfCommentAggregateInput;
  ReplyCommentReplyOfCommentConnectFieldInput: ReplyCommentReplyOfCommentConnectFieldInput;
  ReplyCommentReplyOfCommentConnection: ReplyCommentReplyOfCommentConnection;
  ReplyCommentReplyOfCommentConnectionSort: ReplyCommentReplyOfCommentConnectionSort;
  ReplyCommentReplyOfCommentConnectionWhere: ReplyCommentReplyOfCommentConnectionWhere;
  ReplyCommentReplyOfCommentCreateFieldInput: ReplyCommentReplyOfCommentCreateFieldInput;
  ReplyCommentReplyOfCommentDeleteFieldInput: ReplyCommentReplyOfCommentDeleteFieldInput;
  ReplyCommentReplyOfCommentDisconnectFieldInput: ReplyCommentReplyOfCommentDisconnectFieldInput;
  ReplyCommentReplyOfCommentFieldInput: ReplyCommentReplyOfCommentFieldInput;
  ReplyCommentReplyOfCommentNodeAggregationWhereInput: ReplyCommentReplyOfCommentNodeAggregationWhereInput;
  ReplyCommentReplyOfCommentRelationship: Omit<
    ReplyCommentReplyOfCommentRelationship,
    'node'
  > & {
    node: ResolversParentTypes['Comment'];
  };
  ReplyCommentReplyOfCommentUpdateConnectionInput: ReplyCommentReplyOfCommentUpdateConnectionInput;
  ReplyCommentReplyOfCommentUpdateFieldInput: ReplyCommentReplyOfCommentUpdateFieldInput;
  ReplyCommentSort: ReplyCommentSort;
  ReplyCommentUpdateInput: ReplyCommentUpdateInput;
  ReplyCommentUserAuthorAggregationSelection: ReplyCommentUserAuthorAggregationSelection;
  ReplyCommentUserAuthorNodeAggregateSelection: ReplyCommentUserAuthorNodeAggregateSelection;
  ReplyCommentWhere: ReplyCommentWhere;
  ReplyCommentsConnection: ReplyCommentsConnection;
  String: Scalars['String']['output'];
  StringAggregateSelection: StringAggregateSelection;
  UpdateInfo: UpdateInfo;
  UpdatePostCommentsMutationResponse: UpdatePostCommentsMutationResponse;
  UpdatePostsMutationResponse: UpdatePostsMutationResponse;
  UpdateReplyCommentsMutationResponse: UpdateReplyCommentsMutationResponse;
  UpdateUsersMutationResponse: UpdateUsersMutationResponse;
  User: Omit<User, 'authorOfComments'> & {
    authorOfComments: Array<ResolversParentTypes['Comment']>;
  };
  UserAggregateSelection: UserAggregateSelection;
  UserAuthorOfCommentsAggregateInput: UserAuthorOfCommentsAggregateInput;
  UserAuthorOfCommentsConnectFieldInput: UserAuthorOfCommentsConnectFieldInput;
  UserAuthorOfCommentsConnection: UserAuthorOfCommentsConnection;
  UserAuthorOfCommentsConnectionSort: UserAuthorOfCommentsConnectionSort;
  UserAuthorOfCommentsConnectionWhere: UserAuthorOfCommentsConnectionWhere;
  UserAuthorOfCommentsCreateFieldInput: UserAuthorOfCommentsCreateFieldInput;
  UserAuthorOfCommentsDeleteFieldInput: UserAuthorOfCommentsDeleteFieldInput;
  UserAuthorOfCommentsDisconnectFieldInput: UserAuthorOfCommentsDisconnectFieldInput;
  UserAuthorOfCommentsFieldInput: UserAuthorOfCommentsFieldInput;
  UserAuthorOfCommentsNodeAggregationWhereInput: UserAuthorOfCommentsNodeAggregationWhereInput;
  UserAuthorOfCommentsRelationship: Omit<
    UserAuthorOfCommentsRelationship,
    'node'
  > & {
    node: ResolversParentTypes['Comment'];
  };
  UserAuthorOfCommentsUpdateConnectionInput: UserAuthorOfCommentsUpdateConnectionInput;
  UserAuthorOfCommentsUpdateFieldInput: UserAuthorOfCommentsUpdateFieldInput;
  UserCommentAuthorOfCommentsAggregationSelection: UserCommentAuthorOfCommentsAggregationSelection;
  UserCommentAuthorOfCommentsNodeAggregateSelection: UserCommentAuthorOfCommentsNodeAggregateSelection;
  UserConnectInput: UserConnectInput;
  UserConnectWhere: UserConnectWhere;
  UserCreateInput: UserCreateInput;
  UserDeleteInput: UserDeleteInput;
  UserDisconnectInput: UserDisconnectInput;
  UserEdge: UserEdge;
  UserOptions: UserOptions;
  UserPostPostsAggregationSelection: UserPostPostsAggregationSelection;
  UserPostPostsNodeAggregateSelection: UserPostPostsNodeAggregateSelection;
  UserPostsAggregateInput: UserPostsAggregateInput;
  UserPostsConnectFieldInput: UserPostsConnectFieldInput;
  UserPostsConnection: UserPostsConnection;
  UserPostsConnectionSort: UserPostsConnectionSort;
  UserPostsConnectionWhere: UserPostsConnectionWhere;
  UserPostsCreateFieldInput: UserPostsCreateFieldInput;
  UserPostsDeleteFieldInput: UserPostsDeleteFieldInput;
  UserPostsDisconnectFieldInput: UserPostsDisconnectFieldInput;
  UserPostsFieldInput: UserPostsFieldInput;
  UserPostsNodeAggregationWhereInput: UserPostsNodeAggregationWhereInput;
  UserPostsRelationship: UserPostsRelationship;
  UserPostsUpdateConnectionInput: UserPostsUpdateConnectionInput;
  UserPostsUpdateFieldInput: UserPostsUpdateFieldInput;
  UserRelationInput: UserRelationInput;
  UserSort: UserSort;
  UserUpdateInput: UserUpdateInput;
  UserWhere: UserWhere;
  UsersConnection: UsersConnection;
};

export type CommentResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes['Comment'] = ResolversParentTypes['Comment'],
> = {
  __resolveType: TypeResolveFn<
    'PostComment' | 'ReplyComment',
    ParentType,
    ContextType
  >;
  author?: Resolver<
    ResolversTypes['User'],
    ParentType,
    ContextType,
    Partial<CommentAuthorArgs>
  >;
  authorConnection?: Resolver<
    ResolversTypes['CommentAuthorConnection'],
    ParentType,
    ContextType,
    Partial<CommentAuthorConnectionArgs>
  >;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  replies?: Resolver<
    Array<ResolversTypes['Comment']>,
    ParentType,
    ContextType,
    Partial<CommentRepliesArgs>
  >;
  repliesConnection?: Resolver<
    ResolversTypes['CommentRepliesConnection'],
    ParentType,
    ContextType,
    Partial<CommentRepliesConnectionArgs>
  >;
  text?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type CommentAggregateSelectionResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes['CommentAggregateSelection'] = ResolversParentTypes['CommentAggregateSelection'],
> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  id?: Resolver<
    ResolversTypes['StringAggregateSelection'],
    ParentType,
    ContextType
  >;
  text?: Resolver<
    ResolversTypes['StringAggregateSelection'],
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CommentAuthorConnectionResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes['CommentAuthorConnection'] = ResolversParentTypes['CommentAuthorConnection'],
> = {
  edges?: Resolver<
    Array<ResolversTypes['CommentAuthorRelationship']>,
    ParentType,
    ContextType
  >;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CommentAuthorRelationshipResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes['CommentAuthorRelationship'] = ResolversParentTypes['CommentAuthorRelationship'],
> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CommentEdgeResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes['CommentEdge'] = ResolversParentTypes['CommentEdge'],
> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['Comment'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CommentRepliesConnectionResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes['CommentRepliesConnection'] = ResolversParentTypes['CommentRepliesConnection'],
> = {
  edges?: Resolver<
    Array<ResolversTypes['CommentRepliesRelationship']>,
    ParentType,
    ContextType
  >;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CommentRepliesRelationshipResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes['CommentRepliesRelationship'] = ResolversParentTypes['CommentRepliesRelationship'],
> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['Comment'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CommentsConnectionResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes['CommentsConnection'] = ResolversParentTypes['CommentsConnection'],
> = {
  edges?: Resolver<
    Array<ResolversTypes['CommentEdge']>,
    ParentType,
    ContextType
  >;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreateInfoResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes['CreateInfo'] = ResolversParentTypes['CreateInfo'],
> = {
  bookmark?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  nodesCreated?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  relationshipsCreated?: Resolver<
    ResolversTypes['Int'],
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreatePostCommentsMutationResponseResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes['CreatePostCommentsMutationResponse'] = ResolversParentTypes['CreatePostCommentsMutationResponse'],
> = {
  info?: Resolver<ResolversTypes['CreateInfo'], ParentType, ContextType>;
  postComments?: Resolver<
    Array<ResolversTypes['PostComment']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreatePostsMutationResponseResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes['CreatePostsMutationResponse'] = ResolversParentTypes['CreatePostsMutationResponse'],
> = {
  info?: Resolver<ResolversTypes['CreateInfo'], ParentType, ContextType>;
  posts?: Resolver<Array<ResolversTypes['Post']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreateReplyCommentsMutationResponseResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes['CreateReplyCommentsMutationResponse'] = ResolversParentTypes['CreateReplyCommentsMutationResponse'],
> = {
  info?: Resolver<ResolversTypes['CreateInfo'], ParentType, ContextType>;
  replyComments?: Resolver<
    Array<ResolversTypes['ReplyComment']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreateUsersMutationResponseResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes['CreateUsersMutationResponse'] = ResolversParentTypes['CreateUsersMutationResponse'],
> = {
  info?: Resolver<ResolversTypes['CreateInfo'], ParentType, ContextType>;
  users?: Resolver<Array<ResolversTypes['User']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface DateTimeScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes['DateTime'], any> {
  name: 'DateTime';
}

export type DateTimeAggregateSelectionResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes['DateTimeAggregateSelection'] = ResolversParentTypes['DateTimeAggregateSelection'],
> = {
  max?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  min?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DeleteInfoResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes['DeleteInfo'] = ResolversParentTypes['DeleteInfo'],
> = {
  bookmark?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  nodesDeleted?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  relationshipsDeleted?: Resolver<
    ResolversTypes['Int'],
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation'],
> = {
  createPostComments?: Resolver<
    ResolversTypes['CreatePostCommentsMutationResponse'],
    ParentType,
    ContextType,
    RequireFields<MutationCreatePostCommentsArgs, 'input'>
  >;
  createPosts?: Resolver<
    ResolversTypes['CreatePostsMutationResponse'],
    ParentType,
    ContextType,
    RequireFields<MutationCreatePostsArgs, 'input'>
  >;
  createReplyComments?: Resolver<
    ResolversTypes['CreateReplyCommentsMutationResponse'],
    ParentType,
    ContextType,
    RequireFields<MutationCreateReplyCommentsArgs, 'input'>
  >;
  createUsers?: Resolver<
    ResolversTypes['CreateUsersMutationResponse'],
    ParentType,
    ContextType,
    RequireFields<MutationCreateUsersArgs, 'input'>
  >;
  deletePostComments?: Resolver<
    ResolversTypes['DeleteInfo'],
    ParentType,
    ContextType,
    Partial<MutationDeletePostCommentsArgs>
  >;
  deletePosts?: Resolver<
    ResolversTypes['DeleteInfo'],
    ParentType,
    ContextType,
    Partial<MutationDeletePostsArgs>
  >;
  deleteReplyComments?: Resolver<
    ResolversTypes['DeleteInfo'],
    ParentType,
    ContextType,
    Partial<MutationDeleteReplyCommentsArgs>
  >;
  deleteUsers?: Resolver<
    ResolversTypes['DeleteInfo'],
    ParentType,
    ContextType,
    Partial<MutationDeleteUsersArgs>
  >;
  signIn?: Resolver<
    ResolversTypes['String'],
    ParentType,
    ContextType,
    RequireFields<MutationSignInArgs, 'email' | 'id' | 'password'>
  >;
  updatePostComments?: Resolver<
    ResolversTypes['UpdatePostCommentsMutationResponse'],
    ParentType,
    ContextType,
    Partial<MutationUpdatePostCommentsArgs>
  >;
  updatePosts?: Resolver<
    ResolversTypes['UpdatePostsMutationResponse'],
    ParentType,
    ContextType,
    Partial<MutationUpdatePostsArgs>
  >;
  updateReplyComments?: Resolver<
    ResolversTypes['UpdateReplyCommentsMutationResponse'],
    ParentType,
    ContextType,
    Partial<MutationUpdateReplyCommentsArgs>
  >;
  updateUsers?: Resolver<
    ResolversTypes['UpdateUsersMutationResponse'],
    ParentType,
    ContextType,
    Partial<MutationUpdateUsersArgs>
  >;
};

export type PageInfoResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes['PageInfo'] = ResolversParentTypes['PageInfo'],
> = {
  endCursor?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >;
  hasNextPage?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  hasPreviousPage?: Resolver<
    ResolversTypes['Boolean'],
    ParentType,
    ContextType
  >;
  startCursor?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PostResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes['Post'] = ResolversParentTypes['Post'],
> = {
  comments?: Resolver<
    Array<ResolversTypes['Comment']>,
    ParentType,
    ContextType,
    RequireFields<PostCommentsArgs, 'directed'>
  >;
  commentsAggregate?: Resolver<
    Maybe<ResolversTypes['PostCommentCommentsAggregationSelection']>,
    ParentType,
    ContextType,
    RequireFields<PostCommentsAggregateArgs, 'directed'>
  >;
  commentsConnection?: Resolver<
    ResolversTypes['PostCommentsConnection'],
    ParentType,
    ContextType,
    RequireFields<PostCommentsConnectionArgs, 'directed'>
  >;
  creatorOfPost?: Resolver<
    ResolversTypes['User'],
    ParentType,
    ContextType,
    RequireFields<PostCreatorOfPostArgs, 'directed'>
  >;
  creatorOfPostAggregate?: Resolver<
    Maybe<ResolversTypes['PostUserCreatorOfPostAggregationSelection']>,
    ParentType,
    ContextType,
    RequireFields<PostCreatorOfPostAggregateArgs, 'directed'>
  >;
  creatorOfPostConnection?: Resolver<
    ResolversTypes['PostCreatorOfPostConnection'],
    ParentType,
    ContextType,
    RequireFields<PostCreatorOfPostConnectionArgs, 'directed'>
  >;
  description?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  url?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PostAggregateSelectionResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes['PostAggregateSelection'] = ResolversParentTypes['PostAggregateSelection'],
> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  description?: Resolver<
    ResolversTypes['StringAggregateSelection'],
    ParentType,
    ContextType
  >;
  id?: Resolver<
    ResolversTypes['StringAggregateSelection'],
    ParentType,
    ContextType
  >;
  url?: Resolver<
    ResolversTypes['StringAggregateSelection'],
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PostCommentResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes['PostComment'] = ResolversParentTypes['PostComment'],
> = {
  author?: Resolver<
    ResolversTypes['User'],
    ParentType,
    ContextType,
    RequireFields<PostCommentAuthorArgs, 'directed'>
  >;
  authorAggregate?: Resolver<
    Maybe<ResolversTypes['PostCommentUserAuthorAggregationSelection']>,
    ParentType,
    ContextType,
    RequireFields<PostCommentAuthorAggregateArgs, 'directed'>
  >;
  authorConnection?: Resolver<
    ResolversTypes['CommentAuthorConnection'],
    ParentType,
    ContextType,
    RequireFields<PostCommentAuthorConnectionArgs, 'directed'>
  >;
  commentOfPost?: Resolver<
    ResolversTypes['Post'],
    ParentType,
    ContextType,
    RequireFields<PostCommentCommentOfPostArgs, 'directed'>
  >;
  commentOfPostAggregate?: Resolver<
    Maybe<ResolversTypes['PostCommentPostCommentOfPostAggregationSelection']>,
    ParentType,
    ContextType,
    RequireFields<PostCommentCommentOfPostAggregateArgs, 'directed'>
  >;
  commentOfPostConnection?: Resolver<
    ResolversTypes['PostCommentCommentOfPostConnection'],
    ParentType,
    ContextType,
    RequireFields<PostCommentCommentOfPostConnectionArgs, 'directed'>
  >;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  replies?: Resolver<
    Array<ResolversTypes['Comment']>,
    ParentType,
    ContextType,
    RequireFields<PostCommentRepliesArgs, 'directed'>
  >;
  repliesAggregate?: Resolver<
    Maybe<ResolversTypes['PostCommentCommentRepliesAggregationSelection']>,
    ParentType,
    ContextType,
    RequireFields<PostCommentRepliesAggregateArgs, 'directed'>
  >;
  repliesConnection?: Resolver<
    ResolversTypes['CommentRepliesConnection'],
    ParentType,
    ContextType,
    RequireFields<PostCommentRepliesConnectionArgs, 'directed'>
  >;
  text?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PostCommentAggregateSelectionResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes['PostCommentAggregateSelection'] = ResolversParentTypes['PostCommentAggregateSelection'],
> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  id?: Resolver<
    ResolversTypes['StringAggregateSelection'],
    ParentType,
    ContextType
  >;
  text?: Resolver<
    ResolversTypes['StringAggregateSelection'],
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PostCommentCommentOfPostConnectionResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes['PostCommentCommentOfPostConnection'] = ResolversParentTypes['PostCommentCommentOfPostConnection'],
> = {
  edges?: Resolver<
    Array<ResolversTypes['PostCommentCommentOfPostRelationship']>,
    ParentType,
    ContextType
  >;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PostCommentCommentOfPostRelationshipResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes['PostCommentCommentOfPostRelationship'] = ResolversParentTypes['PostCommentCommentOfPostRelationship'],
> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['Post'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PostCommentCommentRepliesAggregationSelectionResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes['PostCommentCommentRepliesAggregationSelection'] = ResolversParentTypes['PostCommentCommentRepliesAggregationSelection'],
> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  node?: Resolver<
    Maybe<ResolversTypes['PostCommentCommentRepliesNodeAggregateSelection']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PostCommentCommentRepliesNodeAggregateSelectionResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes['PostCommentCommentRepliesNodeAggregateSelection'] = ResolversParentTypes['PostCommentCommentRepliesNodeAggregateSelection'],
> = {
  id?: Resolver<
    ResolversTypes['StringAggregateSelection'],
    ParentType,
    ContextType
  >;
  text?: Resolver<
    ResolversTypes['StringAggregateSelection'],
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PostCommentCommentsAggregationSelectionResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes['PostCommentCommentsAggregationSelection'] = ResolversParentTypes['PostCommentCommentsAggregationSelection'],
> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  node?: Resolver<
    Maybe<ResolversTypes['PostCommentCommentsNodeAggregateSelection']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PostCommentCommentsNodeAggregateSelectionResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes['PostCommentCommentsNodeAggregateSelection'] = ResolversParentTypes['PostCommentCommentsNodeAggregateSelection'],
> = {
  id?: Resolver<
    ResolversTypes['StringAggregateSelection'],
    ParentType,
    ContextType
  >;
  text?: Resolver<
    ResolversTypes['StringAggregateSelection'],
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PostCommentEdgeResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes['PostCommentEdge'] = ResolversParentTypes['PostCommentEdge'],
> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['PostComment'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PostCommentPostCommentOfPostAggregationSelectionResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes['PostCommentPostCommentOfPostAggregationSelection'] = ResolversParentTypes['PostCommentPostCommentOfPostAggregationSelection'],
> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  node?: Resolver<
    Maybe<ResolversTypes['PostCommentPostCommentOfPostNodeAggregateSelection']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PostCommentPostCommentOfPostNodeAggregateSelectionResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes['PostCommentPostCommentOfPostNodeAggregateSelection'] = ResolversParentTypes['PostCommentPostCommentOfPostNodeAggregateSelection'],
> = {
  description?: Resolver<
    ResolversTypes['StringAggregateSelection'],
    ParentType,
    ContextType
  >;
  id?: Resolver<
    ResolversTypes['StringAggregateSelection'],
    ParentType,
    ContextType
  >;
  url?: Resolver<
    ResolversTypes['StringAggregateSelection'],
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PostCommentUserAuthorAggregationSelectionResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes['PostCommentUserAuthorAggregationSelection'] = ResolversParentTypes['PostCommentUserAuthorAggregationSelection'],
> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  node?: Resolver<
    Maybe<ResolversTypes['PostCommentUserAuthorNodeAggregateSelection']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PostCommentUserAuthorNodeAggregateSelectionResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes['PostCommentUserAuthorNodeAggregateSelection'] = ResolversParentTypes['PostCommentUserAuthorNodeAggregateSelection'],
> = {
  dob?: Resolver<
    ResolversTypes['DateTimeAggregateSelection'],
    ParentType,
    ContextType
  >;
  email?: Resolver<
    ResolversTypes['StringAggregateSelection'],
    ParentType,
    ContextType
  >;
  id?: Resolver<
    ResolversTypes['StringAggregateSelection'],
    ParentType,
    ContextType
  >;
  name?: Resolver<
    ResolversTypes['StringAggregateSelection'],
    ParentType,
    ContextType
  >;
  username?: Resolver<
    ResolversTypes['StringAggregateSelection'],
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PostCommentsConnectionResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes['PostCommentsConnection'] = ResolversParentTypes['PostCommentsConnection'],
> = {
  edges?: Resolver<
    Array<ResolversTypes['PostCommentsRelationship']>,
    ParentType,
    ContextType
  >;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PostCommentsRelationshipResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes['PostCommentsRelationship'] = ResolversParentTypes['PostCommentsRelationship'],
> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['Comment'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PostCreatorOfPostConnectionResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes['PostCreatorOfPostConnection'] = ResolversParentTypes['PostCreatorOfPostConnection'],
> = {
  edges?: Resolver<
    Array<ResolversTypes['PostCreatorOfPostRelationship']>,
    ParentType,
    ContextType
  >;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PostCreatorOfPostRelationshipResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes['PostCreatorOfPostRelationship'] = ResolversParentTypes['PostCreatorOfPostRelationship'],
> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PostEdgeResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes['PostEdge'] = ResolversParentTypes['PostEdge'],
> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['Post'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PostUserCreatorOfPostAggregationSelectionResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes['PostUserCreatorOfPostAggregationSelection'] = ResolversParentTypes['PostUserCreatorOfPostAggregationSelection'],
> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  node?: Resolver<
    Maybe<ResolversTypes['PostUserCreatorOfPostNodeAggregateSelection']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PostUserCreatorOfPostNodeAggregateSelectionResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes['PostUserCreatorOfPostNodeAggregateSelection'] = ResolversParentTypes['PostUserCreatorOfPostNodeAggregateSelection'],
> = {
  dob?: Resolver<
    ResolversTypes['DateTimeAggregateSelection'],
    ParentType,
    ContextType
  >;
  email?: Resolver<
    ResolversTypes['StringAggregateSelection'],
    ParentType,
    ContextType
  >;
  id?: Resolver<
    ResolversTypes['StringAggregateSelection'],
    ParentType,
    ContextType
  >;
  name?: Resolver<
    ResolversTypes['StringAggregateSelection'],
    ParentType,
    ContextType
  >;
  username?: Resolver<
    ResolversTypes['StringAggregateSelection'],
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PostsConnectionResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes['PostsConnection'] = ResolversParentTypes['PostsConnection'],
> = {
  edges?: Resolver<Array<ResolversTypes['PostEdge']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes['Query'] = ResolversParentTypes['Query'],
> = {
  comments?: Resolver<
    Array<ResolversTypes['Comment']>,
    ParentType,
    ContextType,
    Partial<QueryCommentsArgs>
  >;
  commentsAggregate?: Resolver<
    ResolversTypes['CommentAggregateSelection'],
    ParentType,
    ContextType,
    Partial<QueryCommentsAggregateArgs>
  >;
  commentsConnection?: Resolver<
    ResolversTypes['CommentsConnection'],
    ParentType,
    ContextType,
    Partial<QueryCommentsConnectionArgs>
  >;
  postComments?: Resolver<
    Array<ResolversTypes['PostComment']>,
    ParentType,
    ContextType,
    Partial<QueryPostCommentsArgs>
  >;
  postCommentsAggregate?: Resolver<
    ResolversTypes['PostCommentAggregateSelection'],
    ParentType,
    ContextType,
    Partial<QueryPostCommentsAggregateArgs>
  >;
  postCommentsConnection?: Resolver<
    ResolversTypes['PostCommentsConnection'],
    ParentType,
    ContextType,
    Partial<QueryPostCommentsConnectionArgs>
  >;
  posts?: Resolver<
    Array<ResolversTypes['Post']>,
    ParentType,
    ContextType,
    Partial<QueryPostsArgs>
  >;
  postsAggregate?: Resolver<
    ResolversTypes['PostAggregateSelection'],
    ParentType,
    ContextType,
    Partial<QueryPostsAggregateArgs>
  >;
  postsConnection?: Resolver<
    ResolversTypes['PostsConnection'],
    ParentType,
    ContextType,
    Partial<QueryPostsConnectionArgs>
  >;
  replyComments?: Resolver<
    Array<ResolversTypes['ReplyComment']>,
    ParentType,
    ContextType,
    Partial<QueryReplyCommentsArgs>
  >;
  replyCommentsAggregate?: Resolver<
    ResolversTypes['ReplyCommentAggregateSelection'],
    ParentType,
    ContextType,
    Partial<QueryReplyCommentsAggregateArgs>
  >;
  replyCommentsConnection?: Resolver<
    ResolversTypes['ReplyCommentsConnection'],
    ParentType,
    ContextType,
    Partial<QueryReplyCommentsConnectionArgs>
  >;
  users?: Resolver<
    Array<ResolversTypes['User']>,
    ParentType,
    ContextType,
    Partial<QueryUsersArgs>
  >;
  usersAggregate?: Resolver<
    ResolversTypes['UserAggregateSelection'],
    ParentType,
    ContextType,
    Partial<QueryUsersAggregateArgs>
  >;
  usersConnection?: Resolver<
    ResolversTypes['UsersConnection'],
    ParentType,
    ContextType,
    Partial<QueryUsersConnectionArgs>
  >;
};

export type ReplyCommentResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes['ReplyComment'] = ResolversParentTypes['ReplyComment'],
> = {
  author?: Resolver<
    ResolversTypes['User'],
    ParentType,
    ContextType,
    RequireFields<ReplyCommentAuthorArgs, 'directed'>
  >;
  authorAggregate?: Resolver<
    Maybe<ResolversTypes['ReplyCommentUserAuthorAggregationSelection']>,
    ParentType,
    ContextType,
    RequireFields<ReplyCommentAuthorAggregateArgs, 'directed'>
  >;
  authorConnection?: Resolver<
    ResolversTypes['CommentAuthorConnection'],
    ParentType,
    ContextType,
    RequireFields<ReplyCommentAuthorConnectionArgs, 'directed'>
  >;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  replies?: Resolver<
    Array<ResolversTypes['Comment']>,
    ParentType,
    ContextType,
    RequireFields<ReplyCommentRepliesArgs, 'directed'>
  >;
  repliesAggregate?: Resolver<
    Maybe<ResolversTypes['ReplyCommentCommentRepliesAggregationSelection']>,
    ParentType,
    ContextType,
    RequireFields<ReplyCommentRepliesAggregateArgs, 'directed'>
  >;
  repliesConnection?: Resolver<
    ResolversTypes['CommentRepliesConnection'],
    ParentType,
    ContextType,
    RequireFields<ReplyCommentRepliesConnectionArgs, 'directed'>
  >;
  replyOfComment?: Resolver<
    ResolversTypes['Comment'],
    ParentType,
    ContextType,
    RequireFields<ReplyCommentReplyOfCommentArgs, 'directed'>
  >;
  replyOfCommentAggregate?: Resolver<
    Maybe<
      ResolversTypes['ReplyCommentCommentReplyOfCommentAggregationSelection']
    >,
    ParentType,
    ContextType,
    RequireFields<ReplyCommentReplyOfCommentAggregateArgs, 'directed'>
  >;
  replyOfCommentConnection?: Resolver<
    ResolversTypes['ReplyCommentReplyOfCommentConnection'],
    ParentType,
    ContextType,
    RequireFields<ReplyCommentReplyOfCommentConnectionArgs, 'directed'>
  >;
  text?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ReplyCommentAggregateSelectionResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes['ReplyCommentAggregateSelection'] = ResolversParentTypes['ReplyCommentAggregateSelection'],
> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  id?: Resolver<
    ResolversTypes['StringAggregateSelection'],
    ParentType,
    ContextType
  >;
  text?: Resolver<
    ResolversTypes['StringAggregateSelection'],
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ReplyCommentCommentRepliesAggregationSelectionResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes['ReplyCommentCommentRepliesAggregationSelection'] = ResolversParentTypes['ReplyCommentCommentRepliesAggregationSelection'],
> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  node?: Resolver<
    Maybe<ResolversTypes['ReplyCommentCommentRepliesNodeAggregateSelection']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ReplyCommentCommentRepliesNodeAggregateSelectionResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes['ReplyCommentCommentRepliesNodeAggregateSelection'] = ResolversParentTypes['ReplyCommentCommentRepliesNodeAggregateSelection'],
> = {
  id?: Resolver<
    ResolversTypes['StringAggregateSelection'],
    ParentType,
    ContextType
  >;
  text?: Resolver<
    ResolversTypes['StringAggregateSelection'],
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ReplyCommentCommentReplyOfCommentAggregationSelectionResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes['ReplyCommentCommentReplyOfCommentAggregationSelection'] = ResolversParentTypes['ReplyCommentCommentReplyOfCommentAggregationSelection'],
> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  node?: Resolver<
    Maybe<
      ResolversTypes['ReplyCommentCommentReplyOfCommentNodeAggregateSelection']
    >,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ReplyCommentCommentReplyOfCommentNodeAggregateSelectionResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes['ReplyCommentCommentReplyOfCommentNodeAggregateSelection'] = ResolversParentTypes['ReplyCommentCommentReplyOfCommentNodeAggregateSelection'],
> = {
  id?: Resolver<
    ResolversTypes['StringAggregateSelection'],
    ParentType,
    ContextType
  >;
  text?: Resolver<
    ResolversTypes['StringAggregateSelection'],
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ReplyCommentEdgeResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes['ReplyCommentEdge'] = ResolversParentTypes['ReplyCommentEdge'],
> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['ReplyComment'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ReplyCommentReplyOfCommentConnectionResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes['ReplyCommentReplyOfCommentConnection'] = ResolversParentTypes['ReplyCommentReplyOfCommentConnection'],
> = {
  edges?: Resolver<
    Array<ResolversTypes['ReplyCommentReplyOfCommentRelationship']>,
    ParentType,
    ContextType
  >;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ReplyCommentReplyOfCommentRelationshipResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes['ReplyCommentReplyOfCommentRelationship'] = ResolversParentTypes['ReplyCommentReplyOfCommentRelationship'],
> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['Comment'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ReplyCommentUserAuthorAggregationSelectionResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes['ReplyCommentUserAuthorAggregationSelection'] = ResolversParentTypes['ReplyCommentUserAuthorAggregationSelection'],
> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  node?: Resolver<
    Maybe<ResolversTypes['ReplyCommentUserAuthorNodeAggregateSelection']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ReplyCommentUserAuthorNodeAggregateSelectionResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes['ReplyCommentUserAuthorNodeAggregateSelection'] = ResolversParentTypes['ReplyCommentUserAuthorNodeAggregateSelection'],
> = {
  dob?: Resolver<
    ResolversTypes['DateTimeAggregateSelection'],
    ParentType,
    ContextType
  >;
  email?: Resolver<
    ResolversTypes['StringAggregateSelection'],
    ParentType,
    ContextType
  >;
  id?: Resolver<
    ResolversTypes['StringAggregateSelection'],
    ParentType,
    ContextType
  >;
  name?: Resolver<
    ResolversTypes['StringAggregateSelection'],
    ParentType,
    ContextType
  >;
  username?: Resolver<
    ResolversTypes['StringAggregateSelection'],
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ReplyCommentsConnectionResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes['ReplyCommentsConnection'] = ResolversParentTypes['ReplyCommentsConnection'],
> = {
  edges?: Resolver<
    Array<ResolversTypes['ReplyCommentEdge']>,
    ParentType,
    ContextType
  >;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StringAggregateSelectionResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes['StringAggregateSelection'] = ResolversParentTypes['StringAggregateSelection'],
> = {
  longest?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  shortest?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UpdateInfoResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes['UpdateInfo'] = ResolversParentTypes['UpdateInfo'],
> = {
  bookmark?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  nodesCreated?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  nodesDeleted?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  relationshipsCreated?: Resolver<
    ResolversTypes['Int'],
    ParentType,
    ContextType
  >;
  relationshipsDeleted?: Resolver<
    ResolversTypes['Int'],
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UpdatePostCommentsMutationResponseResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes['UpdatePostCommentsMutationResponse'] = ResolversParentTypes['UpdatePostCommentsMutationResponse'],
> = {
  info?: Resolver<ResolversTypes['UpdateInfo'], ParentType, ContextType>;
  postComments?: Resolver<
    Array<ResolversTypes['PostComment']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UpdatePostsMutationResponseResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes['UpdatePostsMutationResponse'] = ResolversParentTypes['UpdatePostsMutationResponse'],
> = {
  info?: Resolver<ResolversTypes['UpdateInfo'], ParentType, ContextType>;
  posts?: Resolver<Array<ResolversTypes['Post']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UpdateReplyCommentsMutationResponseResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes['UpdateReplyCommentsMutationResponse'] = ResolversParentTypes['UpdateReplyCommentsMutationResponse'],
> = {
  info?: Resolver<ResolversTypes['UpdateInfo'], ParentType, ContextType>;
  replyComments?: Resolver<
    Array<ResolversTypes['ReplyComment']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UpdateUsersMutationResponseResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes['UpdateUsersMutationResponse'] = ResolversParentTypes['UpdateUsersMutationResponse'],
> = {
  info?: Resolver<ResolversTypes['UpdateInfo'], ParentType, ContextType>;
  users?: Resolver<Array<ResolversTypes['User']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes['User'] = ResolversParentTypes['User'],
> = {
  authorOfComments?: Resolver<
    Array<ResolversTypes['Comment']>,
    ParentType,
    ContextType,
    RequireFields<UserAuthorOfCommentsArgs, 'directed'>
  >;
  authorOfCommentsAggregate?: Resolver<
    Maybe<ResolversTypes['UserCommentAuthorOfCommentsAggregationSelection']>,
    ParentType,
    ContextType,
    RequireFields<UserAuthorOfCommentsAggregateArgs, 'directed'>
  >;
  authorOfCommentsConnection?: Resolver<
    ResolversTypes['UserAuthorOfCommentsConnection'],
    ParentType,
    ContextType,
    RequireFields<UserAuthorOfCommentsConnectionArgs, 'directed'>
  >;
  dob?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  posts?: Resolver<
    Array<ResolversTypes['Post']>,
    ParentType,
    ContextType,
    RequireFields<UserPostsArgs, 'directed'>
  >;
  postsAggregate?: Resolver<
    Maybe<ResolversTypes['UserPostPostsAggregationSelection']>,
    ParentType,
    ContextType,
    RequireFields<UserPostsAggregateArgs, 'directed'>
  >;
  postsConnection?: Resolver<
    ResolversTypes['UserPostsConnection'],
    ParentType,
    ContextType,
    RequireFields<UserPostsConnectionArgs, 'directed'>
  >;
  username?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserAggregateSelectionResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes['UserAggregateSelection'] = ResolversParentTypes['UserAggregateSelection'],
> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  dob?: Resolver<
    ResolversTypes['DateTimeAggregateSelection'],
    ParentType,
    ContextType
  >;
  email?: Resolver<
    ResolversTypes['StringAggregateSelection'],
    ParentType,
    ContextType
  >;
  id?: Resolver<
    ResolversTypes['StringAggregateSelection'],
    ParentType,
    ContextType
  >;
  name?: Resolver<
    ResolversTypes['StringAggregateSelection'],
    ParentType,
    ContextType
  >;
  username?: Resolver<
    ResolversTypes['StringAggregateSelection'],
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserAuthorOfCommentsConnectionResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes['UserAuthorOfCommentsConnection'] = ResolversParentTypes['UserAuthorOfCommentsConnection'],
> = {
  edges?: Resolver<
    Array<ResolversTypes['UserAuthorOfCommentsRelationship']>,
    ParentType,
    ContextType
  >;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserAuthorOfCommentsRelationshipResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes['UserAuthorOfCommentsRelationship'] = ResolversParentTypes['UserAuthorOfCommentsRelationship'],
> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['Comment'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserCommentAuthorOfCommentsAggregationSelectionResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes['UserCommentAuthorOfCommentsAggregationSelection'] = ResolversParentTypes['UserCommentAuthorOfCommentsAggregationSelection'],
> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  node?: Resolver<
    Maybe<ResolversTypes['UserCommentAuthorOfCommentsNodeAggregateSelection']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserCommentAuthorOfCommentsNodeAggregateSelectionResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes['UserCommentAuthorOfCommentsNodeAggregateSelection'] = ResolversParentTypes['UserCommentAuthorOfCommentsNodeAggregateSelection'],
> = {
  id?: Resolver<
    ResolversTypes['StringAggregateSelection'],
    ParentType,
    ContextType
  >;
  text?: Resolver<
    ResolversTypes['StringAggregateSelection'],
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserEdgeResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes['UserEdge'] = ResolversParentTypes['UserEdge'],
> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserPostPostsAggregationSelectionResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes['UserPostPostsAggregationSelection'] = ResolversParentTypes['UserPostPostsAggregationSelection'],
> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  node?: Resolver<
    Maybe<ResolversTypes['UserPostPostsNodeAggregateSelection']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserPostPostsNodeAggregateSelectionResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes['UserPostPostsNodeAggregateSelection'] = ResolversParentTypes['UserPostPostsNodeAggregateSelection'],
> = {
  description?: Resolver<
    ResolversTypes['StringAggregateSelection'],
    ParentType,
    ContextType
  >;
  id?: Resolver<
    ResolversTypes['StringAggregateSelection'],
    ParentType,
    ContextType
  >;
  url?: Resolver<
    ResolversTypes['StringAggregateSelection'],
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserPostsConnectionResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes['UserPostsConnection'] = ResolversParentTypes['UserPostsConnection'],
> = {
  edges?: Resolver<
    Array<ResolversTypes['UserPostsRelationship']>,
    ParentType,
    ContextType
  >;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserPostsRelationshipResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes['UserPostsRelationship'] = ResolversParentTypes['UserPostsRelationship'],
> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['Post'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersConnectionResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes['UsersConnection'] = ResolversParentTypes['UsersConnection'],
> = {
  edges?: Resolver<Array<ResolversTypes['UserEdge']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  Comment?: CommentResolvers<ContextType>;
  CommentAggregateSelection?: CommentAggregateSelectionResolvers<ContextType>;
  CommentAuthorConnection?: CommentAuthorConnectionResolvers<ContextType>;
  CommentAuthorRelationship?: CommentAuthorRelationshipResolvers<ContextType>;
  CommentEdge?: CommentEdgeResolvers<ContextType>;
  CommentRepliesConnection?: CommentRepliesConnectionResolvers<ContextType>;
  CommentRepliesRelationship?: CommentRepliesRelationshipResolvers<ContextType>;
  CommentsConnection?: CommentsConnectionResolvers<ContextType>;
  CreateInfo?: CreateInfoResolvers<ContextType>;
  CreatePostCommentsMutationResponse?: CreatePostCommentsMutationResponseResolvers<ContextType>;
  CreatePostsMutationResponse?: CreatePostsMutationResponseResolvers<ContextType>;
  CreateReplyCommentsMutationResponse?: CreateReplyCommentsMutationResponseResolvers<ContextType>;
  CreateUsersMutationResponse?: CreateUsersMutationResponseResolvers<ContextType>;
  DateTime?: GraphQLScalarType;
  DateTimeAggregateSelection?: DateTimeAggregateSelectionResolvers<ContextType>;
  DeleteInfo?: DeleteInfoResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  PageInfo?: PageInfoResolvers<ContextType>;
  Post?: PostResolvers<ContextType>;
  PostAggregateSelection?: PostAggregateSelectionResolvers<ContextType>;
  PostComment?: PostCommentResolvers<ContextType>;
  PostCommentAggregateSelection?: PostCommentAggregateSelectionResolvers<ContextType>;
  PostCommentCommentOfPostConnection?: PostCommentCommentOfPostConnectionResolvers<ContextType>;
  PostCommentCommentOfPostRelationship?: PostCommentCommentOfPostRelationshipResolvers<ContextType>;
  PostCommentCommentRepliesAggregationSelection?: PostCommentCommentRepliesAggregationSelectionResolvers<ContextType>;
  PostCommentCommentRepliesNodeAggregateSelection?: PostCommentCommentRepliesNodeAggregateSelectionResolvers<ContextType>;
  PostCommentCommentsAggregationSelection?: PostCommentCommentsAggregationSelectionResolvers<ContextType>;
  PostCommentCommentsNodeAggregateSelection?: PostCommentCommentsNodeAggregateSelectionResolvers<ContextType>;
  PostCommentEdge?: PostCommentEdgeResolvers<ContextType>;
  PostCommentPostCommentOfPostAggregationSelection?: PostCommentPostCommentOfPostAggregationSelectionResolvers<ContextType>;
  PostCommentPostCommentOfPostNodeAggregateSelection?: PostCommentPostCommentOfPostNodeAggregateSelectionResolvers<ContextType>;
  PostCommentUserAuthorAggregationSelection?: PostCommentUserAuthorAggregationSelectionResolvers<ContextType>;
  PostCommentUserAuthorNodeAggregateSelection?: PostCommentUserAuthorNodeAggregateSelectionResolvers<ContextType>;
  PostCommentsConnection?: PostCommentsConnectionResolvers<ContextType>;
  PostCommentsRelationship?: PostCommentsRelationshipResolvers<ContextType>;
  PostCreatorOfPostConnection?: PostCreatorOfPostConnectionResolvers<ContextType>;
  PostCreatorOfPostRelationship?: PostCreatorOfPostRelationshipResolvers<ContextType>;
  PostEdge?: PostEdgeResolvers<ContextType>;
  PostUserCreatorOfPostAggregationSelection?: PostUserCreatorOfPostAggregationSelectionResolvers<ContextType>;
  PostUserCreatorOfPostNodeAggregateSelection?: PostUserCreatorOfPostNodeAggregateSelectionResolvers<ContextType>;
  PostsConnection?: PostsConnectionResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  ReplyComment?: ReplyCommentResolvers<ContextType>;
  ReplyCommentAggregateSelection?: ReplyCommentAggregateSelectionResolvers<ContextType>;
  ReplyCommentCommentRepliesAggregationSelection?: ReplyCommentCommentRepliesAggregationSelectionResolvers<ContextType>;
  ReplyCommentCommentRepliesNodeAggregateSelection?: ReplyCommentCommentRepliesNodeAggregateSelectionResolvers<ContextType>;
  ReplyCommentCommentReplyOfCommentAggregationSelection?: ReplyCommentCommentReplyOfCommentAggregationSelectionResolvers<ContextType>;
  ReplyCommentCommentReplyOfCommentNodeAggregateSelection?: ReplyCommentCommentReplyOfCommentNodeAggregateSelectionResolvers<ContextType>;
  ReplyCommentEdge?: ReplyCommentEdgeResolvers<ContextType>;
  ReplyCommentReplyOfCommentConnection?: ReplyCommentReplyOfCommentConnectionResolvers<ContextType>;
  ReplyCommentReplyOfCommentRelationship?: ReplyCommentReplyOfCommentRelationshipResolvers<ContextType>;
  ReplyCommentUserAuthorAggregationSelection?: ReplyCommentUserAuthorAggregationSelectionResolvers<ContextType>;
  ReplyCommentUserAuthorNodeAggregateSelection?: ReplyCommentUserAuthorNodeAggregateSelectionResolvers<ContextType>;
  ReplyCommentsConnection?: ReplyCommentsConnectionResolvers<ContextType>;
  StringAggregateSelection?: StringAggregateSelectionResolvers<ContextType>;
  UpdateInfo?: UpdateInfoResolvers<ContextType>;
  UpdatePostCommentsMutationResponse?: UpdatePostCommentsMutationResponseResolvers<ContextType>;
  UpdatePostsMutationResponse?: UpdatePostsMutationResponseResolvers<ContextType>;
  UpdateReplyCommentsMutationResponse?: UpdateReplyCommentsMutationResponseResolvers<ContextType>;
  UpdateUsersMutationResponse?: UpdateUsersMutationResponseResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
  UserAggregateSelection?: UserAggregateSelectionResolvers<ContextType>;
  UserAuthorOfCommentsConnection?: UserAuthorOfCommentsConnectionResolvers<ContextType>;
  UserAuthorOfCommentsRelationship?: UserAuthorOfCommentsRelationshipResolvers<ContextType>;
  UserCommentAuthorOfCommentsAggregationSelection?: UserCommentAuthorOfCommentsAggregationSelectionResolvers<ContextType>;
  UserCommentAuthorOfCommentsNodeAggregateSelection?: UserCommentAuthorOfCommentsNodeAggregateSelectionResolvers<ContextType>;
  UserEdge?: UserEdgeResolvers<ContextType>;
  UserPostPostsAggregationSelection?: UserPostPostsAggregationSelectionResolvers<ContextType>;
  UserPostPostsNodeAggregateSelection?: UserPostPostsNodeAggregateSelectionResolvers<ContextType>;
  UserPostsConnection?: UserPostsConnectionResolvers<ContextType>;
  UserPostsRelationship?: UserPostsRelationshipResolvers<ContextType>;
  UsersConnection?: UsersConnectionResolvers<ContextType>;
};
