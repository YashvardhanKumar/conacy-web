/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** A date, represented as a 'yyyy-mm-dd' string */
  Date: { input: any; output: any; }
  /** A date and time, represented as an ISO-8601 string */
  DateTime: { input: any; output: any; }
};

export type Comment = {
  __typename?: 'Comment';
  author: User;
  authorAggregate?: Maybe<CommentUserAuthorAggregationSelection>;
  authorConnection: CommentAuthorConnection;
  commentOfPost: Post;
  commentOfPostAggregate?: Maybe<CommentPostCommentOfPostAggregationSelection>;
  commentOfPostConnection: CommentCommentOfPostConnection;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['ID']['output'];
  indent: Scalars['Int']['output'];
  likes: Array<User>;
  likesAggregate?: Maybe<CommentUserLikesAggregationSelection>;
  likesConnection: CommentLikesConnection;
  parentsOfComment: Array<Scalars['ID']['output']>;
  replies: Array<Comment>;
  repliesAggregate?: Maybe<CommentCommentRepliesAggregationSelection>;
  repliesConnection: CommentRepliesConnection;
  replyOfComment?: Maybe<Comment>;
  replyOfCommentAggregate?: Maybe<CommentCommentReplyOfCommentAggregationSelection>;
  replyOfCommentConnection: CommentReplyOfCommentConnection;
  text: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type CommentAuthorArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<UserOptions>;
  where?: InputMaybe<UserWhere>;
};


export type CommentAuthorAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<UserWhere>;
};


export type CommentAuthorConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<CommentAuthorConnectionSort>>;
  where?: InputMaybe<CommentAuthorConnectionWhere>;
};


export type CommentCommentOfPostArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<PostOptions>;
  where?: InputMaybe<PostWhere>;
};


export type CommentCommentOfPostAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<PostWhere>;
};


export type CommentCommentOfPostConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<CommentCommentOfPostConnectionSort>>;
  where?: InputMaybe<CommentCommentOfPostConnectionWhere>;
};


export type CommentLikesArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<UserOptions>;
  where?: InputMaybe<UserWhere>;
};


export type CommentLikesAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<UserWhere>;
};


export type CommentLikesConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<CommentLikesConnectionSort>>;
  where?: InputMaybe<CommentLikesConnectionWhere>;
};


export type CommentRepliesArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<CommentOptions>;
  where?: InputMaybe<CommentWhere>;
};


export type CommentRepliesAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<CommentWhere>;
};


export type CommentRepliesConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<CommentRepliesConnectionSort>>;
  where?: InputMaybe<CommentRepliesConnectionWhere>;
};


export type CommentReplyOfCommentArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<CommentOptions>;
  where?: InputMaybe<CommentWhere>;
};


export type CommentReplyOfCommentAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<CommentWhere>;
};


export type CommentReplyOfCommentConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<CommentReplyOfCommentConnectionSort>>;
  where?: InputMaybe<CommentReplyOfCommentConnectionWhere>;
};

