import React from "react";
import { useForm } from "react-hook-form";

function App() {
  const { register } = useForm();
  return (
    <div>
      <form action="">
        <div>
          <label htmlFor="firstName">firstName</label>
          <input type="text" {...register("firstName", {})} id="firstName" />
        </div>
        <div>
          <label htmlFor="lastName">lastName</label>
          <input type="text" {...register("lastName")} id="lastName" />
        </div>
        <div>
          <label htmlFor="password">password</label>
          <input type="text" {...register("password")} id="password" />
        </div>
        <div>
          <label htmlFor="confrimPassword">confrimPassword</label>
          <input
            type="text"
            {...register("confrimPassword")}
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
