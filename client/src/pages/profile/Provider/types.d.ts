import { User } from "../../../gql/graphql";

interface ProfileContextProps {
  user: User | null;
  handleRelation: (boolean) => void;
}

interface ProfileProps {
  children: React.ReactNode;
}
