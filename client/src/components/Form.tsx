import React from "react";
// import { useFormValidation } from "../../lib/context/FormContext";

// type Values = {
//     username: string,
//     name: string,
//     password: string,
//     dob: Date,
//     email: string,
// }
// type Errors = Partial<Record<keyof Values, string>>
// type Touched = Partial<Record<keyof Values, boolean>>

interface FormProps {
  key: string;
  children: React.ReactNode;
  buttonText: string;
  heading: string;
  onSubmit: () => void;
}

const Form: React.FC<FormProps> = ({
  children,
  buttonText,
  // heading,
  onSubmit,
}) => {
  const handleForm = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    // if (validateForm()) {
    onSubmit();
    // }
  };
  return (
    <form noValidate method="POST">
      <ul className="flex flex-col gap-1">
        {/* <li className=" card-title text-center py-2">{heading}</li> */}
        <div className="h-[0.5px] w-full bg-white opacity-20"></div>
        {children}
        <button
          className="btn btn-block dark:bg-web-color bg-web-color-2 mt-3 hover:dark:bg-web-color-2 border-none text-white"
          type="submit"
          onClick={handleForm}
        >
          {buttonText}
        </button>
      </ul>
    </form>
  );
};

export default Form;

/**
 *     const [inputs, setInputs] = useState<Values>({
        username: "",
        name: "",
        password: "",
        dob: new Date(),
        email: "",
    })
    const [errors, setErrors] = useState<Errors>({});
    const [touched, setTouched] = useState<Touched>({});
    const [confpass, setConfpass] = useState<string>('');
    const [confpasserror, setConfpasserror] = useState<string>('');

    const validate = (newInputs: Values): Errors => {
        const errors: Errors = {};
        if (!newInputs.name) {
            errors.name = 'Name is required';
        } 
        if (!newInputs.email) {
            errors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(newInputs.email)) {
            errors.email = 'Email is invalid';
        }
        if (!newInputs.password) {
            errors.password = 'Password is required';
        } else if (newInputs.password.length < 6) {
            errors.password = 'Password must be at least 6 characters';
        }
        if (newInputs.password !== confpass) {
            setConfpasserror("Passwords do not match");
        }
        setErrors(errors);
        return errors;
    }

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {

        setInputs({ ...inputs, [event.target.name]: event.target.value });
        setErrors(
            validate({ ...inputs, [event.target.name]: event.target.value })
        )

    }

    const handleBlur = (name: string) => {
        setTouched({ ...touched, name: true });
    };

    const handleSubmit = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        event.preventDefault();
        setErrors(validate(inputs))
        if (Object.keys(errors).length === 0) {
            //TODO: User Registeration
        }

    }
 */
