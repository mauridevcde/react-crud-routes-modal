import { useState } from "react";

export const useForm = (initialform = {}) => {
  const [formState, setFormState] = useState(initialform);

  const onInputChange = (event) => {
    console.log(event.target.name);
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const onResetForm = () => {
    setFormState(initialform);
  };
  return {
    ...formState,
    formState,
    onInputChange,
    onResetForm,
  };
};
