import { gql } from "@apollo/client";

export const CREATE_USERS = gql`
  mutation CreateUsers {
    createUsers(
      input: {
        id: $id
        name: $name
        email: $email
        hash: $hash
        username: $username
        dob: $dob
      }
    ) {
      users {
        id
        name
        email
        hash
        username
        dob
      }
    }
  }
`;
