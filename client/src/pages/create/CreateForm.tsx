import { Form, Formik, Field } from "formik";
import CustomTextArea from "@components/inputs/CustomTextAreaInput";
import CustomFileInput from "@components/inputs/CustomFileInput";
import CircularLoader from "@components/CircularLoader";
import { useCreatePostContext } from "@pages/create/CreatePostProvider/CreatePostProvider";

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
            
            <div className="max-w-96 w-full p-2 flex flex-col gap-1.5">
              <label htmlFor="visibility" className="text-xs font-semibold tracking-wide text-gray-500 dark:text-gray-400 self-start px-1 uppercase">
                Visibility
              </label>
              <Field
                as="select"
                id="visibility"
                name="visibility"
                className="select select-bordered w-full bg-gray-100 border-none dark:bg-gray-700 dark:text-white rounded-lg p-2.5 outline-none max-xs:text-sm"
              >
                <option value="PUBLIC">Public (Everyone)</option>
                <option value="FRIEND">Friends</option>
                <option value="CLOSE_FRIEND">Close Friends</option>
                <option value="BEST_FRIEND">Best Friends</option>
              </Field>
            </div>

            <button
              className="dark:text-black btn btn-block max-w-96 inline-flex gap-1 disabled:bg-slate-300 dark:bg-web-color bg-web-color-2 mt-3 hover:dark:bg-gray-400 border-none text-white disabled:text-white "
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
