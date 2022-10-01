import * as Yup from "yup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// form
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
// @mui
import { Stack, Typography } from "@mui/material";
import { LoadingButton } from "@mui/lab";

// components
import { FormProvider, RHFTextField, RHFCheckbox } from "../hook-form";
import { TelentUser } from "../helper/api";

// ----------------------------------------------------------------------

const TelentSignup = () => {
  const UpdateUserSchema = Yup.object().shape({
    fristName: Yup.string().min(6).required("Fristname is required"),
    lastName: Yup.string().min(6).required("Lastname is required"),
    userName: Yup.string().min(6).required("Username is required"),
    email: Yup.string()
      .email("Must be a valid email")
      .required("Email is required"),
    password: Yup.string().min(8).required("Password is required"),
  });

  const defaultValues = {
    fristName: "",
    lastName: "",
    userName: "",
    email: "",
    password: "",
    remember: true,
  };

  const methods = useForm({
    resolver: yupResolver(UpdateUserSchema),
    defaultValues,
  });

  const {
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = methods;

  const onSubmit = async (data) => {
    if (data?.remember) {
      TelentUser(data);
      toast.success("Signup Success!", {
        position: toast.POSITION.TOP_RIGHT,
      });
      reset();
    }
  };
  return (
    <div>
      <Typography
        component="h4"
        variant="h4"
        gutterBottom
        textAlign={"center"}
        marginY={2}
        color={"white"}
      >
        Create Your Telent Account
      </Typography>
      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
        <RHFTextField
          name="fristName"
          label="First Name*"
          placeholder="First Name"
          autoComplete="off"
        />
        <RHFTextField
          name="lastName"
          label="Last Name*"
          placeholder="Last Name"
          autoComplete="off"
        />
        <RHFTextField
          name="userName"
          label="User Name*"
          placeholder="User Name"
          autoComplete="off"
        />
        <RHFTextField
          name="email"
          label="Email Address*"
          placeholder="Email Address"
          autoComplete="off"
        />
        <RHFTextField
          name="password"
          label="Password*"
          type="password"
          placeholder="password"
          autoComplete="off"
        />
        <RHFCheckbox
          name="remember"
          label="I agree to the Terms and Conditions."
        />
        <ToastContainer />
        <Stack>
          <LoadingButton
            className="submitBtn"
            type="submit"
            variant="contained"
            loading={isSubmitting}
          >
            sign up
          </LoadingButton>
        </Stack>
      </FormProvider>
    </div>
  );
};
export default TelentSignup;
