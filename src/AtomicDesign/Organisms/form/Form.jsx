import React, { useCallback } from "react";
import Button from "../../Atoms/Button";
import InputLabel from "../../Molecules/InputLabel/InputLabel";
import ResponseMessage from "../../Atoms/ResponseMessage/ResponseMessage";
import { useForm } from "react-hook-form";
import "./form.css";

const Form = (props) => {
  const onSubmit = useCallback((event) => {
    event.preventDefault();
  }, []);

  return (
    <form onSubmit={onSubmit} className="form">
      <InputLabel name="name" labelText="Name" />
      <ResponseMessage>12</ResponseMessage>
      <InputLabel name="phone" labelText="Description" />
      <Button value="Отправить" />
    </form>
  );
};

export default Form;
