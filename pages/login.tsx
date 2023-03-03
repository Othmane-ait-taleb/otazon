import Link from "next/link";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import Layout from "../components/Layout";

type FormValues = {
  email: string;
  password: string;
};
export default function LoginPage() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<FormValues>();
  const onSubmit: SubmitHandler<FormValues> = (data) => console.log(data);

  return (
    <Layout title="Login">
      <form
        className="mx-auto max-w-screen-md"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h1 className="mb-4 text-xl">Login</h1>
        <div className="mb-4">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            {...register("email", {
              required: "Please enter email",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "invalid email address",
              },
            })}
            className="w-full"
            id="email"
            autoFocus
          />
          {errors.email && (
            <p className="text-red-400">
              <>{errors.email.message}</>
            </p>
          )}
        </div>
        <div className="mb-4">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            {...register("password", {
              required: "Please enter password",
              minLength: {
                value: 6,
                message: "password must be more than 5 chars",
              },
            })}
            className="w-full"
            id="password"
            autoFocus
          />
          {errors.password && (
            <p className="text-red-400">
              <>{errors.password.message}</>
            </p>
          )}
        </div>
        <div className="mb-4 flex justify-center">
          <button className="primary-button">Login</button>
        </div>
        <div className="mb-4 flex ">
          <p>don&apos;t you have an account? </p>
          <Link href={"/register"}>&nbsp;Register </Link>
        </div>
      </form>
    </Layout>
  );
}
