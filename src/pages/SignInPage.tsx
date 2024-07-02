import { Logo, SignInForm } from '@medplum/react';
import { useNavigate } from 'react-router-dom';

export function SignInPage(): JSX.Element {
  const navigate = useNavigate();
  return (
    <SignInForm
      googleClientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}
      onSuccess={() => navigate('/')}
    >
      <Logo size={32} />
      <h1>Sign in to Medplum</h1>
    </SignInForm>
  );
}