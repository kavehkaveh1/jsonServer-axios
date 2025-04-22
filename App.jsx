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