export type CommentAggregateSelection = {
  __typename?: 'CommentAggregateSelection';
  count: Scalars['Int']['output'];
  createdAt: DateTimeAggregateSelection;
  id: IdAggregateSelection;
  indent: IntAggregateSelection;
  text: StringAggregateSelection;
  updatedAt: DateTimeAggregateSelection;
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

export type CommentAuthorConnectOrCreateFieldInput = {
  onCreate: CommentAuthorConnectOrCreateFieldInputOnCreate;
  where: UserConnectOrCreateWhere;
};

export type CommentAuthorConnectOrCreateFieldInputOnCreate = {
  node: UserOnCreateInput;
};

export type CommentAuthorConnectedRelationship = {
  __typename?: 'CommentAuthorConnectedRelationship';
  node: UserEventPayload;
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

export type CommentAuthorFieldInput = {
  connect?: InputMaybe<CommentAuthorConnectFieldInput>;
  connectOrCreate?: InputMaybe<CommentAuthorConnectOrCreateFieldInput>;
  create?: InputMaybe<CommentAuthorCreateFieldInput>;
};

export type CommentAuthorNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<CommentAuthorNodeAggregationWhereInput>>;
  NOT?: InputMaybe<CommentAuthorNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<CommentAuthorNodeAggregationWhereInput>>;
  createdAt_MAX_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_GT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_LT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_GT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_LT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_LTE?: InputMaybe<Scalars['DateTime']['input']>;
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
  profileUrl_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  profileUrl_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  profileUrl_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  profileUrl_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  profileUrl_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  profileUrl_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  profileUrl_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  profileUrl_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  profileUrl_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  profileUrl_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  profileUrl_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  profileUrl_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  profileUrl_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  profileUrl_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  profileUrl_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  updatedAt_MAX_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_GT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_LT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_GT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_LT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_LTE?: InputMaybe<Scalars['DateTime']['input']>;
};

export type CommentAuthorRelationship = {
  __typename?: 'CommentAuthorRelationship';
  cursor: Scalars['String']['output'];
  node: User;
};

export type CommentAuthorRelationshipSubscriptionWhere = {
  node?: InputMaybe<UserSubscriptionWhere>;
};

export type CommentAuthorUpdateConnectionInput = {
  node?: InputMaybe<UserUpdateInput>;
};

export type CommentAuthorUpdateFieldInput = {
  connect?: InputMaybe<CommentAuthorConnectFieldInput>;
  connectOrCreate?: InputMaybe<CommentAuthorConnectOrCreateFieldInput>;
  create?: InputMaybe<CommentAuthorCreateFieldInput>;
  delete?: InputMaybe<CommentAuthorDeleteFieldInput>;
  disconnect?: InputMaybe<CommentAuthorDisconnectFieldInput>;
  update?: InputMaybe<CommentAuthorUpdateConnectionInput>;
  where?: InputMaybe<CommentAuthorConnectionWhere>;
};

export type CommentCommentOfPostAggregateInput = {
  AND?: InputMaybe<Array<CommentCommentOfPostAggregateInput>>;
  NOT?: InputMaybe<CommentCommentOfPostAggregateInput>;
  OR?: InputMaybe<Array<CommentCommentOfPostAggregateInput>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  node?: InputMaybe<CommentCommentOfPostNodeAggregationWhereInput>;
};

export type CommentCommentOfPostConnectFieldInput = {
  connect?: InputMaybe<PostConnectInput>;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars['Boolean']['input'];
  where?: InputMaybe<PostConnectWhere>;
};

export type CommentCommentOfPostConnectedRelationship = {
  __typename?: 'CommentCommentOfPostConnectedRelationship';
  node: PostEventPayload;
};

export type CommentCommentOfPostConnection = {
  __typename?: 'CommentCommentOfPostConnection';
  edges: Array<CommentCommentOfPostRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type CommentCommentOfPostConnectionSort = {
  node?: InputMaybe<PostSort>;
};

export type CommentCommentOfPostConnectionWhere = {
  AND?: InputMaybe<Array<CommentCommentOfPostConnectionWhere>>;
  NOT?: InputMaybe<CommentCommentOfPostConnectionWhere>;
  OR?: InputMaybe<Array<CommentCommentOfPostConnectionWhere>>;
  node?: InputMaybe<PostWhere>;
};

export type CommentCommentOfPostCreateFieldInput = {
  node: PostCreateInput;
};

export type CommentCommentOfPostDeleteFieldInput = {
  delete?: InputMaybe<PostDeleteInput>;
  where?: InputMaybe<CommentCommentOfPostConnectionWhere>;
};

export type CommentCommentOfPostDisconnectFieldInput = {
  disconnect?: InputMaybe<PostDisconnectInput>;
  where?: InputMaybe<CommentCommentOfPostConnectionWhere>;
};

export type CommentCommentOfPostFieldInput = {
  connect?: InputMaybe<CommentCommentOfPostConnectFieldInput>;
  create?: InputMaybe<CommentCommentOfPostCreateFieldInput>;
};

export type CommentCommentOfPostNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<CommentCommentOfPostNodeAggregationWhereInput>>;
  NOT?: InputMaybe<CommentCommentOfPostNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<CommentCommentOfPostNodeAggregationWhereInput>>;
  createdAt_MAX_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_GT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_LT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_GT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_LT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_LTE?: InputMaybe<Scalars['DateTime']['input']>;
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
  updatedAt_MAX_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_GT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_LT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_GT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_LT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_LTE?: InputMaybe<Scalars['DateTime']['input']>;
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

export type CommentCommentOfPostRelationship = {
  __typename?: 'CommentCommentOfPostRelationship';
  cursor: Scalars['String']['output'];
  node: Post;
};

export type CommentCommentOfPostRelationshipSubscriptionWhere = {
  node?: InputMaybe<PostSubscriptionWhere>;
};

export type CommentCommentOfPostUpdateConnectionInput = {
  node?: InputMaybe<PostUpdateInput>;
};

export type CommentCommentOfPostUpdateFieldInput = {
  connect?: InputMaybe<CommentCommentOfPostConnectFieldInput>;
  create?: InputMaybe<CommentCommentOfPostCreateFieldInput>;
  delete?: InputMaybe<CommentCommentOfPostDeleteFieldInput>;
  disconnect?: InputMaybe<CommentCommentOfPostDisconnectFieldInput>;
  update?: InputMaybe<CommentCommentOfPostUpdateConnectionInput>;
  where?: InputMaybe<CommentCommentOfPostConnectionWhere>;
};

export type CommentCommentRepliesAggregationSelection = {
  __typename?: 'CommentCommentRepliesAggregationSelection';
  count: Scalars['Int']['output'];
  node?: Maybe<CommentCommentRepliesNodeAggregateSelection>;
};

export type CommentCommentRepliesNodeAggregateSelection = {
  __typename?: 'CommentCommentRepliesNodeAggregateSelection';
  createdAt: DateTimeAggregateSelection;
  id: IdAggregateSelection;
  indent: IntAggregateSelection;
  text: StringAggregateSelection;
  updatedAt: DateTimeAggregateSelection;
};

export type CommentCommentReplyOfCommentAggregationSelection = {
  __typename?: 'CommentCommentReplyOfCommentAggregationSelection';
  count: Scalars['Int']['output'];
  node?: Maybe<CommentCommentReplyOfCommentNodeAggregateSelection>;
};

export type CommentCommentReplyOfCommentNodeAggregateSelection = {
  __typename?: 'CommentCommentReplyOfCommentNodeAggregateSelection';
  createdAt: DateTimeAggregateSelection;
  id: IdAggregateSelection;
  indent: IntAggregateSelection;
  text: StringAggregateSelection;
  updatedAt: DateTimeAggregateSelection;
};

export type CommentConnectInput = {
  author?: InputMaybe<CommentAuthorConnectFieldInput>;
  commentOfPost?: InputMaybe<CommentCommentOfPostConnectFieldInput>;
  likes?: InputMaybe<Array<CommentLikesConnectFieldInput>>;
  replies?: InputMaybe<Array<CommentRepliesConnectFieldInput>>;
  replyOfComment?: InputMaybe<CommentReplyOfCommentConnectFieldInput>;
};

export type CommentConnectOrCreateInput = {
  author?: InputMaybe<CommentAuthorConnectOrCreateFieldInput>;
  likes?: InputMaybe<Array<CommentLikesConnectOrCreateFieldInput>>;
};

export type CommentConnectWhere = {
  node: CommentWhere;
};

export type CommentConnectedRelationships = {
  __typename?: 'CommentConnectedRelationships';
  author?: Maybe<CommentAuthorConnectedRelationship>;
  commentOfPost?: Maybe<CommentCommentOfPostConnectedRelationship>;
  likes?: Maybe<CommentLikesConnectedRelationship>;
  replies?: Maybe<CommentRepliesConnectedRelationship>;
  replyOfComment?: Maybe<CommentReplyOfCommentConnectedRelationship>;
};

export type CommentCreateInput = {
  author?: InputMaybe<CommentAuthorFieldInput>;
  commentOfPost?: InputMaybe<CommentCommentOfPostFieldInput>;
  indent?: Scalars['Int']['input'];
  likes?: InputMaybe<CommentLikesFieldInput>;
  parentsOfComment: Array<Scalars['ID']['input']>;
  replies?: InputMaybe<CommentRepliesFieldInput>;
  replyOfComment?: InputMaybe<CommentReplyOfCommentFieldInput>;
  text: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type CommentCreatedEvent = {
  __typename?: 'CommentCreatedEvent';
  createdComment: CommentEventPayload;
  event: EventType;
  timestamp: Scalars['Float']['output'];
};

export type CommentDeleteInput = {
  author?: InputMaybe<CommentAuthorDeleteFieldInput>;
  commentOfPost?: InputMaybe<CommentCommentOfPostDeleteFieldInput>;
  likes?: InputMaybe<Array<CommentLikesDeleteFieldInput>>;
  replies?: InputMaybe<Array<CommentRepliesDeleteFieldInput>>;
  replyOfComment?: InputMaybe<CommentReplyOfCommentDeleteFieldInput>;
};

export type CommentDeletedEvent = {
  __typename?: 'CommentDeletedEvent';
  deletedComment: CommentEventPayload;
  event: EventType;
  timestamp: Scalars['Float']['output'];
};

export type CommentDisconnectInput = {
  author?: InputMaybe<CommentAuthorDisconnectFieldInput>;
  commentOfPost?: InputMaybe<CommentCommentOfPostDisconnectFieldInput>;
  likes?: InputMaybe<Array<CommentLikesDisconnectFieldInput>>;
  replies?: InputMaybe<Array<CommentRepliesDisconnectFieldInput>>;
  replyOfComment?: InputMaybe<CommentReplyOfCommentDisconnectFieldInput>;
};

export type CommentEdge = {
  __typename?: 'CommentEdge';
  cursor: Scalars['String']['output'];
  node: Comment;
};

export type CommentEventPayload = {
  __typename?: 'CommentEventPayload';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['ID']['output'];
  indent: Scalars['Int']['output'];
  parentsOfComment: Array<Scalars['ID']['output']>;
  text: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type CommentLikesAggregateInput = {
  AND?: InputMaybe<Array<CommentLikesAggregateInput>>;
  NOT?: InputMaybe<CommentLikesAggregateInput>;
  OR?: InputMaybe<Array<CommentLikesAggregateInput>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  node?: InputMaybe<CommentLikesNodeAggregationWhereInput>;
};

export type CommentLikesConnectFieldInput = {
  connect?: InputMaybe<Array<UserConnectInput>>;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars['Boolean']['input'];
  where?: InputMaybe<UserConnectWhere>;
};

export type CommentLikesConnectOrCreateFieldInput = {
  onCreate: CommentLikesConnectOrCreateFieldInputOnCreate;
  where: UserConnectOrCreateWhere;
};

export type CommentLikesConnectOrCreateFieldInputOnCreate = {
  node: UserOnCreateInput;
};

export type CommentLikesConnectedRelationship = {
  __typename?: 'CommentLikesConnectedRelationship';
  node: UserEventPayload;
};

export type CommentLikesConnection = {
  __typename?: 'CommentLikesConnection';
  edges: Array<CommentLikesRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type CommentLikesConnectionSort = {
  node?: InputMaybe<UserSort>;
};

export type CommentLikesConnectionWhere = {
  AND?: InputMaybe<Array<CommentLikesConnectionWhere>>;
  NOT?: InputMaybe<CommentLikesConnectionWhere>;
  OR?: InputMaybe<Array<CommentLikesConnectionWhere>>;
  node?: InputMaybe<UserWhere>;
};

export type CommentLikesCreateFieldInput = {
  node: UserCreateInput;
};

export type CommentLikesDeleteFieldInput = {
  delete?: InputMaybe<UserDeleteInput>;
  where?: InputMaybe<CommentLikesConnectionWhere>;
};

export type CommentLikesDisconnectFieldInput = {
  disconnect?: InputMaybe<UserDisconnectInput>;
  where?: InputMaybe<CommentLikesConnectionWhere>;
};

export type CommentLikesFieldInput = {
  connect?: InputMaybe<Array<CommentLikesConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<CommentLikesConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<CommentLikesCreateFieldInput>>;
};

export type CommentLikesNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<CommentLikesNodeAggregationWhereInput>>;
  NOT?: InputMaybe<CommentLikesNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<CommentLikesNodeAggregationWhereInput>>;
  createdAt_MAX_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_GT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_LT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_GT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_LT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_LTE?: InputMaybe<Scalars['DateTime']['input']>;
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
  profileUrl_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  profileUrl_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  profileUrl_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  profileUrl_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  profileUrl_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  profileUrl_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  profileUrl_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  profileUrl_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  profileUrl_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  profileUrl_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  profileUrl_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  profileUrl_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  profileUrl_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  profileUrl_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  profileUrl_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  updatedAt_MAX_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_GT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_LT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_GT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_LT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_LTE?: InputMaybe<Scalars['DateTime']['input']>;
};

export type CommentLikesRelationship = {
  __typename?: 'CommentLikesRelationship';
  cursor: Scalars['String']['output'];
  node: User;
};

export type CommentLikesRelationshipSubscriptionWhere = {
  node?: InputMaybe<UserSubscriptionWhere>;
};

export type CommentLikesUpdateConnectionInput = {
  node?: InputMaybe<UserUpdateInput>;
};

export type CommentLikesUpdateFieldInput = {
  connect?: InputMaybe<Array<CommentLikesConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<CommentLikesConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<CommentLikesCreateFieldInput>>;
  delete?: InputMaybe<Array<CommentLikesDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<CommentLikesDisconnectFieldInput>>;
  update?: InputMaybe<CommentLikesUpdateConnectionInput>;
  where?: InputMaybe<CommentLikesConnectionWhere>;
};

export type CommentOptions = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  /** Specify one or more CommentSort objects to sort Comments by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<CommentSort>>;
};

export type CommentPostCommentOfPostAggregationSelection = {
  __typename?: 'CommentPostCommentOfPostAggregationSelection';
  count: Scalars['Int']['output'];
  node?: Maybe<CommentPostCommentOfPostNodeAggregateSelection>;
};

export type CommentPostCommentOfPostNodeAggregateSelection = {
  __typename?: 'CommentPostCommentOfPostNodeAggregateSelection';
  createdAt: DateTimeAggregateSelection;
  description: StringAggregateSelection;
  id: IdAggregateSelection;
  updatedAt: DateTimeAggregateSelection;
  url: StringAggregateSelection;
};

export type CommentRelationInput = {
  author?: InputMaybe<CommentAuthorCreateFieldInput>;
  commentOfPost?: InputMaybe<CommentCommentOfPostCreateFieldInput>;
  likes?: InputMaybe<Array<CommentLikesCreateFieldInput>>;
  replies?: InputMaybe<Array<CommentRepliesCreateFieldInput>>;
  replyOfComment?: InputMaybe<CommentReplyOfCommentCreateFieldInput>;
};

export type CommentRelationshipCreatedEvent = {
  __typename?: 'CommentRelationshipCreatedEvent';
  comment: CommentEventPayload;
  createdRelationship: CommentConnectedRelationships;
  event: EventType;
  relationshipFieldName: Scalars['String']['output'];
  timestamp: Scalars['Float']['output'];
};

export type CommentRelationshipCreatedSubscriptionWhere = {
  AND?: InputMaybe<Array<CommentRelationshipCreatedSubscriptionWhere>>;
  NOT?: InputMaybe<CommentRelationshipCreatedSubscriptionWhere>;
  OR?: InputMaybe<Array<CommentRelationshipCreatedSubscriptionWhere>>;
  comment?: InputMaybe<CommentSubscriptionWhere>;
  createdRelationship?: InputMaybe<CommentRelationshipsSubscriptionWhere>;
};

export type CommentRelationshipDeletedEvent = {
  __typename?: 'CommentRelationshipDeletedEvent';
  comment: CommentEventPayload;
  deletedRelationship: CommentConnectedRelationships;
  event: EventType;
  relationshipFieldName: Scalars['String']['output'];
  timestamp: Scalars['Float']['output'];
};

export type CommentRelationshipDeletedSubscriptionWhere = {
  AND?: InputMaybe<Array<CommentRelationshipDeletedSubscriptionWhere>>;
  NOT?: InputMaybe<CommentRelationshipDeletedSubscriptionWhere>;
  OR?: InputMaybe<Array<CommentRelationshipDeletedSubscriptionWhere>>;
  comment?: InputMaybe<CommentSubscriptionWhere>;
  deletedRelationship?: InputMaybe<CommentRelationshipsSubscriptionWhere>;
};

export type CommentRelationshipsSubscriptionWhere = {
  author?: InputMaybe<CommentAuthorRelationshipSubscriptionWhere>;
  commentOfPost?: InputMaybe<CommentCommentOfPostRelationshipSubscriptionWhere>;
  likes?: InputMaybe<CommentLikesRelationshipSubscriptionWhere>;
  replies?: InputMaybe<CommentRepliesRelationshipSubscriptionWhere>;
  replyOfComment?: InputMaybe<CommentReplyOfCommentRelationshipSubscriptionWhere>;
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
  connect?: InputMaybe<Array<CommentConnectInput>>;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars['Boolean']['input'];
  where?: InputMaybe<CommentConnectWhere>;
};

export type CommentRepliesConnectedRelationship = {
  __typename?: 'CommentRepliesConnectedRelationship';
  node: CommentEventPayload;
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

export type CommentRepliesFieldInput = {
  connect?: InputMaybe<Array<CommentRepliesConnectFieldInput>>;
  create?: InputMaybe<Array<CommentRepliesCreateFieldInput>>;
};

export type CommentRepliesNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<CommentRepliesNodeAggregationWhereInput>>;
  NOT?: InputMaybe<CommentRepliesNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<CommentRepliesNodeAggregationWhereInput>>;
  createdAt_MAX_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_GT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_LT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_GT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_LT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  indent_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  indent_AVERAGE_GT?: InputMaybe<Scalars['Float']['input']>;
  indent_AVERAGE_GTE?: InputMaybe<Scalars['Float']['input']>;
  indent_AVERAGE_LT?: InputMaybe<Scalars['Float']['input']>;
  indent_AVERAGE_LTE?: InputMaybe<Scalars['Float']['input']>;
  indent_MAX_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  indent_MAX_GT?: InputMaybe<Scalars['Int']['input']>;
  indent_MAX_GTE?: InputMaybe<Scalars['Int']['input']>;
  indent_MAX_LT?: InputMaybe<Scalars['Int']['input']>;
  indent_MAX_LTE?: InputMaybe<Scalars['Int']['input']>;
  indent_MIN_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  indent_MIN_GT?: InputMaybe<Scalars['Int']['input']>;
  indent_MIN_GTE?: InputMaybe<Scalars['Int']['input']>;
  indent_MIN_LT?: InputMaybe<Scalars['Int']['input']>;
  indent_MIN_LTE?: InputMaybe<Scalars['Int']['input']>;
  indent_SUM_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  indent_SUM_GT?: InputMaybe<Scalars['Int']['input']>;
  indent_SUM_GTE?: InputMaybe<Scalars['Int']['input']>;
  indent_SUM_LT?: InputMaybe<Scalars['Int']['input']>;
  indent_SUM_LTE?: InputMaybe<Scalars['Int']['input']>;
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
  updatedAt_MAX_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_GT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_LT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_GT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_LT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_LTE?: InputMaybe<Scalars['DateTime']['input']>;
};

export type CommentRepliesRelationship = {
  __typename?: 'CommentRepliesRelationship';
  cursor: Scalars['String']['output'];
  node: Comment;
};

export type CommentRepliesRelationshipSubscriptionWhere = {
  node?: InputMaybe<CommentSubscriptionWhere>;
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

export type CommentReplyOfCommentAggregateInput = {
  AND?: InputMaybe<Array<CommentReplyOfCommentAggregateInput>>;
  NOT?: InputMaybe<CommentReplyOfCommentAggregateInput>;
  OR?: InputMaybe<Array<CommentReplyOfCommentAggregateInput>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  node?: InputMaybe<CommentReplyOfCommentNodeAggregationWhereInput>;
};

export type CommentReplyOfCommentConnectFieldInput = {
  connect?: InputMaybe<CommentConnectInput>;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars['Boolean']['input'];
  where?: InputMaybe<CommentConnectWhere>;
};

export type CommentReplyOfCommentConnectedRelationship = {
  __typename?: 'CommentReplyOfCommentConnectedRelationship';
  node: CommentEventPayload;
};

export type CommentReplyOfCommentConnection = {
  __typename?: 'CommentReplyOfCommentConnection';
  edges: Array<CommentReplyOfCommentRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type CommentReplyOfCommentConnectionSort = {
  node?: InputMaybe<CommentSort>;
};

export type CommentReplyOfCommentConnectionWhere = {
  AND?: InputMaybe<Array<CommentReplyOfCommentConnectionWhere>>;
  NOT?: InputMaybe<CommentReplyOfCommentConnectionWhere>;
  OR?: InputMaybe<Array<CommentReplyOfCommentConnectionWhere>>;
  node?: InputMaybe<CommentWhere>;
};

export type CommentReplyOfCommentCreateFieldInput = {
  node: CommentCreateInput;
};

export type CommentReplyOfCommentDeleteFieldInput = {
  delete?: InputMaybe<CommentDeleteInput>;
  where?: InputMaybe<CommentReplyOfCommentConnectionWhere>;
};

export type CommentReplyOfCommentDisconnectFieldInput = {
  disconnect?: InputMaybe<CommentDisconnectInput>;
  where?: InputMaybe<CommentReplyOfCommentConnectionWhere>;
};

export type CommentReplyOfCommentFieldInput = {
  connect?: InputMaybe<CommentReplyOfCommentConnectFieldInput>;
  create?: InputMaybe<CommentReplyOfCommentCreateFieldInput>;
};

export type CommentReplyOfCommentNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<CommentReplyOfCommentNodeAggregationWhereInput>>;
  NOT?: InputMaybe<CommentReplyOfCommentNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<CommentReplyOfCommentNodeAggregationWhereInput>>;
  createdAt_MAX_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_GT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_LT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_GT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_LT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  indent_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  indent_AVERAGE_GT?: InputMaybe<Scalars['Float']['input']>;
  indent_AVERAGE_GTE?: InputMaybe<Scalars['Float']['input']>;
  indent_AVERAGE_LT?: InputMaybe<Scalars['Float']['input']>;
  indent_AVERAGE_LTE?: InputMaybe<Scalars['Float']['input']>;
  indent_MAX_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  indent_MAX_GT?: InputMaybe<Scalars['Int']['input']>;
  indent_MAX_GTE?: InputMaybe<Scalars['Int']['input']>;
  indent_MAX_LT?: InputMaybe<Scalars['Int']['input']>;
  indent_MAX_LTE?: InputMaybe<Scalars['Int']['input']>;
  indent_MIN_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  indent_MIN_GT?: InputMaybe<Scalars['Int']['input']>;
  indent_MIN_GTE?: InputMaybe<Scalars['Int']['input']>;
  indent_MIN_LT?: InputMaybe<Scalars['Int']['input']>;
  indent_MIN_LTE?: InputMaybe<Scalars['Int']['input']>;
  indent_SUM_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  indent_SUM_GT?: InputMaybe<Scalars['Int']['input']>;
  indent_SUM_GTE?: InputMaybe<Scalars['Int']['input']>;
  indent_SUM_LT?: InputMaybe<Scalars['Int']['input']>;
  indent_SUM_LTE?: InputMaybe<Scalars['Int']['input']>;
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
  updatedAt_MAX_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_GT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_LT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_GT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_LT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_LTE?: InputMaybe<Scalars['DateTime']['input']>;
};

export type CommentReplyOfCommentRelationship = {
  __typename?: 'CommentReplyOfCommentRelationship';
  cursor: Scalars['String']['output'];
  node: Comment;
};

export type CommentReplyOfCommentRelationshipSubscriptionWhere = {
  node?: InputMaybe<CommentSubscriptionWhere>;
};

export type CommentReplyOfCommentUpdateConnectionInput = {
  node?: InputMaybe<CommentUpdateInput>;
};

export type CommentReplyOfCommentUpdateFieldInput = {
  connect?: InputMaybe<CommentReplyOfCommentConnectFieldInput>;
  create?: InputMaybe<CommentReplyOfCommentCreateFieldInput>;
  delete?: InputMaybe<CommentReplyOfCommentDeleteFieldInput>;
  disconnect?: InputMaybe<CommentReplyOfCommentDisconnectFieldInput>;
  update?: InputMaybe<CommentReplyOfCommentUpdateConnectionInput>;
  where?: InputMaybe<CommentReplyOfCommentConnectionWhere>;
};

/** Fields to sort Comments by. The order in which sorts are applied is not guaranteed when specifying many fields in one CommentSort object. */
export type CommentSort = {
  createdAt?: InputMaybe<SortDirection>;
  id?: InputMaybe<SortDirection>;
  indent?: InputMaybe<SortDirection>;
  text?: InputMaybe<SortDirection>;
  updatedAt?: InputMaybe<SortDirection>;
};

export type CommentSubscriptionWhere = {
  AND?: InputMaybe<Array<CommentSubscriptionWhere>>;
  NOT?: InputMaybe<CommentSubscriptionWhere>;
  OR?: InputMaybe<Array<CommentSubscriptionWhere>>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_GT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_IN?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdAt_LT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_CONTAINS?: InputMaybe<Scalars['ID']['input']>;
  id_ENDS_WITH?: InputMaybe<Scalars['ID']['input']>;
  id_IN?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_STARTS_WITH?: InputMaybe<Scalars['ID']['input']>;
  indent?: InputMaybe<Scalars['Int']['input']>;
  indent_GT?: InputMaybe<Scalars['Int']['input']>;
  indent_GTE?: InputMaybe<Scalars['Int']['input']>;
  indent_IN?: InputMaybe<Array<Scalars['Int']['input']>>;
  indent_LT?: InputMaybe<Scalars['Int']['input']>;
  indent_LTE?: InputMaybe<Scalars['Int']['input']>;
  parentsOfComment?: InputMaybe<Array<Scalars['ID']['input']>>;
  parentsOfComment_INCLUDES?: InputMaybe<Scalars['ID']['input']>;
  text?: InputMaybe<Scalars['String']['input']>;
  text_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  text_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  text_IN?: InputMaybe<Array<Scalars['String']['input']>>;
  text_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_GT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_IN?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedAt_LT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_LTE?: InputMaybe<Scalars['DateTime']['input']>;
};

export type CommentUpdateInput = {
  author?: InputMaybe<CommentAuthorUpdateFieldInput>;
  commentOfPost?: InputMaybe<CommentCommentOfPostUpdateFieldInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  indent?: InputMaybe<Scalars['Int']['input']>;
  indent_DECREMENT?: InputMaybe<Scalars['Int']['input']>;
  indent_INCREMENT?: InputMaybe<Scalars['Int']['input']>;
  likes?: InputMaybe<Array<CommentLikesUpdateFieldInput>>;
  parentsOfComment?: InputMaybe<Array<Scalars['ID']['input']>>;
  parentsOfComment_POP?: InputMaybe<Scalars['Int']['input']>;
  parentsOfComment_PUSH?: InputMaybe<Array<Scalars['ID']['input']>>;
  replies?: InputMaybe<Array<CommentRepliesUpdateFieldInput>>;
  replyOfComment?: InputMaybe<CommentReplyOfCommentUpdateFieldInput>;
  text?: InputMaybe<Scalars['String']['input']>;
};

export type CommentUpdatedEvent = {
  __typename?: 'CommentUpdatedEvent';
  event: EventType;
  previousState: CommentEventPayload;
  timestamp: Scalars['Float']['output'];
  updatedComment: CommentEventPayload;
};

export type CommentUserAuthorAggregationSelection = {
  __typename?: 'CommentUserAuthorAggregationSelection';
  count: Scalars['Int']['output'];
  node?: Maybe<CommentUserAuthorNodeAggregateSelection>;
};

export type CommentUserAuthorNodeAggregateSelection = {
  __typename?: 'CommentUserAuthorNodeAggregateSelection';
  createdAt: DateTimeAggregateSelection;
  email: StringAggregateSelection;
  id: IdAggregateSelection;
  name: StringAggregateSelection;
  profileUrl: StringAggregateSelection;
  updatedAt: DateTimeAggregateSelection;
  username: IdAggregateSelection;
};

export type CommentUserLikesAggregationSelection = {
  __typename?: 'CommentUserLikesAggregationSelection';
  count: Scalars['Int']['output'];
  node?: Maybe<CommentUserLikesNodeAggregateSelection>;
};

export type CommentUserLikesNodeAggregateSelection = {
  __typename?: 'CommentUserLikesNodeAggregateSelection';
  createdAt: DateTimeAggregateSelection;
  email: StringAggregateSelection;
  id: IdAggregateSelection;
  name: StringAggregateSelection;
  profileUrl: StringAggregateSelection;
  updatedAt: DateTimeAggregateSelection;
  username: IdAggregateSelection;
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
  commentOfPost?: InputMaybe<PostWhere>;
  commentOfPostAggregate?: InputMaybe<CommentCommentOfPostAggregateInput>;
  commentOfPostConnection?: InputMaybe<CommentCommentOfPostConnectionWhere>;
  commentOfPostConnection_NOT?: InputMaybe<CommentCommentOfPostConnectionWhere>;
  commentOfPost_NOT?: InputMaybe<PostWhere>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_GT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_IN?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdAt_LT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_CONTAINS?: InputMaybe<Scalars['ID']['input']>;
  id_ENDS_WITH?: InputMaybe<Scalars['ID']['input']>;
  id_IN?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_STARTS_WITH?: InputMaybe<Scalars['ID']['input']>;
  indent?: InputMaybe<Scalars['Int']['input']>;
  indent_GT?: InputMaybe<Scalars['Int']['input']>;
  indent_GTE?: InputMaybe<Scalars['Int']['input']>;
  indent_IN?: InputMaybe<Array<Scalars['Int']['input']>>;
  indent_LT?: InputMaybe<Scalars['Int']['input']>;
  indent_LTE?: InputMaybe<Scalars['Int']['input']>;
  likesAggregate?: InputMaybe<CommentLikesAggregateInput>;
  /** Return Comments where all of the related CommentLikesConnections match this filter */
  likesConnection_ALL?: InputMaybe<CommentLikesConnectionWhere>;
  /** Return Comments where none of the related CommentLikesConnections match this filter */
  likesConnection_NONE?: InputMaybe<CommentLikesConnectionWhere>;
  /** Return Comments where one of the related CommentLikesConnections match this filter */
  likesConnection_SINGLE?: InputMaybe<CommentLikesConnectionWhere>;
  /** Return Comments where some of the related CommentLikesConnections match this filter */
  likesConnection_SOME?: InputMaybe<CommentLikesConnectionWhere>;
  /** Return Comments where all of the related Users match this filter */
  likes_ALL?: InputMaybe<UserWhere>;
  /** Return Comments where none of the related Users match this filter */
  likes_NONE?: InputMaybe<UserWhere>;
  /** Return Comments where one of the related Users match this filter */
  likes_SINGLE?: InputMaybe<UserWhere>;
  /** Return Comments where some of the related Users match this filter */
  likes_SOME?: InputMaybe<UserWhere>;
  parentsOfComment?: InputMaybe<Array<Scalars['ID']['input']>>;
  parentsOfComment_INCLUDES?: InputMaybe<Scalars['ID']['input']>;
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
  replyOfComment?: InputMaybe<CommentWhere>;
  replyOfCommentAggregate?: InputMaybe<CommentReplyOfCommentAggregateInput>;
  replyOfCommentConnection?: InputMaybe<CommentReplyOfCommentConnectionWhere>;
  replyOfCommentConnection_NOT?: InputMaybe<CommentReplyOfCommentConnectionWhere>;
  replyOfComment_NOT?: InputMaybe<CommentWhere>;
  text?: InputMaybe<Scalars['String']['input']>;
  text_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  text_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  text_IN?: InputMaybe<Array<Scalars['String']['input']>>;
  text_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_GT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_IN?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedAt_LT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_LTE?: InputMaybe<Scalars['DateTime']['input']>;
};

export type CommentsConnection = {
  __typename?: 'CommentsConnection';
  edges: Array<CommentEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type CreateCommentsMutationResponse = {
  __typename?: 'CreateCommentsMutationResponse';
  comments: Array<Comment>;
  info: CreateInfo;
};

/** Information about the number of nodes and relationships created during a create mutation */
export type CreateInfo = {
  __typename?: 'CreateInfo';
  /** @deprecated This field has been deprecated because bookmarks are now handled by the driver. */
  bookmark?: Maybe<Scalars['String']['output']>;
  nodesCreated: Scalars['Int']['output'];
  relationshipsCreated: Scalars['Int']['output'];
};

export type CreateMessagesMutationResponse = {
  __typename?: 'CreateMessagesMutationResponse';
  info: CreateInfo;
  messages: Array<Message>;
};

export type CreateNotificationsMutationResponse = {
  __typename?: 'CreateNotificationsMutationResponse';
  info: CreateInfo;
  notifications: Array<Notification>;
};

export type CreatePostsMutationResponse = {
  __typename?: 'CreatePostsMutationResponse';
  info: CreateInfo;
  posts: Array<Post>;
};

export type CreatePrivacySettingsMutationResponse = {
  __typename?: 'CreatePrivacySettingsMutationResponse';
  info: CreateInfo;
  privacySettings: Array<PrivacySettings>;
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

export enum EventType {
  Create = 'CREATE',
  CreateRelationship = 'CREATE_RELATIONSHIP',
  Delete = 'DELETE',
  DeleteRelationship = 'DELETE_RELATIONSHIP',
  Update = 'UPDATE'
}

export type IdAggregateSelection = {
  __typename?: 'IDAggregateSelection';
  longest?: Maybe<Scalars['ID']['output']>;
  shortest?: Maybe<Scalars['ID']['output']>;
};

export type IntAggregateSelection = {
  __typename?: 'IntAggregateSelection';
  average?: Maybe<Scalars['Float']['output']>;
  max?: Maybe<Scalars['Int']['output']>;
  min?: Maybe<Scalars['Int']['output']>;
  sum?: Maybe<Scalars['Int']['output']>;
};

export type Message = {
  __typename?: 'Message';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  file?: Maybe<Scalars['String']['output']>;
  format: MessageFormat;
  id: Scalars['ID']['output'];
  receiver: User;
  receiverAggregate?: Maybe<MessageUserReceiverAggregationSelection>;
  receiverConnection: MessageReceiverConnection;
  sender: User;
  senderAggregate?: Maybe<MessageUserSenderAggregationSelection>;
  senderConnection: MessageSenderConnection;
  text?: Maybe<Scalars['String']['output']>;
  type: MessageType;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type MessageReceiverArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<UserOptions>;
  where?: InputMaybe<UserWhere>;
};


export type MessageReceiverAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<UserWhere>;
};


export type MessageReceiverConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<MessageReceiverConnectionSort>>;
  where?: InputMaybe<MessageReceiverConnectionWhere>;
};


export type MessageSenderArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<UserOptions>;
  where?: InputMaybe<UserWhere>;
};


export type MessageSenderAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<UserWhere>;
};


export type MessageSenderConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<MessageSenderConnectionSort>>;
  where?: InputMaybe<MessageSenderConnectionWhere>;
};

export type MessageAggregateSelection = {
  __typename?: 'MessageAggregateSelection';
  count: Scalars['Int']['output'];
  createdAt: DateTimeAggregateSelection;
  file: StringAggregateSelection;
  id: IdAggregateSelection;
  text: StringAggregateSelection;
  updatedAt: DateTimeAggregateSelection;
};

export type MessageConnectInput = {
  receiver?: InputMaybe<MessageReceiverConnectFieldInput>;
  sender?: InputMaybe<MessageSenderConnectFieldInput>;
};

export type MessageConnectOrCreateInput = {
  receiver?: InputMaybe<MessageReceiverConnectOrCreateFieldInput>;
  sender?: InputMaybe<MessageSenderConnectOrCreateFieldInput>;
};

export type MessageConnectedRelationships = {
  __typename?: 'MessageConnectedRelationships';
  receiver?: Maybe<MessageReceiverConnectedRelationship>;
  sender?: Maybe<MessageSenderConnectedRelationship>;
};

export type MessageCreateInput = {
  file?: InputMaybe<Scalars['String']['input']>;
  format: MessageFormat;
  receiver?: InputMaybe<MessageReceiverFieldInput>;
  sender?: InputMaybe<MessageSenderFieldInput>;
  text?: InputMaybe<Scalars['String']['input']>;
  type: MessageType;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type MessageCreatedEvent = {
  __typename?: 'MessageCreatedEvent';
  createdMessage: MessageEventPayload;
  event: EventType;
  timestamp: Scalars['Float']['output'];
};

export type MessageDeleteInput = {
  receiver?: InputMaybe<MessageReceiverDeleteFieldInput>;
  sender?: InputMaybe<MessageSenderDeleteFieldInput>;
};

export type MessageDeletedEvent = {
  __typename?: 'MessageDeletedEvent';
  deletedMessage: MessageEventPayload;
  event: EventType;
  timestamp: Scalars['Float']['output'];
};

export type MessageDisconnectInput = {
  receiver?: InputMaybe<MessageReceiverDisconnectFieldInput>;
  sender?: InputMaybe<MessageSenderDisconnectFieldInput>;
};

export type MessageEdge = {
  __typename?: 'MessageEdge';
  cursor: Scalars['String']['output'];
  node: Message;
};

export type MessageEventPayload = {
  __typename?: 'MessageEventPayload';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  file?: Maybe<Scalars['String']['output']>;
  format: MessageFormat;
  id: Scalars['ID']['output'];
  text?: Maybe<Scalars['String']['output']>;
  type: MessageType;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export enum MessageFormat {
  Audio = 'AUDIO',
  Gif = 'GIF',
  Images = 'IMAGES',
  Sticker = 'STICKER',
  Text = 'TEXT',
  Video = 'VIDEO'
}

export type MessageOptions = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  /** Specify one or more MessageSort objects to sort Messages by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<MessageSort>>;
};

export type MessageReceiverAggregateInput = {
  AND?: InputMaybe<Array<MessageReceiverAggregateInput>>;
  NOT?: InputMaybe<MessageReceiverAggregateInput>;
  OR?: InputMaybe<Array<MessageReceiverAggregateInput>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  node?: InputMaybe<MessageReceiverNodeAggregationWhereInput>;
};

export type MessageReceiverConnectFieldInput = {
  connect?: InputMaybe<UserConnectInput>;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars['Boolean']['input'];
  where?: InputMaybe<UserConnectWhere>;
};

export type MessageReceiverConnectOrCreateFieldInput = {
  onCreate: MessageReceiverConnectOrCreateFieldInputOnCreate;
  where: UserConnectOrCreateWhere;
};

export type MessageReceiverConnectOrCreateFieldInputOnCreate = {
  node: UserOnCreateInput;
};

export type MessageReceiverConnectedRelationship = {
  __typename?: 'MessageReceiverConnectedRelationship';
  node: UserEventPayload;
};

export type MessageReceiverConnection = {
  __typename?: 'MessageReceiverConnection';
  edges: Array<MessageReceiverRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type MessageReceiverConnectionSort = {
  node?: InputMaybe<UserSort>;
};

export type MessageReceiverConnectionWhere = {
  AND?: InputMaybe<Array<MessageReceiverConnectionWhere>>;
  NOT?: InputMaybe<MessageReceiverConnectionWhere>;
  OR?: InputMaybe<Array<MessageReceiverConnectionWhere>>;
  node?: InputMaybe<UserWhere>;
};

export type MessageReceiverCreateFieldInput = {
  node: UserCreateInput;
};

export type MessageReceiverDeleteFieldInput = {
  delete?: InputMaybe<UserDeleteInput>;
  where?: InputMaybe<MessageReceiverConnectionWhere>;
};

export type MessageReceiverDisconnectFieldInput = {
  disconnect?: InputMaybe<UserDisconnectInput>;
  where?: InputMaybe<MessageReceiverConnectionWhere>;
};

export type MessageReceiverFieldInput = {
  connect?: InputMaybe<MessageReceiverConnectFieldInput>;
  connectOrCreate?: InputMaybe<MessageReceiverConnectOrCreateFieldInput>;
  create?: InputMaybe<MessageReceiverCreateFieldInput>;
};

export type MessageReceiverNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<MessageReceiverNodeAggregationWhereInput>>;
  NOT?: InputMaybe<MessageReceiverNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<MessageReceiverNodeAggregationWhereInput>>;
  createdAt_MAX_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_GT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_LT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_GT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_LT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_LTE?: InputMaybe<Scalars['DateTime']['input']>;
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
  profileUrl_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  profileUrl_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  profileUrl_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  profileUrl_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  profileUrl_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  profileUrl_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  profileUrl_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  profileUrl_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  profileUrl_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  profileUrl_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  profileUrl_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  profileUrl_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  profileUrl_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  profileUrl_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  profileUrl_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  updatedAt_MAX_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_GT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_LT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_GT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_LT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_LTE?: InputMaybe<Scalars['DateTime']['input']>;
};

export type MessageReceiverRelationship = {
  __typename?: 'MessageReceiverRelationship';
  cursor: Scalars['String']['output'];
  node: User;
};

export type MessageReceiverRelationshipSubscriptionWhere = {
  node?: InputMaybe<UserSubscriptionWhere>;
};

export type MessageReceiverUpdateConnectionInput = {
  node?: InputMaybe<UserUpdateInput>;
};

export type MessageReceiverUpdateFieldInput = {
  connect?: InputMaybe<MessageReceiverConnectFieldInput>;
  connectOrCreate?: InputMaybe<MessageReceiverConnectOrCreateFieldInput>;
  create?: InputMaybe<MessageReceiverCreateFieldInput>;
  delete?: InputMaybe<MessageReceiverDeleteFieldInput>;
  disconnect?: InputMaybe<MessageReceiverDisconnectFieldInput>;
  update?: InputMaybe<MessageReceiverUpdateConnectionInput>;
  where?: InputMaybe<MessageReceiverConnectionWhere>;
};

export type MessageRelationInput = {
  receiver?: InputMaybe<MessageReceiverCreateFieldInput>;
  sender?: InputMaybe<MessageSenderCreateFieldInput>;
};

export type MessageRelationshipCreatedEvent = {
  __typename?: 'MessageRelationshipCreatedEvent';
  createdRelationship: MessageConnectedRelationships;
  event: EventType;
  message: MessageEventPayload;
  relationshipFieldName: Scalars['String']['output'];
  timestamp: Scalars['Float']['output'];
};

export type MessageRelationshipCreatedSubscriptionWhere = {
  AND?: InputMaybe<Array<MessageRelationshipCreatedSubscriptionWhere>>;
  NOT?: InputMaybe<MessageRelationshipCreatedSubscriptionWhere>;
  OR?: InputMaybe<Array<MessageRelationshipCreatedSubscriptionWhere>>;
  createdRelationship?: InputMaybe<MessageRelationshipsSubscriptionWhere>;
  message?: InputMaybe<MessageSubscriptionWhere>;
};

export type MessageRelationshipDeletedEvent = {
  __typename?: 'MessageRelationshipDeletedEvent';
  deletedRelationship: MessageConnectedRelationships;
  event: EventType;
  message: MessageEventPayload;
  relationshipFieldName: Scalars['String']['output'];
  timestamp: Scalars['Float']['output'];
};

export type MessageRelationshipDeletedSubscriptionWhere = {
  AND?: InputMaybe<Array<MessageRelationshipDeletedSubscriptionWhere>>;
  NOT?: InputMaybe<MessageRelationshipDeletedSubscriptionWhere>;
  OR?: InputMaybe<Array<MessageRelationshipDeletedSubscriptionWhere>>;
  deletedRelationship?: InputMaybe<MessageRelationshipsSubscriptionWhere>;
  message?: InputMaybe<MessageSubscriptionWhere>;
};

export type MessageRelationshipsSubscriptionWhere = {
  receiver?: InputMaybe<MessageReceiverRelationshipSubscriptionWhere>;
  sender?: InputMaybe<MessageSenderRelationshipSubscriptionWhere>;
};

export type MessageSenderAggregateInput = {
  AND?: InputMaybe<Array<MessageSenderAggregateInput>>;
  NOT?: InputMaybe<MessageSenderAggregateInput>;
  OR?: InputMaybe<Array<MessageSenderAggregateInput>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  node?: InputMaybe<MessageSenderNodeAggregationWhereInput>;
};

export type MessageSenderConnectFieldInput = {
  connect?: InputMaybe<UserConnectInput>;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars['Boolean']['input'];
  where?: InputMaybe<UserConnectWhere>;
};

export type MessageSenderConnectOrCreateFieldInput = {
  onCreate: MessageSenderConnectOrCreateFieldInputOnCreate;
  where: UserConnectOrCreateWhere;
};

export type MessageSenderConnectOrCreateFieldInputOnCreate = {
  node: UserOnCreateInput;
};

export type MessageSenderConnectedRelationship = {
  __typename?: 'MessageSenderConnectedRelationship';
  node: UserEventPayload;
};

export type MessageSenderConnection = {
  __typename?: 'MessageSenderConnection';
  edges: Array<MessageSenderRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type MessageSenderConnectionSort = {
  node?: InputMaybe<UserSort>;
};

export type MessageSenderConnectionWhere = {
  AND?: InputMaybe<Array<MessageSenderConnectionWhere>>;
  NOT?: InputMaybe<MessageSenderConnectionWhere>;
  OR?: InputMaybe<Array<MessageSenderConnectionWhere>>;
  node?: InputMaybe<UserWhere>;
};

export type MessageSenderCreateFieldInput = {
  node: UserCreateInput;
};

export type MessageSenderDeleteFieldInput = {
  delete?: InputMaybe<UserDeleteInput>;
  where?: InputMaybe<MessageSenderConnectionWhere>;
};

export type MessageSenderDisconnectFieldInput = {
  disconnect?: InputMaybe<UserDisconnectInput>;
  where?: InputMaybe<MessageSenderConnectionWhere>;
};

export type MessageSenderFieldInput = {
  connect?: InputMaybe<MessageSenderConnectFieldInput>;
  connectOrCreate?: InputMaybe<MessageSenderConnectOrCreateFieldInput>;
  create?: InputMaybe<MessageSenderCreateFieldInput>;
};

export type MessageSenderNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<MessageSenderNodeAggregationWhereInput>>;
  NOT?: InputMaybe<MessageSenderNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<MessageSenderNodeAggregationWhereInput>>;
  createdAt_MAX_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_GT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_LT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_GT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_LT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_LTE?: InputMaybe<Scalars['DateTime']['input']>;
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
  profileUrl_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  profileUrl_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  profileUrl_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  profileUrl_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  profileUrl_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  profileUrl_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  profileUrl_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  profileUrl_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  profileUrl_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  profileUrl_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  profileUrl_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  profileUrl_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  profileUrl_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  profileUrl_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  profileUrl_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  updatedAt_MAX_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_GT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_LT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_GT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_LT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_LTE?: InputMaybe<Scalars['DateTime']['input']>;
};

export type MessageSenderRelationship = {
  __typename?: 'MessageSenderRelationship';
  cursor: Scalars['String']['output'];
  node: User;
};

export type MessageSenderRelationshipSubscriptionWhere = {
  node?: InputMaybe<UserSubscriptionWhere>;
};

export type MessageSenderUpdateConnectionInput = {
  node?: InputMaybe<UserUpdateInput>;
};

export type MessageSenderUpdateFieldInput = {
  connect?: InputMaybe<MessageSenderConnectFieldInput>;
  connectOrCreate?: InputMaybe<MessageSenderConnectOrCreateFieldInput>;
  create?: InputMaybe<MessageSenderCreateFieldInput>;
  delete?: InputMaybe<MessageSenderDeleteFieldInput>;
  disconnect?: InputMaybe<MessageSenderDisconnectFieldInput>;
  update?: InputMaybe<MessageSenderUpdateConnectionInput>;
  where?: InputMaybe<MessageSenderConnectionWhere>;
};

/** Fields to sort Messages by. The order in which sorts are applied is not guaranteed when specifying many fields in one MessageSort object. */
export type MessageSort = {
  createdAt?: InputMaybe<SortDirection>;
  file?: InputMaybe<SortDirection>;
  format?: InputMaybe<SortDirection>;
  id?: InputMaybe<SortDirection>;
  text?: InputMaybe<SortDirection>;
  type?: InputMaybe<SortDirection>;
  updatedAt?: InputMaybe<SortDirection>;
};

export type MessageSubscriptionWhere = {
  AND?: InputMaybe<Array<MessageSubscriptionWhere>>;
  NOT?: InputMaybe<MessageSubscriptionWhere>;
  OR?: InputMaybe<Array<MessageSubscriptionWhere>>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_GT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_IN?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdAt_LT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  file?: InputMaybe<Scalars['String']['input']>;
  file_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  file_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  file_IN?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  file_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
  format?: InputMaybe<MessageFormat>;
  format_IN?: InputMaybe<Array<MessageFormat>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_CONTAINS?: InputMaybe<Scalars['ID']['input']>;
  id_ENDS_WITH?: InputMaybe<Scalars['ID']['input']>;
  id_IN?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_STARTS_WITH?: InputMaybe<Scalars['ID']['input']>;
  text?: InputMaybe<Scalars['String']['input']>;
  text_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  text_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  text_IN?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  text_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<MessageType>;
  type_IN?: InputMaybe<Array<MessageType>>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_GT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_IN?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedAt_LT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_LTE?: InputMaybe<Scalars['DateTime']['input']>;
};

export enum MessageType {
  Chat = 'CHAT',
  Group = 'GROUP',
  Network = 'NETWORK'
}

export type MessageUpdateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  file?: InputMaybe<Scalars['String']['input']>;
  format?: InputMaybe<MessageFormat>;
  receiver?: InputMaybe<MessageReceiverUpdateFieldInput>;
  sender?: InputMaybe<MessageSenderUpdateFieldInput>;
  text?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<MessageType>;
};

export type MessageUpdatedEvent = {
  __typename?: 'MessageUpdatedEvent';
  event: EventType;
  previousState: MessageEventPayload;
  timestamp: Scalars['Float']['output'];
  updatedMessage: MessageEventPayload;
};

export type MessageUserReceiverAggregationSelection = {
  __typename?: 'MessageUserReceiverAggregationSelection';
  count: Scalars['Int']['output'];
  node?: Maybe<MessageUserReceiverNodeAggregateSelection>;
};

export type MessageUserReceiverNodeAggregateSelection = {
  __typename?: 'MessageUserReceiverNodeAggregateSelection';
  createdAt: DateTimeAggregateSelection;
  email: StringAggregateSelection;
  id: IdAggregateSelection;
  name: StringAggregateSelection;
  profileUrl: StringAggregateSelection;
  updatedAt: DateTimeAggregateSelection;
  username: IdAggregateSelection;
};

export type MessageUserSenderAggregationSelection = {
  __typename?: 'MessageUserSenderAggregationSelection';
  count: Scalars['Int']['output'];
  node?: Maybe<MessageUserSenderNodeAggregateSelection>;
};

export type MessageUserSenderNodeAggregateSelection = {
  __typename?: 'MessageUserSenderNodeAggregateSelection';
  createdAt: DateTimeAggregateSelection;
  email: StringAggregateSelection;
  id: IdAggregateSelection;
  name: StringAggregateSelection;
  profileUrl: StringAggregateSelection;
  updatedAt: DateTimeAggregateSelection;
  username: IdAggregateSelection;
};

export type MessageWhere = {
  AND?: InputMaybe<Array<MessageWhere>>;
  NOT?: InputMaybe<MessageWhere>;
  OR?: InputMaybe<Array<MessageWhere>>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_GT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_IN?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdAt_LT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  file?: InputMaybe<Scalars['String']['input']>;
  file_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  file_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  file_IN?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  file_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
  format?: InputMaybe<MessageFormat>;
  format_IN?: InputMaybe<Array<MessageFormat>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_CONTAINS?: InputMaybe<Scalars['ID']['input']>;
  id_ENDS_WITH?: InputMaybe<Scalars['ID']['input']>;
  id_IN?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_STARTS_WITH?: InputMaybe<Scalars['ID']['input']>;
  receiver?: InputMaybe<UserWhere>;
  receiverAggregate?: InputMaybe<MessageReceiverAggregateInput>;
  receiverConnection?: InputMaybe<MessageReceiverConnectionWhere>;
  receiverConnection_NOT?: InputMaybe<MessageReceiverConnectionWhere>;
  receiver_NOT?: InputMaybe<UserWhere>;
  sender?: InputMaybe<UserWhere>;
  senderAggregate?: InputMaybe<MessageSenderAggregateInput>;
  senderConnection?: InputMaybe<MessageSenderConnectionWhere>;
  senderConnection_NOT?: InputMaybe<MessageSenderConnectionWhere>;
  sender_NOT?: InputMaybe<UserWhere>;
  text?: InputMaybe<Scalars['String']['input']>;
  text_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  text_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  text_IN?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  text_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<MessageType>;
  type_IN?: InputMaybe<Array<MessageType>>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_GT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_IN?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedAt_LT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_LTE?: InputMaybe<Scalars['DateTime']['input']>;
};

export type MessagesConnection = {
  __typename?: 'MessagesConnection';
  edges: Array<MessageEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createComments: CreateCommentsMutationResponse;
  createMessages: CreateMessagesMutationResponse;
  createNotifications: CreateNotificationsMutationResponse;
  createPosts: CreatePostsMutationResponse;
  createPrivacySettings: CreatePrivacySettingsMutationResponse;
  createUsers: CreateUsersMutationResponse;
  deleteComments: DeleteInfo;
  deleteMessages: DeleteInfo;
  deleteNotifications: DeleteInfo;
  deletePosts: DeleteInfo;
  deletePrivacySettings: DeleteInfo;
  deleteUsers: DeleteInfo;
  updateComments: UpdateCommentsMutationResponse;
  updateMessages: UpdateMessagesMutationResponse;
  updateNotifications: UpdateNotificationsMutationResponse;
  updatePosts: UpdatePostsMutationResponse;
  updatePrivacySettings: UpdatePrivacySettingsMutationResponse;
  updateUsers: UpdateUsersMutationResponse;
};


export type MutationCreateCommentsArgs = {
  input: Array<CommentCreateInput>;
};


export type MutationCreateMessagesArgs = {
  input: Array<MessageCreateInput>;
};


export type MutationCreateNotificationsArgs = {
  input: Array<NotificationCreateInput>;
};


export type MutationCreatePostsArgs = {
  input: Array<PostCreateInput>;
};


export type MutationCreatePrivacySettingsArgs = {
  input: Array<PrivacySettingsCreateInput>;
};


export type MutationCreateUsersArgs = {
  input: Array<UserCreateInput>;
};


export type MutationDeleteCommentsArgs = {
  delete?: InputMaybe<CommentDeleteInput>;
  where?: InputMaybe<CommentWhere>;
};


export type MutationDeleteMessagesArgs = {
  delete?: InputMaybe<MessageDeleteInput>;
  where?: InputMaybe<MessageWhere>;
};


export type MutationDeleteNotificationsArgs = {
  delete?: InputMaybe<NotificationDeleteInput>;
  where?: InputMaybe<NotificationWhere>;
};


export type MutationDeletePostsArgs = {
  delete?: InputMaybe<PostDeleteInput>;
  where?: InputMaybe<PostWhere>;
};


export type MutationDeletePrivacySettingsArgs = {
  where?: InputMaybe<PrivacySettingsWhere>;
};


export type MutationDeleteUsersArgs = {
  delete?: InputMaybe<UserDeleteInput>;
  where?: InputMaybe<UserWhere>;
};


export type MutationUpdateCommentsArgs = {
  connect?: InputMaybe<CommentConnectInput>;
  connectOrCreate?: InputMaybe<CommentConnectOrCreateInput>;
  create?: InputMaybe<CommentRelationInput>;
  delete?: InputMaybe<CommentDeleteInput>;
  disconnect?: InputMaybe<CommentDisconnectInput>;
  update?: InputMaybe<CommentUpdateInput>;
  where?: InputMaybe<CommentWhere>;
};


export type MutationUpdateMessagesArgs = {
  connect?: InputMaybe<MessageConnectInput>;
  connectOrCreate?: InputMaybe<MessageConnectOrCreateInput>;
  create?: InputMaybe<MessageRelationInput>;
  delete?: InputMaybe<MessageDeleteInput>;
  disconnect?: InputMaybe<MessageDisconnectInput>;
  update?: InputMaybe<MessageUpdateInput>;
  where?: InputMaybe<MessageWhere>;
};


export type MutationUpdateNotificationsArgs = {
  connect?: InputMaybe<NotificationConnectInput>;
  connectOrCreate?: InputMaybe<NotificationConnectOrCreateInput>;
  create?: InputMaybe<NotificationRelationInput>;
  delete?: InputMaybe<NotificationDeleteInput>;
  disconnect?: InputMaybe<NotificationDisconnectInput>;
  update?: InputMaybe<NotificationUpdateInput>;
  where?: InputMaybe<NotificationWhere>;
};


export type MutationUpdatePostsArgs = {
  connect?: InputMaybe<PostConnectInput>;
  connectOrCreate?: InputMaybe<PostConnectOrCreateInput>;
  create?: InputMaybe<PostRelationInput>;
  delete?: InputMaybe<PostDeleteInput>;
  disconnect?: InputMaybe<PostDisconnectInput>;
  update?: InputMaybe<PostUpdateInput>;
  where?: InputMaybe<PostWhere>;
};


export type MutationUpdatePrivacySettingsArgs = {
  update?: InputMaybe<PrivacySettingsUpdateInput>;
  where?: InputMaybe<PrivacySettingsWhere>;
};


export type MutationUpdateUsersArgs = {
  connect?: InputMaybe<UserConnectInput>;
  connectOrCreate?: InputMaybe<UserConnectOrCreateInput>;
  create?: InputMaybe<UserRelationInput>;
  delete?: InputMaybe<UserDeleteInput>;
  disconnect?: InputMaybe<UserDisconnectInput>;
  update?: InputMaybe<UserUpdateInput>;
  where?: InputMaybe<UserWhere>;
};

export type Notification = {
  __typename?: 'Notification';
  id: Scalars['ID']['output'];
  importance: NotificationPriority;
  message: Scalars['String']['output'];
  title: Scalars['String']['output'];
  type: NotificationType;
  users: Array<User>;
  usersAggregate?: Maybe<NotificationUserUsersAggregationSelection>;
  usersConnection: NotificationUsersConnection;
};


export type NotificationUsersArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<UserOptions>;
  where?: InputMaybe<UserWhere>;
};


export type NotificationUsersAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<UserWhere>;
};


