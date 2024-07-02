import { Title } from '@mantine/core';
import { Logo, SignInForm } from '@medplum/react';
import { useNavigate } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';

export function SignInPage(): JSX.Element {
  const navigate = useNavigate();
  return (
    <SignInForm
      // Configure according to your settings
      googleClientId="const googleClientId = import.meta.env.VITE_GOOGLE_CLIENT_ID;" // use this one to run against prod
      // googleClientId="397236612778-c0b5tnjv98frbo1tfuuha5vkme3cmq4s.apps.googleusercontent.com" // use this one for localhost
      onSuccess={() => navigate('/')}
    >
      <Logo size={32} />
      <Title>Sign in to Medplum</Title>
    </SignInForm>
  );
}


function App() {
  return (
    <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}>
      {/* Your app components */}
    </GoogleOAuthProvider>
  );
}