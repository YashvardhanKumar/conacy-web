import { RelationType } from "@gql/graphql";
import { FormikHelpers } from "formik";
import * as yup from "yup";

export interface CreatePostContextType {
  image: File | null;
  imageUrl: string;
  initialValues: CreateFormProps;
  validationSchema: yup.ObjectSchema<
    {
      caption: string | undefined;
      visibility: string;
    },
    yup.AnyObject,
    {
      caption: undefined;
      visibility: undefined;
    },
    ""
  >;
  handleImageChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (
    values: CreateFormProps,
    formikHelpers: FormikHelpers<CreateFormProps>
  ) => void | Promise<unknown>;
  loading: boolean;
}

export interface CreatePostProps {
  children: React.ReactNode;
}

export interface CreateFormProps {
  caption: string;
  image: undefined;
  visibility: RelationType;
}
