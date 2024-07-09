import { createContext, useContext } from "react";
import { graphql } from "../../../../gql";
import { useQuery } from "@apollo/client";

const getSingleComment = graphql(/*graphql*/ `
  query SingleComments($cid: ID!) {
    comments(where: { id: $cid }) {
      id
      text
      indent
      createdAt
      updatedAt
      likes {
        id
        name
        email
        username
        dob
        createdAt
        updatedAt
      }
      author {
        id
        name
        email
        username
        dob
        createdAt
        updatedAt
      }
      replies {
        id
      }
    }
  }
`);

const SingleCommentContext = createContext<SingleCommentContextProps | undefined>(undefined);

export const useCommentContext = () => {
  const context = useContext(SingleCommentContext);
  if (!context) {
    throw new Error(
      `${useCommentContext.name} must be used within a SingleCommentProvider`
    );
  }
  return context;
};

const SingleCommentProvider: React.FC<SingleCommentProps> = ({
  children,
  id,
}) => {
  const scq = useQuery(getSingleComment, {
    variables: {
      cid: id,
    },
  });

  return <SingleCommentContext.Provider value={{scq}} children={children} />;
};

export default SingleCommentProvider;
