import { gql } from 'apollo-server';

export const typeDefs = gql`
  enum RelationType {
    NONE
    PUBLIC
    FRIEND
    CLOSE_FRIEND
    BEST_FRIEND
  }
  enum MessageType {
    GROUP
    CHAT
    NETWORK
  }

  enum MessageFormat {
    TEXT
    VIDEO
    AUDIO
    GIF
    STICKER
    IMAGES
  }
  type JwtPayload @jwt {
    username: ID!
    email: String!
  }
  type PrivacySettings {
    chatVisibility: [RelationType!] @default(value: [PUBLIC])
    profileVisibility: [RelationType!] @default(value: [PUBLIC])
    whoCanSendMessageRequest: [RelationType!] @default(value: [PUBLIC])
    seenReceipts: Boolean!
    onlineStatus: [RelationType!] @default(value: [PUBLIC])
    isTyping: Boolean!
  }
  type User
    @authorization(
      validate: [
        {
          requireAuthentication: true
          operations: [UPDATE, DELETE]
          where: { node: { username: "$jwt.username" } }
        }
      ]
    ) 
    {
    id: ID! @id
    name: String!
    email: String! @unique
    hash: String! @private
    username: ID! @unique
    dob: Date
    refreshToken: String @private
    blackList: [String!] @private
    profileUrl: String
    relations: [User!]!
      @relationship(
        type: "RELATIONS_WITH"
        properties: "Relation"
        direction: IN
      )
    relationWith: [User!]!
      @relationship(
        type: "RELATIONS_WITH"
        properties: "Relation"
        direction: OUT
      )
    posts: [Post!]! @relationship(type: "POSTED_BY", direction: OUT)
    likedPosts: [Post!]! @relationship(type: "LIKED_BY", direction: OUT)
    likedComments: [Comment!]!
      @relationship(type: "COMMENT_LIKED_BY", direction: OUT)
    authorOfComments: [Comment!]!
      @relationship(type: "COMMENTED_BY", direction: OUT)
    createdAt: DateTime @timestamp(operations: [CREATE])
    updatedAt: DateTime @timestamp(operations: [UPDATE])
  }

  type Relation @relationshipProperties {
    type: RelationType! @default(value: PUBLIC)
  }
  type Post
    @authorization(
      validate: [
        {
          requireAuthentication: true
          operations: [CREATE,UPDATE,DELETE]
          where: {node: { creatorOfPost: {username: "$jwt.username"} }}
        },
      ],
      filter: [
        {
          requireAuthentication: true
          operations: [READ]
          where: {node: { creatorOfPost: {OR: [{relations_SINGLE: {username: "$jwt.username"}},{username: "$jwt.username"} ]}}}
        },
      ]
    ) 
    {
    id: ID! @id
    url: String!
    description: String
    visibility: [RelationType!] @default(value: [PUBLIC])
    likes: [User!]! @relationship(type: "LIKED_BY", direction: IN)
    creatorOfPost: User! @relationship(type: "POSTED_BY", direction: IN)
    comments: [Comment!]! @relationship(type: "COMMENTED_AT", direction: IN)
    createdAt: DateTime @timestamp(operations: [CREATE])
    updatedAt: DateTime @timestamp(operations: [UPDATE])
  }

  type Comment
    @authorization(
      validate: [
        {
          requireAuthentication: true
          operations: [CREATE,UPDATE,DELETE]
          where: {node: { author: {username: "$jwt.username"} }}
        },
      ],
      filter: [
        {
          requireAuthentication: true
          operations: [READ]
          where: {node: { author: {OR: [{relations_SINGLE: {username: "$jwt.username"}},{username: "$jwt.username"} ]}}}
        },

      ]
    ) 
    {
    id: ID! @id
    text: String!
    indent: Int! @default(value: 0)
    likes: [User!]! @relationship(type: "COMMENT_LIKED_BY", direction: IN)
    author: User! @relationship(type: "COMMENTED_BY", direction: IN)
    commentOfPost: Post! @relationship(type: "COMMENTED_AT", direction: OUT)
    parentsOfComment: [ID!]!
    replyOfComment: Comment @relationship(type: "REPLIED_ON", direction: OUT)
    replies: [Comment!]! @relationship(type: "REPLIED_ON", direction: IN)
    createdAt: DateTime @timestamp(operations: [CREATE])
    updatedAt: DateTime @timestamp(operations: [UPDATE])
  }

  type Message 
  @authorization(
    validate: [
      {
        requireAuthentication: true
        operations: [CREATE,UPDATE,DELETE],
        where: {node: {OR: [{ sender: {username: "$jwt.username"} }, {receiver: {username: "$jwt.username"}}]}}
      }
    ]
    filter: [
      {
        requireAuthentication: true
        operations: [READ],
        where: {node: {OR: [{ sender: {username: "$jwt.username"} }, {receiver: {username: "$jwt.username"}}]}}
      }
    ]
  )
  {
    id: ID! @id
    text: String
    file: String
    type: MessageType!
    format: MessageFormat!
    sender: User! @relationship(type: "MESSAGE_SENT_BY", direction: IN)
    receiver: User! @relationship(type: "MESSAGE_RECEIVED_BY", direction: IN),
    createdAt: DateTime @timestamp(operations: [CREATE])
    updatedAt: DateTime @timestamp(operations: [UPDATE])
  }
`;
