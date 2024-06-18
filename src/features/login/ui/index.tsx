import React, { useContext } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useLoginMutation } from '../../../shared';
import { AuthContext } from '../../../shared';

interface InputsForm {
  email: string;
  password: string;
}

export const LoginForm: React.FC = () => {
  const { register, handleSubmit } = useForm<InputsForm>();
  const { logIn } = useContext(AuthContext);

  const [setLogin] = useLoginMutation();

  const onSubmit: SubmitHandler<InputsForm> = async (data) => {
    try {
      const response = await setLogin(data);
      if (response?.error) {
        throw new Error('InvalidLogin');
      }
      logIn(response.data);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="email">Email</label>
      <input
        {...register('email', { required: true })}
        type="email"
        name="email"
        id="email"
        required
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
        id="password"
        required
      />
      <button type="submit">Log In</button>
    </form>
  );
};
