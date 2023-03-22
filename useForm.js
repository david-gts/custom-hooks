import { useState } from "react";

export function useForm(initialValue = {}) {
  const [form, setForm] = useState(initialValue);

  const handleInputChange = ({ target }) => {
    const { name, value } = target;
    setForm({ ...form, [name]: value });
  };

  const handleReset = () => {
    setForm(initialValue);
  };

  return { ...form, form, handleInputChange, handleReset };
}
