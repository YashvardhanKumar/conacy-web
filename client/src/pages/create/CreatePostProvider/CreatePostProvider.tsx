import { useMutation } from "@apollo/client";
import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { graphql } from "../../../gql";
import * as yup from "yup";
import { RelationType } from "../../../gql/graphql";
import { FormikHelpers } from "formik";
/**
 * GraphQL Queries
 */

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

/**
 * Post Context
 */

const CreatePostContext = createContext<CreatePostContextType | undefined>(undefined);

/**
 * Custom hook for Post Context
 */

export const useCreatePostContext = () => {
  const context = useContext(CreatePostContext);
  if (!context) {
    throw new Error(`${useCreatePostContext.name} must be used within a ${CreatePostProvider.name}`);
  }
  return context;
};

/**
 * Create Post Provider Element
 */

export const CreatePostProvider: React.FC<CreatePostProps> = ({ children }) => {
  const nav = useNavigate();
  const [image, setImage] = useState<File | null>(null);
  const [imageUrl, setImageUrl] = useState("");
  const [createMutation] = useMutation(createPost);
  const [loading, setLoading] = useState(false);

  const initialValues: CreateFormProps = {
    caption: "",
    image: undefined,
  };

  const validationSchema = yup.object().shape({
    caption: yup
      .string()
      .max(1000, "Your caption should not exceed 1000 characters"),
  });

  const handleUploadImage = async (file: File) => {
    const formdata = new FormData();
    formdata.append("file", file, file.name);

    return fetch(`/api/upload`, {
      method: "POST",
      body: formdata,
      redirect: "follow",
    })
      .then((response) => response.json())
      .then((result) => result)
      .catch((error) => console.error(error));
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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

  const handleSubmit = async (
    values: CreateFormProps,
    h: FormikHelpers<CreateFormProps>
  ) => {
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
        initialValues,
        validationSchema,
        handleImageChange,
        handleSubmit: handleSubmit,
      }}
    >
      {children}
    </CreatePostContext.Provider>
  );
};