export type NotificationUsersConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<NotificationUsersConnectionSort>>;
  where?: InputMaybe<NotificationUsersConnectionWhere>;
};

export type NotificationAggregateSelection = {
  __typename?: 'NotificationAggregateSelection';
  count: Scalars['Int']['output'];
  id: IdAggregateSelection;
  message: StringAggregateSelection;
  title: StringAggregateSelection;
};

export type NotificationConnectInput = {
  users?: InputMaybe<Array<NotificationUsersConnectFieldInput>>;
};

export type NotificationConnectOrCreateInput = {
  users?: InputMaybe<Array<NotificationUsersConnectOrCreateFieldInput>>;
};

export type NotificationConnectWhere = {
  node: NotificationWhere;
};

export type NotificationConnectedRelationships = {
  __typename?: 'NotificationConnectedRelationships';
  users?: Maybe<NotificationUsersConnectedRelationship>;
};

export type NotificationCreateInput = {
  importance: NotificationPriority;
  message: Scalars['String']['input'];
  title: Scalars['String']['input'];
  type: NotificationType;
  users?: InputMaybe<NotificationUsersFieldInput>;
};

export type NotificationCreatedEvent = {
  __typename?: 'NotificationCreatedEvent';
  createdNotification: NotificationEventPayload;
  event: EventType;
  timestamp: Scalars['Float']['output'];
};

export type NotificationDeleteInput = {
  users?: InputMaybe<Array<NotificationUsersDeleteFieldInput>>;
};

export type NotificationDeletedEvent = {
  __typename?: 'NotificationDeletedEvent';
  deletedNotification: NotificationEventPayload;
  event: EventType;
  timestamp: Scalars['Float']['output'];
};

export type NotificationDisconnectInput = {
  users?: InputMaybe<Array<NotificationUsersDisconnectFieldInput>>;
};

export type NotificationEdge = {
  __typename?: 'NotificationEdge';
  cursor: Scalars['String']['output'];
  node: Notification;
};

export type NotificationEventPayload = {
  __typename?: 'NotificationEventPayload';
  id: Scalars['ID']['output'];
  importance: NotificationPriority;
  message: Scalars['String']['output'];
  title: Scalars['String']['output'];
  type: NotificationType;
};

export type NotificationOptions = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  /** Specify one or more NotificationSort objects to sort Notifications by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<NotificationSort>>;
};

export enum NotificationPriority {
  Important = 'IMPORTANT',
  Silent = 'SILENT'
}

export type NotificationRelationInput = {
  users?: InputMaybe<Array<NotificationUsersCreateFieldInput>>;
};

export type NotificationRelationshipCreatedEvent = {
  __typename?: 'NotificationRelationshipCreatedEvent';
  createdRelationship: NotificationConnectedRelationships;
  event: EventType;
  notification: NotificationEventPayload;
  relationshipFieldName: Scalars['String']['output'];
  timestamp: Scalars['Float']['output'];
};

export type NotificationRelationshipCreatedSubscriptionWhere = {
  AND?: InputMaybe<Array<NotificationRelationshipCreatedSubscriptionWhere>>;
  NOT?: InputMaybe<NotificationRelationshipCreatedSubscriptionWhere>;
  OR?: InputMaybe<Array<NotificationRelationshipCreatedSubscriptionWhere>>;
  createdRelationship?: InputMaybe<NotificationRelationshipsSubscriptionWhere>;
  notification?: InputMaybe<NotificationSubscriptionWhere>;
};

export type NotificationRelationshipDeletedEvent = {
  __typename?: 'NotificationRelationshipDeletedEvent';
  deletedRelationship: NotificationConnectedRelationships;
  event: EventType;
  notification: NotificationEventPayload;
  relationshipFieldName: Scalars['String']['output'];
  timestamp: Scalars['Float']['output'];
};

export type NotificationRelationshipDeletedSubscriptionWhere = {
  AND?: InputMaybe<Array<NotificationRelationshipDeletedSubscriptionWhere>>;
  NOT?: InputMaybe<NotificationRelationshipDeletedSubscriptionWhere>;
  OR?: InputMaybe<Array<NotificationRelationshipDeletedSubscriptionWhere>>;
  deletedRelationship?: InputMaybe<NotificationRelationshipsSubscriptionWhere>;
  notification?: InputMaybe<NotificationSubscriptionWhere>;
};

export type NotificationRelationshipsSubscriptionWhere = {
  users?: InputMaybe<NotificationUsersRelationshipSubscriptionWhere>;
};

/** Fields to sort Notifications by. The order in which sorts are applied is not guaranteed when specifying many fields in one NotificationSort object. */
export type NotificationSort = {
  id?: InputMaybe<SortDirection>;
  importance?: InputMaybe<SortDirection>;
  message?: InputMaybe<SortDirection>;
  title?: InputMaybe<SortDirection>;
  type?: InputMaybe<SortDirection>;
};

