import React from "react";
import { useForm } from "react-hook-form";
import "./style.css";
function App() {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();
  const onHandleSubmit = () => {
    console.log(watch());
    reset();
  };
  return (
    <div>
      <form action="" onSubmit={handleSubmit(onHandleSubmit)}>
        <div>
          <label htmlFor="firstName">firstName</label>
          <input
            type="text"
            {...register("firstName", {
              required: "firstName is required",
              pattern: {
                value: /^[A-Za-z0-9]{3,16}$/,
                message:
                  "firstname should be 3-16 characters and shouldn't include any special characters!",
              },
            })}
            id="firstName"
          />
          {errors.firstName && (
            <div className="error">{errors.firstName.message}</div>
          )}
        </div>
        <div>
          <label htmlFor="lastName">lastName</label>
          <input
            type="text"
            {...register("lastName", {
              required: "lastName is required",
              pattern: {
                value: /^[A-Za-z0-9]{3,16}$/,
                message:
                  "lastname should be 3-16 characters and shouldn't include any special characters!",
              },
            })}
            id="lastName"
          />
          {errors.lastName && (
            <div className="error">{errors.lastName.message}</div>
          )}
        </div>
        <div>
          <label htmlFor="password">password</label>
          <input
            type="password"
            {...register("password", {
              required: "password is required",
              minLength: {
                value: 8,
                message: "password must have at leaste 8 charachters",
              },
            })}
            id="password"
          />
          {errors.password && (
            <div className="error">{errors.password.message}</div>
          )}
        </div>
        <div>
          <label htmlFor="confrimPassword">confrimPassword</label>
          <input
            type="password"
            {...register("confrimPassword", {
              required: "confrimPassword is required",
              validate: (value) =>
                value === watch("password") || "Passwords do not match",
            })}
            id="confrimPassword"
          />
          {errors.confrimPassword && (
            <div className="error">{errors.confrimPassword.message}</div>
          )}
        </div>
        <div>
          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "...loading" : "submit"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default App;
