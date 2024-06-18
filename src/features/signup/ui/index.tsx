import React, { useContext } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useSignupMutation } from '../../../shared';
import { AuthContext } from '../../../shared';

interface InputsForm {
  email: string;
  password: string;
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
      />
      <label htmlFor="email">Email</label>
      <input
        {...register('email', { required: true })}
        type="email"
        name="email"
      />
      <label htmlFor="password">Password</label>
      <input
        {...register('password', {
          required: true,
          minLength: 8,
          maxLength: 26,
        })}
        type="password"
        name="password"
      />
      <button type="submit">Sign Up</button>
    </form>
  );
};
