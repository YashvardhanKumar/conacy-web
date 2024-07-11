import { gql } from 'apollo-server';

export const typeDefs = gql`
  enum RelationType {
    STRANGER
    FRIEND
    CLOSE_FRIEND
    BEST_FRIEND
    RELATIVE
    ACQUAINTANCE
  }

  type JwtPayload @jwt {
    username: ID!
    email: String!
  }
  type User
    @authorization(
      validate: [
        {
          requireAuthentication: true
          operations: [UPDATE, DELETE]
          where: { node: { username: "$jwt.username", email: "$jwt.email" } }
        }
      ]
    ) {
    id: ID! @id
    name: String!
    email: String! @unique
    hash: String! @private
    username: ID! @unique
    dob: Date
    refreshToken: String @private
    blackList: [String!] @private
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
    type: RelationType! @default(value: STRANGER)
  }
  type Post
    @authorization(
      filter: [
        {
          requireAuthentication: true
          where: { node: { creatorOfPost: { username: "$jwt.username" } } }
        }
      ]
    ) {
    id: ID! @id
    url: String!
    description: String
    visibility: [RelationType!]
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
          operations: [UPDATE, DELETE]
          where: { node: { author: { username: "$jwt.username" } } }
        }
      ]
    ) {
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
`;
