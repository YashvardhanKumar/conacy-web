import { Form, Formik } from "formik";
import CustomTextArea from "../../components/inputs/CustomTextAreaInput";
import CustomFileInput from "../../components/inputs/CustomFileInput";
import CircularLoader from "../../components/CircularLoader";
import {
  CreatePostProvider,
  useCreatePostContext,
} from "./CreatePostProvider/CreatePostProvider";

const CreateForm = () => {
  const {
    handleImageChange,
    handleSubmit,
    image,
    imageUrl,
    loading,
    initialValues,
    validationSchema,
  } = useCreatePostContext();

  return (
    <div className="h-screen flex flex-col items-center justify-center w-screen">
      <div />
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
        children={
          <Form
            noValidate
            method="POST"
            className="py-5 flex flex-col gap-3 p-2 items-center w-full justify-center"
          >
            {image && (
              <div
                className="p-5"
                children={<img src={imageUrl} alt="" className="h-72" />}
              />
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
              children={<div>{loading ? <CircularLoader /> : "Post Now"}</div>}
            />
          </Form>
        }
      />
    </div>
  );
};

export default CreateForm;
