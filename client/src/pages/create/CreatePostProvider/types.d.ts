interface CreatePostContextType {
  image: File | null;
  imageUrl: string;
  initialValues: CreateFormProps;
  validationSchema: yup.ObjectSchema<
    {
      caption: string | undefined;
    },
    yup.AnyObject,
    {
      caption: undefined;
    },
    ""
  >;
  handleImageChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (
    values: CreateFormProps,
    formikHelpers: FormikHelpers<CreateFormProps>
  ) => void | Promise<any>;
  loading: boolean;
}

interface CreatePostProps {
  children: React.ReactNode;
}

interface CreateFormProps {
  caption: string;
  image: undefined;
}
