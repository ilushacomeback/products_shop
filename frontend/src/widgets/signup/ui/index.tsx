import { SignupForm } from '@/features';
import { UI } from '@/shared';

export const Registration = () => {
  const { CustomMain } = UI
  return (
    <CustomMain>
      <SignupForm />
    </CustomMain>
  );
};
