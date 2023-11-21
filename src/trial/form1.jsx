import React from 'react';
import { useForm } from 'react-hook-form';

const FormInputs = () => {
  const { register } = useForm();

  return (
    <form>
      <input {...register('firstName')} placeholder="First Name" />
      <input {...register('lastName')} placeholder="Last Name" />
    </form>
  );
};

export default FormInputs;