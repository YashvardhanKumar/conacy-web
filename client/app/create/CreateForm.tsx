"use client";
import { Form, Formik } from "formik";
import React, { ChangeEvent, useEffect, useState } from "react";
import * as yup from "yup";
import CustomTextArea from "../components/inputs/CustomTextAreaInput";
import CustomFileInput from "../components/inputs/CustomFileInput";
import { handleUploadImage } from "./utils";
import { gql, useMutation, useQuery } from "@apollo/client";
import {v4 as uuid} from 'uuid'

const CreateForm = () => {
  const [image, setImage] = useState<File | null>(null);
  const [imageUrl, setImageUrl] = useState("");
  const [mutateFunction, { data, loading, error }] = useMutation(gql`
    mutation CreatePosts(
      $id: ID!
      $url: String!
      $description: String!
      $uid: String!
    ) {
      createPosts(
        input: {
          id: $id
          url: $url
          description: $description
          creatorOfPost: { connect: { where: { node: { id: "iiid" } } } }
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
  useEffect(() => {}, [image]);

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const fileReader = new FileReader();
    const file = e.target.files;
    console.log(file);

    if (file && file.length != 0) {
      console.log(URL.createObjectURL(file[0]));
      fileReader.readAsDataURL(file[0]);
      fileReader.onload = () => {
        console.log(fileReader.result);
        setImage(file[0]);
        setImageUrl(fileReader.result as string);
      };
      //   setImage(file![0]);
      //   setImageUrl(URL.createObjectURL(file![0]));
    }
  };
  return (
    <Formik
      initialValues={{
        caption: "",
        image: undefined,
      }}
      validationSchema={yup.object().shape({
        image: yup.mixed<File>().required("Please upload an image"),
        caption: yup
          .string()
          .required("Caption is required")
          .max(1000, "Your caption should not exceed 1000 characters"),
      })}
      onSubmit={async (values, { setSubmitting, setFieldError }) => {
        setSubmitting(false);
        if (image) {
          console.log(image);
          console.log(imageUrl);
          console.log(values);
          const { secure_url } = await handleUploadImage(image);
          if (secure_url) {
            const res = await mutateFunction({
              variables: {
                id: uuid(),
                url: secure_url,
                description: values.caption,
              },
            });
            console.log(res);
            if (res.data) {
              console.log(res.data);
            } else {
              console.log(res.errors);
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
        }
        // handleSubmit(values);
      }}
    >
      <Form
        noValidate
        method="POST"
        className="py-5 flex flex-col gap-3 items-center w-96 justify-center"
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
          className="btn btn-block dark:bg-web-color bg-web-color-2 mt-3 hover:dark:bg-web-color-2 border-none text-white"
          type={"submit"}
        >
          Post Now
        </button>
      </Form>
    </Formik>
  );
};

export default CreateForm;
