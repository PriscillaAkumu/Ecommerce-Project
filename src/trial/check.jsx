import React from 'react';
import { useForm } from 'react-hook-form';
import FormInputs from './form1';
import FormButton from './form2';

const MainForm = () => {
  const { handleSubmit, getValues } = useForm();

  const onSubmit = (data) => {
    console.log('Form data:', data);
  };

  const handleGetValue = () => {
    const formValues = getValues();
    console.log('Form values:', formValues);
  };

  return (
    <div>
      <FormInputs />
      <FormButton onSubmit={handleSubmit(onSubmit)} />
      <button type="button" onClick={handleGetValue}>
        Get Form Values
      </button>

    </div>
  );
};

export default MainForm;