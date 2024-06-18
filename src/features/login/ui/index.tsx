import React, { useContext } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { selectors, useAppSelector, useLoginMutation } from '../../../shared';
import { AuthContext } from '../../../shared';
import { UI } from '../../../shared';
import { Navigate, useNavigate } from 'react-router-dom';

interface InputsForm {
  email: string;
  password: string;
}

export const LoginForm: React.FC = () => {
  const { CustomInput, CustomForm, CustomSubmit, CustomLabel } = UI;
  const token = useAppSelector(selectors.authSelectors.selectToken);
  const navigate = useNavigate();
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
      navigate('/');
    } catch (e) {
      console.log(e);
    }
  };

  return token ? (
    <Navigate to="/" />
  ) : (
    <CustomForm onSubmit={handleSubmit(onSubmit)}>
      <CustomLabel htmlFor="email">Email</CustomLabel>
      <CustomInput
        {...register('email', { required: true })}
        type="email"
        name="email"
        id="email"
        required
      />
      <CustomLabel htmlFor="password">Password</CustomLabel>
      <CustomInput
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
      <CustomSubmit type="submit">Log In</CustomSubmit>
    </CustomForm>
  );
};
