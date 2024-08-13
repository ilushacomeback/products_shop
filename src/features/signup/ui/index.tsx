import { useContext } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { SubmitHandler, useForm } from 'react-hook-form';
import {
  selectors,
  useAppSelector,
  useSignupMutation,
  AuthContext,
  UI,
  staticRoutes,
} from '@/shared';

interface InputsForm {
  email: string;
  password: string;
  fullName: string;
}

export const SignupForm = () => {
  const navigate = useNavigate();
  const { CustomInput, CustomForm, CustomSubmit, CustomLabel } = UI;
  const { register, handleSubmit } = useForm<InputsForm>();
  const { logIn } = useContext(AuthContext);
  const token = useAppSelector(selectors.authSelectors.selectToken);

  const [signup, { error }] = useSignupMutation();

  const onSubmit: SubmitHandler<InputsForm> = async (data) => {
    try {
      const response = await signup(data);
      if (error) {
        if ('status' in error && error.status === 401) {
          throw new Error('notUniqUser');
        } else {
          throw new Error('Network_Error');
        }
      }
      logIn(response.data);
      navigate(staticRoutes.home);
    } catch (e) {
      console.log(e);
    }
  };

  return token ? (
    <Navigate to="/" />
  ) : (
    <CustomForm onSubmit={handleSubmit(onSubmit)}>
      <CustomLabel htmlFor="fullName">Name</CustomLabel>
      <CustomInput
        {...register('fullName', { required: true })}
        type="text"
        name="fullName"
        id="fullName"
        required
      />
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
      <CustomSubmit type="submit">Sign Up</CustomSubmit>
    </CustomForm>
  );
};
