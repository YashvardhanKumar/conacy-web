import { User } from "../../../gql/graphql";

interface ProfileContextProps {
  user: User | null;
}

interface ProfileProps {
  children: React.ReactNode;
}
