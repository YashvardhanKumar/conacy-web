import {
  ApolloCache,
  DefaultContext,
  MutationTuple,
  useMutation,
} from "@apollo/client";
import { createContext, useContext, useEffect, useState } from "react";
import { NavigateFunction, useNavigate } from "react-router-dom";
import { graphql } from "../gql";
import {
  CreatePostsMutation,
  Exact,
  RelationType,
  Scalars,
} from "../gql/graphql";
import { FormikHelpers } from "formik";
import { handleUploadImage } from "../pages/create/utils";

interface CreatePostContextType {
  image: File | null;
  imageUrl: string;
  handleImageChange: () => (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (values: CreateFormProps, formikHelpers: FormikHelpers<CreateFormProps>) => void | Promise<any>;
  loading: boolean;
}

type CreatePostProps = {
  children: React.ReactNode;
};

type CreateFormProps = {
    caption: string;
    image: undefined;
}

const createPost = graphql(/*graphql */ `
  mutation CreatePosts(
    $url: String!
    $description: String!
    $username: ID!
    $friend: [RelationType!]!
  ) {
    createPosts(
      input: {
        url: $url
        description: $description
        creatorOfPost: { connect: { where: { node: { username: $username } } } }
        visibility: $friend
      }
    ) {
      posts {
        id
        url
        description
        creatorOfPost {
          id
          name
          email
          username
          dob
        }
      }
    }
  }
`);

const CreatePostContext = createContext<CreatePostContextType | undefined>(
  undefined
);

export const usePageChange = () => {
  const context = useContext(CreatePostContext);
  if (!context) {
    throw new Error("usePageChange must be used within a PageProvider");
  }
  return context;
};

export const CreatePostProvider: React.FC<CreatePostProps> = ({ children }) => {
  const nav = useNavigate();
  const [image, setImage] = useState<File | null>(null);
  const [imageUrl, setImageUrl] = useState("");
  const [createMutation] = useMutation(createPost);
  const [loading, setLoading] = useState(false);
  const [visibility, setVisibility] = useState(0);
  useEffect(() => {}, [image]);

  const handleImageChange = () => (e: React.ChangeEvent<HTMLInputElement>) => {
    const fileReader = new FileReader();
    const file = e.target.files;

    if (file && file.length != 0) {
      fileReader.readAsDataURL(file[0]);
      fileReader.onload = () => {
        setImage(file[0]);
        setImageUrl(fileReader.result as string);
      };
    }
  };
  const handleSubmit = async (values: CreateFormProps, h: FormikHelpers<CreateFormProps>) => {
    h.setSubmitting(false);
    setLoading(true);

    if (image) {
      const { secure_url } = await handleUploadImage(image);

      if (secure_url) {
        try {
          const res = await createMutation({
            variables: {
              url: secure_url,
              description: values.caption,
              username: localStorage.getItem("username")!,
              friend: [RelationType.Friend],
            },
          });

          if (res.data) {
          } else {
            console.log(res.errors);
          }

          setLoading(false);
          nav("/");
        } catch (error) {
          setLoading(false);
          alert(error);
        }

        setImage(null);
        setImageUrl("");
        values.caption = "";
        values.image = undefined;
        h.setSubmitting(false);
        h.setFieldError("image", "");
        h.setFieldError("caption", "");
      }
    } else {
      h.setFieldError("image", "Please upload an image");
      return;
    } // handleSubmit(values);
  };
  return (
    <CreatePostContext.Provider
      value={{
        image,
        imageUrl,
        loading,
        handleImageChange,
        handleSubmit: handleSubmit
      }}
    >
      {children}
    </CreatePostContext.Provider>
  );
};