export type NotificationSubscriptionWhere = {
  AND?: InputMaybe<Array<NotificationSubscriptionWhere>>;
  NOT?: InputMaybe<NotificationSubscriptionWhere>;
  OR?: InputMaybe<Array<NotificationSubscriptionWhere>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_CONTAINS?: InputMaybe<Scalars['ID']['input']>;
  id_ENDS_WITH?: InputMaybe<Scalars['ID']['input']>;
  id_IN?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_STARTS_WITH?: InputMaybe<Scalars['ID']['input']>;
  importance?: InputMaybe<NotificationPriority>;
  importance_IN?: InputMaybe<Array<NotificationPriority>>;
  message?: InputMaybe<Scalars['String']['input']>;
  message_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  message_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  message_IN?: InputMaybe<Array<Scalars['String']['input']>>;
  message_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  title_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  title_IN?: InputMaybe<Array<Scalars['String']['input']>>;
  title_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<NotificationType>;
  type_IN?: InputMaybe<Array<NotificationType>>;
};

export enum NotificationType {
  Comment = 'COMMENT',
  GroupAddReq = 'GROUP_ADD_REQ',
  Like = 'LIKE',
  Network = 'NETWORK',
  NewRelation = 'NEW_RELATION',
  Other = 'OTHER',
  RelationRequest = 'RELATION_REQUEST',
  Report = 'REPORT'
}

export type NotificationUpdateInput = {
  importance?: InputMaybe<NotificationPriority>;
  message?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<NotificationType>;
  users?: InputMaybe<Array<NotificationUsersUpdateFieldInput>>;
};

export type NotificationUpdatedEvent = {
  __typename?: 'NotificationUpdatedEvent';
  event: EventType;
  previousState: NotificationEventPayload;
  timestamp: Scalars['Float']['output'];
  updatedNotification: NotificationEventPayload;
};

export type NotificationUserUsersAggregationSelection = {
  __typename?: 'NotificationUserUsersAggregationSelection';
  count: Scalars['Int']['output'];
  node?: Maybe<NotificationUserUsersNodeAggregateSelection>;
};

export type NotificationUserUsersNodeAggregateSelection = {
  __typename?: 'NotificationUserUsersNodeAggregateSelection';
  createdAt: DateTimeAggregateSelection;
  email: StringAggregateSelection;
  id: IdAggregateSelection;
  name: StringAggregateSelection;
  profileUrl: StringAggregateSelection;
  updatedAt: DateTimeAggregateSelection;
  username: IdAggregateSelection;
};

export type NotificationUsersAggregateInput = {
  AND?: InputMaybe<Array<NotificationUsersAggregateInput>>;
  NOT?: InputMaybe<NotificationUsersAggregateInput>;
  OR?: InputMaybe<Array<NotificationUsersAggregateInput>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  node?: InputMaybe<NotificationUsersNodeAggregationWhereInput>;
};

export type NotificationUsersConnectFieldInput = {
  connect?: InputMaybe<Array<UserConnectInput>>;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars['Boolean']['input'];
  where?: InputMaybe<UserConnectWhere>;
};

export type NotificationUsersConnectOrCreateFieldInput = {
  onCreate: NotificationUsersConnectOrCreateFieldInputOnCreate;
  where: UserConnectOrCreateWhere;
};

export type NotificationUsersConnectOrCreateFieldInputOnCreate = {
  node: UserOnCreateInput;
};

export type NotificationUsersConnectedRelationship = {
  __typename?: 'NotificationUsersConnectedRelationship';
  node: UserEventPayload;
};

export type NotificationUsersConnection = {
  __typename?: 'NotificationUsersConnection';
  edges: Array<NotificationUsersRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type NotificationUsersConnectionSort = {
  node?: InputMaybe<UserSort>;
};

export type NotificationUsersConnectionWhere = {
  AND?: InputMaybe<Array<NotificationUsersConnectionWhere>>;
  NOT?: InputMaybe<NotificationUsersConnectionWhere>;
  OR?: InputMaybe<Array<NotificationUsersConnectionWhere>>;
  node?: InputMaybe<UserWhere>;
};

export type NotificationUsersCreateFieldInput = {
  node: UserCreateInput;
};

export type NotificationUsersDeleteFieldInput = {
  delete?: InputMaybe<UserDeleteInput>;
  where?: InputMaybe<NotificationUsersConnectionWhere>;
};

export type NotificationUsersDisconnectFieldInput = {
  disconnect?: InputMaybe<UserDisconnectInput>;
  where?: InputMaybe<NotificationUsersConnectionWhere>;
};

export type NotificationUsersFieldInput = {
  connect?: InputMaybe<Array<NotificationUsersConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<NotificationUsersConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<NotificationUsersCreateFieldInput>>;
};

export type NotificationUsersNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<NotificationUsersNodeAggregationWhereInput>>;
  NOT?: InputMaybe<NotificationUsersNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<NotificationUsersNodeAggregationWhereInput>>;
  createdAt_MAX_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_GT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_LT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_GT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_LT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_LTE?: InputMaybe<Scalars['DateTime']['input']>;
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
  profileUrl_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  profileUrl_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  profileUrl_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  profileUrl_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  profileUrl_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  profileUrl_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  profileUrl_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  profileUrl_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  profileUrl_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  profileUrl_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  profileUrl_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  profileUrl_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  profileUrl_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  profileUrl_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  profileUrl_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  updatedAt_MAX_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_GT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_LT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_GT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_LT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_LTE?: InputMaybe<Scalars['DateTime']['input']>;
};

export type NotificationUsersRelationship = {
  __typename?: 'NotificationUsersRelationship';
  cursor: Scalars['String']['output'];
  node: User;
};

export type NotificationUsersRelationshipSubscriptionWhere = {
  node?: InputMaybe<UserSubscriptionWhere>;
};

export type NotificationUsersUpdateConnectionInput = {
  node?: InputMaybe<UserUpdateInput>;
};

export type NotificationUsersUpdateFieldInput = {
  connect?: InputMaybe<Array<NotificationUsersConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<NotificationUsersConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<NotificationUsersCreateFieldInput>>;
  delete?: InputMaybe<Array<NotificationUsersDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<NotificationUsersDisconnectFieldInput>>;
  update?: InputMaybe<NotificationUsersUpdateConnectionInput>;
  where?: InputMaybe<NotificationUsersConnectionWhere>;
};

export type NotificationWhere = {
  AND?: InputMaybe<Array<NotificationWhere>>;
  NOT?: InputMaybe<NotificationWhere>;
  OR?: InputMaybe<Array<NotificationWhere>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_CONTAINS?: InputMaybe<Scalars['ID']['input']>;
  id_ENDS_WITH?: InputMaybe<Scalars['ID']['input']>;
  id_IN?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_STARTS_WITH?: InputMaybe<Scalars['ID']['input']>;
  importance?: InputMaybe<NotificationPriority>;
  importance_IN?: InputMaybe<Array<NotificationPriority>>;
  message?: InputMaybe<Scalars['String']['input']>;
  message_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  message_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  message_IN?: InputMaybe<Array<Scalars['String']['input']>>;
  message_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  title_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  title_IN?: InputMaybe<Array<Scalars['String']['input']>>;
  title_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<NotificationType>;
  type_IN?: InputMaybe<Array<NotificationType>>;
  usersAggregate?: InputMaybe<NotificationUsersAggregateInput>;
  /** Return Notifications where all of the related NotificationUsersConnections match this filter */
  usersConnection_ALL?: InputMaybe<NotificationUsersConnectionWhere>;
  /** Return Notifications where none of the related NotificationUsersConnections match this filter */
  usersConnection_NONE?: InputMaybe<NotificationUsersConnectionWhere>;
  /** Return Notifications where one of the related NotificationUsersConnections match this filter */
  usersConnection_SINGLE?: InputMaybe<NotificationUsersConnectionWhere>;
  /** Return Notifications where some of the related NotificationUsersConnections match this filter */
  usersConnection_SOME?: InputMaybe<NotificationUsersConnectionWhere>;
  /** Return Notifications where all of the related Users match this filter */
  users_ALL?: InputMaybe<UserWhere>;
  /** Return Notifications where none of the related Users match this filter */
  users_NONE?: InputMaybe<UserWhere>;
  /** Return Notifications where one of the related Users match this filter */
  users_SINGLE?: InputMaybe<UserWhere>;
  /** Return Notifications where some of the related Users match this filter */
  users_SOME?: InputMaybe<UserWhere>;
};

export type NotificationsConnection = {
  __typename?: 'NotificationsConnection';
  edges: Array<NotificationEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
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
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  creatorOfPost: User;
  creatorOfPostAggregate?: Maybe<PostUserCreatorOfPostAggregationSelection>;
  creatorOfPostConnection: PostCreatorOfPostConnection;
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  likes: Array<User>;
  likesAggregate?: Maybe<PostUserLikesAggregationSelection>;
  likesConnection: PostLikesConnection;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  url: Scalars['String']['output'];
  visibility?: Maybe<Array<RelationType>>;
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


export type PostLikesArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<UserOptions>;
  where?: InputMaybe<UserWhere>;
};


export type PostLikesAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<UserWhere>;
};


export type PostLikesConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<PostLikesConnectionSort>>;
  where?: InputMaybe<PostLikesConnectionWhere>;
};

export type PostAggregateSelection = {
  __typename?: 'PostAggregateSelection';
  count: Scalars['Int']['output'];
  createdAt: DateTimeAggregateSelection;
  description: StringAggregateSelection;
  id: IdAggregateSelection;
  updatedAt: DateTimeAggregateSelection;
  url: StringAggregateSelection;
};

export type PostCommentCommentsAggregationSelection = {
  __typename?: 'PostCommentCommentsAggregationSelection';
  count: Scalars['Int']['output'];
  node?: Maybe<PostCommentCommentsNodeAggregateSelection>;
};

export type PostCommentCommentsNodeAggregateSelection = {
  __typename?: 'PostCommentCommentsNodeAggregateSelection';
  createdAt: DateTimeAggregateSelection;
  id: IdAggregateSelection;
  indent: IntAggregateSelection;
  text: StringAggregateSelection;
  updatedAt: DateTimeAggregateSelection;
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
  connect?: InputMaybe<Array<CommentConnectInput>>;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars['Boolean']['input'];
  where?: InputMaybe<CommentConnectWhere>;
};

export type PostCommentsConnectedRelationship = {
  __typename?: 'PostCommentsConnectedRelationship';
  node: CommentEventPayload;
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
  createdAt_MAX_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_GT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_LT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_GT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_LT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  indent_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  indent_AVERAGE_GT?: InputMaybe<Scalars['Float']['input']>;
  indent_AVERAGE_GTE?: InputMaybe<Scalars['Float']['input']>;
  indent_AVERAGE_LT?: InputMaybe<Scalars['Float']['input']>;
  indent_AVERAGE_LTE?: InputMaybe<Scalars['Float']['input']>;
  indent_MAX_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  indent_MAX_GT?: InputMaybe<Scalars['Int']['input']>;
  indent_MAX_GTE?: InputMaybe<Scalars['Int']['input']>;
  indent_MAX_LT?: InputMaybe<Scalars['Int']['input']>;
  indent_MAX_LTE?: InputMaybe<Scalars['Int']['input']>;
  indent_MIN_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  indent_MIN_GT?: InputMaybe<Scalars['Int']['input']>;
  indent_MIN_GTE?: InputMaybe<Scalars['Int']['input']>;
  indent_MIN_LT?: InputMaybe<Scalars['Int']['input']>;
  indent_MIN_LTE?: InputMaybe<Scalars['Int']['input']>;
  indent_SUM_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  indent_SUM_GT?: InputMaybe<Scalars['Int']['input']>;
  indent_SUM_GTE?: InputMaybe<Scalars['Int']['input']>;
  indent_SUM_LT?: InputMaybe<Scalars['Int']['input']>;
  indent_SUM_LTE?: InputMaybe<Scalars['Int']['input']>;
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
  updatedAt_MAX_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_GT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_LT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_GT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_LT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_LTE?: InputMaybe<Scalars['DateTime']['input']>;
};

export type PostCommentsRelationship = {
  __typename?: 'PostCommentsRelationship';
  cursor: Scalars['String']['output'];
  node: Comment;
};

export type PostCommentsRelationshipSubscriptionWhere = {
  node?: InputMaybe<CommentSubscriptionWhere>;
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
  likes?: InputMaybe<Array<PostLikesConnectFieldInput>>;
};

export type PostConnectOrCreateInput = {
  creatorOfPost?: InputMaybe<PostCreatorOfPostConnectOrCreateFieldInput>;
  likes?: InputMaybe<Array<PostLikesConnectOrCreateFieldInput>>;
};

export type PostConnectWhere = {
  node: PostWhere;
};

export type PostConnectedRelationships = {
  __typename?: 'PostConnectedRelationships';
  comments?: Maybe<PostCommentsConnectedRelationship>;
  creatorOfPost?: Maybe<PostCreatorOfPostConnectedRelationship>;
  likes?: Maybe<PostLikesConnectedRelationship>;
};

export type PostCreateInput = {
  comments?: InputMaybe<PostCommentsFieldInput>;
  creatorOfPost?: InputMaybe<PostCreatorOfPostFieldInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  likes?: InputMaybe<PostLikesFieldInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  url: Scalars['String']['input'];
  visibility?: InputMaybe<Array<RelationType>>;
};

export type PostCreatedEvent = {
  __typename?: 'PostCreatedEvent';
  createdPost: PostEventPayload;
  event: EventType;
  timestamp: Scalars['Float']['output'];
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

export type PostCreatorOfPostConnectOrCreateFieldInput = {
  onCreate: PostCreatorOfPostConnectOrCreateFieldInputOnCreate;
  where: UserConnectOrCreateWhere;
};

export type PostCreatorOfPostConnectOrCreateFieldInputOnCreate = {
  node: UserOnCreateInput;
};

export type PostCreatorOfPostConnectedRelationship = {
  __typename?: 'PostCreatorOfPostConnectedRelationship';
  node: UserEventPayload;
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
  connectOrCreate?: InputMaybe<PostCreatorOfPostConnectOrCreateFieldInput>;
  create?: InputMaybe<PostCreatorOfPostCreateFieldInput>;
};

export type PostCreatorOfPostNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<PostCreatorOfPostNodeAggregationWhereInput>>;
  NOT?: InputMaybe<PostCreatorOfPostNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<PostCreatorOfPostNodeAggregationWhereInput>>;
  createdAt_MAX_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_GT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_LT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_GT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_LT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_LTE?: InputMaybe<Scalars['DateTime']['input']>;
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
  profileUrl_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  profileUrl_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  profileUrl_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  profileUrl_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  profileUrl_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  profileUrl_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  profileUrl_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  profileUrl_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  profileUrl_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  profileUrl_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  profileUrl_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  profileUrl_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  profileUrl_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  profileUrl_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  profileUrl_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  updatedAt_MAX_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_GT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_LT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_GT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_LT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_LTE?: InputMaybe<Scalars['DateTime']['input']>;
};

export type PostCreatorOfPostRelationship = {
  __typename?: 'PostCreatorOfPostRelationship';
  cursor: Scalars['String']['output'];
  node: User;
};

export type PostCreatorOfPostRelationshipSubscriptionWhere = {
  node?: InputMaybe<UserSubscriptionWhere>;
};

export type PostCreatorOfPostUpdateConnectionInput = {
  node?: InputMaybe<UserUpdateInput>;
};

export type PostCreatorOfPostUpdateFieldInput = {
  connect?: InputMaybe<PostCreatorOfPostConnectFieldInput>;
  connectOrCreate?: InputMaybe<PostCreatorOfPostConnectOrCreateFieldInput>;
  create?: InputMaybe<PostCreatorOfPostCreateFieldInput>;
  delete?: InputMaybe<PostCreatorOfPostDeleteFieldInput>;
  disconnect?: InputMaybe<PostCreatorOfPostDisconnectFieldInput>;
  update?: InputMaybe<PostCreatorOfPostUpdateConnectionInput>;
  where?: InputMaybe<PostCreatorOfPostConnectionWhere>;
};

export type PostDeleteInput = {
  comments?: InputMaybe<Array<PostCommentsDeleteFieldInput>>;
  creatorOfPost?: InputMaybe<PostCreatorOfPostDeleteFieldInput>;
  likes?: InputMaybe<Array<PostLikesDeleteFieldInput>>;
};

export type PostDeletedEvent = {
  __typename?: 'PostDeletedEvent';
  deletedPost: PostEventPayload;
  event: EventType;
  timestamp: Scalars['Float']['output'];
};

export type PostDisconnectInput = {
  comments?: InputMaybe<Array<PostCommentsDisconnectFieldInput>>;
  creatorOfPost?: InputMaybe<PostCreatorOfPostDisconnectFieldInput>;
  likes?: InputMaybe<Array<PostLikesDisconnectFieldInput>>;
};

export type PostEdge = {
  __typename?: 'PostEdge';
  cursor: Scalars['String']['output'];
  node: Post;
};

export type PostEventPayload = {
  __typename?: 'PostEventPayload';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  url: Scalars['String']['output'];
  visibility?: Maybe<Array<RelationType>>;
};

export type PostLikesAggregateInput = {
  AND?: InputMaybe<Array<PostLikesAggregateInput>>;
  NOT?: InputMaybe<PostLikesAggregateInput>;
  OR?: InputMaybe<Array<PostLikesAggregateInput>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  node?: InputMaybe<PostLikesNodeAggregationWhereInput>;
};

export type PostLikesConnectFieldInput = {
  connect?: InputMaybe<Array<UserConnectInput>>;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars['Boolean']['input'];
  where?: InputMaybe<UserConnectWhere>;
};

export type PostLikesConnectOrCreateFieldInput = {
  onCreate: PostLikesConnectOrCreateFieldInputOnCreate;
  where: UserConnectOrCreateWhere;
};

export type PostLikesConnectOrCreateFieldInputOnCreate = {
  node: UserOnCreateInput;
};

export type PostLikesConnectedRelationship = {
  __typename?: 'PostLikesConnectedRelationship';
  node: UserEventPayload;
};

export type PostLikesConnection = {
  __typename?: 'PostLikesConnection';
  edges: Array<PostLikesRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type PostLikesConnectionSort = {
  node?: InputMaybe<UserSort>;
};

export type PostLikesConnectionWhere = {
  AND?: InputMaybe<Array<PostLikesConnectionWhere>>;
  NOT?: InputMaybe<PostLikesConnectionWhere>;
  OR?: InputMaybe<Array<PostLikesConnectionWhere>>;
  node?: InputMaybe<UserWhere>;
};

export type PostLikesCreateFieldInput = {
  node: UserCreateInput;
};

export type PostLikesDeleteFieldInput = {
  delete?: InputMaybe<UserDeleteInput>;
  where?: InputMaybe<PostLikesConnectionWhere>;
};

export type PostLikesDisconnectFieldInput = {
  disconnect?: InputMaybe<UserDisconnectInput>;
  where?: InputMaybe<PostLikesConnectionWhere>;
};

export type PostLikesFieldInput = {
  connect?: InputMaybe<Array<PostLikesConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<PostLikesConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<PostLikesCreateFieldInput>>;
};

export type PostLikesNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<PostLikesNodeAggregationWhereInput>>;
  NOT?: InputMaybe<PostLikesNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<PostLikesNodeAggregationWhereInput>>;
  createdAt_MAX_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_GT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_LT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_GT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_LT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_LTE?: InputMaybe<Scalars['DateTime']['input']>;
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
  profileUrl_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  profileUrl_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  profileUrl_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  profileUrl_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  profileUrl_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  profileUrl_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  profileUrl_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  profileUrl_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  profileUrl_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  profileUrl_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  profileUrl_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  profileUrl_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  profileUrl_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  profileUrl_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  profileUrl_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  updatedAt_MAX_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_GT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_LT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_GT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_LT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_LTE?: InputMaybe<Scalars['DateTime']['input']>;
};

export type PostLikesRelationship = {
  __typename?: 'PostLikesRelationship';
  cursor: Scalars['String']['output'];
  node: User;
};

export type PostLikesRelationshipSubscriptionWhere = {
  node?: InputMaybe<UserSubscriptionWhere>;
};

export type PostLikesUpdateConnectionInput = {
  node?: InputMaybe<UserUpdateInput>;
};

export type PostLikesUpdateFieldInput = {
  connect?: InputMaybe<Array<PostLikesConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<PostLikesConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<PostLikesCreateFieldInput>>;
  delete?: InputMaybe<Array<PostLikesDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<PostLikesDisconnectFieldInput>>;
  update?: InputMaybe<PostLikesUpdateConnectionInput>;
  where?: InputMaybe<PostLikesConnectionWhere>;
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
  likes?: InputMaybe<Array<PostLikesCreateFieldInput>>;
};

export type PostRelationshipCreatedEvent = {
  __typename?: 'PostRelationshipCreatedEvent';
  createdRelationship: PostConnectedRelationships;
  event: EventType;
  post: PostEventPayload;
  relationshipFieldName: Scalars['String']['output'];
  timestamp: Scalars['Float']['output'];
};

export type PostRelationshipCreatedSubscriptionWhere = {
  AND?: InputMaybe<Array<PostRelationshipCreatedSubscriptionWhere>>;
  NOT?: InputMaybe<PostRelationshipCreatedSubscriptionWhere>;
  OR?: InputMaybe<Array<PostRelationshipCreatedSubscriptionWhere>>;
  createdRelationship?: InputMaybe<PostRelationshipsSubscriptionWhere>;
  post?: InputMaybe<PostSubscriptionWhere>;
};

