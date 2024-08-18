/* eslint-disable */
import * as types from "./graphql";
import { TypedDocumentNode as DocumentNode } from "@graphql-typed-document-node/core";

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
  "\n  mutation CreatePosts(\n    $url: String!\n    $description: String!\n    $username: ID!\n    $friend: [RelationType!]!\n  ) {\n    createPosts(\n      input: {\n        url: $url\n        description: $description\n        creatorOfPost: { connect: { where: { node: { username: $username } } } }\n        visibility: $friend\n      }\n    ) {\n      posts {\n        id\n        url\n        description\n        creatorOfPost {\n          id\n          name\n          email\n          username\n          dob\n        }\n      }\n    }\n  }\n":
    types.CreatePostsDocument,
  "\n      query q1 {\n        users {\n          id\n          email\n          username\n        }\n      }\n    ":
    types.Q1Document,
  "\n  query Posts2 {\n    posts(options: { sort: { createdAt: DESC } }) {\n      id\n      createdAt\n    }\n  }\n":
    types.Posts2Document,
  "\n  query SinglePosts($pid: ID!) {\n    posts(where: { id: $pid }) {\n      id\n      url\n      description\n      visibility\n      creatorOfPost {\n        id\n        name\n        email\n        username\n        dob\n      }\n      likes {\n        id\n        name\n        email\n        username\n        dob\n        createdAt\n        updatedAt\n      }\n      comments {\n        id\n        text\n        author {\n          id\n          name\n          email\n          username\n          dob\n        }\n        replies {\n          id\n        }\n      }\n    }\n  }\n":
    types.SinglePostsDocument,
  "\n  mutation UnLikeQuery($id: ID!, $username: ID!) {\n    updateUsers(\n      where: { username: $username }\n      disconnect: { likedPosts: { where: { node: { id: $id } } } }\n    ) {\n      users {\n        likedPosts {\n          id\n          url\n          description\n          visibility\n          createdAt\n          updatedAt\n          likes {\n            id\n            name\n            email\n            username\n            dob\n            createdAt\n            updatedAt\n          }\n          creatorOfPost {\n            id\n            name\n            email\n            username\n            dob\n            createdAt\n            updatedAt\n          }\n        }\n      }\n    }\n  }\n":
    types.UnLikeQueryDocument,
  "\n  mutation LikeQuery($id: ID!, $username: ID!) {\n    updateUsers(\n      where: { username: $username }\n      connect: { likedPosts: { where: { node: { id: $id } } } }\n    ) {\n      users {\n        likedPosts {\n          id\n          url\n          description\n          visibility\n          createdAt\n          updatedAt\n          likes {\n            id\n            name\n            email\n            username\n            dob\n            createdAt\n            updatedAt\n          }\n          creatorOfPost {\n            id\n            name\n            email\n            username\n            dob\n            createdAt\n            updatedAt\n          }\n        }\n      }\n    }\n  }\n":
    types.LikeQueryDocument,
  "\n  query PostComments($pid: ID!) {\n    comments(\n      where: { commentOfPost: { id: $pid }, indent: 0 }\n      options: { sort: { createdAt: DESC, updatedAt: DESC } }\n    ) {\n      id\n    }\n    commentsConnection(where: { commentOfPost: { id: $pid } }) {\n      totalCount\n    }\n    posts(where: { id: $pid }) {\n      id\n      url\n      description\n      visibility\n      createdAt\n      updatedAt\n      creatorOfPost {\n        id\n        name\n        email\n        username\n        dob\n        createdAt\n        updatedAt\n      }\n    }\n  }\n":
    types.PostCommentsDocument,
  "\n  mutation CreateComments(\n    $comment: String!\n    $indent: Int!\n    $parentsOfComment: [ID!]!\n    $username: ID!\n    $pid: ID!\n    $cid: ID\n  ) {\n    createComments(\n      input: {\n        text: $comment\n        indent: $indent\n        parentsOfComment: $parentsOfComment\n        author: { connect: { where: { node: { username: $username } } } }\n        commentOfPost: { connect: { where: { node: { id: $pid } } } }\n        replyOfComment: { connect: { where: { node: { id: $cid } } } }\n      }\n    ) {\n      comments {\n        id\n      }\n    }\n  }\n":
    types.CreateCommentsDocument,
  "\n  query CommentReply($cid: ID!) {\n    comments(where: { id: $cid }) {\n      id\n      text\n      indent\n      parentsOfComment\n      createdAt\n      updatedAt\n      likes {\n        id\n        name\n        email\n        username\n        dob\n        createdAt\n        updatedAt\n      }\n      author {\n        id\n        name\n        email\n        username\n        dob\n        createdAt\n        updatedAt\n      }\n      replies {\n        id\n      }\n    }\n  }\n":
    types.CommentReplyDocument,
  "\n  mutation LikeComment($username: ID!, $cid: ID!) {\n    updateUsers(\n      where: { username: $username }\n      connect: { likedComments: { where: { node: { id: $cid } } } }\n    ) {\n      users {\n        likedComments {\n          id\n        }\n      }\n    }\n  }\n":
    types.LikeCommentDocument,
  "\n  mutation unLikeComment($username: ID!, $cid: ID!) {\n    updateUsers(\n      where: { username: $username }\n      disconnect: { likedComments: { where: { node: { id: $cid } } } }\n    ) {\n      users {\n        likedComments {\n          id\n        }\n      }\n    }\n  }\n":
    types.UnLikeCommentDocument,
  "\n  mutation DeleteComments($cid: ID!) {\n    deleteComments(\n      where: { OR: [{ id: $cid }, { parentsOfComment_INCLUDES: $cid }] }\n    ) {\n      bookmark\n      nodesDeleted\n      relationshipsDeleted\n    }\n  }\n":
    types.DeleteCommentsDocument,
  "\n  query SingleComments2($cid: ID!) {\n    comments(where: { id: $cid }) {\n      id\n      text\n      indent\n      parentsOfComment\n      createdAt\n      updatedAt\n      likes {\n        id\n        name\n        email\n        username\n        dob\n        createdAt\n        updatedAt\n      }\n      author {\n        id\n        name\n        email\n        username\n        dob\n        createdAt\n        updatedAt\n      }\n      replyOfComment {\n        id\n        text\n        indent\n        createdAt\n        updatedAt\n        author {\n          id\n          name\n          email\n          username\n          dob\n          createdAt\n          updatedAt\n        }\n      }\n    }\n  }\n":
    types.SingleComments2Document,
  "\n  query Comments($cid: ID!) {\n    comments(where: { replyOfComment: { id: $cid } }) {\n      id\n      text\n      indent\n      createdAt\n      updatedAt\n    }\n  }\n":
    types.CommentsDocument,
  "\n  query Users($username: ID!) {\n    users(where: { username: $username }) {\n      id\n      name\n      email\n      username\n      dob\n      profileUrl\n      createdAt\n      updatedAt\n      relations {\n        id\n        name\n        email\n        username\n        dob\n        profileUrl\n        createdAt\n        updatedAt\n      }\n      relationWith {\n        id\n        name\n        email\n        username\n        dob\n        profileUrl\n        createdAt\n        updatedAt\n      }\n      posts {\n        id\n        url\n        description\n        visibility\n        createdAt\n        updatedAt\n      }\n      authorOfComments {\n        id\n        text\n        indent\n        parentsOfComment\n        createdAt\n        updatedAt\n        commentOfPost {\n          id\n          url\n          description\n          visibility\n          createdAt\n          updatedAt\n        }\n      }\n    }\n  }\n":
    types.UsersDocument,
  "\n      query q4 {\n        users {\n          id\n          email\n          username\n        }\n      }\n    ":
    types.Q4Document,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  mutation CreatePosts(\n    $url: String!\n    $description: String!\n    $username: ID!\n    $friend: [RelationType!]!\n  ) {\n    createPosts(\n      input: {\n        url: $url\n        description: $description\n        creatorOfPost: { connect: { where: { node: { username: $username } } } }\n        visibility: $friend\n      }\n    ) {\n      posts {\n        id\n        url\n        description\n        creatorOfPost {\n          id\n          name\n          email\n          username\n          dob\n        }\n      }\n    }\n  }\n"
): (typeof documents)["\n  mutation CreatePosts(\n    $url: String!\n    $description: String!\n    $username: ID!\n    $friend: [RelationType!]!\n  ) {\n    createPosts(\n      input: {\n        url: $url\n        description: $description\n        creatorOfPost: { connect: { where: { node: { username: $username } } } }\n        visibility: $friend\n      }\n    ) {\n      posts {\n        id\n        url\n        description\n        creatorOfPost {\n          id\n          name\n          email\n          username\n          dob\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n      query q1 {\n        users {\n          id\n          email\n          username\n        }\n      }\n    "
): (typeof documents)["\n      query q1 {\n        users {\n          id\n          email\n          username\n        }\n      }\n    "];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  query Posts2 {\n    posts(options: { sort: { createdAt: DESC } }) {\n      id\n      createdAt\n    }\n  }\n"
): (typeof documents)["\n  query Posts2 {\n    posts(options: { sort: { createdAt: DESC } }) {\n      id\n      createdAt\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  query SinglePosts($pid: ID!) {\n    posts(where: { id: $pid }) {\n      id\n      url\n      description\n      visibility\n      creatorOfPost {\n        id\n        name\n        email\n        username\n        dob\n      }\n      likes {\n        id\n        name\n        email\n        username\n        dob\n        createdAt\n        updatedAt\n      }\n      comments {\n        id\n        text\n        author {\n          id\n          name\n          email\n          username\n          dob\n        }\n        replies {\n          id\n        }\n      }\n    }\n  }\n"
): (typeof documents)["\n  query SinglePosts($pid: ID!) {\n    posts(where: { id: $pid }) {\n      id\n      url\n      description\n      visibility\n      creatorOfPost {\n        id\n        name\n        email\n        username\n        dob\n      }\n      likes {\n        id\n        name\n        email\n        username\n        dob\n        createdAt\n        updatedAt\n      }\n      comments {\n        id\n        text\n        author {\n          id\n          name\n          email\n          username\n          dob\n        }\n        replies {\n          id\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  mutation UnLikeQuery($id: ID!, $username: ID!) {\n    updateUsers(\n      where: { username: $username }\n      disconnect: { likedPosts: { where: { node: { id: $id } } } }\n    ) {\n      users {\n        likedPosts {\n          id\n          url\n          description\n          visibility\n          createdAt\n          updatedAt\n          likes {\n            id\n            name\n            email\n            username\n            dob\n            createdAt\n            updatedAt\n          }\n          creatorOfPost {\n            id\n            name\n            email\n            username\n            dob\n            createdAt\n            updatedAt\n          }\n        }\n      }\n    }\n  }\n"
): (typeof documents)["\n  mutation UnLikeQuery($id: ID!, $username: ID!) {\n    updateUsers(\n      where: { username: $username }\n      disconnect: { likedPosts: { where: { node: { id: $id } } } }\n    ) {\n      users {\n        likedPosts {\n          id\n          url\n          description\n          visibility\n          createdAt\n          updatedAt\n          likes {\n            id\n            name\n            email\n            username\n            dob\n            createdAt\n            updatedAt\n          }\n          creatorOfPost {\n            id\n            name\n            email\n            username\n            dob\n            createdAt\n            updatedAt\n          }\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  mutation LikeQuery($id: ID!, $username: ID!) {\n    updateUsers(\n      where: { username: $username }\n      connect: { likedPosts: { where: { node: { id: $id } } } }\n    ) {\n      users {\n        likedPosts {\n          id\n          url\n          description\n          visibility\n          createdAt\n          updatedAt\n          likes {\n            id\n            name\n            email\n            username\n            dob\n            createdAt\n            updatedAt\n          }\n          creatorOfPost {\n            id\n            name\n            email\n            username\n            dob\n            createdAt\n            updatedAt\n          }\n        }\n      }\n    }\n  }\n"
): (typeof documents)["\n  mutation LikeQuery($id: ID!, $username: ID!) {\n    updateUsers(\n      where: { username: $username }\n      connect: { likedPosts: { where: { node: { id: $id } } } }\n    ) {\n      users {\n        likedPosts {\n          id\n          url\n          description\n          visibility\n          createdAt\n          updatedAt\n          likes {\n            id\n            name\n            email\n            username\n            dob\n            createdAt\n            updatedAt\n          }\n          creatorOfPost {\n            id\n            name\n            email\n            username\n            dob\n            createdAt\n            updatedAt\n          }\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  query PostComments($pid: ID!) {\n    comments(\n      where: { commentOfPost: { id: $pid }, indent: 0 }\n      options: { sort: { createdAt: DESC, updatedAt: DESC } }\n    ) {\n      id\n    }\n    commentsConnection(where: { commentOfPost: { id: $pid } }) {\n      totalCount\n    }\n    posts(where: { id: $pid }) {\n      id\n      url\n      description\n      visibility\n      createdAt\n      updatedAt\n      creatorOfPost {\n        id\n        name\n        email\n        username\n        dob\n        createdAt\n        updatedAt\n      }\n    }\n  }\n"
): (typeof documents)["\n  query PostComments($pid: ID!) {\n    comments(\n      where: { commentOfPost: { id: $pid }, indent: 0 }\n      options: { sort: { createdAt: DESC, updatedAt: DESC } }\n    ) {\n      id\n    }\n    commentsConnection(where: { commentOfPost: { id: $pid } }) {\n      totalCount\n    }\n    posts(where: { id: $pid }) {\n      id\n      url\n      description\n      visibility\n      createdAt\n      updatedAt\n      creatorOfPost {\n        id\n        name\n        email\n        username\n        dob\n        createdAt\n        updatedAt\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  mutation CreateComments(\n    $comment: String!\n    $indent: Int!\n    $parentsOfComment: [ID!]!\n    $username: ID!\n    $pid: ID!\n    $cid: ID\n  ) {\n    createComments(\n      input: {\n        text: $comment\n        indent: $indent\n        parentsOfComment: $parentsOfComment\n        author: { connect: { where: { node: { username: $username } } } }\n        commentOfPost: { connect: { where: { node: { id: $pid } } } }\n        replyOfComment: { connect: { where: { node: { id: $cid } } } }\n      }\n    ) {\n      comments {\n        id\n      }\n    }\n  }\n"
): (typeof documents)["\n  mutation CreateComments(\n    $comment: String!\n    $indent: Int!\n    $parentsOfComment: [ID!]!\n    $username: ID!\n    $pid: ID!\n    $cid: ID\n  ) {\n    createComments(\n      input: {\n        text: $comment\n        indent: $indent\n        parentsOfComment: $parentsOfComment\n        author: { connect: { where: { node: { username: $username } } } }\n        commentOfPost: { connect: { where: { node: { id: $pid } } } }\n        replyOfComment: { connect: { where: { node: { id: $cid } } } }\n      }\n    ) {\n      comments {\n        id\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  query CommentReply($cid: ID!) {\n    comments(where: { id: $cid }) {\n      id\n      text\n      indent\n      parentsOfComment\n      createdAt\n      updatedAt\n      likes {\n        id\n        name\n        email\n        username\n        dob\n        createdAt\n        updatedAt\n      }\n      author {\n        id\n        name\n        email\n        username\n        dob\n        createdAt\n        updatedAt\n      }\n      replies {\n        id\n      }\n    }\n  }\n"
): (typeof documents)["\n  query CommentReply($cid: ID!) {\n    comments(where: { id: $cid }) {\n      id\n      text\n      indent\n      parentsOfComment\n      createdAt\n      updatedAt\n      likes {\n        id\n        name\n        email\n        username\n        dob\n        createdAt\n        updatedAt\n      }\n      author {\n        id\n        name\n        email\n        username\n        dob\n        createdAt\n        updatedAt\n      }\n      replies {\n        id\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  mutation LikeComment($username: ID!, $cid: ID!) {\n    updateUsers(\n      where: { username: $username }\n      connect: { likedComments: { where: { node: { id: $cid } } } }\n    ) {\n      users {\n        likedComments {\n          id\n        }\n      }\n    }\n  }\n"
): (typeof documents)["\n  mutation LikeComment($username: ID!, $cid: ID!) {\n    updateUsers(\n      where: { username: $username }\n      connect: { likedComments: { where: { node: { id: $cid } } } }\n    ) {\n      users {\n        likedComments {\n          id\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  mutation unLikeComment($username: ID!, $cid: ID!) {\n    updateUsers(\n      where: { username: $username }\n      disconnect: { likedComments: { where: { node: { id: $cid } } } }\n    ) {\n      users {\n        likedComments {\n          id\n        }\n      }\n    }\n  }\n"
): (typeof documents)["\n  mutation unLikeComment($username: ID!, $cid: ID!) {\n    updateUsers(\n      where: { username: $username }\n      disconnect: { likedComments: { where: { node: { id: $cid } } } }\n    ) {\n      users {\n        likedComments {\n          id\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  mutation DeleteComments($cid: ID!) {\n    deleteComments(\n      where: { OR: [{ id: $cid }, { parentsOfComment_INCLUDES: $cid }] }\n    ) {\n      bookmark\n      nodesDeleted\n      relationshipsDeleted\n    }\n  }\n"
): (typeof documents)["\n  mutation DeleteComments($cid: ID!) {\n    deleteComments(\n      where: { OR: [{ id: $cid }, { parentsOfComment_INCLUDES: $cid }] }\n    ) {\n      bookmark\n      nodesDeleted\n      relationshipsDeleted\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  query SingleComments2($cid: ID!) {\n    comments(where: { id: $cid }) {\n      id\n      text\n      indent\n      parentsOfComment\n      createdAt\n      updatedAt\n      likes {\n        id\n        name\n        email\n        username\n        dob\n        createdAt\n        updatedAt\n      }\n      author {\n        id\n        name\n        email\n        username\n        dob\n        createdAt\n        updatedAt\n      }\n      replyOfComment {\n        id\n        text\n        indent\n        createdAt\n        updatedAt\n        author {\n          id\n          name\n          email\n          username\n          dob\n          createdAt\n          updatedAt\n        }\n      }\n    }\n  }\n"
): (typeof documents)["\n  query SingleComments2($cid: ID!) {\n    comments(where: { id: $cid }) {\n      id\n      text\n      indent\n      parentsOfComment\n      createdAt\n      updatedAt\n      likes {\n        id\n        name\n        email\n        username\n        dob\n        createdAt\n        updatedAt\n      }\n      author {\n        id\n        name\n        email\n        username\n        dob\n        createdAt\n        updatedAt\n      }\n      replyOfComment {\n        id\n        text\n        indent\n        createdAt\n        updatedAt\n        author {\n          id\n          name\n          email\n          username\n          dob\n          createdAt\n          updatedAt\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  query Comments($cid: ID!) {\n    comments(where: { replyOfComment: { id: $cid } }) {\n      id\n      text\n      indent\n      createdAt\n      updatedAt\n    }\n  }\n"
): (typeof documents)["\n  query Comments($cid: ID!) {\n    comments(where: { replyOfComment: { id: $cid } }) {\n      id\n      text\n      indent\n      createdAt\n      updatedAt\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  query Users($username: ID!) {\n    users(where: { username: $username }) {\n      id\n      name\n      email\n      username\n      dob\n      profileUrl\n      createdAt\n      updatedAt\n      relations {\n        id\n        name\n        email\n        username\n        dob\n        profileUrl\n        createdAt\n        updatedAt\n      }\n      relationWith {\n        id\n        name\n        email\n        username\n        dob\n        profileUrl\n        createdAt\n        updatedAt\n      }\n      posts {\n        id\n        url\n        description\n        visibility\n        createdAt\n        updatedAt\n      }\n      authorOfComments {\n        id\n        text\n        indent\n        parentsOfComment\n        createdAt\n        updatedAt\n        commentOfPost {\n          id\n          url\n          description\n          visibility\n          createdAt\n          updatedAt\n        }\n      }\n    }\n  }\n"
): (typeof documents)["\n  query Users($username: ID!) {\n    users(where: { username: $username }) {\n      id\n      name\n      email\n      username\n      dob\n      profileUrl\n      createdAt\n      updatedAt\n      relations {\n        id\n        name\n        email\n        username\n        dob\n        profileUrl\n        createdAt\n        updatedAt\n      }\n      relationWith {\n        id\n        name\n        email\n        username\n        dob\n        profileUrl\n        createdAt\n        updatedAt\n      }\n      posts {\n        id\n        url\n        description\n        visibility\n        createdAt\n        updatedAt\n      }\n      authorOfComments {\n        id\n        text\n        indent\n        parentsOfComment\n        createdAt\n        updatedAt\n        commentOfPost {\n          id\n          url\n          description\n          visibility\n          createdAt\n          updatedAt\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n      query q4 {\n        users {\n          id\n          email\n          username\n        }\n      }\n    "
): (typeof documents)["\n      query q4 {\n        users {\n          id\n          email\n          username\n        }\n      }\n    "];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> =
  TDocumentNode extends DocumentNode<infer TType, any> ? TType : never;
