import { Field, Form, Formik } from "formik";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../hook/user";
import {
  initialValue,
  LoginRequest,
  loginValidationSchema,
} from "../validation/login";

interface LoginProps {}

export const Login: React.FC<LoginProps> = ({}) => {
  const { login } = useUser();

  const navigate = useNavigate();
  const handleSubmit = async (value: LoginRequest) => {
    await login(value.email, value.password, navigate);
  };

  return (
    <div>
      <Formik
        initialValues={initialValue}
        onSubmit={(data) => handleSubmit(data)}
        validationSchema={loginValidationSchema}
      >
        {({ touched, errors, handleSubmit }) => (
          <Form>
            username:
            <Field type="text" name="email" />
            {touched.email && errors.email && (
              <div style={{ color: "red" }}>{errors.email}</div>
            )}
            <br />
            password
            <Field type="text" name="password" />
            {touched.password && errors.password && (
              <div style={{ color: "red" }}>{errors.password}</div>
            )}
            <br />
            <button type="submit" onClick={() => handleSubmit()}>
              login
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