export type PostRelationshipDeletedEvent = {
  __typename?: 'PostRelationshipDeletedEvent';
  deletedRelationship: PostConnectedRelationships;
  event: EventType;
  post: PostEventPayload;
  relationshipFieldName: Scalars['String']['output'];
  timestamp: Scalars['Float']['output'];
};

export type PostRelationshipDeletedSubscriptionWhere = {
  AND?: InputMaybe<Array<PostRelationshipDeletedSubscriptionWhere>>;
  NOT?: InputMaybe<PostRelationshipDeletedSubscriptionWhere>;
  OR?: InputMaybe<Array<PostRelationshipDeletedSubscriptionWhere>>;
  deletedRelationship?: InputMaybe<PostRelationshipsSubscriptionWhere>;
  post?: InputMaybe<PostSubscriptionWhere>;
};

export type PostRelationshipsSubscriptionWhere = {
  comments?: InputMaybe<PostCommentsRelationshipSubscriptionWhere>;
  creatorOfPost?: InputMaybe<PostCreatorOfPostRelationshipSubscriptionWhere>;
  likes?: InputMaybe<PostLikesRelationshipSubscriptionWhere>;
};

/** Fields to sort Posts by. The order in which sorts are applied is not guaranteed when specifying many fields in one PostSort object. */
export type PostSort = {
  createdAt?: InputMaybe<SortDirection>;
  description?: InputMaybe<SortDirection>;
  id?: InputMaybe<SortDirection>;
  updatedAt?: InputMaybe<SortDirection>;
  url?: InputMaybe<SortDirection>;
};

export type PostSubscriptionWhere = {
  AND?: InputMaybe<Array<PostSubscriptionWhere>>;
  NOT?: InputMaybe<PostSubscriptionWhere>;
  OR?: InputMaybe<Array<PostSubscriptionWhere>>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_GT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_IN?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdAt_LT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  description_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  description_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  description_IN?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  description_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_CONTAINS?: InputMaybe<Scalars['ID']['input']>;
  id_ENDS_WITH?: InputMaybe<Scalars['ID']['input']>;
  id_IN?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_STARTS_WITH?: InputMaybe<Scalars['ID']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_GT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_IN?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedAt_LT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
  url_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  url_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  url_IN?: InputMaybe<Array<Scalars['String']['input']>>;
  url_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
  visibility?: InputMaybe<Array<RelationType>>;
  visibility_INCLUDES?: InputMaybe<RelationType>;
};

export type PostUpdateInput = {
  comments?: InputMaybe<Array<PostCommentsUpdateFieldInput>>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  creatorOfPost?: InputMaybe<PostCreatorOfPostUpdateFieldInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  likes?: InputMaybe<Array<PostLikesUpdateFieldInput>>;
  url?: InputMaybe<Scalars['String']['input']>;
  visibility?: InputMaybe<Array<RelationType>>;
};

export type PostUpdatedEvent = {
  __typename?: 'PostUpdatedEvent';
  event: EventType;
  previousState: PostEventPayload;
  timestamp: Scalars['Float']['output'];
  updatedPost: PostEventPayload;
};

export type PostUserCreatorOfPostAggregationSelection = {
  __typename?: 'PostUserCreatorOfPostAggregationSelection';
  count: Scalars['Int']['output'];
  node?: Maybe<PostUserCreatorOfPostNodeAggregateSelection>;
};

export type PostUserCreatorOfPostNodeAggregateSelection = {
  __typename?: 'PostUserCreatorOfPostNodeAggregateSelection';
  createdAt: DateTimeAggregateSelection;
  email: StringAggregateSelection;
  id: IdAggregateSelection;
  name: StringAggregateSelection;
  profileUrl: StringAggregateSelection;
  updatedAt: DateTimeAggregateSelection;
  username: IdAggregateSelection;
};

export type PostUserLikesAggregationSelection = {
  __typename?: 'PostUserLikesAggregationSelection';
  count: Scalars['Int']['output'];
  node?: Maybe<PostUserLikesNodeAggregateSelection>;
};

export type PostUserLikesNodeAggregateSelection = {
  __typename?: 'PostUserLikesNodeAggregateSelection';
  createdAt: DateTimeAggregateSelection;
  email: StringAggregateSelection;
  id: IdAggregateSelection;
  name: StringAggregateSelection;
  profileUrl: StringAggregateSelection;
  updatedAt: DateTimeAggregateSelection;
  username: IdAggregateSelection;
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
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_GT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_IN?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdAt_LT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_LTE?: InputMaybe<Scalars['DateTime']['input']>;
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
  id?: InputMaybe<Scalars['ID']['input']>;
  id_CONTAINS?: InputMaybe<Scalars['ID']['input']>;
  id_ENDS_WITH?: InputMaybe<Scalars['ID']['input']>;
  id_IN?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_STARTS_WITH?: InputMaybe<Scalars['ID']['input']>;
  likesAggregate?: InputMaybe<PostLikesAggregateInput>;
  /** Return Posts where all of the related PostLikesConnections match this filter */
  likesConnection_ALL?: InputMaybe<PostLikesConnectionWhere>;
  /** Return Posts where none of the related PostLikesConnections match this filter */
  likesConnection_NONE?: InputMaybe<PostLikesConnectionWhere>;
  /** Return Posts where one of the related PostLikesConnections match this filter */
  likesConnection_SINGLE?: InputMaybe<PostLikesConnectionWhere>;
  /** Return Posts where some of the related PostLikesConnections match this filter */
  likesConnection_SOME?: InputMaybe<PostLikesConnectionWhere>;
  /** Return Posts where all of the related Users match this filter */
  likes_ALL?: InputMaybe<UserWhere>;
  /** Return Posts where none of the related Users match this filter */
  likes_NONE?: InputMaybe<UserWhere>;
  /** Return Posts where one of the related Users match this filter */
  likes_SINGLE?: InputMaybe<UserWhere>;
  /** Return Posts where some of the related Users match this filter */
  likes_SOME?: InputMaybe<UserWhere>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_GT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_IN?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedAt_LT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
  url_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  url_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  url_IN?: InputMaybe<Array<Scalars['String']['input']>>;
  url_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
  visibility?: InputMaybe<Array<RelationType>>;
  visibility_INCLUDES?: InputMaybe<RelationType>;
};

export type PostsConnection = {
  __typename?: 'PostsConnection';
  edges: Array<PostEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type PrivacySettings = {
  __typename?: 'PrivacySettings';
  chatVisibility?: Maybe<Array<RelationType>>;
  isTyping: Scalars['Boolean']['output'];
  onlineStatus?: Maybe<Array<RelationType>>;
  profileVisibility?: Maybe<Array<RelationType>>;
  seenReceipts: Scalars['Boolean']['output'];
  whoCanSendMessageRequest?: Maybe<Array<RelationType>>;
};

export type PrivacySettingsAggregateSelection = {
  __typename?: 'PrivacySettingsAggregateSelection';
  count: Scalars['Int']['output'];
};

export type PrivacySettingsConnection = {
  __typename?: 'PrivacySettingsConnection';
  edges: Array<PrivacySettingsEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type PrivacySettingsCreateInput = {
  chatVisibility?: InputMaybe<Array<RelationType>>;
  isTyping: Scalars['Boolean']['input'];
  onlineStatus?: InputMaybe<Array<RelationType>>;
  profileVisibility?: InputMaybe<Array<RelationType>>;
  seenReceipts: Scalars['Boolean']['input'];
  whoCanSendMessageRequest?: InputMaybe<Array<RelationType>>;
};

export type PrivacySettingsCreatedEvent = {
  __typename?: 'PrivacySettingsCreatedEvent';
  createdPrivacySettings: PrivacySettingsEventPayload;
  event: EventType;
  timestamp: Scalars['Float']['output'];
};

export type PrivacySettingsDeletedEvent = {
  __typename?: 'PrivacySettingsDeletedEvent';
  deletedPrivacySettings: PrivacySettingsEventPayload;
  event: EventType;
  timestamp: Scalars['Float']['output'];
};

export type PrivacySettingsEdge = {
  __typename?: 'PrivacySettingsEdge';
  cursor: Scalars['String']['output'];
  node: PrivacySettings;
};

export type PrivacySettingsEventPayload = {
  __typename?: 'PrivacySettingsEventPayload';
  chatVisibility?: Maybe<Array<RelationType>>;
  isTyping: Scalars['Boolean']['output'];
  onlineStatus?: Maybe<Array<RelationType>>;
  profileVisibility?: Maybe<Array<RelationType>>;
  seenReceipts: Scalars['Boolean']['output'];
  whoCanSendMessageRequest?: Maybe<Array<RelationType>>;
};

export type PrivacySettingsOptions = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  /** Specify one or more PrivacySettingsSort objects to sort PrivacySettings by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<PrivacySettingsSort>>;
};

/** Fields to sort PrivacySettings by. The order in which sorts are applied is not guaranteed when specifying many fields in one PrivacySettingsSort object. */
export type PrivacySettingsSort = {
  isTyping?: InputMaybe<SortDirection>;
  seenReceipts?: InputMaybe<SortDirection>;
};

export type PrivacySettingsSubscriptionWhere = {
  AND?: InputMaybe<Array<PrivacySettingsSubscriptionWhere>>;
  NOT?: InputMaybe<PrivacySettingsSubscriptionWhere>;
  OR?: InputMaybe<Array<PrivacySettingsSubscriptionWhere>>;
  chatVisibility?: InputMaybe<Array<RelationType>>;
  chatVisibility_INCLUDES?: InputMaybe<RelationType>;
  isTyping?: InputMaybe<Scalars['Boolean']['input']>;
  onlineStatus?: InputMaybe<Array<RelationType>>;
  onlineStatus_INCLUDES?: InputMaybe<RelationType>;
  profileVisibility?: InputMaybe<Array<RelationType>>;
  profileVisibility_INCLUDES?: InputMaybe<RelationType>;
  seenReceipts?: InputMaybe<Scalars['Boolean']['input']>;
  whoCanSendMessageRequest?: InputMaybe<Array<RelationType>>;
  whoCanSendMessageRequest_INCLUDES?: InputMaybe<RelationType>;
};

export type PrivacySettingsUpdateInput = {
  chatVisibility?: InputMaybe<Array<RelationType>>;
  isTyping?: InputMaybe<Scalars['Boolean']['input']>;
  onlineStatus?: InputMaybe<Array<RelationType>>;
  profileVisibility?: InputMaybe<Array<RelationType>>;
  seenReceipts?: InputMaybe<Scalars['Boolean']['input']>;
  whoCanSendMessageRequest?: InputMaybe<Array<RelationType>>;
};

export type PrivacySettingsUpdatedEvent = {
  __typename?: 'PrivacySettingsUpdatedEvent';
  event: EventType;
  previousState: PrivacySettingsEventPayload;
  timestamp: Scalars['Float']['output'];
  updatedPrivacySettings: PrivacySettingsEventPayload;
};

export type PrivacySettingsWhere = {
  AND?: InputMaybe<Array<PrivacySettingsWhere>>;
  NOT?: InputMaybe<PrivacySettingsWhere>;
  OR?: InputMaybe<Array<PrivacySettingsWhere>>;
  chatVisibility?: InputMaybe<Array<RelationType>>;
  chatVisibility_INCLUDES?: InputMaybe<RelationType>;
  isTyping?: InputMaybe<Scalars['Boolean']['input']>;
  onlineStatus?: InputMaybe<Array<RelationType>>;
  onlineStatus_INCLUDES?: InputMaybe<RelationType>;
  profileVisibility?: InputMaybe<Array<RelationType>>;
  profileVisibility_INCLUDES?: InputMaybe<RelationType>;
  seenReceipts?: InputMaybe<Scalars['Boolean']['input']>;
  whoCanSendMessageRequest?: InputMaybe<Array<RelationType>>;
  whoCanSendMessageRequest_INCLUDES?: InputMaybe<RelationType>;
};

export type Query = {
  __typename?: 'Query';
  comments: Array<Comment>;
  commentsAggregate: CommentAggregateSelection;
  commentsConnection: CommentsConnection;
  messages: Array<Message>;
  messagesAggregate: MessageAggregateSelection;
  messagesConnection: MessagesConnection;
  notifications: Array<Notification>;
  notificationsAggregate: NotificationAggregateSelection;
  notificationsConnection: NotificationsConnection;
  posts: Array<Post>;
  postsAggregate: PostAggregateSelection;
  postsConnection: PostsConnection;
  privacySettings: Array<PrivacySettings>;
  privacySettingsAggregate: PrivacySettingsAggregateSelection;
  privacySettingsConnection: PrivacySettingsConnection;
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


export type QueryMessagesArgs = {
  options?: InputMaybe<MessageOptions>;
  where?: InputMaybe<MessageWhere>;
};


export type QueryMessagesAggregateArgs = {
  where?: InputMaybe<MessageWhere>;
};


export type QueryMessagesConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<MessageSort>>>;
  where?: InputMaybe<MessageWhere>;
};


export type QueryNotificationsArgs = {
  options?: InputMaybe<NotificationOptions>;
  where?: InputMaybe<NotificationWhere>;
};


export type QueryNotificationsAggregateArgs = {
  where?: InputMaybe<NotificationWhere>;
};


export type QueryNotificationsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<NotificationSort>>>;
  where?: InputMaybe<NotificationWhere>;
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


export type QueryPrivacySettingsArgs = {
  options?: InputMaybe<PrivacySettingsOptions>;
  where?: InputMaybe<PrivacySettingsWhere>;
};


export type QueryPrivacySettingsAggregateArgs = {
  where?: InputMaybe<PrivacySettingsWhere>;
};


export type QueryPrivacySettingsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<PrivacySettingsSort>>>;
  where?: InputMaybe<PrivacySettingsWhere>;
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

/**
 * The edge properties for the following fields:
 * * User.relations
 * * User.relationWith
 */
export type Relation = {
  __typename?: 'Relation';
  type: RelationType;
};

export type RelationCreateInput = {
  type?: RelationType;
};

export type RelationSort = {
  type?: InputMaybe<SortDirection>;
};

export type RelationSubscriptionWhere = {
  AND?: InputMaybe<Array<RelationSubscriptionWhere>>;
  NOT?: InputMaybe<RelationSubscriptionWhere>;
  OR?: InputMaybe<Array<RelationSubscriptionWhere>>;
  type?: InputMaybe<RelationType>;
  type_IN?: InputMaybe<Array<RelationType>>;
};

export enum RelationType {
  BestFriend = 'BEST_FRIEND',
  CloseFriend = 'CLOSE_FRIEND',
  Friend = 'FRIEND',
  None = 'NONE',
  Public = 'PUBLIC'
}

export type RelationUpdateInput = {
  type?: InputMaybe<RelationType>;
};

export type RelationWhere = {
  AND?: InputMaybe<Array<RelationWhere>>;
  NOT?: InputMaybe<RelationWhere>;
  OR?: InputMaybe<Array<RelationWhere>>;
  type?: InputMaybe<RelationType>;
  type_IN?: InputMaybe<Array<RelationType>>;
};

/** An enum for sorting in either ascending or descending order. */
export enum SortDirection {
  /** Sort by field values in ascending order. */
  Asc = 'ASC',
  /** Sort by field values in descending order. */
  Desc = 'DESC'
}

export type StringAggregateSelection = {
  __typename?: 'StringAggregateSelection';
  longest?: Maybe<Scalars['String']['output']>;
  shortest?: Maybe<Scalars['String']['output']>;
};

export type Subscription = {
  __typename?: 'Subscription';
  commentCreated: CommentCreatedEvent;
  commentDeleted: CommentDeletedEvent;
  commentRelationshipCreated: CommentRelationshipCreatedEvent;
  commentRelationshipDeleted: CommentRelationshipDeletedEvent;
  commentUpdated: CommentUpdatedEvent;
  messageCreated: MessageCreatedEvent;
  messageDeleted: MessageDeletedEvent;
  messageRelationshipCreated: MessageRelationshipCreatedEvent;
  messageRelationshipDeleted: MessageRelationshipDeletedEvent;
  messageUpdated: MessageUpdatedEvent;
  notificationCreated: NotificationCreatedEvent;
  notificationDeleted: NotificationDeletedEvent;
  notificationRelationshipCreated: NotificationRelationshipCreatedEvent;
  notificationRelationshipDeleted: NotificationRelationshipDeletedEvent;
  notificationUpdated: NotificationUpdatedEvent;
  postCreated: PostCreatedEvent;
  postDeleted: PostDeletedEvent;
  postRelationshipCreated: PostRelationshipCreatedEvent;
  postRelationshipDeleted: PostRelationshipDeletedEvent;
  postUpdated: PostUpdatedEvent;
  privacySettingsCreated: PrivacySettingsCreatedEvent;
  privacySettingsDeleted: PrivacySettingsDeletedEvent;
  privacySettingsUpdated: PrivacySettingsUpdatedEvent;
  userCreated: UserCreatedEvent;
  userDeleted: UserDeletedEvent;
  userRelationshipCreated: UserRelationshipCreatedEvent;
  userRelationshipDeleted: UserRelationshipDeletedEvent;
  userUpdated: UserUpdatedEvent;
};


export type SubscriptionCommentCreatedArgs = {
  where?: InputMaybe<CommentSubscriptionWhere>;
};


export type SubscriptionCommentDeletedArgs = {
  where?: InputMaybe<CommentSubscriptionWhere>;
};


export type SubscriptionCommentRelationshipCreatedArgs = {
  where?: InputMaybe<CommentRelationshipCreatedSubscriptionWhere>;
};


export type SubscriptionCommentRelationshipDeletedArgs = {
  where?: InputMaybe<CommentRelationshipDeletedSubscriptionWhere>;
};


export type SubscriptionCommentUpdatedArgs = {
  where?: InputMaybe<CommentSubscriptionWhere>;
};


export type SubscriptionMessageCreatedArgs = {
  where?: InputMaybe<MessageSubscriptionWhere>;
};


export type SubscriptionMessageDeletedArgs = {
  where?: InputMaybe<MessageSubscriptionWhere>;
};


export type SubscriptionMessageRelationshipCreatedArgs = {
  where?: InputMaybe<MessageRelationshipCreatedSubscriptionWhere>;
};


export type SubscriptionMessageRelationshipDeletedArgs = {
  where?: InputMaybe<MessageRelationshipDeletedSubscriptionWhere>;
};


export type SubscriptionMessageUpdatedArgs = {
  where?: InputMaybe<MessageSubscriptionWhere>;
};


export type SubscriptionNotificationCreatedArgs = {
  where?: InputMaybe<NotificationSubscriptionWhere>;
};


export type SubscriptionNotificationDeletedArgs = {
  where?: InputMaybe<NotificationSubscriptionWhere>;
};


export type SubscriptionNotificationRelationshipCreatedArgs = {
  where?: InputMaybe<NotificationRelationshipCreatedSubscriptionWhere>;
};


export type SubscriptionNotificationRelationshipDeletedArgs = {
  where?: InputMaybe<NotificationRelationshipDeletedSubscriptionWhere>;
};


export type SubscriptionNotificationUpdatedArgs = {
  where?: InputMaybe<NotificationSubscriptionWhere>;
};


export type SubscriptionPostCreatedArgs = {
  where?: InputMaybe<PostSubscriptionWhere>;
};


export type SubscriptionPostDeletedArgs = {
  where?: InputMaybe<PostSubscriptionWhere>;
};


export type SubscriptionPostRelationshipCreatedArgs = {
  where?: InputMaybe<PostRelationshipCreatedSubscriptionWhere>;
};


export type SubscriptionPostRelationshipDeletedArgs = {
  where?: InputMaybe<PostRelationshipDeletedSubscriptionWhere>;
};


export type SubscriptionPostUpdatedArgs = {
  where?: InputMaybe<PostSubscriptionWhere>;
};


export type SubscriptionPrivacySettingsCreatedArgs = {
  where?: InputMaybe<PrivacySettingsSubscriptionWhere>;
};


export type SubscriptionPrivacySettingsDeletedArgs = {
  where?: InputMaybe<PrivacySettingsSubscriptionWhere>;
};


export type SubscriptionPrivacySettingsUpdatedArgs = {
  where?: InputMaybe<PrivacySettingsSubscriptionWhere>;
};


export type SubscriptionUserCreatedArgs = {
  where?: InputMaybe<UserSubscriptionWhere>;
};


export type SubscriptionUserDeletedArgs = {
  where?: InputMaybe<UserSubscriptionWhere>;
};


export type SubscriptionUserRelationshipCreatedArgs = {
  where?: InputMaybe<UserRelationshipCreatedSubscriptionWhere>;
};


export type SubscriptionUserRelationshipDeletedArgs = {
  where?: InputMaybe<UserRelationshipDeletedSubscriptionWhere>;
};


export type SubscriptionUserUpdatedArgs = {
  where?: InputMaybe<UserSubscriptionWhere>;
};

export type UpdateCommentsMutationResponse = {
  __typename?: 'UpdateCommentsMutationResponse';
  comments: Array<Comment>;
  info: UpdateInfo;
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

export type UpdateMessagesMutationResponse = {
  __typename?: 'UpdateMessagesMutationResponse';
  info: UpdateInfo;
  messages: Array<Message>;
};

export type UpdateNotificationsMutationResponse = {
  __typename?: 'UpdateNotificationsMutationResponse';
  info: UpdateInfo;
  notifications: Array<Notification>;
};

export type UpdatePostsMutationResponse = {
  __typename?: 'UpdatePostsMutationResponse';
  info: UpdateInfo;
  posts: Array<Post>;
};

export type UpdatePrivacySettingsMutationResponse = {
  __typename?: 'UpdatePrivacySettingsMutationResponse';
  info: UpdateInfo;
  privacySettings: Array<PrivacySettings>;
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
  blackList: Array<Maybe<Scalars['String']['output']>>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  dob?: Maybe<Scalars['Date']['output']>;
  email: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  likedComments: Array<Comment>;
  likedCommentsAggregate?: Maybe<UserCommentLikedCommentsAggregationSelection>;
  likedCommentsConnection: UserLikedCommentsConnection;
  likedPosts: Array<Post>;
  likedPostsAggregate?: Maybe<UserPostLikedPostsAggregationSelection>;
  likedPostsConnection: UserLikedPostsConnection;
  name: Scalars['String']['output'];
  notifications: Array<Notification>;
  notificationsAggregate?: Maybe<UserNotificationNotificationsAggregationSelection>;
  notificationsConnection: UserNotificationsConnection;
  posts: Array<Post>;
  postsAggregate?: Maybe<UserPostPostsAggregationSelection>;
  postsConnection: UserPostsConnection;
  profileUrl?: Maybe<Scalars['String']['output']>;
  relationWith: Array<User>;
  relationWithAggregate?: Maybe<UserUserRelationWithAggregationSelection>;
  relationWithConnection: UserRelationWithConnection;
  relations: Array<User>;
  relationsAggregate?: Maybe<UserUserRelationsAggregationSelection>;
  relationsConnection: UserRelationsConnection;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  username: Scalars['ID']['output'];
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


export type UserLikedCommentsArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<CommentOptions>;
  where?: InputMaybe<CommentWhere>;
};


export type UserLikedCommentsAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<CommentWhere>;
};


export type UserLikedCommentsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<UserLikedCommentsConnectionSort>>;
  where?: InputMaybe<UserLikedCommentsConnectionWhere>;
};


export type UserLikedPostsArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<PostOptions>;
  where?: InputMaybe<PostWhere>;
};


