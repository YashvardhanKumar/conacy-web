interface LoginContextProps {
  initialValues: LoginFormProps;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  handleSubmit: (values: LoginFormProps, h: FormikHelpers<LoginFormProps>) => Promise<any>;
  validationSchema: yup.ObjectSchema<LoginFormProps, yup.AnyObject, LoginFormProps, "">;
};

interface LoginFormProps {
  email: string | undefined;
  password: string | undefined;
};

interface LoginProps {
  children: React.ReactNode;
};
