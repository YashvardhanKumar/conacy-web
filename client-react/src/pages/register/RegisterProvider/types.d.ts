interface RegisterContextProps {
  initialValues: [
    RegisterStep1FormProps,
    RegisterStep2FormProps,
    RegisterStep3FormProps
  ];
  loading: boolean;
  page: number;
  handleSubmit: [
    (
      values: RegisterStep1FormProps,
      h: FormikHelpers<RegisterStep1FormProps>
    ) => Promise<any>,
    (
      values: RegisterStep2FormProps,
      h: FormikHelpers<RegisterStep2FormProps>
    ) => Promise<any>,
    (
      values: RegisterStep3FormProps,
      h: FormikHelpers<RegisterStep3FormProps>
    ) => Promise<any>
  ];
  validationSchema: [
    yup.ObjectSchema<
      RegisterStep1FormProps,
      yup.AnyObject,
      RegisterStep1FormProps,
      ""
    >,
    yup.ObjectSchema<
      RegisterStep2FormProps,
      yup.AnyObject,
      RegisterStep2FormProps,
      ""
    >,
    yup.ObjectSchema<
      RegisterStep3FormProps,
      yup.AnyObject,
      RegisterStep3FormProps,
      ""
    >
  ];
}
interface RegisterStep1FormProps {
  name: string | undefined;
  email: string | undefined;
  password: string | undefined;
  confPass: string | undefined;
}

interface RegisterStep2FormProps {
  username: string | undefined;
}

interface RegisterStep3FormProps {
  dob: string | undefined;
}

interface RegisterProps {
  children: React.ReactNode;
}
