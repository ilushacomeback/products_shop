import React, { useContext } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useSignupMutation } from '../../../shared';
import { AuthContext } from '../../../shared';

interface InputsForm {
  signupEmail: string;
  signupPassword: string;
  fullName: string;
}

export const SignupForm: React.FC = () => {
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
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="fullName">Name</label>
      <input
        {...register('fullName', { required: true })}
        type="text"
        name="fullName"
        id="fullName"
        required
      />
      <label htmlFor="signupEmail">Email</label>
      <input
        {...register('signupEmail', { required: true })}
        type="email"
        name="email"
        id="signupEmail"
        required
      />
      <label htmlFor="signupPassword">Password</label>
      <input
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
      <button type="submit">Sign Up</button>
    </form>
  );
};
