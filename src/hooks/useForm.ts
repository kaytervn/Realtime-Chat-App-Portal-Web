import { useState } from "react";

const useForm = (
initialValues: any, initialErrors: any, validate: (form: any) => any, p0: { displayName: string; birthDate: string; bio: string; avatarUrl: string; }) => {
  const [form, setForm] = useState(initialValues);
  const [errors, setErrors] = useState(initialErrors);

  const handleChange = (field: string, value: string) => {
    setForm((prevForm: any) => ({ ...prevForm, [field]: value }));
    setErrors((prevErrors: any) => ({ ...prevErrors, [field]: "" }));
  };

  const isValidForm = () => {
    const newErrors = validate(form);
    setErrors(newErrors);
    return !Object.values(newErrors).some((error) => error);
  };

  return {
    form,
    errors,
    handleChange,
    isValidForm,
  };
};

export default useForm;
