import { createContext, useContext } from "react";
import { graphql } from "../../../gql";
import { useMutation, useQuery, useSuspenseQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import { ProfileContextProps, ProfileProps } from "./types";
import { RelationType, User } from "../../../gql/graphql";
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
          creatorOfPost {
            name
            username
          }
          createdAt
          updatedAt
        }
      }
    }
  }
`);

const addRelation = graphql(`
  mutation AddRelation($cur: ID!, $user: ID!, $type: RelationType!) {
    updateUsers(
      where: { username: $cur }
      update: {
        relations: {
          connect: {
            edge: { type: $type }
            where: { node: { username: $user } }
          }
        }
      }
    ) {
      users {
        username
        name
        relations {
          username
          name
        }
      }
    }
  }
`);
const removeRelation = graphql(`
  mutation RemoveRelation($cur: ID!, $user: ID!) {
    updateUsers(
      where: { username: $cur }
      update: {
        relations: { disconnect: { where: { node: { username: $user } } } }
      }
    ) {
      users {
        username
        name
        relations {
          username
          name
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
  const addRel = useMutation(addRelation, {
    refetchQueries: [
      { query: profileQuery, variables: { username: username ?? "" } },
    ],
  });
  const remRel = useMutation(removeRelation, {
    refetchQueries: [
      { query: profileQuery, variables: { username: username ?? "" } },
    ],
  });
  const handleRelation = (isntAdded: boolean) => {
    if (isntAdded) {
      remRel[0]({
        variables: {
          cur: localStorage.getItem("username")!,
          user: username!,
        },
      });
    } else {
      addRel[0]({
        variables: {
          cur: localStorage.getItem("username")!,
          user: username!,
          type: RelationType.Public,
        },
      });
    }
  };

  if (loading) return <LoadingSpinner />;
  return (
    <ProfileContext.Provider
      value={{
        user: data?.users[0] as User,
        handleRelation,
      }}
      children={children}
    />
  );
};

export default ProfileProvider;
