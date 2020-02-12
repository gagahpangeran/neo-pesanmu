import React from "react";
import { useForm } from "react-hook-form";
import { useMutation, useQuery } from "@apollo/react-hooks";

import { ADD_MESSAGE, GET_MESSAGE } from "../gql/message.graphql";

import "../styles/form.css";

export default function Form() {
  const { handleSubmit, register, reset } = useForm();

  const [addMessage] = useMutation(ADD_MESSAGE);
  const { refetch } = useQuery(GET_MESSAGE);

  const onSubmit = async ({ from, to, message }) => {
    await addMessage({
      variables: { from, to, message }
    });

    await refetch();

    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="kym-form">
      <input type="text" name="from" placeholder="From" ref={register} />
      <input type="text" name="to" placeholder="To" ref={register} />
      <textarea name="message" placeholder="Your message here" ref={register} />
      <button type="submit">Submit</button>
    </form>
  );
}
