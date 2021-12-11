import { SchemaOf, object, string } from "yup";

export interface LoginRequest {
  password: string;
  email: string;
}

export const initialValue: LoginRequest = {
  email: "",
  password: "",
};

export const loginValidationSchema: SchemaOf<LoginRequest> = object({
  password: string()
    .min(10, "password must contains at least 10 characters")
    .required("password is required"),
  email: string()
    .email("this field must be email")
    .required("email is required"),
});
