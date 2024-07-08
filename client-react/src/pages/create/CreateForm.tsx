import { Form, Formik } from "formik";
import { ChangeEvent, useEffect, useState } from "react";
import * as yup from "yup";
import CustomTextArea from "../../components/inputs/CustomTextAreaInput";
import CustomFileInput from "../../components/inputs/CustomFileInput";
import { handleUploadImage } from "./utils";
import { useMutation } from "@apollo/client";
import { graphql } from "../../gql";
import { useNavigate } from "react-router-dom";
import CircularLoader from "../../components/CircularLoader";
import { RelationType } from "../../gql/graphql";

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

const CreateForm = () => {
  const nav = useNavigate();
  const [image, setImage] = useState<File | null>(null);
  const [imageUrl, setImageUrl] = useState("");
  const [mutateFunction] = useMutation(createPost);
  const [loading, setLoading] = useState(false);
  const [visibility, setVisibility] = useState(0);
  useEffect(() => {}, [image]);

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
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

  return (
    <>
      <div className="h-screen flex flex-col items-center justify-center w-screen">
        <div></div>
        <Formik
      initialValues={{
        caption: "",
        image: undefined,
      }}
      validationSchema={yup.object().shape({
        image: yup.mixed<File>().required("Please upload an image"),
        caption: yup
          .string()
          .max(1000, "Your caption should not exceed 1000 characters"),
      })}
      onSubmit={async (values, { setSubmitting, setFieldError }) => {
        setSubmitting(false);
        setLoading(true);

        if (image) {
          const { secure_url } = await handleUploadImage(image);

          if (secure_url) {
            try {
              const res = await mutateFunction({
                variables: {
                  // id: uuid(),
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
            setSubmitting(false);
            setFieldError("image", "");
            setFieldError("caption", "");
          }
        } else {
          setFieldError("image", "Please upload an image");
          return;
        } // handleSubmit(values);
      }}
    >
      <Form
        noValidate
        method="POST"
        className="py-5 flex flex-col gap-3 p-2 items-center w-full justify-center"
      >
        {image && (
          <div className="p-5">
            <img src={imageUrl} alt="" className="h-72" />
          </div>
        )}
        <CustomFileInput
          name="image"
          label={imageUrl ? "Select other image" : "Upload image"}
          onChange={handleImageChange}
          imageUrl={imageUrl}
          content="image/*"
        />
        <CustomTextArea name="caption" hint="Write Caption Here" />
        <button
          className="btn btn-block max-w-96 inline-flex gap-1 disabled:bg-slate-300 dark:bg-web-color bg-web-color-2 mt-3 hover:dark:bg-web-color-2 border-none text-white disabled:text-white"
          type={"submit"}
          disabled={loading}
        >
          <div>{loading ? <CircularLoader /> : "Post Now"}</div>
        </button>
      </Form>
    </Formik>
      </div>
    </>
  );
};

export default CreateForm;