export type UserLikedPostsAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<PostWhere>;
};


export type UserLikedPostsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<UserLikedPostsConnectionSort>>;
  where?: InputMaybe<UserLikedPostsConnectionWhere>;
};


export type UserNotificationsArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<NotificationOptions>;
  where?: InputMaybe<NotificationWhere>;
};


export type UserNotificationsAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<NotificationWhere>;
};


export type UserNotificationsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<UserNotificationsConnectionSort>>;
  where?: InputMaybe<UserNotificationsConnectionWhere>;
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


export type UserRelationWithArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<UserOptions>;
  where?: InputMaybe<UserWhere>;
};


export type UserRelationWithAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<UserWhere>;
};


export type UserRelationWithConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<UserRelationWithConnectionSort>>;
  where?: InputMaybe<UserRelationWithConnectionWhere>;
};


export type UserRelationsArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<UserOptions>;
  where?: InputMaybe<UserWhere>;
};


export type UserRelationsAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<UserWhere>;
};


export type UserRelationsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<UserRelationsConnectionSort>>;
  where?: InputMaybe<UserRelationsConnectionWhere>;
};

export type UserAggregateSelection = {
  __typename?: 'UserAggregateSelection';
  count: Scalars['Int']['output'];
  createdAt: DateTimeAggregateSelection;
  email: StringAggregateSelection;
  id: IdAggregateSelection;
  name: StringAggregateSelection;
  profileUrl: StringAggregateSelection;
  updatedAt: DateTimeAggregateSelection;
  username: IdAggregateSelection;
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
  connect?: InputMaybe<Array<CommentConnectInput>>;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars['Boolean']['input'];
  where?: InputMaybe<CommentConnectWhere>;
};

export type UserAuthorOfCommentsConnectedRelationship = {
  __typename?: 'UserAuthorOfCommentsConnectedRelationship';
  node: CommentEventPayload;
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
  createdAt_MAX_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_GT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_LT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_GT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_LT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  indent_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  indent_AVERAGE_GT?: InputMaybe<Scalars['Float']['input']>;
  indent_AVERAGE_GTE?: InputMaybe<Scalars['Float']['input']>;
  indent_AVERAGE_LT?: InputMaybe<Scalars['Float']['input']>;
  indent_AVERAGE_LTE?: InputMaybe<Scalars['Float']['input']>;
  indent_MAX_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  indent_MAX_GT?: InputMaybe<Scalars['Int']['input']>;
  indent_MAX_GTE?: InputMaybe<Scalars['Int']['input']>;
  indent_MAX_LT?: InputMaybe<Scalars['Int']['input']>;
  indent_MAX_LTE?: InputMaybe<Scalars['Int']['input']>;
  indent_MIN_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  indent_MIN_GT?: InputMaybe<Scalars['Int']['input']>;
  indent_MIN_GTE?: InputMaybe<Scalars['Int']['input']>;
  indent_MIN_LT?: InputMaybe<Scalars['Int']['input']>;
  indent_MIN_LTE?: InputMaybe<Scalars['Int']['input']>;
  indent_SUM_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  indent_SUM_GT?: InputMaybe<Scalars['Int']['input']>;
  indent_SUM_GTE?: InputMaybe<Scalars['Int']['input']>;
  indent_SUM_LT?: InputMaybe<Scalars['Int']['input']>;
  indent_SUM_LTE?: InputMaybe<Scalars['Int']['input']>;
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
  updatedAt_MAX_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_GT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_LT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_GT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_LT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_LTE?: InputMaybe<Scalars['DateTime']['input']>;
};

export type UserAuthorOfCommentsRelationship = {
  __typename?: 'UserAuthorOfCommentsRelationship';
  cursor: Scalars['String']['output'];
  node: Comment;
};

export type UserAuthorOfCommentsRelationshipSubscriptionWhere = {
  node?: InputMaybe<CommentSubscriptionWhere>;
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
  createdAt: DateTimeAggregateSelection;
  id: IdAggregateSelection;
  indent: IntAggregateSelection;
  text: StringAggregateSelection;
  updatedAt: DateTimeAggregateSelection;
};

export type UserCommentLikedCommentsAggregationSelection = {
  __typename?: 'UserCommentLikedCommentsAggregationSelection';
  count: Scalars['Int']['output'];
  node?: Maybe<UserCommentLikedCommentsNodeAggregateSelection>;
};

export type UserCommentLikedCommentsNodeAggregateSelection = {
  __typename?: 'UserCommentLikedCommentsNodeAggregateSelection';
  createdAt: DateTimeAggregateSelection;
  id: IdAggregateSelection;
  indent: IntAggregateSelection;
  text: StringAggregateSelection;
  updatedAt: DateTimeAggregateSelection;
};

export type UserConnectInput = {
  authorOfComments?: InputMaybe<Array<UserAuthorOfCommentsConnectFieldInput>>;
  likedComments?: InputMaybe<Array<UserLikedCommentsConnectFieldInput>>;
  likedPosts?: InputMaybe<Array<UserLikedPostsConnectFieldInput>>;
  notifications?: InputMaybe<Array<UserNotificationsConnectFieldInput>>;
  posts?: InputMaybe<Array<UserPostsConnectFieldInput>>;
  relationWith?: InputMaybe<Array<UserRelationWithConnectFieldInput>>;
  relations?: InputMaybe<Array<UserRelationsConnectFieldInput>>;
};

export type UserConnectOrCreateInput = {
  relationWith?: InputMaybe<Array<UserRelationWithConnectOrCreateFieldInput>>;
  relations?: InputMaybe<Array<UserRelationsConnectOrCreateFieldInput>>;
};

export type UserConnectOrCreateWhere = {
  node: UserUniqueWhere;
};

export type UserConnectWhere = {
  node: UserWhere;
};

export type UserConnectedRelationships = {
  __typename?: 'UserConnectedRelationships';
  authorOfComments?: Maybe<UserAuthorOfCommentsConnectedRelationship>;
  likedComments?: Maybe<UserLikedCommentsConnectedRelationship>;
  likedPosts?: Maybe<UserLikedPostsConnectedRelationship>;
  notifications?: Maybe<UserNotificationsConnectedRelationship>;
  posts?: Maybe<UserPostsConnectedRelationship>;
  relationWith?: Maybe<UserRelationWithConnectedRelationship>;
  relations?: Maybe<UserRelationsConnectedRelationship>;
};

export type UserCreateInput = {
  authorOfComments?: InputMaybe<UserAuthorOfCommentsFieldInput>;
  blackList: Array<InputMaybe<Scalars['String']['input']>>;
  dob?: InputMaybe<Scalars['Date']['input']>;
  email: Scalars['String']['input'];
  likedComments?: InputMaybe<UserLikedCommentsFieldInput>;
  likedPosts?: InputMaybe<UserLikedPostsFieldInput>;
  name: Scalars['String']['input'];
  notifications?: InputMaybe<UserNotificationsFieldInput>;
  posts?: InputMaybe<UserPostsFieldInput>;
  profileUrl?: InputMaybe<Scalars['String']['input']>;
  relationWith?: InputMaybe<UserRelationWithFieldInput>;
  relations?: InputMaybe<UserRelationsFieldInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  username: Scalars['ID']['input'];
};

export type UserCreatedEvent = {
  __typename?: 'UserCreatedEvent';
  createdUser: UserEventPayload;
  event: EventType;
  timestamp: Scalars['Float']['output'];
};

export type UserDeleteInput = {
  authorOfComments?: InputMaybe<Array<UserAuthorOfCommentsDeleteFieldInput>>;
  likedComments?: InputMaybe<Array<UserLikedCommentsDeleteFieldInput>>;
  likedPosts?: InputMaybe<Array<UserLikedPostsDeleteFieldInput>>;
  notifications?: InputMaybe<Array<UserNotificationsDeleteFieldInput>>;
  posts?: InputMaybe<Array<UserPostsDeleteFieldInput>>;
  relationWith?: InputMaybe<Array<UserRelationWithDeleteFieldInput>>;
  relations?: InputMaybe<Array<UserRelationsDeleteFieldInput>>;
};

export type UserDeletedEvent = {
  __typename?: 'UserDeletedEvent';
  deletedUser: UserEventPayload;
  event: EventType;
  timestamp: Scalars['Float']['output'];
};

export type UserDisconnectInput = {
  authorOfComments?: InputMaybe<Array<UserAuthorOfCommentsDisconnectFieldInput>>;
  likedComments?: InputMaybe<Array<UserLikedCommentsDisconnectFieldInput>>;
  likedPosts?: InputMaybe<Array<UserLikedPostsDisconnectFieldInput>>;
  notifications?: InputMaybe<Array<UserNotificationsDisconnectFieldInput>>;
  posts?: InputMaybe<Array<UserPostsDisconnectFieldInput>>;
  relationWith?: InputMaybe<Array<UserRelationWithDisconnectFieldInput>>;
  relations?: InputMaybe<Array<UserRelationsDisconnectFieldInput>>;
};

export type UserEdge = {
  __typename?: 'UserEdge';
  cursor: Scalars['String']['output'];
  node: User;
};

export type UserEventPayload = {
  __typename?: 'UserEventPayload';
  blackList: Array<Maybe<Scalars['String']['output']>>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  dob?: Maybe<Scalars['Date']['output']>;
  email: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  profileUrl?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  username: Scalars['ID']['output'];
};

export type UserLikedCommentsAggregateInput = {
  AND?: InputMaybe<Array<UserLikedCommentsAggregateInput>>;
  NOT?: InputMaybe<UserLikedCommentsAggregateInput>;
  OR?: InputMaybe<Array<UserLikedCommentsAggregateInput>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  node?: InputMaybe<UserLikedCommentsNodeAggregationWhereInput>;
};

export type UserLikedCommentsConnectFieldInput = {
  connect?: InputMaybe<Array<CommentConnectInput>>;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars['Boolean']['input'];
  where?: InputMaybe<CommentConnectWhere>;
};

export type UserLikedCommentsConnectedRelationship = {
  __typename?: 'UserLikedCommentsConnectedRelationship';
  node: CommentEventPayload;
};

export type UserLikedCommentsConnection = {
  __typename?: 'UserLikedCommentsConnection';
  edges: Array<UserLikedCommentsRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type UserLikedCommentsConnectionSort = {
  node?: InputMaybe<CommentSort>;
};

export type UserLikedCommentsConnectionWhere = {
  AND?: InputMaybe<Array<UserLikedCommentsConnectionWhere>>;
  NOT?: InputMaybe<UserLikedCommentsConnectionWhere>;
  OR?: InputMaybe<Array<UserLikedCommentsConnectionWhere>>;
  node?: InputMaybe<CommentWhere>;
};

export type UserLikedCommentsCreateFieldInput = {
  node: CommentCreateInput;
};

export type UserLikedCommentsDeleteFieldInput = {
  delete?: InputMaybe<CommentDeleteInput>;
  where?: InputMaybe<UserLikedCommentsConnectionWhere>;
};

export type UserLikedCommentsDisconnectFieldInput = {
  disconnect?: InputMaybe<CommentDisconnectInput>;
  where?: InputMaybe<UserLikedCommentsConnectionWhere>;
};

export type UserLikedCommentsFieldInput = {
  connect?: InputMaybe<Array<UserLikedCommentsConnectFieldInput>>;
  create?: InputMaybe<Array<UserLikedCommentsCreateFieldInput>>;
};

export type UserLikedCommentsNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<UserLikedCommentsNodeAggregationWhereInput>>;
  NOT?: InputMaybe<UserLikedCommentsNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<UserLikedCommentsNodeAggregationWhereInput>>;
  createdAt_MAX_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_GT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_LT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_GT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_LT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  indent_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  indent_AVERAGE_GT?: InputMaybe<Scalars['Float']['input']>;
  indent_AVERAGE_GTE?: InputMaybe<Scalars['Float']['input']>;
  indent_AVERAGE_LT?: InputMaybe<Scalars['Float']['input']>;
  indent_AVERAGE_LTE?: InputMaybe<Scalars['Float']['input']>;
  indent_MAX_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  indent_MAX_GT?: InputMaybe<Scalars['Int']['input']>;
  indent_MAX_GTE?: InputMaybe<Scalars['Int']['input']>;
  indent_MAX_LT?: InputMaybe<Scalars['Int']['input']>;
  indent_MAX_LTE?: InputMaybe<Scalars['Int']['input']>;
  indent_MIN_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  indent_MIN_GT?: InputMaybe<Scalars['Int']['input']>;
  indent_MIN_GTE?: InputMaybe<Scalars['Int']['input']>;
  indent_MIN_LT?: InputMaybe<Scalars['Int']['input']>;
  indent_MIN_LTE?: InputMaybe<Scalars['Int']['input']>;
  indent_SUM_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  indent_SUM_GT?: InputMaybe<Scalars['Int']['input']>;
  indent_SUM_GTE?: InputMaybe<Scalars['Int']['input']>;
  indent_SUM_LT?: InputMaybe<Scalars['Int']['input']>;
  indent_SUM_LTE?: InputMaybe<Scalars['Int']['input']>;
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
  updatedAt_MAX_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_GT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_LT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_GT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_LT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_LTE?: InputMaybe<Scalars['DateTime']['input']>;
};

export type UserLikedCommentsRelationship = {
  __typename?: 'UserLikedCommentsRelationship';
  cursor: Scalars['String']['output'];
  node: Comment;
};

export type UserLikedCommentsRelationshipSubscriptionWhere = {
  node?: InputMaybe<CommentSubscriptionWhere>;
};

export type UserLikedCommentsUpdateConnectionInput = {
  node?: InputMaybe<CommentUpdateInput>;
};

export type UserLikedCommentsUpdateFieldInput = {
  connect?: InputMaybe<Array<UserLikedCommentsConnectFieldInput>>;
  create?: InputMaybe<Array<UserLikedCommentsCreateFieldInput>>;
  delete?: InputMaybe<Array<UserLikedCommentsDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<UserLikedCommentsDisconnectFieldInput>>;
  update?: InputMaybe<UserLikedCommentsUpdateConnectionInput>;
  where?: InputMaybe<UserLikedCommentsConnectionWhere>;
};

export type UserLikedPostsAggregateInput = {
  AND?: InputMaybe<Array<UserLikedPostsAggregateInput>>;
  NOT?: InputMaybe<UserLikedPostsAggregateInput>;
  OR?: InputMaybe<Array<UserLikedPostsAggregateInput>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  node?: InputMaybe<UserLikedPostsNodeAggregationWhereInput>;
};

export type UserLikedPostsConnectFieldInput = {
  connect?: InputMaybe<Array<PostConnectInput>>;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars['Boolean']['input'];
  where?: InputMaybe<PostConnectWhere>;
};

export type UserLikedPostsConnectedRelationship = {
  __typename?: 'UserLikedPostsConnectedRelationship';
  node: PostEventPayload;
};

