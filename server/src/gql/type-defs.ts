import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { Neo4jGraphQL } from '@neo4j/graphql';
import { gql } from 'apollo-server';
import neo4j from 'neo4j-driver';

export const typeDefs = gql`
  interface Comment {
    id: ID!
    text: String!
    author: User! @declareRelationship
    replies: [Comment!]! @declareRelationship
  }

  type JwtPayload @jwt {
    id: ID!
    email: String!
  }

  type Post
    @authorization(
      validate: [
        {
          requireAuthentication: true
          operations: [UPDATE, DELETE, CREATE]
          where: { node: { creatorOfPost: { id: "$jwt.id" } } }
        }
      ]
    ) {
    id: ID!
    url: String!
    description: String
    creatorOfPost: User! @relationship(type: "POSTED_BY", direction: IN)
    comments: [Comment!]! @relationship(type: "COMMENTED_AT", direction: IN)
  }

  type PostComment implements Comment
    @authorization(
      validate: [
        {
          requireAuthentication: true
          operations: [UPDATE, DELETE, CREATE]
          where: { node: { author: { id: "$jwt.id" } } }
        }
      ]
    ) {
    id: ID!
    text: String!
    author: User! @relationship(type: "COMMENTED_BY", direction: IN)
    commentOfPost: Post! @relationship(type: "COMMENTED_AT", direction: OUT)
    replies: [Comment!]! @relationship(type: "REPLIED_ON", direction: IN)
  }

  type ReplyComment implements Comment
    @authorization(
      validate: [
        {
          requireAuthentication: true
          operations: [UPDATE, DELETE, CREATE]
          where: { node: { author: { id: "$jwt.id" } } }
        }
      ]
    ) {
    id: ID!
    text: String!
    author: User! @relationship(type: "COMMENTED_BY", direction: IN)
    replyOfComment: Comment! @relationship(type: "REPLIED_ON", direction: OUT)
    replies: [Comment!]! @relationship(type: "REPLIED_ON", direction: IN)
  }

  type User
    @authorization(
      validate: [
        {
          requireAuthentication: true
          operations: [UPDATE, DELETE]
          where: { node: { id: "$jwt.id", email: "$jwt.email" } }
        }
      ]
    ) {
    id: ID!
    name: String!
    email: String!
    hash: String! @private
    username: ID!
    dob: Date
    refreshToken: String @private
    posts: [Post!]! @relationship(type: "POSTED_BY", direction: OUT)
    authorOfComments: [Comment!]!
      @relationship(type: "COMMENTED_BY", direction: OUT)
  }
`;
