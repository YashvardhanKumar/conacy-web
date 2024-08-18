import { createContext, useContext } from "react";
import { graphql } from "../../../gql";
import { useMutation, useQuery, useSuspenseQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import { ProfileContextProps, ProfileProps } from "./types";
import { User } from "../../../gql/graphql";
import LoadingSpinner from "../../../components/LoadingSpinner";

const profileQuery = graphql(`
  query Users($username: ID!) {
    users(where: { username: $username }) {
      id
      name
      email
      username
      dob
      profileUrl
      createdAt
      updatedAt
      relations {
        id
        name
        email
        username
        dob
        profileUrl
        createdAt
        updatedAt
      }
      relationWith {
        id
        name
        email
        username
        dob
        profileUrl
        createdAt
        updatedAt
      }
      posts {
        id
        url
        description
        visibility
        createdAt
        updatedAt
      }
      authorOfComments {
        id
        text
        indent
        parentsOfComment
        createdAt
        updatedAt
        commentOfPost {
          id
          url
          description
          visibility
          createdAt
          updatedAt
        }
      }
    }
  }
`);

const ProfileContext = createContext<ProfileContextProps | undefined>(
  undefined
);

export const useProfiletContext = () => {
  const context = useContext(ProfileContext);
  if (!context) {
    throw new Error(
      `${useProfiletContext.name} must be used within a ${ProfileProvider.name}`
    );
  }
  return context;
};

const ProfileProvider: React.FC<ProfileProps> = ({ children }) => {
  const { username } = useParams();
  const { loading, data } = useQuery(profileQuery, {
    variables: {
      username: username ?? "",
    },
    pollInterval: 10000,
  });
  if (loading) return <LoadingSpinner/>;
  return (
    <ProfileContext.Provider
      value={{
        user: data?.users[0] as User,
      }}
      children={children}
    />
  );
};

export default ProfileProvider;