export type UserLikedPostsConnection = {
  __typename?: 'UserLikedPostsConnection';
  edges: Array<UserLikedPostsRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type UserLikedPostsConnectionSort = {
  node?: InputMaybe<PostSort>;
};

export type UserLikedPostsConnectionWhere = {
  AND?: InputMaybe<Array<UserLikedPostsConnectionWhere>>;
  NOT?: InputMaybe<UserLikedPostsConnectionWhere>;
  OR?: InputMaybe<Array<UserLikedPostsConnectionWhere>>;
  node?: InputMaybe<PostWhere>;
};

export type UserLikedPostsCreateFieldInput = {
  node: PostCreateInput;
};

export type UserLikedPostsDeleteFieldInput = {
  delete?: InputMaybe<PostDeleteInput>;
  where?: InputMaybe<UserLikedPostsConnectionWhere>;
};

export type UserLikedPostsDisconnectFieldInput = {
  disconnect?: InputMaybe<PostDisconnectInput>;
  where?: InputMaybe<UserLikedPostsConnectionWhere>;
};

export type UserLikedPostsFieldInput = {
  connect?: InputMaybe<Array<UserLikedPostsConnectFieldInput>>;
  create?: InputMaybe<Array<UserLikedPostsCreateFieldInput>>;
};

export type UserLikedPostsNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<UserLikedPostsNodeAggregationWhereInput>>;
  NOT?: InputMaybe<UserLikedPostsNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<UserLikedPostsNodeAggregationWhereInput>>;
  createdAt_MAX_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_GT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_LT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_GT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_LT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_LTE?: InputMaybe<Scalars['DateTime']['input']>;
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
  updatedAt_MAX_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_GT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_LT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_GT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_LT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_LTE?: InputMaybe<Scalars['DateTime']['input']>;
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

export type UserLikedPostsRelationship = {
  __typename?: 'UserLikedPostsRelationship';
  cursor: Scalars['String']['output'];
  node: Post;
};

export type UserLikedPostsRelationshipSubscriptionWhere = {
  node?: InputMaybe<PostSubscriptionWhere>;
};

export type UserLikedPostsUpdateConnectionInput = {
  node?: InputMaybe<PostUpdateInput>;
};

export type UserLikedPostsUpdateFieldInput = {
  connect?: InputMaybe<Array<UserLikedPostsConnectFieldInput>>;
  create?: InputMaybe<Array<UserLikedPostsCreateFieldInput>>;
  delete?: InputMaybe<Array<UserLikedPostsDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<UserLikedPostsDisconnectFieldInput>>;
  update?: InputMaybe<UserLikedPostsUpdateConnectionInput>;
  where?: InputMaybe<UserLikedPostsConnectionWhere>;
};

export type UserNotificationNotificationsAggregationSelection = {
  __typename?: 'UserNotificationNotificationsAggregationSelection';
  count: Scalars['Int']['output'];
  node?: Maybe<UserNotificationNotificationsNodeAggregateSelection>;
};

export type UserNotificationNotificationsNodeAggregateSelection = {
  __typename?: 'UserNotificationNotificationsNodeAggregateSelection';
  id: IdAggregateSelection;
  message: StringAggregateSelection;
  title: StringAggregateSelection;
};

export type UserNotificationsAggregateInput = {
  AND?: InputMaybe<Array<UserNotificationsAggregateInput>>;
  NOT?: InputMaybe<UserNotificationsAggregateInput>;
  OR?: InputMaybe<Array<UserNotificationsAggregateInput>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  node?: InputMaybe<UserNotificationsNodeAggregationWhereInput>;
};

export type UserNotificationsConnectFieldInput = {
  connect?: InputMaybe<Array<NotificationConnectInput>>;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars['Boolean']['input'];
  where?: InputMaybe<NotificationConnectWhere>;
};

export type UserNotificationsConnectedRelationship = {
  __typename?: 'UserNotificationsConnectedRelationship';
  node: NotificationEventPayload;
};

export type UserNotificationsConnection = {
  __typename?: 'UserNotificationsConnection';
  edges: Array<UserNotificationsRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type UserNotificationsConnectionSort = {
  node?: InputMaybe<NotificationSort>;
};

export type UserNotificationsConnectionWhere = {
  AND?: InputMaybe<Array<UserNotificationsConnectionWhere>>;
  NOT?: InputMaybe<UserNotificationsConnectionWhere>;
  OR?: InputMaybe<Array<UserNotificationsConnectionWhere>>;
  node?: InputMaybe<NotificationWhere>;
};

export type UserNotificationsCreateFieldInput = {
  node: NotificationCreateInput;
};

export type UserNotificationsDeleteFieldInput = {
  delete?: InputMaybe<NotificationDeleteInput>;
  where?: InputMaybe<UserNotificationsConnectionWhere>;
};

export type UserNotificationsDisconnectFieldInput = {
  disconnect?: InputMaybe<NotificationDisconnectInput>;
  where?: InputMaybe<UserNotificationsConnectionWhere>;
};

export type UserNotificationsFieldInput = {
  connect?: InputMaybe<Array<UserNotificationsConnectFieldInput>>;
  create?: InputMaybe<Array<UserNotificationsCreateFieldInput>>;
};

export type UserNotificationsNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<UserNotificationsNodeAggregationWhereInput>>;
  NOT?: InputMaybe<UserNotificationsNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<UserNotificationsNodeAggregationWhereInput>>;
  message_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  message_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  message_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  message_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  message_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  message_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  message_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  message_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  message_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  message_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  message_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  message_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  message_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  message_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  message_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  title_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  title_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  title_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  title_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  title_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  title_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  title_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  title_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  title_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  title_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  title_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  title_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  title_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  title_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  title_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
};

export type UserNotificationsRelationship = {
  __typename?: 'UserNotificationsRelationship';
  cursor: Scalars['String']['output'];
  node: Notification;
};

export type UserNotificationsRelationshipSubscriptionWhere = {
  node?: InputMaybe<NotificationSubscriptionWhere>;
};

export type UserNotificationsUpdateConnectionInput = {
  node?: InputMaybe<NotificationUpdateInput>;
};

export type UserNotificationsUpdateFieldInput = {
  connect?: InputMaybe<Array<UserNotificationsConnectFieldInput>>;
  create?: InputMaybe<Array<UserNotificationsCreateFieldInput>>;
  delete?: InputMaybe<Array<UserNotificationsDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<UserNotificationsDisconnectFieldInput>>;
  update?: InputMaybe<UserNotificationsUpdateConnectionInput>;
  where?: InputMaybe<UserNotificationsConnectionWhere>;
};

export type UserOnCreateInput = {
  blackList: Array<InputMaybe<Scalars['String']['input']>>;
  dob?: InputMaybe<Scalars['Date']['input']>;
  email: Scalars['String']['input'];
  name: Scalars['String']['input'];
  profileUrl?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  username: Scalars['ID']['input'];
};

export type UserOptions = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  /** Specify one or more UserSort objects to sort Users by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<UserSort>>;
};

export type UserPostLikedPostsAggregationSelection = {
  __typename?: 'UserPostLikedPostsAggregationSelection';
  count: Scalars['Int']['output'];
  node?: Maybe<UserPostLikedPostsNodeAggregateSelection>;
};

export type UserPostLikedPostsNodeAggregateSelection = {
  __typename?: 'UserPostLikedPostsNodeAggregateSelection';
  createdAt: DateTimeAggregateSelection;
  description: StringAggregateSelection;
  id: IdAggregateSelection;
  updatedAt: DateTimeAggregateSelection;
  url: StringAggregateSelection;
};

export type UserPostPostsAggregationSelection = {
  __typename?: 'UserPostPostsAggregationSelection';
  count: Scalars['Int']['output'];
  node?: Maybe<UserPostPostsNodeAggregateSelection>;
};

export type UserPostPostsNodeAggregateSelection = {
  __typename?: 'UserPostPostsNodeAggregateSelection';
  createdAt: DateTimeAggregateSelection;
  description: StringAggregateSelection;
  id: IdAggregateSelection;
  updatedAt: DateTimeAggregateSelection;
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

export type UserPostsConnectedRelationship = {
  __typename?: 'UserPostsConnectedRelationship';
  node: PostEventPayload;
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
  createdAt_MAX_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_GT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_LT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_GT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_LT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_LTE?: InputMaybe<Scalars['DateTime']['input']>;
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
  updatedAt_MAX_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_GT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_LT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_GT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_LT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_LTE?: InputMaybe<Scalars['DateTime']['input']>;
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

export type UserPostsRelationshipSubscriptionWhere = {
  node?: InputMaybe<PostSubscriptionWhere>;
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
  likedComments?: InputMaybe<Array<UserLikedCommentsCreateFieldInput>>;
  likedPosts?: InputMaybe<Array<UserLikedPostsCreateFieldInput>>;
  notifications?: InputMaybe<Array<UserNotificationsCreateFieldInput>>;
  posts?: InputMaybe<Array<UserPostsCreateFieldInput>>;
  relationWith?: InputMaybe<Array<UserRelationWithCreateFieldInput>>;
  relations?: InputMaybe<Array<UserRelationsCreateFieldInput>>;
};

export type UserRelationWithAggregateInput = {
  AND?: InputMaybe<Array<UserRelationWithAggregateInput>>;
  NOT?: InputMaybe<UserRelationWithAggregateInput>;
  OR?: InputMaybe<Array<UserRelationWithAggregateInput>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  node?: InputMaybe<UserRelationWithNodeAggregationWhereInput>;
};

export type UserRelationWithConnectFieldInput = {
  connect?: InputMaybe<Array<UserConnectInput>>;
  edge: RelationCreateInput;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars['Boolean']['input'];
  where?: InputMaybe<UserConnectWhere>;
};

export type UserRelationWithConnectOrCreateFieldInput = {
  onCreate: UserRelationWithConnectOrCreateFieldInputOnCreate;
  where: UserConnectOrCreateWhere;
};

export type UserRelationWithConnectOrCreateFieldInputOnCreate = {
  edge: RelationCreateInput;
  node: UserOnCreateInput;
};

export type UserRelationWithConnectedRelationship = {
  __typename?: 'UserRelationWithConnectedRelationship';
  node: UserEventPayload;
  type: RelationType;
};

export type UserRelationWithConnection = {
  __typename?: 'UserRelationWithConnection';
  edges: Array<UserRelationWithRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type UserRelationWithConnectionSort = {
  edge?: InputMaybe<RelationSort>;
  node?: InputMaybe<UserSort>;
};

export type UserRelationWithConnectionWhere = {
  AND?: InputMaybe<Array<UserRelationWithConnectionWhere>>;
  NOT?: InputMaybe<UserRelationWithConnectionWhere>;
  OR?: InputMaybe<Array<UserRelationWithConnectionWhere>>;
  edge?: InputMaybe<RelationWhere>;
  node?: InputMaybe<UserWhere>;
};

export type UserRelationWithCreateFieldInput = {
  edge: RelationCreateInput;
  node: UserCreateInput;
};

export type UserRelationWithDeleteFieldInput = {
  delete?: InputMaybe<UserDeleteInput>;
  where?: InputMaybe<UserRelationWithConnectionWhere>;
};

export type UserRelationWithDisconnectFieldInput = {
  disconnect?: InputMaybe<UserDisconnectInput>;
  where?: InputMaybe<UserRelationWithConnectionWhere>;
};

export type UserRelationWithFieldInput = {
  connect?: InputMaybe<Array<UserRelationWithConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<UserRelationWithConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<UserRelationWithCreateFieldInput>>;
};

export type UserRelationWithNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<UserRelationWithNodeAggregationWhereInput>>;
  NOT?: InputMaybe<UserRelationWithNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<UserRelationWithNodeAggregationWhereInput>>;
  createdAt_MAX_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_GT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_LT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_GT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_LT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_LTE?: InputMaybe<Scalars['DateTime']['input']>;
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
  profileUrl_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  profileUrl_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  profileUrl_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  profileUrl_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  profileUrl_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  profileUrl_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  profileUrl_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  profileUrl_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  profileUrl_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  profileUrl_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  profileUrl_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  profileUrl_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  profileUrl_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  profileUrl_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  profileUrl_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  updatedAt_MAX_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_GT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_LT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_GT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_LT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_LTE?: InputMaybe<Scalars['DateTime']['input']>;
};

export type UserRelationWithRelationship = {
  __typename?: 'UserRelationWithRelationship';
  cursor: Scalars['String']['output'];
  node: User;
  properties: Relation;
};

export type UserRelationWithRelationshipSubscriptionWhere = {
  edge?: InputMaybe<RelationSubscriptionWhere>;
  node?: InputMaybe<UserSubscriptionWhere>;
};

export type UserRelationWithUpdateConnectionInput = {
  edge?: InputMaybe<RelationUpdateInput>;
  node?: InputMaybe<UserUpdateInput>;
};

export type UserRelationWithUpdateFieldInput = {
  connect?: InputMaybe<Array<UserRelationWithConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<UserRelationWithConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<UserRelationWithCreateFieldInput>>;
  delete?: InputMaybe<Array<UserRelationWithDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<UserRelationWithDisconnectFieldInput>>;
  update?: InputMaybe<UserRelationWithUpdateConnectionInput>;
  where?: InputMaybe<UserRelationWithConnectionWhere>;
};

export type UserRelationsAggregateInput = {
  AND?: InputMaybe<Array<UserRelationsAggregateInput>>;
  NOT?: InputMaybe<UserRelationsAggregateInput>;
  OR?: InputMaybe<Array<UserRelationsAggregateInput>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  node?: InputMaybe<UserRelationsNodeAggregationWhereInput>;
};

export type UserRelationsConnectFieldInput = {
  connect?: InputMaybe<Array<UserConnectInput>>;
  edge: RelationCreateInput;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars['Boolean']['input'];
  where?: InputMaybe<UserConnectWhere>;
};

export type UserRelationsConnectOrCreateFieldInput = {
  onCreate: UserRelationsConnectOrCreateFieldInputOnCreate;
  where: UserConnectOrCreateWhere;
};

export type UserRelationsConnectOrCreateFieldInputOnCreate = {
  edge: RelationCreateInput;
  node: UserOnCreateInput;
};

export type UserRelationsConnectedRelationship = {
  __typename?: 'UserRelationsConnectedRelationship';
  node: UserEventPayload;
  type: RelationType;
};

export type UserRelationsConnection = {
  __typename?: 'UserRelationsConnection';
  edges: Array<UserRelationsRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type UserRelationsConnectionSort = {
  edge?: InputMaybe<RelationSort>;
  node?: InputMaybe<UserSort>;
};

export type UserRelationsConnectionWhere = {
  AND?: InputMaybe<Array<UserRelationsConnectionWhere>>;
  NOT?: InputMaybe<UserRelationsConnectionWhere>;
  OR?: InputMaybe<Array<UserRelationsConnectionWhere>>;
  edge?: InputMaybe<RelationWhere>;
  node?: InputMaybe<UserWhere>;
};

export type UserRelationsCreateFieldInput = {
  edge: RelationCreateInput;
  node: UserCreateInput;
};

export type UserRelationsDeleteFieldInput = {
  delete?: InputMaybe<UserDeleteInput>;
  where?: InputMaybe<UserRelationsConnectionWhere>;
};

export type UserRelationsDisconnectFieldInput = {
  disconnect?: InputMaybe<UserDisconnectInput>;
  where?: InputMaybe<UserRelationsConnectionWhere>;
};

export type UserRelationsFieldInput = {
  connect?: InputMaybe<Array<UserRelationsConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<UserRelationsConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<UserRelationsCreateFieldInput>>;
};

export type UserRelationsNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<UserRelationsNodeAggregationWhereInput>>;
  NOT?: InputMaybe<UserRelationsNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<UserRelationsNodeAggregationWhereInput>>;
  createdAt_MAX_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_GT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_LT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_GT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_LT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_LTE?: InputMaybe<Scalars['DateTime']['input']>;
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
  profileUrl_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  profileUrl_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  profileUrl_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  profileUrl_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  profileUrl_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  profileUrl_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  profileUrl_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  profileUrl_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  profileUrl_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  profileUrl_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  profileUrl_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  profileUrl_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  profileUrl_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  profileUrl_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  profileUrl_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  updatedAt_MAX_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_GT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_LT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_GT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_LT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_LTE?: InputMaybe<Scalars['DateTime']['input']>;
};

export type UserRelationsRelationship = {
  __typename?: 'UserRelationsRelationship';
  cursor: Scalars['String']['output'];
  node: User;
  properties: Relation;
};

export type UserRelationsRelationshipSubscriptionWhere = {
  edge?: InputMaybe<RelationSubscriptionWhere>;
  node?: InputMaybe<UserSubscriptionWhere>;
};

export type UserRelationsUpdateConnectionInput = {
  edge?: InputMaybe<RelationUpdateInput>;
  node?: InputMaybe<UserUpdateInput>;
};

export type UserRelationsUpdateFieldInput = {
  connect?: InputMaybe<Array<UserRelationsConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<UserRelationsConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<UserRelationsCreateFieldInput>>;
  delete?: InputMaybe<Array<UserRelationsDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<UserRelationsDisconnectFieldInput>>;
  update?: InputMaybe<UserRelationsUpdateConnectionInput>;
  where?: InputMaybe<UserRelationsConnectionWhere>;
};

export type UserRelationshipCreatedEvent = {
  __typename?: 'UserRelationshipCreatedEvent';
  createdRelationship: UserConnectedRelationships;
  event: EventType;
  relationshipFieldName: Scalars['String']['output'];
  timestamp: Scalars['Float']['output'];
  user: UserEventPayload;
};

export type UserRelationshipCreatedSubscriptionWhere = {
  AND?: InputMaybe<Array<UserRelationshipCreatedSubscriptionWhere>>;
  NOT?: InputMaybe<UserRelationshipCreatedSubscriptionWhere>;
  OR?: InputMaybe<Array<UserRelationshipCreatedSubscriptionWhere>>;
  createdRelationship?: InputMaybe<UserRelationshipsSubscriptionWhere>;
  user?: InputMaybe<UserSubscriptionWhere>;
};

export type UserRelationshipDeletedEvent = {
  __typename?: 'UserRelationshipDeletedEvent';
  deletedRelationship: UserConnectedRelationships;
  event: EventType;
  relationshipFieldName: Scalars['String']['output'];
  timestamp: Scalars['Float']['output'];
  user: UserEventPayload;
};

export type UserRelationshipDeletedSubscriptionWhere = {
  AND?: InputMaybe<Array<UserRelationshipDeletedSubscriptionWhere>>;
  NOT?: InputMaybe<UserRelationshipDeletedSubscriptionWhere>;
  OR?: InputMaybe<Array<UserRelationshipDeletedSubscriptionWhere>>;
  deletedRelationship?: InputMaybe<UserRelationshipsSubscriptionWhere>;
  user?: InputMaybe<UserSubscriptionWhere>;
};

export type UserRelationshipsSubscriptionWhere = {
  authorOfComments?: InputMaybe<UserAuthorOfCommentsRelationshipSubscriptionWhere>;
  likedComments?: InputMaybe<UserLikedCommentsRelationshipSubscriptionWhere>;
  likedPosts?: InputMaybe<UserLikedPostsRelationshipSubscriptionWhere>;
  notifications?: InputMaybe<UserNotificationsRelationshipSubscriptionWhere>;
  posts?: InputMaybe<UserPostsRelationshipSubscriptionWhere>;
  relationWith?: InputMaybe<UserRelationWithRelationshipSubscriptionWhere>;
  relations?: InputMaybe<UserRelationsRelationshipSubscriptionWhere>;
};

/** Fields to sort Users by. The order in which sorts are applied is not guaranteed when specifying many fields in one UserSort object. */
export type UserSort = {
  createdAt?: InputMaybe<SortDirection>;
  dob?: InputMaybe<SortDirection>;
  email?: InputMaybe<SortDirection>;
  id?: InputMaybe<SortDirection>;
  name?: InputMaybe<SortDirection>;
  profileUrl?: InputMaybe<SortDirection>;
  updatedAt?: InputMaybe<SortDirection>;
  username?: InputMaybe<SortDirection>;
};

export type UserSubscriptionWhere = {
  AND?: InputMaybe<Array<UserSubscriptionWhere>>;
  NOT?: InputMaybe<UserSubscriptionWhere>;
  OR?: InputMaybe<Array<UserSubscriptionWhere>>;
  blackList?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  blackList_INCLUDES?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_GT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_IN?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdAt_LT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  dob?: InputMaybe<Scalars['Date']['input']>;
  dob_GT?: InputMaybe<Scalars['Date']['input']>;
  dob_GTE?: InputMaybe<Scalars['Date']['input']>;
  dob_IN?: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>;
  dob_LT?: InputMaybe<Scalars['Date']['input']>;
  dob_LTE?: InputMaybe<Scalars['Date']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  email_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  email_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  email_IN?: InputMaybe<Array<Scalars['String']['input']>>;
  email_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_CONTAINS?: InputMaybe<Scalars['ID']['input']>;
  id_ENDS_WITH?: InputMaybe<Scalars['ID']['input']>;
  id_IN?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_STARTS_WITH?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  name_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  name_IN?: InputMaybe<Array<Scalars['String']['input']>>;
  name_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
  profileUrl?: InputMaybe<Scalars['String']['input']>;
  profileUrl_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  profileUrl_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  profileUrl_IN?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  profileUrl_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_GT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_IN?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedAt_LT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  username?: InputMaybe<Scalars['ID']['input']>;
  username_CONTAINS?: InputMaybe<Scalars['ID']['input']>;
  username_ENDS_WITH?: InputMaybe<Scalars['ID']['input']>;
  username_IN?: InputMaybe<Array<Scalars['ID']['input']>>;
  username_STARTS_WITH?: InputMaybe<Scalars['ID']['input']>;
};

export type UserUniqueWhere = {
  email?: InputMaybe<Scalars['String']['input']>;
  username?: InputMaybe<Scalars['ID']['input']>;
};

export type UserUpdateInput = {
  authorOfComments?: InputMaybe<Array<UserAuthorOfCommentsUpdateFieldInput>>;
  blackList?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  blackList_POP?: InputMaybe<Scalars['Int']['input']>;
  blackList_PUSH?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  dob?: InputMaybe<Scalars['Date']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  likedComments?: InputMaybe<Array<UserLikedCommentsUpdateFieldInput>>;
  likedPosts?: InputMaybe<Array<UserLikedPostsUpdateFieldInput>>;
  name?: InputMaybe<Scalars['String']['input']>;
  notifications?: InputMaybe<Array<UserNotificationsUpdateFieldInput>>;
  posts?: InputMaybe<Array<UserPostsUpdateFieldInput>>;
  profileUrl?: InputMaybe<Scalars['String']['input']>;
  relationWith?: InputMaybe<Array<UserRelationWithUpdateFieldInput>>;
  relations?: InputMaybe<Array<UserRelationsUpdateFieldInput>>;
  username?: InputMaybe<Scalars['ID']['input']>;
};

export type UserUpdatedEvent = {
  __typename?: 'UserUpdatedEvent';
  event: EventType;
  previousState: UserEventPayload;
  timestamp: Scalars['Float']['output'];
  updatedUser: UserEventPayload;
};

export type UserUserRelationWithAggregationSelection = {
  __typename?: 'UserUserRelationWithAggregationSelection';
  count: Scalars['Int']['output'];
  node?: Maybe<UserUserRelationWithNodeAggregateSelection>;
};

export type UserUserRelationWithNodeAggregateSelection = {
  __typename?: 'UserUserRelationWithNodeAggregateSelection';
  createdAt: DateTimeAggregateSelection;
  email: StringAggregateSelection;
  id: IdAggregateSelection;
  name: StringAggregateSelection;
  profileUrl: StringAggregateSelection;
  updatedAt: DateTimeAggregateSelection;
  username: IdAggregateSelection;
};

export type UserUserRelationsAggregationSelection = {
  __typename?: 'UserUserRelationsAggregationSelection';
  count: Scalars['Int']['output'];
  node?: Maybe<UserUserRelationsNodeAggregateSelection>;
};

export type UserUserRelationsNodeAggregateSelection = {
  __typename?: 'UserUserRelationsNodeAggregateSelection';
  createdAt: DateTimeAggregateSelection;
  email: StringAggregateSelection;
  id: IdAggregateSelection;
  name: StringAggregateSelection;
  profileUrl: StringAggregateSelection;
  updatedAt: DateTimeAggregateSelection;
  username: IdAggregateSelection;
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
  blackList?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  blackList_INCLUDES?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_GT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_IN?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdAt_LT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  dob?: InputMaybe<Scalars['Date']['input']>;
  dob_GT?: InputMaybe<Scalars['Date']['input']>;
  dob_GTE?: InputMaybe<Scalars['Date']['input']>;
  dob_IN?: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>;
  dob_LT?: InputMaybe<Scalars['Date']['input']>;
  dob_LTE?: InputMaybe<Scalars['Date']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  email_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  email_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  email_IN?: InputMaybe<Array<Scalars['String']['input']>>;
  email_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_CONTAINS?: InputMaybe<Scalars['ID']['input']>;
  id_ENDS_WITH?: InputMaybe<Scalars['ID']['input']>;
  id_IN?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_STARTS_WITH?: InputMaybe<Scalars['ID']['input']>;
  likedCommentsAggregate?: InputMaybe<UserLikedCommentsAggregateInput>;
  /** Return Users where all of the related UserLikedCommentsConnections match this filter */
  likedCommentsConnection_ALL?: InputMaybe<UserLikedCommentsConnectionWhere>;
  /** Return Users where none of the related UserLikedCommentsConnections match this filter */
  likedCommentsConnection_NONE?: InputMaybe<UserLikedCommentsConnectionWhere>;
  /** Return Users where one of the related UserLikedCommentsConnections match this filter */
  likedCommentsConnection_SINGLE?: InputMaybe<UserLikedCommentsConnectionWhere>;
  /** Return Users where some of the related UserLikedCommentsConnections match this filter */
  likedCommentsConnection_SOME?: InputMaybe<UserLikedCommentsConnectionWhere>;
  /** Return Users where all of the related Comments match this filter */
  likedComments_ALL?: InputMaybe<CommentWhere>;
  /** Return Users where none of the related Comments match this filter */
  likedComments_NONE?: InputMaybe<CommentWhere>;
  /** Return Users where one of the related Comments match this filter */
  likedComments_SINGLE?: InputMaybe<CommentWhere>;
  /** Return Users where some of the related Comments match this filter */
  likedComments_SOME?: InputMaybe<CommentWhere>;
  likedPostsAggregate?: InputMaybe<UserLikedPostsAggregateInput>;
  /** Return Users where all of the related UserLikedPostsConnections match this filter */
  likedPostsConnection_ALL?: InputMaybe<UserLikedPostsConnectionWhere>;
  /** Return Users where none of the related UserLikedPostsConnections match this filter */
  likedPostsConnection_NONE?: InputMaybe<UserLikedPostsConnectionWhere>;
  /** Return Users where one of the related UserLikedPostsConnections match this filter */
  likedPostsConnection_SINGLE?: InputMaybe<UserLikedPostsConnectionWhere>;
  /** Return Users where some of the related UserLikedPostsConnections match this filter */
  likedPostsConnection_SOME?: InputMaybe<UserLikedPostsConnectionWhere>;
  /** Return Users where all of the related Posts match this filter */
  likedPosts_ALL?: InputMaybe<PostWhere>;
  /** Return Users where none of the related Posts match this filter */
  likedPosts_NONE?: InputMaybe<PostWhere>;
  /** Return Users where one of the related Posts match this filter */
  likedPosts_SINGLE?: InputMaybe<PostWhere>;
  /** Return Users where some of the related Posts match this filter */
  likedPosts_SOME?: InputMaybe<PostWhere>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  name_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  name_IN?: InputMaybe<Array<Scalars['String']['input']>>;
  name_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
  notificationsAggregate?: InputMaybe<UserNotificationsAggregateInput>;
  /** Return Users where all of the related UserNotificationsConnections match this filter */
  notificationsConnection_ALL?: InputMaybe<UserNotificationsConnectionWhere>;
  /** Return Users where none of the related UserNotificationsConnections match this filter */
  notificationsConnection_NONE?: InputMaybe<UserNotificationsConnectionWhere>;
  /** Return Users where one of the related UserNotificationsConnections match this filter */
  notificationsConnection_SINGLE?: InputMaybe<UserNotificationsConnectionWhere>;
  /** Return Users where some of the related UserNotificationsConnections match this filter */
  notificationsConnection_SOME?: InputMaybe<UserNotificationsConnectionWhere>;
  /** Return Users where all of the related Notifications match this filter */
  notifications_ALL?: InputMaybe<NotificationWhere>;
  /** Return Users where none of the related Notifications match this filter */
  notifications_NONE?: InputMaybe<NotificationWhere>;
  /** Return Users where one of the related Notifications match this filter */
  notifications_SINGLE?: InputMaybe<NotificationWhere>;
  /** Return Users where some of the related Notifications match this filter */
  notifications_SOME?: InputMaybe<NotificationWhere>;
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
  profileUrl?: InputMaybe<Scalars['String']['input']>;
  profileUrl_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  profileUrl_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  profileUrl_IN?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  profileUrl_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
  relationWithAggregate?: InputMaybe<UserRelationWithAggregateInput>;
  /** Return Users where all of the related UserRelationWithConnections match this filter */
  relationWithConnection_ALL?: InputMaybe<UserRelationWithConnectionWhere>;
  /** Return Users where none of the related UserRelationWithConnections match this filter */
  relationWithConnection_NONE?: InputMaybe<UserRelationWithConnectionWhere>;
  /** Return Users where one of the related UserRelationWithConnections match this filter */
  relationWithConnection_SINGLE?: InputMaybe<UserRelationWithConnectionWhere>;
  /** Return Users where some of the related UserRelationWithConnections match this filter */
  relationWithConnection_SOME?: InputMaybe<UserRelationWithConnectionWhere>;
  /** Return Users where all of the related Users match this filter */
  relationWith_ALL?: InputMaybe<UserWhere>;
  /** Return Users where none of the related Users match this filter */
  relationWith_NONE?: InputMaybe<UserWhere>;
  /** Return Users where one of the related Users match this filter */
  relationWith_SINGLE?: InputMaybe<UserWhere>;
  /** Return Users where some of the related Users match this filter */
  relationWith_SOME?: InputMaybe<UserWhere>;
  relationsAggregate?: InputMaybe<UserRelationsAggregateInput>;
  /** Return Users where all of the related UserRelationsConnections match this filter */
  relationsConnection_ALL?: InputMaybe<UserRelationsConnectionWhere>;
  /** Return Users where none of the related UserRelationsConnections match this filter */
  relationsConnection_NONE?: InputMaybe<UserRelationsConnectionWhere>;
  /** Return Users where one of the related UserRelationsConnections match this filter */
  relationsConnection_SINGLE?: InputMaybe<UserRelationsConnectionWhere>;
  /** Return Users where some of the related UserRelationsConnections match this filter */
  relationsConnection_SOME?: InputMaybe<UserRelationsConnectionWhere>;
  /** Return Users where all of the related Users match this filter */
  relations_ALL?: InputMaybe<UserWhere>;
  /** Return Users where none of the related Users match this filter */
  relations_NONE?: InputMaybe<UserWhere>;
  /** Return Users where one of the related Users match this filter */
  relations_SINGLE?: InputMaybe<UserWhere>;
  /** Return Users where some of the related Users match this filter */
  relations_SOME?: InputMaybe<UserWhere>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_GT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_IN?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedAt_LT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  username?: InputMaybe<Scalars['ID']['input']>;
  username_CONTAINS?: InputMaybe<Scalars['ID']['input']>;
  username_ENDS_WITH?: InputMaybe<Scalars['ID']['input']>;
  username_IN?: InputMaybe<Array<Scalars['ID']['input']>>;
  username_STARTS_WITH?: InputMaybe<Scalars['ID']['input']>;
};

export type UsersConnection = {
  __typename?: 'UsersConnection';
  edges: Array<UserEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type CreatePostsMutationVariables = Exact<{
  url: Scalars['String']['input'];
  description: Scalars['String']['input'];
  username: Scalars['ID']['input'];
  friend: Array<RelationType> | RelationType;
}>;


export type CreatePostsMutation = { __typename?: 'Mutation', createPosts: { __typename?: 'CreatePostsMutationResponse', posts: Array<{ __typename?: 'Post', id: string, url: string, description?: string | null, creatorOfPost: { __typename?: 'User', id: string, name: string, email: string, username: string, dob?: any | null } }> } };

export type Q1QueryVariables = Exact<{ [key: string]: never; }>;


export type Q1Query = { __typename?: 'Query', users: Array<{ __typename?: 'User', id: string, email: string, username: string }> };

export type Posts2QueryVariables = Exact<{ [key: string]: never; }>;


export type Posts2Query = { __typename?: 'Query', posts: Array<{ __typename?: 'Post', id: string, createdAt?: any | null }> };

export type SinglePostsQueryVariables = Exact<{
  pid: Scalars['ID']['input'];
}>;


export type SinglePostsQuery = { __typename?: 'Query', posts: Array<{ __typename?: 'Post', id: string, url: string, description?: string | null, visibility?: Array<RelationType> | null, creatorOfPost: { __typename?: 'User', id: string, name: string, email: string, username: string, dob?: any | null }, likes: Array<{ __typename?: 'User', id: string, name: string, email: string, username: string, dob?: any | null, createdAt?: any | null, updatedAt?: any | null }>, comments: Array<{ __typename?: 'Comment', id: string, text: string, author: { __typename?: 'User', id: string, name: string, email: string, username: string, dob?: any | null }, replies: Array<{ __typename?: 'Comment', id: string }> }> }> };

export type UnLikeQueryMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  username: Scalars['ID']['input'];
}>;


export type UnLikeQueryMutation = { __typename?: 'Mutation', updateUsers: { __typename?: 'UpdateUsersMutationResponse', users: Array<{ __typename?: 'User', likedPosts: Array<{ __typename?: 'Post', id: string, url: string, description?: string | null, visibility?: Array<RelationType> | null, createdAt?: any | null, updatedAt?: any | null, likes: Array<{ __typename?: 'User', id: string, name: string, email: string, username: string, dob?: any | null, createdAt?: any | null, updatedAt?: any | null }>, creatorOfPost: { __typename?: 'User', id: string, name: string, email: string, username: string, dob?: any | null, createdAt?: any | null, updatedAt?: any | null } }> }> } };

export type LikeQueryMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  username: Scalars['ID']['input'];
}>;


