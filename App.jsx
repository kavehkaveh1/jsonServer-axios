import React from "react";
import { useForm } from "react-hook-form";

function App() {
  const { register, handleSubmit } = useForm();
  const onHandleSubmit = (data) => {
    console.log(data);
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
        </div>
        <div>
          <label htmlFor="confrimPassword">confrimPassword</label>
          <input
            type="password"
            {...register("confrimPassword", {
              required: "confrimPassword is required",
              validate: (value) =>
                value === password || "Passwords do not match",
            })}
            id="confrimPassword"
          />
        </div>
        <div>
          <button type="submit">submit</button>
        </div>
      </form>
    </div>
  );
}

export default App;
