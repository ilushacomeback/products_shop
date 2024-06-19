import React, { useContext } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useSignupMutation } from '../../../shared';
import { AuthContext } from '../../../shared';
import { UI } from '../../../shared';

interface InputsForm {
  signupEmail: string;
  signupPassword: string;
  fullName: string;
}

export const SignupForm: React.FC = () => {
  const { CustomInput, CustomForm, CustomSubmit, CustomLabel } = UI;
  const { register, handleSubmit } = useForm<InputsForm>();
  const { logIn } = useContext(AuthContext);

  const [signup] = useSignupMutation();

  const onSubmit: SubmitHandler<InputsForm> = async (data) => {
    try {
      const response = await signup(data);
      if (response?.error) {
        throw new Error('notUniqUser');
      }
      logIn(response.data);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <CustomForm onSubmit={handleSubmit(onSubmit)}>
      <CustomLabel htmlFor="fullName">Name</CustomLabel>
      <CustomInput
        {...register('fullName', { required: true })}
        type="text"
        name="fullName"
        id="fullName"
        required
      />
      <CustomLabel htmlFor="signupEmail">Email</CustomLabel>
      <CustomInput
        {...register('signupEmail', { required: true })}
        type="email"
        name="email"
        id="signupEmail"
        required
      />
      <CustomLabel htmlFor="signupPassword">Password</CustomLabel>
      <CustomInput
        {...register('signupPassword', {
          required: true,
          minLength: 8,
          maxLength: 26,
        })}
        type="password"
        name="password"
        id="signupPassword"
        required
      />
      <CustomSubmit type="submit">Sign Up</CustomSubmit>
    </CustomForm>
  );
};