export type LikeQueryMutation = { __typename?: 'Mutation', updateUsers: { __typename?: 'UpdateUsersMutationResponse', users: Array<{ __typename?: 'User', likedPosts: Array<{ __typename?: 'Post', id: string, url: string, description?: string | null, visibility?: Array<RelationType> | null, createdAt?: any | null, updatedAt?: any | null, likes: Array<{ __typename?: 'User', id: string, name: string, email: string, username: string, dob?: any | null, createdAt?: any | null, updatedAt?: any | null }>, creatorOfPost: { __typename?: 'User', id: string, name: string, email: string, username: string, dob?: any | null, createdAt?: any | null, updatedAt?: any | null } }> }> } };

export type PostCommentsQueryVariables = Exact<{
  pid: Scalars['ID']['input'];
}>;


export type PostCommentsQuery = { __typename?: 'Query', comments: Array<{ __typename?: 'Comment', id: string }>, commentsConnection: { __typename?: 'CommentsConnection', totalCount: number }, posts: Array<{ __typename?: 'Post', id: string, url: string, description?: string | null, visibility?: Array<RelationType> | null, createdAt?: any | null, updatedAt?: any | null, creatorOfPost: { __typename?: 'User', id: string, name: string, email: string, username: string, dob?: any | null, createdAt?: any | null, updatedAt?: any | null } }> };

export type CreateCommentsMutationVariables = Exact<{
  comment: Scalars['String']['input'];
  indent: Scalars['Int']['input'];
  parentsOfComment: Array<Scalars['ID']['input']> | Scalars['ID']['input'];
  username: Scalars['ID']['input'];
  pid: Scalars['ID']['input'];
  cid?: InputMaybe<Scalars['ID']['input']>;
}>;


export type CreateCommentsMutation = { __typename?: 'Mutation', createComments: { __typename?: 'CreateCommentsMutationResponse', comments: Array<{ __typename?: 'Comment', id: string }> } };

export type CommentReplyQueryVariables = Exact<{
  cid: Scalars['ID']['input'];
}>;


export type CommentReplyQuery = { __typename?: 'Query', comments: Array<{ __typename?: 'Comment', id: string, text: string, indent: number, parentsOfComment: Array<string>, createdAt?: any | null, updatedAt?: any | null, likes: Array<{ __typename?: 'User', id: string, name: string, email: string, username: string, dob?: any | null, createdAt?: any | null, updatedAt?: any | null }>, author: { __typename?: 'User', id: string, name: string, email: string, username: string, dob?: any | null, createdAt?: any | null, updatedAt?: any | null }, replies: Array<{ __typename?: 'Comment', id: string }> }> };

export type LikeCommentMutationVariables = Exact<{
  username: Scalars['ID']['input'];
  cid: Scalars['ID']['input'];
}>;


export type LikeCommentMutation = { __typename?: 'Mutation', updateUsers: { __typename?: 'UpdateUsersMutationResponse', users: Array<{ __typename?: 'User', likedComments: Array<{ __typename?: 'Comment', id: string }> }> } };

export type UnLikeCommentMutationVariables = Exact<{
  username: Scalars['ID']['input'];
  cid: Scalars['ID']['input'];
}>;


export type UnLikeCommentMutation = { __typename?: 'Mutation', updateUsers: { __typename?: 'UpdateUsersMutationResponse', users: Array<{ __typename?: 'User', likedComments: Array<{ __typename?: 'Comment', id: string }> }> } };

export type DeleteCommentsMutationVariables = Exact<{
  cid: Scalars['ID']['input'];
}>;


export type DeleteCommentsMutation = { __typename?: 'Mutation', deleteComments: { __typename?: 'DeleteInfo', bookmark?: string | null, nodesDeleted: number, relationshipsDeleted: number } };

export type SingleComments2QueryVariables = Exact<{
  cid: Scalars['ID']['input'];
}>;


export type SingleComments2Query = { __typename?: 'Query', comments: Array<{ __typename?: 'Comment', id: string, text: string, indent: number, parentsOfComment: Array<string>, createdAt?: any | null, updatedAt?: any | null, likes: Array<{ __typename?: 'User', id: string, name: string, email: string, username: string, dob?: any | null, createdAt?: any | null, updatedAt?: any | null }>, author: { __typename?: 'User', id: string, name: string, email: string, username: string, dob?: any | null, createdAt?: any | null, updatedAt?: any | null }, replyOfComment?: { __typename?: 'Comment', id: string, text: string, indent: number, createdAt?: any | null, updatedAt?: any | null, author: { __typename?: 'User', id: string, name: string, email: string, username: string, dob?: any | null, createdAt?: any | null, updatedAt?: any | null } } | null }> };

export type CommentsQueryVariables = Exact<{
  cid: Scalars['ID']['input'];
}>;


export type CommentsQuery = { __typename?: 'Query', comments: Array<{ __typename?: 'Comment', id: string, text: string, indent: number, createdAt?: any | null, updatedAt?: any | null }> };

export type UsersQueryVariables = Exact<{
  username: Scalars['ID']['input'];
}>;


export type UsersQuery = { __typename?: 'Query', users: Array<{ __typename?: 'User', id: string, name: string, email: string, username: string, dob?: any | null, profileUrl?: string | null, createdAt?: any | null, updatedAt?: any | null, relations: Array<{ __typename?: 'User', id: string, name: string, email: string, username: string, dob?: any | null, profileUrl?: string | null, createdAt?: any | null, updatedAt?: any | null }>, relationWith: Array<{ __typename?: 'User', id: string, name: string, email: string, username: string, dob?: any | null, profileUrl?: string | null, createdAt?: any | null, updatedAt?: any | null }>, posts: Array<{ __typename?: 'Post', id: string, url: string, description?: string | null, visibility?: Array<RelationType> | null, createdAt?: any | null, updatedAt?: any | null }>, authorOfComments: Array<{ __typename?: 'Comment', id: string, text: string, indent: number, parentsOfComment: Array<string>, createdAt?: any | null, updatedAt?: any | null, commentOfPost: { __typename?: 'Post', id: string, url: string, description?: string | null, visibility?: Array<RelationType> | null, createdAt?: any | null, updatedAt?: any | null, creatorOfPost: { __typename?: 'User', name: string, username: string } } }> }> };

export type AddRelationMutationVariables = Exact<{
  cur: Scalars['ID']['input'];
  user: Scalars['ID']['input'];
  type: RelationType;
}>;


export type AddRelationMutation = { __typename?: 'Mutation', updateUsers: { __typename?: 'UpdateUsersMutationResponse', users: Array<{ __typename?: 'User', username: string, name: string, relations: Array<{ __typename?: 'User', username: string, name: string }> }> } };

export type RemoveRelationMutationVariables = Exact<{
  cur: Scalars['ID']['input'];
  user: Scalars['ID']['input'];
}>;


export type RemoveRelationMutation = { __typename?: 'Mutation', updateUsers: { __typename?: 'UpdateUsersMutationResponse', users: Array<{ __typename?: 'User', username: string, name: string, relations: Array<{ __typename?: 'User', username: string, name: string }> }> } };

export type Q4QueryVariables = Exact<{ [key: string]: never; }>;


export type Q4Query = { __typename?: 'Query', users: Array<{ __typename?: 'User', id: string, email: string, username: string }> };

export type QQueryVariables = Exact<{
  susername: Scalars['ID']['input'];
  sname: Scalars['String']['input'];
}>;


export type QQuery = { __typename?: 'Query', users: Array<{ __typename?: 'User', username: string, name: string }> };


export const CreatePostsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreatePosts"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"url"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"description"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"username"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"friend"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"RelationType"}}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createPosts"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"url"},"value":{"kind":"Variable","name":{"kind":"Name","value":"url"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"description"},"value":{"kind":"Variable","name":{"kind":"Name","value":"description"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"creatorOfPost"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"connect"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"node"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"username"},"value":{"kind":"Variable","name":{"kind":"Name","value":"username"}}}]}}]}}]}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"visibility"},"value":{"kind":"Variable","name":{"kind":"Name","value":"friend"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"posts"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"creatorOfPost"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"dob"}}]}}]}}]}}]}}]} as unknown as DocumentNode<CreatePostsMutation, CreatePostsMutationVariables>;
export const Q1Document = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"q1"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"users"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"username"}}]}}]}}]} as unknown as DocumentNode<Q1Query, Q1QueryVariables>;
export const Posts2Document = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Posts2"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"posts"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"options"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"sort"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"createdAt"},"value":{"kind":"EnumValue","value":"DESC"}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}}]}}]} as unknown as DocumentNode<Posts2Query, Posts2QueryVariables>;
export const SinglePostsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"SinglePosts"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"pid"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"posts"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pid"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"visibility"}},{"kind":"Field","name":{"kind":"Name","value":"creatorOfPost"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"dob"}}]}},{"kind":"Field","name":{"kind":"Name","value":"likes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"dob"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"comments"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"text"}},{"kind":"Field","name":{"kind":"Name","value":"author"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"dob"}}]}},{"kind":"Field","name":{"kind":"Name","value":"replies"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]}}]} as unknown as DocumentNode<SinglePostsQuery, SinglePostsQueryVariables>;
export const UnLikeQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UnLikeQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"username"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateUsers"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"username"},"value":{"kind":"Variable","name":{"kind":"Name","value":"username"}}}]}},{"kind":"Argument","name":{"kind":"Name","value":"disconnect"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"likedPosts"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"node"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}}]}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"users"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"likedPosts"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"visibility"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"likes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"dob"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"creatorOfPost"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"dob"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<UnLikeQueryMutation, UnLikeQueryMutationVariables>;
export const LikeQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"LikeQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"username"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateUsers"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"username"},"value":{"kind":"Variable","name":{"kind":"Name","value":"username"}}}]}},{"kind":"Argument","name":{"kind":"Name","value":"connect"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"likedPosts"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"node"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}}]}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"users"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"likedPosts"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"visibility"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"likes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"dob"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"creatorOfPost"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"dob"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<LikeQueryMutation, LikeQueryMutationVariables>;
export const PostCommentsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"PostComments"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"pid"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"comments"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"commentOfPost"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pid"}}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"indent"},"value":{"kind":"IntValue","value":"0"}}]}},{"kind":"Argument","name":{"kind":"Name","value":"options"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"sort"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"createdAt"},"value":{"kind":"EnumValue","value":"DESC"}},{"kind":"ObjectField","name":{"kind":"Name","value":"updatedAt"},"value":{"kind":"EnumValue","value":"DESC"}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"commentsConnection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"commentOfPost"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pid"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalCount"}}]}},{"kind":"Field","name":{"kind":"Name","value":"posts"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pid"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"visibility"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"creatorOfPost"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"dob"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]}}]} as unknown as DocumentNode<PostCommentsQuery, PostCommentsQueryVariables>;
export const CreateCommentsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateComments"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"comment"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"indent"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"parentsOfComment"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"username"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"pid"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"cid"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createComments"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"text"},"value":{"kind":"Variable","name":{"kind":"Name","value":"comment"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"indent"},"value":{"kind":"Variable","name":{"kind":"Name","value":"indent"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"parentsOfComment"},"value":{"kind":"Variable","name":{"kind":"Name","value":"parentsOfComment"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"author"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"connect"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"node"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"username"},"value":{"kind":"Variable","name":{"kind":"Name","value":"username"}}}]}}]}}]}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"commentOfPost"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"connect"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"node"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pid"}}}]}}]}}]}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"replyOfComment"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"connect"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"node"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"cid"}}}]}}]}}]}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"comments"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]} as unknown as DocumentNode<CreateCommentsMutation, CreateCommentsMutationVariables>;
export const CommentReplyDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"CommentReply"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"cid"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"comments"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"cid"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"text"}},{"kind":"Field","name":{"kind":"Name","value":"indent"}},{"kind":"Field","name":{"kind":"Name","value":"parentsOfComment"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"likes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"dob"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"author"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"dob"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"replies"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]} as unknown as DocumentNode<CommentReplyQuery, CommentReplyQueryVariables>;
export const LikeCommentDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"LikeComment"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"username"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"cid"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateUsers"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"username"},"value":{"kind":"Variable","name":{"kind":"Name","value":"username"}}}]}},{"kind":"Argument","name":{"kind":"Name","value":"connect"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"likedComments"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"node"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"cid"}}}]}}]}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"users"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"likedComments"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]}}]} as unknown as DocumentNode<LikeCommentMutation, LikeCommentMutationVariables>;
export const UnLikeCommentDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"unLikeComment"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"username"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"cid"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateUsers"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"username"},"value":{"kind":"Variable","name":{"kind":"Name","value":"username"}}}]}},{"kind":"Argument","name":{"kind":"Name","value":"disconnect"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"likedComments"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"node"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"cid"}}}]}}]}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"users"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"likedComments"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]}}]} as unknown as DocumentNode<UnLikeCommentMutation, UnLikeCommentMutationVariables>;
export const DeleteCommentsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteComments"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"cid"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteComments"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"OR"},"value":{"kind":"ListValue","values":[{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"cid"}}}]},{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"parentsOfComment_INCLUDES"},"value":{"kind":"Variable","name":{"kind":"Name","value":"cid"}}}]}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"bookmark"}},{"kind":"Field","name":{"kind":"Name","value":"nodesDeleted"}},{"kind":"Field","name":{"kind":"Name","value":"relationshipsDeleted"}}]}}]}}]} as unknown as DocumentNode<DeleteCommentsMutation, DeleteCommentsMutationVariables>;
export const SingleComments2Document = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"SingleComments2"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"cid"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"comments"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"cid"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"text"}},{"kind":"Field","name":{"kind":"Name","value":"indent"}},{"kind":"Field","name":{"kind":"Name","value":"parentsOfComment"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"likes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"dob"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"author"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"dob"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"replyOfComment"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"text"}},{"kind":"Field","name":{"kind":"Name","value":"indent"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"author"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"dob"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]}}]}}]} as unknown as DocumentNode<SingleComments2Query, SingleComments2QueryVariables>;
export const CommentsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Comments"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"cid"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"comments"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"replyOfComment"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"cid"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"text"}},{"kind":"Field","name":{"kind":"Name","value":"indent"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]} as unknown as DocumentNode<CommentsQuery, CommentsQueryVariables>;
export const UsersDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Users"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"username"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"users"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"username"},"value":{"kind":"Variable","name":{"kind":"Name","value":"username"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"dob"}},{"kind":"Field","name":{"kind":"Name","value":"profileUrl"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"relations"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"dob"}},{"kind":"Field","name":{"kind":"Name","value":"profileUrl"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"relationWith"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"dob"}},{"kind":"Field","name":{"kind":"Name","value":"profileUrl"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"posts"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"visibility"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"authorOfComments"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"text"}},{"kind":"Field","name":{"kind":"Name","value":"indent"}},{"kind":"Field","name":{"kind":"Name","value":"parentsOfComment"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"commentOfPost"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"visibility"}},{"kind":"Field","name":{"kind":"Name","value":"creatorOfPost"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"username"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]}}]}}]} as unknown as DocumentNode<UsersQuery, UsersQueryVariables>;
export const AddRelationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"AddRelation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"cur"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"user"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"type"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"RelationType"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateUsers"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"username"},"value":{"kind":"Variable","name":{"kind":"Name","value":"cur"}}}]}},{"kind":"Argument","name":{"kind":"Name","value":"update"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"relations"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"connect"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"edge"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"type"},"value":{"kind":"Variable","name":{"kind":"Name","value":"type"}}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"node"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"username"},"value":{"kind":"Variable","name":{"kind":"Name","value":"user"}}}]}}]}}]}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"users"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"relations"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]}}]} as unknown as DocumentNode<AddRelationMutation, AddRelationMutationVariables>;
export const RemoveRelationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"RemoveRelation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"cur"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"user"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateUsers"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"username"},"value":{"kind":"Variable","name":{"kind":"Name","value":"cur"}}}]}},{"kind":"Argument","name":{"kind":"Name","value":"update"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"relations"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"disconnect"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"node"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"username"},"value":{"kind":"Variable","name":{"kind":"Name","value":"user"}}}]}}]}}]}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"users"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"relations"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]}}]} as unknown as DocumentNode<RemoveRelationMutation, RemoveRelationMutationVariables>;
export const Q4Document = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"q4"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"users"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"username"}}]}}]}}]} as unknown as DocumentNode<Q4Query, Q4QueryVariables>;
export const QDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"q"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"susername"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"sname"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"users"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"OR"},"value":{"kind":"ListValue","values":[{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"name_STARTS_WITH"},"value":{"kind":"Variable","name":{"kind":"Name","value":"sname"}}}]},{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"username_STARTS_WITH"},"value":{"kind":"Variable","name":{"kind":"Name","value":"susername"}}}]}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<QQuery, QQueryVariables>;