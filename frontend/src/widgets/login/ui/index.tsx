import { WelcomeText } from '@/entities';
import { LoginForm } from '@/features';
import { UI } from '@/shared';

export const Authentication = () => {
  const { CustomMain } = UI;
  
  return (
    <CustomMain>
      <WelcomeText />
      <LoginForm />
    </CustomMain>
  );
};
