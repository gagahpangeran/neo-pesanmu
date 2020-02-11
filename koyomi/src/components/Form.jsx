import React from "react";
import { useForm } from "react-hook-form";
import { useMutation, useQuery } from "@apollo/react-hooks";

import { ADD_MESSAGE, GET_MESSAGE } from "../gql/message.graphql";

export default function Form() {
  const { handleSubmit, register } = useForm();

  const [addMessage] = useMutation(ADD_MESSAGE);
  const { refetch } = useQuery(GET_MESSAGE);

  const onSubmit = async ({ from, to, message }) => {
    const res = await addMessage({
      variables: { from, to, message }
    });

    refetch();

    console.log(res);
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
