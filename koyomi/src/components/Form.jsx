import React from "react";
import { useForm } from "react-hook-form";

export default function Form() {
  const { handleSubmit, register } = useForm();

  const onSubmit = values => {
    console.log(values);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" name="from" placeholder="From" ref={register} />
      <input type="text" name="to" placeholder="to" ref={register} />
      <textarea name="message" placeholder="Your message here" ref={register} />
      <button type="submit">Submit</button>
    </form>
  );
}
