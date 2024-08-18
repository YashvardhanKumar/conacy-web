import { Post } from "../../../gql/graphql";

interface PostProps {
  children: React.ReactNode;
}

interface PostContextProps {
  posts: Post[];
}
