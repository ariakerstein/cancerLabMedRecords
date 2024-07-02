import { AppShell, ErrorBoundary, Loading, Logo, useMedplum, useMedplumProfile } from '@medplum/react';
import { IconUser } from '@tabler/icons-react';
import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { PatientHistory } from './components/PatientHistory';
import { PatientOverview } from './components/PatientOverview';
import { Timeline } from './components/Timeline';
import { HomePage } from './pages/HomePage';
import { LandingPage } from './pages/LandingPage';
import { PatientPage } from './pages/PatientPage';
import { ResourcePage } from './pages/ResourcePage';
import { SignInPage } from './pages/SignInPage';
import { MedplumProvider } from '@medplum/react';
import { BrowserRouter } from 'react-router-dom';

export function App(): JSX.Element | null {
  const medplum = useMedplum();
  const profile = useMedplumProfile();

  if (medplum.isLoading()) {
    return null;
  }

  return (
    <AppShell
      logo={<Logo size={24} />}
      menus={[
        {
          title: 'My Links',
          links: [{ icon: <IconUser />, label: 'Patients', href: '/' }],
        },
      ]}
    >
      <ErrorBoundary>
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={profile ? <HomePage /> : <LandingPage />} />
            <Route path="/signin" element={<SignInPage />} />
            <Route path="/Patient/:id" element={<PatientPage />}>
              <Route index element={<PatientOverview />} />
              <Route path="overview" element={<PatientOverview />} />
              <Route path="timeline" element={<Timeline />} />
              <Route path="history" element={<PatientHistory />} />
            </Route>
            <Route path="/:resourceType/:id" element={<ResourcePage />} />
            <Route path="/:resourceType/:id/_history/:versionId" element={<ResourcePage />} />
          </Routes>
        </Suspense>
      </ErrorBoundary>
    </AppShell>
  );
}

const medplumConfig = {
  baseUrl: 'https://api.medplum.com/',
  clientId: 'b10bd169-d851-433f-afac-44ad89a46c93', // Replace with your Medplum client ID
  googleClientId: import.meta.env.VITE_GOOGLE_CLIENT_ID,
};

export function MedplumApp(): JSX.Element {
  return (
    <BrowserRouter>
      <MedplumProvider config={medplumConfig}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signin" element={<SignInPage />} />
          {/* Add other routes as needed */}
        </Routes>
      </MedplumProvider>
    </BrowserRouter>
  );
}